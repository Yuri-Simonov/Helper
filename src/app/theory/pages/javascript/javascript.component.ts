import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IList } from 'src/app/shared/interfaces';

import { functionsInfo } from '../../information/javascript/functions';
import { prototypesInfo } from '../../information/javascript/prototypes';
import { oopInfo } from '../../information/javascript/oop';
import { othersInfo } from '../../information/javascript/others';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrls: ['./javascript.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JavascriptComponent {
    list: IList[] = [
        { name: 'ООП', path: 'oop', info: oopInfo },
        { name: 'Прототипы', path: 'prototype', info: prototypesInfo },
        { name: 'Функции', path: 'function', info: functionsInfo },
        { name: 'Разное', path: 'others', info: othersInfo },
    ];
}
