import { ChangeDetectionStrategy, Component } from '@angular/core';
import { angularTestQuestions } from '../../questions/angular';
import { IQuestionsAndAnswer, ITestAnswerOption } from '../../../shared/types';

@Component({
    selector: 'app-angular',
    templateUrl: './angular.component.html',
    styleUrl: './angular.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularComponent {
    currentValue: ITestAnswerOption | undefined;
    currentQuestionIndex: number = 0;
    progressBarPercent: number = 0;
    questionsAndAnswers: IQuestionsAndAnswer[];
    userAnswers: ITestAnswerOption[] = [];

    constructor() {
        this.questionsAndAnswers = angularTestQuestions;
        this.changeProgressBar(this.currentQuestionIndex);
    }

    changeProgressBar(currentIndex: number) {
        this.progressBarPercent = (currentIndex / this.questionsAndAnswers.length) * 100;
    }

    showNextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentValue) {
            this.userAnswers.push(this.currentValue);
        }
        this.changeProgressBar(this.currentQuestionIndex);
        this.changeCurrentValue();
    }

    changeCurrentValue(newCurrentValue?: ITestAnswerOption | undefined) {
        this.currentValue = newCurrentValue;
    }
}
