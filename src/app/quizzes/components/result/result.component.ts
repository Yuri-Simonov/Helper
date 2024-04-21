import { Component, Input } from '@angular/core';

import { IQuestionsAndAnswer, ITestAnswerOption } from '../../../shared/types';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrl: './result.component.scss',
})
export class ResultComponent {
    amountRightAnswers: number = 0;
    percentRightAnswers: number = 0;

    @Input('questionsAndAnswers') questionsAndAnswersProps: IQuestionsAndAnswer[];
    @Input('userAnswers') userAnswersProps: ITestAnswerOption[];

    ngOnChanges() {
        this.userAnswersProps.forEach((item) => {
            if (item.right) {
                this.amountRightAnswers++;
            }
        });
        this.percentRightAnswers = Math.round((this.amountRightAnswers / this.questionsAndAnswersProps.length) * 100);
    }

    passTestAgain() {
        window.location.reload();
    }
}
