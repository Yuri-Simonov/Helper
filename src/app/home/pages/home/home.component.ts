import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NAVIGATION } from '../../../shared/data/navigation';

import { INavigation } from '../../../shared/types';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    chapters: INavigation[] = NAVIGATION;
}
