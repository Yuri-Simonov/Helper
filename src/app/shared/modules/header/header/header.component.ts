import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';

import { ThemeToggleService } from './../../../services/theme-toggle.service';
import { SidenavService } from '../../../services/sidenav.service';

import { ITheme } from '../../../types';

interface IHeaderChapters {
    path: string;
    name: string;
    disabled: boolean;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
    sidenavState: boolean;

    constructor(
        private sidenavService: SidenavService,
        private themeToggleService: ThemeToggleService,
    ) {}

    ngOnInit() {
        this.themes = this.themeToggleService.themes;
        this.setTheme(this.themeToggleService.currentTheme);

        this.sidenavService.sidebarState
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((newState) => (this.sidenavState = newState));
    }

    ngOnDestroy() {
        this.onDestroy$.next(0);
        this.onDestroy$.complete();
    }

    changeSidenavState(state: boolean): void {
        this.sidenavService.setNewSidebarState(state);
    }

    changeTheme(newTheme: ITheme) {
        this.themeToggleService.changeCurrentTheme(newTheme);
        this.setTheme(newTheme);
    }

    setTheme(theme: ITheme) {
        this.currentTheme = theme;
    }
}
