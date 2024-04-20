import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { IList } from '@types';

import { allGitQuestions } from '../../questions/git/all';

import { SidebarService } from '../../../shared/services/sidebar.service';
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
    sidebarState: boolean;

    constructor(private sidebarService: SidebarService) {}

    ngOnInit() {
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
}
