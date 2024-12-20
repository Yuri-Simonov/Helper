import { Component, Input } from '@angular/core';

import { IInfosAndAnswer, ITestAnswerOption } from '../../../shared/interfaces';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrl: './result.component.scss',
    standalone: false
})
export class ResultComponent {
    amountRightAnswers: number = 0;
    percentRightAnswers: number = 0;

    @Input('questionsAndAnswers') questionsAndAnswersProps: IInfosAndAnswer[];
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
