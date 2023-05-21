import { ChangeDetectionStrategy, Component } from '@angular/core';
import { functionQuestions } from 'src/app/javascript/questions/function';
import { IQuestion } from 'src/app/shared/types/question.interface';

@Component({
    selector: 'app-function',
    templateUrl: './function.component.html',
    styleUrls: ['./function.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionComponent {
    questions: IQuestion[] = functionQuestions;
}
