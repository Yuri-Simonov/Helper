import { Component } from '@angular/core';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrls: ['./javascript.component.scss'],
})
export class JavascriptComponent {
    list: string[] = [
        'Всё подряд',
        'Прототипы',
        'Асинхронный код',
        'Классы',
        'Разное',
    ];

    constructor() {}
}
