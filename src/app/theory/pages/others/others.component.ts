import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IList } from '../../../shared/interfaces';

import { TitleComponent } from '../../../shared/components/title/title.component';
import { SpoilersComponent } from '../../../shared/components/spoilers/spoilers.component';

import { allOthersInfo } from '../../information/others';

@Component({
    selector: 'app-others',
    templateUrl: './others.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, SpoilersComponent],
})
export class OthersComponent {
    list: IList[] = [{ name: 'Все', path: 'others', info: allOthersInfo }];
}
