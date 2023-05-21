import { ChangeDetectionStrategy, Component } from '@angular/core';
import { rxjsQuestions } from 'src/app/angular/questions/rxjs';
import { IQuestion } from 'src/app/shared/types/question.interface';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsComponent {
    questions: IQuestion[] = rxjsQuestions;
}
