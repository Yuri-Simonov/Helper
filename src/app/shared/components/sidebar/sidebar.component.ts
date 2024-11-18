import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { MatListModule } from '@angular/material/list';

import { SidebarService } from '../../services/sidebar.service';

import { IList } from 'src/app/shared/interfaces';

const materialModules = [MatListModule];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [materialModules, NgClass, RouterLink, RouterLinkActive],
})
export class SidebarComponent implements OnInit, OnDestroy {
    onDestroy$ = new ReplaySubject<number>(1);
    sidebarState: boolean = false;

    @Input('list') listProps: IList[];

    constructor(
        private sidebarService: SidebarService,
        private cdr: ChangeDetectorRef,
    ) {}

    ngOnInit() {
        this.sidebarService.sidebarState.pipe(takeUntil(this.onDestroy$)).subscribe((newState) => {
            this.sidebarState = newState;
            this.cdr.detectChanges();
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next(0);
        this.onDestroy$.complete();
    }

    changeSidebarState(state: boolean): void {
        this.sidebarService.setNewSidebarState(state);
    }
}
