import { ChangeDetectionStrategy, Component } from '@angular/core';
import { componentQuestions } from 'src/app/angular/questions/component';
import { IQuestion } from 'src/app/shared/types/question.interface';

@Component({
    selector: 'app-component',
    templateUrl: './component.component.html',
    styleUrls: ['./component.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentComponent {
    questions: IQuestion[] = componentQuestions;
}
