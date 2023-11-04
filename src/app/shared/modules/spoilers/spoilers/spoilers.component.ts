import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChildren,
} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { IList } from '../../../types';

@Component({
    selector: 'app-spoilers',
    templateUrl: './spoilers.component.html',
    styleUrls: ['./spoilers.component.scss'],
})
export class SpoilersComponent {
    currentPath: string;
    currentPathSub: Subscription;
    firstMatAccordionOpening: boolean = true;

    @Input('emptyPath') emptyPathProps: string;
    @Input('list') listProps: IList[];
    @Input('withoutSidebar') withoutSidebarProps: boolean = false;
    @Input('sidebarState') sidebarStateProps: boolean = false;

    @Output() sidebarStateChange = new EventEmitter<boolean>();

    @ViewChildren(MatAccordion) accordion: MatAccordion[];

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.currentPath = this.router.url;
        this.currentPathSub = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentPath = this.slicePath(event.url);
            }
        });
        this.currentPath = this.slicePath(this.currentPath);
    }

    ngOnDestroy(): void {
        this.currentPathSub.unsubscribe();
    }

    slicePath(fullPath: string): string {
        const pathsArray = fullPath.split('/');
        return pathsArray[pathsArray.length - 1];
    }

    changeSidebarState(): void {
        this.sidebarStateProps = !this.sidebarStateProps;
        this.sidebarStateChange.emit(this.sidebarStateProps);
        this.resetBodyClass();
    }

    resetBodyClass(): void {
        const body = document.querySelector('body');
        body?.classList.toggle('lock');
    }
}
