import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IList } from '../../../shared/interfaces';

import { allOthersData } from '../../data/hr';

import { SpoilersComponent } from '../../../shared/components/spoilers/spoilers.component';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
    selector: 'app-hr',
    templateUrl: './hr.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SpoilersComponent, TitleComponent],
})
export class HrComponent {
    list: IList[] = [{ name: 'Все', path: 'hr', info: allOthersData }];
}
