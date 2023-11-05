import { ChangeDetectionStrategy, Component } from '@angular/core';

import { functionQuestions } from '../../questions/function';
import { prototypeQuestions } from '../../questions/prototype';

import { IList } from '@types';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrls: ['./javascript.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
export class JavascriptComponent {
    list: IList[] = [
        { name: 'Прототипы', path: 'prototype', questions: prototypeQuestions },
        { name: 'Функции', path: 'function', questions: functionQuestions },
    ];
    sidebarState: boolean = false;

    setNewSidebarState(event: boolean): void {
        this.sidebarState = event;
    }

    changeListState(): void {
        this.sidebarState = !this.sidebarState;
        this.resetBodyClass();
    }

    resetBodyClass(): void {
        const body = document.querySelector('body');
        body?.classList.toggle('sidebar-lock');
    }
}
