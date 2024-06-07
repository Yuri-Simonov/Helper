import { NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    ViewChildren,
} from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { NavigationEnd, Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { MatDialog } from '@angular/material/dialog';

import { IList, IInfo } from '../../types';

import { SidebarService } from '../../services/sidebar.service';

import { EscapeDirective } from '../../directives/escape.directive';

import { PipeSanitizer } from '../../pipes/pipe-sanitizer.pipe';

import { EmptyComponent } from '../empty/empty.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { OverlayComponent } from '../overlay/overlay.component';
import { DialogSpoilerComponent } from '../dialogs/dialog-spoiler/dialog-spoiler.component';

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
        DialogSpoilerComponent,
        PipeSanitizer,
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

    @HostListener('click', ['$event.target.attributes']) handleMouseleave(attributes: NamedNodeMap) {
        const dialogId = attributes.getNamedItem('dialog_id')?.value;

        if (dialogId) {
            this.openDialog(dialogId);
        }
    }

    constructor(
        private router: Router,
        private sidebarService: SidebarService,
        private cdr: ChangeDetectorRef,
        private dialog: MatDialog,
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

    async openDialog(id: string) {
        /**
         * костыльное решение после перехода с вебпака на Vite (переход на 18-ую версию Angular),
         * т.к. Vite не поддерживает динамические импорты (июнь, 2024)
         */
        const rxjsOperatorsInfo = (await import('../../../theory/information/angular/rxjs-operators/index'))
            .rxjsOperatorsInfo;

        rxjsOperatorsInfo.forEach((item) => {
            if (item?.id === id) {
                this.dialog.open(DialogSpoilerComponent, { data: item });
            }
        });
    }
}
