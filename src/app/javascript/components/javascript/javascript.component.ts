import { Component } from '@angular/core';

import { IList } from 'src/app/shared/types/list.interface';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrls: ['./javascript.component.scss'],
})

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
export class JavascriptComponent {
    list: IList[] = [
        { name: 'Асинхронный код', path: 'async' },
        { name: 'Классы', path: 'class' },
        { name: 'Прототипы', path: 'prototype' },
        { name: 'Разное', path: 'others' },
        { name: 'Функции', path: 'function' },
    ];
    listState: boolean;

    constructor() {}

    setNewListState(event: boolean): void {
        this.listState = event;
    }
}
