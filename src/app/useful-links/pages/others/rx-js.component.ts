import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IList } from 'src/app/shared/interfaces';

import { allUsefulLinks } from '../../data/others';

import { TitleComponent } from '../../../shared/components/title/title.component';
import { SpoilersComponent } from '../../../shared/components/spoilers/spoilers.component';

@Component({
    selector: 'app-rx-js',
    templateUrl: './rx-js.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, SpoilersComponent],
})
export class RxJsComponent {
    list: IList[] = [{ name: 'Все', path: 'others', info: allUsefulLinks }];
}
