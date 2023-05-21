import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routingQuestions } from 'src/app/angular/questions/routing';
import { IQuestion } from 'src/app/shared/types/question.interface';

@Component({
    selector: 'app-routing',
    templateUrl: './routing.component.html',
    styleUrls: ['./routing.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutingComponent {
    questions: IQuestion[] = routingQuestions;
}
