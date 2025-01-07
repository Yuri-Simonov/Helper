import { ChangeDetectionStrategy, Component } from '@angular/core';

import { angularTestQuestions } from '../../questions/angular';

import { IInfosAndAnswer } from '../../../shared/interfaces';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { QuestionsComponent } from '../../components/questions/questions.component';

@Component({
    selector: 'app-angular',
    templateUrl: './angular.component.html',
    styleUrl: './angular.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, QuestionsComponent],
})
export class AngularComponent {
    angularTestQuestions: IInfosAndAnswer[] = angularTestQuestions || [];
}
