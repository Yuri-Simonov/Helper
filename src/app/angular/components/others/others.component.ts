import { ChangeDetectionStrategy, Component } from '@angular/core';
import { othersQuestions } from 'src/app/angular/questions/others';
import { IQuestion } from 'src/app/shared/types/question.interface';

@Component({
    selector: 'app-others',
    templateUrl: './others.component.html',
    styleUrls: ['./others.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OthersComponent {
    questions: IQuestion[] = othersQuestions;
}
