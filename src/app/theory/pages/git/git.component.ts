import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IList } from '@types';

import { allGitQuestions } from '../../questions/git/all';

@Component({
    selector: 'app-git',
    templateUrl: './git.component.html',
    styleUrls: ['./git.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GitComponent {
    list: IList[] = [{ name: 'Все', path: 'all', questions: allGitQuestions }];
}
