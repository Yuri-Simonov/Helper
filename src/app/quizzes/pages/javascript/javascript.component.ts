import { ChangeDetectionStrategy, Component } from '@angular/core';

import { javascriptTestQuestions } from '../../questions/javascript';

import { IInfosAndAnswer } from '../../../shared/interfaces';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrl: './javascript.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JavascriptComponent {
    javascriptTestQuestions: IInfosAndAnswer[] = javascriptTestQuestions || [];
}
