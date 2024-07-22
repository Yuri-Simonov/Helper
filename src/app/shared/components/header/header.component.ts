import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, takeUntil } from 'rxjs';
import { RouterLink, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { ThemeToggleService } from '../../services/theme-toggle.service';
import { SidebarService } from '../../services/sidebar.service';

import { ITheme } from '../../types';
import { MatDialog } from '@angular/material/dialog';
import { DialogSupportComponent } from '../dialogs/dialog-support/dialog-support.component';

interface IHeaderChapters {
    path: string;
    name: string;
    links: IHeaderChapterLink[];
    sideLink?: boolean;
}

interface IHeaderChapterLink {
    path: string;
    name: string;
    disabled?: boolean;
    targetBlank?: boolean;
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
        {
            path: 'theory',
            name: 'Теория',
            links: [
                { path: 'javascript', name: 'Javascript' },
                { path: 'angular', name: 'Angular' },
                { path: 'git', name: 'Git' },
                { path: 'others', name: 'Разное' },
            ],
        },
        {
            path: '',
            name: 'Курсы',
            links: [
                {
                    path: 'https://youtube.com/playlist?list=PL2bJ6t_D6_KSSiM2Y8T32-5KgaNzzS4R6&si=KZdPM8DuqbPbtNEH',
                    name: 'Angular',
                    targetBlank: true,
                },
            ],
            sideLink: true,
        },
        {
            path: 'quizzes',
            name: 'Тесты',
            links: [
                { path: 'javascript', name: 'JavaScript' },
                { path: 'angular', name: 'Angular' },
            ],
        },
    ];
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

        const behaviorSubject$ = new BehaviorSubject(1);

        behaviorSubject$.subscribe((value) => console.log('Первая подписка:', value));
        behaviorSubject$.subscribe((value) => console.log('Вторая подписка:', value));
        behaviorSubject$.next(2);
        behaviorSubject$.subscribe((value) => console.log('Третья подписка:', value));
        behaviorSubject$.next(3);
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
