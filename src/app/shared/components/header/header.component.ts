import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';

import { ThemeToggleService } from '../../services/theme-toggle.service';
import { SidebarService } from '../../services/sidebar.service';

import { INavigation, ITheme } from '../../types';

import { DialogSupportComponent } from '../dialogs/dialog-support/dialog-support.component';

import { NAVIGATION } from '../../data/navigation';

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
    themes: ITheme[];
    currentTheme: ITheme;
    sidebarState: boolean;

    constructor(
        private sidebarService: SidebarService,
        private themeToggleService: ThemeToggleService,
        private dialog: MatDialog,
    ) {}

    ngOnInit() {
        this.themes = this.themeToggleService.themes;
        this.setTheme(this.themeToggleService.currentTheme);

        this.sidebarService.sidebarState
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((newState) => (this.sidebarState = newState));
    }

    ngOnDestroy() {
        this.onDestroy$.next(0);
        this.onDestroy$.complete();
    }

    changeSidebarState(state: boolean): void {
        this.sidebarService.setNewSidebarState(state);
    }

    changeTheme(newTheme: ITheme) {
        this.themeToggleService.changeCurrentTheme(newTheme);
        this.setTheme(newTheme);
    }

    setTheme(theme: ITheme) {
        this.currentTheme = theme;
    }

    openDialog() {
        this.dialog.open(DialogSupportComponent);
    }
}
