import { ChangeDetectionStrategy, Component } from '@angular/core';
import { decoratorQuestions } from 'src/app/angular/questions/decorator';
import { IQuestion } from 'src/app/shared/types/question.interface';

@Component({
    selector: 'app-decorator',
    templateUrl: './decorator.component.html',
    styleUrls: ['./decorator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DecoratorComponent {
    questions: IQuestion[] = decoratorQuestions;
}
