import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { RouterLink, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { ThemeToggleService } from '../../services/theme-toggle.service';
import { SidebarService } from '../../services/sidebar.service';

import { ITheme } from '../../types';

interface IHeaderChapters {
    path: string;
    name: string;
    disabled: boolean;
}

const materialModules = [MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule];

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [materialModules, NgClass, RouterLink],
})
export class HeaderComponent implements OnInit, OnDestroy {
    onDestroy$ = new ReplaySubject<number>(1);
    chapters: IHeaderChapters[] = [
        { path: 'theory/javascript', name: 'Javascript', disabled: false },
        { path: 'theory/angular', name: 'Angular', disabled: false },
        { path: 'theory/git/all', name: 'Git', disabled: false },
        { path: 'theory/others', name: 'Разное', disabled: true },
    ];
    themes: ITheme[];
    currentTheme: ITheme;
    sidebarState: boolean;

    constructor(
        private sidebarService: SidebarService,
        private themeToggleService: ThemeToggleService,
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
}
