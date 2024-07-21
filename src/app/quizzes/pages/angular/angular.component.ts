import { ChangeDetectionStrategy, Component } from '@angular/core';

import { angularTestQuestions } from '../../questions/angular';

import { IInfosAndAnswer } from '../../../shared/types';

@Component({
    selector: 'app-angular',
    templateUrl: './angular.component.html',
    styleUrl: './angular.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularComponent {
    angularTestQuestions: IInfosAndAnswer[] = angularTestQuestions || [];
}
