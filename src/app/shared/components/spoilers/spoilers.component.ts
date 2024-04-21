import { NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewChildren,
} from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { NavigationEnd, Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { HighlightJsDirective } from 'ngx-highlight-js';

import { IList } from '../../types';

import { SidebarService } from '../../services/sidebar.service';

import { EscapeDirective } from '../../directives/escape.directive';

import { EmptyComponent } from '../empty/empty.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { OverlayComponent } from '../overlay/overlay.component';

const materialModules = [MatExpansionModule];

@Component({
    selector: 'app-spoilers',
    templateUrl: './spoilers.component.html',
    styleUrls: ['./spoilers.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        materialModules,
        NgClass,
        EscapeDirective,
        HighlightJsDirective,
        EmptyComponent,
        OverlayComponent,
        SidebarComponent,
    ],
})
export class SpoilersComponent implements OnInit, OnDestroy {
    onDestroy$ = new ReplaySubject<number>(1);
    currentPath: string;
    firstMatAccordionOpening: boolean = true;
    sidebarState: boolean = false;

    @Input('emptyPath') emptyPathProps: string;
    @Input('list') listProps: IList[];
    @Input('withoutSidebar') withoutSidebarProps: boolean = false;

    @ViewChildren(MatAccordion) accordion: MatAccordion[];

    constructor(
        private router: Router,
        private sidebarService: SidebarService,
        private cdr: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        this.currentPath = this.router.url;
        this.router.events.pipe(takeUntil(this.onDestroy$)).subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentPath = this.slicePath(event.url);
            }
        });
        this.currentPath = this.slicePath(this.currentPath);

        this.sidebarService.sidebarState.pipe(takeUntil(this.onDestroy$)).subscribe((newState) => {
            this.sidebarState = newState;
            this.cdr.detectChanges();
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next(0);
        this.onDestroy$.complete();
    }

    slicePath(fullPath: string): string {
        const pathsArray = fullPath.split('/');
        return pathsArray[pathsArray.length - 1];
    }

    changeSidebarState(state: boolean): void {
        this.sidebarService.setNewSidebarState(state);
    }
}
