import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IList } from 'src/app/shared/interfaces';

import { allJavaScriptTasks } from '../../tasks/javascript';

import { QuestionsComponent } from '../../../quizzes/components/questions/questions.component';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { SpoilersComponent } from '../../../shared/components/spoilers/spoilers.component';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, SpoilersComponent],
})
export class JavascriptComponent {
    list: IList[] = [{ name: 'Все', path: 'javascript', info: allJavaScriptTasks }];
}
