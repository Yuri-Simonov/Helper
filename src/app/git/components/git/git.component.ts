import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IList } from '@types';

import { allGitQuestions } from './../../questions/all';

@Component({
    selector: 'app-git',
    templateUrl: './git.component.html',
    styleUrls: ['./git.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GitComponent {
    list: IList[] = [{ name: 'Все', path: 'all', questions: allGitQuestions }];
    sidebarState: boolean = false;

    setNewSidebarState(event: boolean): void {
        this.sidebarState = event;
    }

    changeListState(): void {
        this.sidebarState = !this.sidebarState;
        this.resetBodyClass();
    }

    resetBodyClass(): void {
        const body = document.querySelector('body');
        body?.classList.toggle('lock');
    }
}
