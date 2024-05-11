import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IList } from '@types';

import { allGitInfo } from '../../information/git';

@Component({
    selector: 'app-git',
    templateUrl: './git.component.html',
    styleUrls: ['./git.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GitComponent {
    list: IList[] = [{ name: 'Все', path: 'all', info: allGitInfo }];
}
