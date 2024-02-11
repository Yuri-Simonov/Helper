import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuestionsAndAnswer, ITestAnswerOption } from '../../../shared/types';

@Component({
    selector: 'app-question-card',
    templateUrl: './question-card.component.html',
    styleUrl: './question-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCardComponent {
    currentValue: ITestAnswerOption | undefined;
    currentQuestionIndex: number = 0;
    progressBarPercent: number = 0;
    userAnswers: ITestAnswerOption[] = [];

    @Input('testQuestions') testQuestionsProps: IQuestionsAndAnswer[];
    @Output() changeProgressBar = new EventEmitter<number>();

    showNextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentValue) {
            this.userAnswers.push(this.currentValue);
        }
        this.changeProgressBar.emit(this.currentQuestionIndex);
        this.setNewCurrentValue();
    }

    setNewCurrentValue(value?: ITestAnswerOption) {
        this.currentValue = value;
    }
}
