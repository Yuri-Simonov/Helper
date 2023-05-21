import { ChangeDetectionStrategy, Component } from '@angular/core';
import { pipeQuestions } from 'src/app/angular/questions/pipe';
import { IQuestion } from 'src/app/shared/types/question.interface';

@Component({
    selector: 'app-pipe',
    templateUrl: './pipe.component.html',
    styleUrls: ['./pipe.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipeComponent {
    questions: IQuestion[] = pipeQuestions;
}
