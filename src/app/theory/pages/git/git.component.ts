import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IList } from 'src/app/shared/interfaces';

import { allGitInfo } from '../../information/git';

@Component({
    selector: 'app-git',
    templateUrl: './git.component.html',
    styleUrls: ['./git.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GitComponent {
    list: IList[] = [{ name: 'Все', path: 'git', info: allGitInfo }];
}
