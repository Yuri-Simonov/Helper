import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IList } from 'src/app/shared/interfaces';

import { SpoilersComponent } from '../../../shared/components/spoilers/spoilers.component';
import { TitleComponent } from '../../../shared/components/title/title.component';

import { allGitInfo } from '../../information/git';

@Component({
    selector: 'app-git',
    templateUrl: './git.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, SpoilersComponent],
})
export class GitComponent {
    list: IList[] = [{ name: 'Все', path: 'git', info: allGitInfo }];
}
