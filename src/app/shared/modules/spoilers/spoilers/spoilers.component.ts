import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewChildren,
} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { NavigationEnd, Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';

import { IList, IQuestion } from '../../../types';
import { SidenavService } from '../../../services/sidenav.service';

@Component({
    selector: 'app-spoilers',
    templateUrl: './spoilers.component.html',
    styleUrls: ['./spoilers.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpoilersComponent implements OnInit, OnDestroy {
    onDestroy$ = new ReplaySubject<number>(1);
    currentPath: string;
    firstMatAccordionOpening: boolean = true;
    sidenavState: boolean;

    @Input('emptyPath') emptyPathProps: string;
    @Input('list') listProps: IList[];
    @Input('withoutSidebar') withoutSidebarProps: boolean = false;

    @ViewChildren(MatAccordion) accordion: MatAccordion[];

    constructor(
        private router: Router,
        private sidenavService: SidenavService
    ) {}

    ngOnInit(): void {
        this.currentPath = this.router.url;
        this.router.events
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.currentPath = this.slicePath(event.url);
                }
            });
        this.currentPath = this.slicePath(this.currentPath);

        this.sidenavService.sidebarState
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((newState) => (this.sidenavState = newState));
    }

    ngOnDestroy() {
        this.onDestroy$.next(0);
        this.onDestroy$.complete();
    }

    slicePath(fullPath: string): string {
        const pathsArray = fullPath.split('/');
        return pathsArray[pathsArray.length - 1];
    }

    changeSidenavState(state: boolean): void {
        this.sidenavService.setNewSidebarState(state);
    }

    trackByFn(index: number, item: IList | IQuestion): string {
        if ('path' in item) {
            return item.path;
        } else {
            return item.title;
        }
    }
}
