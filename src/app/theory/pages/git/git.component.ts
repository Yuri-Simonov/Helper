import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { IList } from '@types';

import { allGitQuestions } from '../../questions/git/all';

import { SidenavService } from '../../../shared/services/sidenav.service';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-git',
    templateUrl: './git.component.html',
    styleUrls: ['./git.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GitComponent implements OnInit, OnDestroy {
    onDestroy$ = new ReplaySubject<number>(1);
    list: IList[] = [{ name: 'Все', path: 'all', questions: allGitQuestions }];
    sidenavState: boolean;

    constructor(private sidenavService: SidenavService) {}

    ngOnInit() {
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
}
