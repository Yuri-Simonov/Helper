import { ChangeDetectionStrategy, Component } from '@angular/core';
import { directiveQuestions } from 'src/app/angular/questions/directive';
import { IQuestion } from 'src/app/shared/types/question.interface';

@Component({
    selector: 'app-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectiveComponent {
    questions: IQuestion[] = directiveQuestions;
}
