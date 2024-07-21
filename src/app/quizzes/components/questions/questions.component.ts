import { Component, Input } from '@angular/core';

import { IInfosAndAnswer, ITestAnswerOption } from '../../../shared/types';

import { getQuestions } from '../../utils/generate-question-list';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
    @Input('questions') questionsProps: IInfosAndAnswer[] = [];

    currentValue: ITestAnswerOption | undefined;
    currentQuestionIndex: number = 0;
    progressBarPercent: number = 0;
    questionsAndAnswers: IInfosAndAnswer[] = [];
    userAnswers: ITestAnswerOption[] = [];

    ngOnChanges() {
        if (this.questionsProps.length < 20) {
            this.questionsAndAnswers = getQuestions(this.questionsProps, this.questionsProps.length);
        } else {
            this.questionsAndAnswers = getQuestions(this.questionsProps);
        }

        this.questionsAndAnswers = this.shuffle(this.questionsAndAnswers);
        this.changeProgressBar(this.currentQuestionIndex);
    }

    changeProgressBar(currentIndex: number) {
        this.progressBarPercent = (currentIndex / this.questionsAndAnswers.length) * 100;
    }

    showNextQuestion() {
        this.currentQuestionIndex++;
        this.changeProgressBar(this.currentQuestionIndex);

        if (this.currentValue) {
            this.userAnswers.push(this.currentValue);
        }

        this.changeCurrentValue();
    }

    changeCurrentValue(newCurrentValue?: ITestAnswerOption | undefined) {
        this.currentValue = newCurrentValue;
    }

    shuffle(questionsArr: IInfosAndAnswer[]): IInfosAndAnswer[] {
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
