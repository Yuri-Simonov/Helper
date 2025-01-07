import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IList } from 'src/app/shared/interfaces';

import { allAngularExamples } from '../../data/angular';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { SpoilersComponent } from '../../../shared/components/spoilers/spoilers.component';

@Component({
    selector: 'app-angular',
    templateUrl: './angular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, SpoilersComponent],
})
export class AngularComponent {
    list: IList[] = [{ name: 'Все', path: 'angular', info: allAngularExamples }];
}
