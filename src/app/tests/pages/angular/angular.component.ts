import { ChangeDetectionStrategy, Component } from '@angular/core';
import { angularTestQuestions } from '../../questions/angular';
import { IQuestionsAndAnswer, ITestAnswerOption } from '../../../shared/types';
import { getQuestions } from '../../utils/generate-question-list';

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
    questionsAndAnswers: IQuestionsAndAnswer[] = [];
    userAnswers: ITestAnswerOption[] = [];

    constructor() {
        if (angularTestQuestions.length < 20) {
            this.questionsAndAnswers = getQuestions(angularTestQuestions, angularTestQuestions.length);
        } else {
            this.questionsAndAnswers = getQuestions(angularTestQuestions);
        }

        this.questionsAndAnswers = this.shuffle(this.questionsAndAnswers);
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

    shuffle(questionsArr: IQuestionsAndAnswer[]): IQuestionsAndAnswer[] {
        return questionsArr.map((item) => {
            let newArr = [...item.answers];
            for (let i = newArr.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
            }
            item.answers = [...newArr];

            return item;
        });
    }
}
