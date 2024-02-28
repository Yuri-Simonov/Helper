import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { MatListModule } from '@angular/material/list';

import { SidenavService } from '../../services/sidenav.service';

import { IList } from '@types';

const materialModules = [MatListModule];

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [materialModules, NgClass, RouterLink],
})
export class SidenavComponent implements OnInit, OnDestroy {
    onDestroy$ = new ReplaySubject<number>(1);
    sidenavState: boolean;

    @Input('list') listProps: IList[];

    constructor(
        private sidenavService: SidenavService,
        private cdr: ChangeDetectorRef,
    ) {}

    ngOnInit() {
        this.sidenavService.sidebarState.pipe(takeUntil(this.onDestroy$)).subscribe((newState) => {
            this.sidenavState = newState;
            this.cdr.detectChanges();
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next(0);
        this.onDestroy$.complete();
    }

    changeSidenavState(state: boolean): void {
        this.sidenavService.setNewSidebarState(state);
    }
}
