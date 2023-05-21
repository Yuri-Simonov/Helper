import { ChangeDetectionStrategy, Component } from '@angular/core';
import { formQuestions } from 'src/app/angular/questions/form';
import { IQuestion } from 'src/app/shared/types/question.interface';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
    questions: IQuestion[] = formQuestions;
}
