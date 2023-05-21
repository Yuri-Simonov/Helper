import { IQuestion } from 'src/app/shared/types/question.interface';
import { testQuestions } from './../../questions/test';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
    questions: IQuestion[] = testQuestions;
}
