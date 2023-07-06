import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { componentQuestions } from '../../questions/component';
import { changeDetectionQuestions } from '../../questions/change_detection';
import { decoratorQuestions } from '../../questions/decorator';
import { directiveQuestions } from '../../questions/directive';
import { formQuestions } from '../../questions/form';
import { othersQuestions } from '../../questions/others';
import { pipeQuestions } from '../../questions/pipe';
import { routingQuestions } from '../../questions/routing';
import { rxjsOperatorsQuestions } from '../../questions/rxjs_operators';
import { rxjsQuestions } from '../../questions/rxjs';
import { serviceQuestions } from '../../questions/service';
import { testQuestions } from '../../questions/test';

import { IList, IQuestion } from '@types';
import { MatAccordion } from '@angular/material/expansion';

@Component({
    selector: 'app-angular',
    templateUrl: './angular.component.html',
    styleUrls: ['./angular.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

// а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я
// a b c d e f g h i j k l m n o p q r s t u v w x y z
export class AngularComponent implements OnInit, OnDestroy {
    list: IList[] = [
        {
            name: 'Декораторы',
            path: 'decorator',
            questions: decoratorQuestions,
        },
        { name: 'Директивы', path: 'directive', questions: directiveQuestions },
        {
            name: 'Компоненты',
            path: 'component',
            questions: componentQuestions,
        },
        { name: 'Маршрутизация', path: 'routing', questions: routingQuestions },
        { name: 'Пайпы', path: 'pipe', questions: pipeQuestions },
        { name: 'Разное', path: 'others', questions: othersQuestions },
        { name: 'Сервисы', path: 'service', questions: serviceQuestions },
        { name: 'Тестирование', path: 'test', questions: testQuestions },
        { name: 'Формы', path: 'form', questions: formQuestions },
        {
            name: 'changeDetection',
            path: 'changeDetection',
            questions: changeDetectionQuestions,
        },
        { name: 'RxJs', path: 'rxjs', questions: rxjsQuestions },
        {
            name: 'RxJs ==> Операторы',
            path: 'rxjs_operators',
            questions: rxjsOperatorsQuestions,
        },
    ];
    listState: boolean = false;
    currentPath: string;
    currentPathSub: Subscription;

    @ViewChildren(MatAccordion) accordion: MatAccordion[];

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
