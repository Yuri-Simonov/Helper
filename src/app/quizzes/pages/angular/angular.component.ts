import { ChangeDetectionStrategy, Component } from '@angular/core';

import { angularTestQuestions } from '../../questions/angular';

import { IInfosAndAnswer } from '../../../shared/interfaces';

@Component({
    selector: 'app-angular',
    templateUrl: './angular.component.html',
    styleUrl: './angular.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AngularComponent {
    angularTestQuestions: IInfosAndAnswer[] = angularTestQuestions || [];
}
