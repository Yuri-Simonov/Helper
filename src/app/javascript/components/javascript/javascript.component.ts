import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';

import { functionQuestions } from '../../questions/function';
import { prototypeQuestions } from '../../questions/prototype';

import { IList } from '@types';

import { SidenavService } from '../../../shared/services/sidenav.service';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrls: ['./javascript.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
export class JavascriptComponent implements OnInit, OnDestroy {
    onDestroy$ = new ReplaySubject<number>(1);
    sidenavState: boolean;

    list: IList[] = [
        { name: 'Прототипы', path: 'prototype', questions: prototypeQuestions },
        { name: 'Функции', path: 'function', questions: functionQuestions },
    ];

    constructor(private sidenavService: SidenavService) {}

    ngOnInit() {
        this.sidenavService.sidebarState
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((newState) => (this.sidenavState = newState));
    }

    ngOnDestroy() {
        this.onDestroy$.next(0);
        this.onDestroy$.complete();
    }

    changeSidenavState(state: boolean): void {
        this.sidenavService.setNewSidebarState(state);
    }
}
