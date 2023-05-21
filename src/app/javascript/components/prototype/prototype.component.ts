import { ChangeDetectionStrategy, Component } from '@angular/core';
import { prototypeQuestions } from 'src/app/javascript/questions/prototype';
import { IQuestion } from 'src/app/shared/types/question.interface';

@Component({
    selector: 'app-prototype',
    templateUrl: './prototype.component.html',
    styleUrls: ['./prototype.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrototypeComponent {
    questions: IQuestion[] = prototypeQuestions;
}
