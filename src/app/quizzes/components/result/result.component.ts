import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IInfosAndAnswer, ITestAnswerOption } from '../../../shared/interfaces';
import { NgClass } from '@angular/common';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { QuestionCardComponent } from '../question-card/question-card.component';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrl: './result.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgClass, ButtonComponent, QuestionCardComponent],
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
