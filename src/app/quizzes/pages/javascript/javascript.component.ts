import { ChangeDetectionStrategy, Component } from '@angular/core';

import { javascriptTestQuestions } from '../../questions/javascript';

import { IInfosAndAnswer } from '../../../shared/interfaces';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { QuestionsComponent } from '../../components/questions/questions.component';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrl: './javascript.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, QuestionsComponent],
})
export class JavascriptComponent {
    javascriptTestQuestions: IInfosAndAnswer[] = javascriptTestQuestions || [];
}
