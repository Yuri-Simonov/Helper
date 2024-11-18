import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IList } from '../../../shared/interfaces';

import { allOthersInfo } from '../../information/others';

@Component({
    selector: 'app-others',
    templateUrl: './others.component.html',
    styleUrls: ['./others.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OthersComponent {
    list: IList[] = [{ name: 'Все', path: 'others', info: allOthersInfo }];
}
