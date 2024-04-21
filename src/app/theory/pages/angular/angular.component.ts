import { ChangeDetectionStrategy, Component } from '@angular/core';

import { componentQuestions } from '../../questions/angular/component';
import { changeDetectionQuestions } from '../../questions/angular/change_detection';
import { decoratorQuestions } from '../../questions/angular/decorator';
import { directiveQuestions } from '../../questions/angular/directive';
import { formQuestions } from '../../questions/angular/form';
import { othersQuestions } from '../../questions/angular/others';
import { pipeQuestions } from '../../questions/angular/pipe';
import { routingQuestions } from '../../questions/angular/routing';
import { rxjsOperatorsQuestions } from '../../questions/angular/rxjs-operators';
import { rxjsQuestions } from '../../questions/angular/rxjs';
import { serviceQuestions } from '../../questions/angular/service';
import { testQuestions } from '../../questions/angular/test';

import { IList } from '@types';
import { ngrxQuestions } from 'src/app/theory/questions/angular/ngrx';

@Component({
    selector: 'app-angular',
    templateUrl: './angular.component.html',
    styleUrls: ['./angular.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularComponent {
    list: IList[] = [
        {
            chapter: 'Основы Angular',
            disabled: true,
        },
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
        {
            chapter: 'Библиотеки Angular',
            disabled: true,
        },
        { name: 'RxJS', path: 'rxjs', questions: rxjsQuestions },
        {
            name: 'Операторы RxJS',
            path: 'rxjs-operators',
            questions: rxjsOperatorsQuestions,
        },
        { name: 'NgRx', path: 'ngrx', questions: ngrxQuestions },
    ];
}
