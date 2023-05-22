import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { functionQuestions } from 'src/app/javascript/questions/function';
import { prototypeQuestions } from 'src/app/javascript/questions/prototype';

import { IList } from 'src/app/shared/types/list.interface';

@Component({
    selector: 'app-javascript',
    templateUrl: './javascript.component.html',
    styleUrls: ['./javascript.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
export class JavascriptComponent implements OnInit, OnDestroy {
    list: IList[] = [
        { name: 'Прототипы', path: 'prototype', questions: prototypeQuestions },
        { name: 'Функции', path: 'function', questions: functionQuestions },
    ];
    listState: boolean = false;
    currentPath: string;
    currentPathSub: Subscription;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.currentPath = this.router.url;
        this.currentPathSub = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentPath = this.slicePath(event.url);
            }
        });
        this.currentPath = this.slicePath(this.currentPath);
    }

    ngOnDestroy(): void {
        this.currentPathSub.unsubscribe();
    }

    setNewListState(event: boolean): void {
        this.listState = event;
    }

    slicePath(fullPath: string): string {
        const pathsArray = fullPath.split('/');
        return pathsArray[pathsArray.length - 1];
    }
}
