import { ChangeDetectionStrategy, Component } from '@angular/core';
import { serviceQuestions } from 'src/app/angular/questions/service';
import { IQuestion } from 'src/app/shared/types/question.interface';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceComponent {
    questions: IQuestion[] = serviceQuestions;
}
