import { ChangeDetectionStrategy, Component } from '@angular/core';

import { functionQuestions } from '../../questions/javascript/function';
import { prototypeQuestions } from '../../questions/javascript/prototype';

import { IList } from '@types';

import { oppQuestions } from '../../questions/javascript/opp';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrls: ['./javascript.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JavascriptComponent {
    list: IList[] = [
        { name: 'ООП', path: 'opp', questions: oppQuestions },
        { name: 'Прототипы', path: 'prototype', questions: prototypeQuestions },
        { name: 'Функции', path: 'function', questions: functionQuestions },
    ];
}
