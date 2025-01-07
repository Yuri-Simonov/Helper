import { MatRadioModule } from '@angular/material/radio';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IInfosAndAnswer, ITestAnswerOption } from '../../../shared/interfaces';
import { NgClass } from '@angular/common';
import { PipeSanitizer } from '../../../shared/pipes/pipe-sanitizer.pipe';
import { HighlightJsDirective } from 'ngx-highlight-js';

const materialModules = [MatRadioModule];

@Component({
    selector: 'app-question-card',
    templateUrl: './question-card.component.html',
    styleUrl: './question-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [...materialModules, NgClass, PipeSanitizer, HighlightJsDirective],
})
export class QuestionCardComponent {
    currentValue: ITestAnswerOption | undefined;
    currentQuestionIndex: number = 0;
    progressBarPercent: number = 0;
    userAnswers: ITestAnswerOption[] = [];

    @Input('questionsAndAnswers') questionsAndAnswersProps: IInfosAndAnswer[];
    @Input('questionIndex') questionIndexProps: number;
    @Input('userAnswers') userAnswersProps: ITestAnswerOption[];
    @Input('mode') modeProps: 'test' | 'result' = 'test';

    @Output() changeCurrentValue = new EventEmitter<ITestAnswerOption | undefined>();

    setNewCurrentValue(value?: ITestAnswerOption) {
        this.currentValue = value;
        this.changeCurrentValue.emit(value);
    }
}
