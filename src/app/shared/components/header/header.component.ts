import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';

import { SidebarService } from '../../services/sidebar.service';
import { UpdatesService } from '../../services/updates.service';

import { INavigation } from '../../interfaces';

import { NAVIGATION } from '../../data/navigation';

import { DialogSupportComponent } from '../dialogs/dialog-support/dialog-support.component';
import { DialogUpdatesComponent } from '../dialogs/dialog-updates/dialog-updates.component';

const materialModules = [MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule];

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [materialModules, NgClass, RouterLink, NgTemplateOutlet],
})
export class HeaderComponent implements OnInit, OnDestroy {
    onDestroy$ = new ReplaySubject<number>(1);
    chapters: INavigation[] = NAVIGATION;
    sidebarState: boolean;
    hasUnreadNotifications: boolean = false;

    constructor(
        private sidebarService: SidebarService,
        private dialog: MatDialog,
        private updatesService: UpdatesService,
    ) {}

    ngOnInit() {
        this.sidebarService.sidebarState
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((newState) => (this.sidebarState = newState));

        this.hasUnreadNotifications = this.updatesService.checkActiveNotifications();
    }

    ngOnDestroy() {
        this.onDestroy$.next(0);
        this.onDestroy$.complete();
    }

    changeSidebarState(state: boolean): void {
        this.sidebarService.setNewSidebarState(state);
    }

    openSupportDialog() {
        this.dialog.open(DialogSupportComponent);
    }

    openUpdatesDialog() {
        this.dialog.open(DialogUpdatesComponent, {
            panelClass: 'dialog-size',
        });
        this.updatesService.markAsRead();
        this.hasUnreadNotifications = this.updatesService.checkActiveNotifications();
    }
}
