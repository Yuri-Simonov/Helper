import { Component, Input } from '@angular/core';

import { IQuestionsAndAnswer, ITestAnswerOption } from '../../../shared/types';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrl: './result.component.scss',
})
export class ResultComponent {
    @Input('questionsAndAnswers') questionsAndAnswersProps: IQuestionsAndAnswer[];
    @Input('userAnswers') userAnswersProps: ITestAnswerOption[];
}
