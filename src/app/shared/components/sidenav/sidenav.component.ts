import { CommonModule } from '@angular/common';
import { SidenavService } from '../../services/sidenav.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IList } from '@types';
import { ReplaySubject, takeUntil } from 'rxjs';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, RouterModule, MatListModule],
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
