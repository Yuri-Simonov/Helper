import { Component } from '@angular/core';

import { IList } from 'src/app/shared/types/list.interface';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrls: ['./javascript.component.scss'],
})
export class JavascriptComponent {
    list: IList[] = [
        { name: 'Прототипы', path: 'prototype' },
        { name: 'Асинхронный код', path: 'async' },
        { name: 'Классы', path: 'class' },
        { name: 'Разное', path: 'others' },
    ];

    constructor() {}
}
