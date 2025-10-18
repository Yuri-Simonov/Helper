import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';

import { IInfosAndAnswer, ITestAnswerOption } from '../../../shared/interfaces';

import { getQuestions } from '../../utils/generate-question-list';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { QuestionCardComponent } from '../question-card/question-card.component';
import { ResultComponent } from '../result/result.component';
import { NextQuestionDirective } from '../../directives/next-question.directive';

const materialModules = [MatProgressBarModule];

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrl: './questions.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [...materialModules, ButtonComponent, QuestionCardComponent, ResultComponent, NextQuestionDirective],
})
export class QuestionsComponent {
    // @Input('questions') questionsProps: IInfosAndAnswer[] = [];
    questionsProps = input<IInfosAndAnswer[]>([], { alias: 'questions' });

    currentValue: ITestAnswerOption | undefined;
    currentQuestionIndex: number = 0;
    progressBarPercent: number = 0;
    questionsAndAnswers: IInfosAndAnswer[] = [];
    userAnswers: ITestAnswerOption[] = [];

    ngOnChanges() {
        console.log('questionsProps', this.questionsProps());
        // console.log('Количество вопросов:', this.questionsProps.length);
        // this.questionsProps = [
        //     this.questionsProps[this.questionsProps.length - 2],
        //     this.questionsProps[this.questionsProps.length - 1],
        // ];

        if (this.questionsProps.length < 20) {
            this.questionsAndAnswers = getQuestions(this.questionsProps(), this.questionsProps().length);
        } else {
            this.questionsAndAnswers = getQuestions(this.questionsProps());
        }

        this.questionsAndAnswers = this.shuffle(this.questionsAndAnswers);
        this.changeProgressBar(this.currentQuestionIndex);
    }

    changeProgressBar(currentIndex: number) {
        this.progressBarPercent = (currentIndex / this.questionsAndAnswers.length) * 100;
    }

    showNextQuestion() {
        if (this.currentValue) {
            this.currentQuestionIndex++;
            this.changeProgressBar(this.currentQuestionIndex);
            this.userAnswers.push(this.currentValue);
            this.changeCurrentValue();
        }
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
