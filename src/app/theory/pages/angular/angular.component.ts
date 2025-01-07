import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IList } from 'src/app/shared/interfaces';

import { SpoilersComponent } from '../../../shared/components/spoilers/spoilers.component';
import { TitleComponent } from '../../../shared/components/title/title.component';

import { componentsInfo } from '../../information/angular/components';
import { changeDetectionInfo } from '../../information/angular/change-detection';
import { decoratorsInfo } from '../../information/angular/decorators';
import { directivesInfo } from '../../information/angular/directives';
import { formsInfo } from '../../information/angular/forms';
import { ngrxInfo } from '../../information/angular/ngrx';
import { othersInfo } from '../../information/angular/others';
import { pipesInfo } from '../../information/angular/pipes';
import { routingInfo } from '../../information/angular/routing';
import { rxjsOperatorsInfo } from '../../information/angular/rxjs-operators';
import { rxjsInfo } from '../../information/angular/rxjs';
import { servicesInfo } from '../../information/angular/services';
// import { testingInfo } from "../../information/angular/testing";

@Component({
    selector: 'app-angular',
    templateUrl: './angular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, SpoilersComponent],
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
            info: decoratorsInfo,
        },
        { name: 'Директивы', path: 'directive', info: directivesInfo },
        {
            name: 'Компоненты',
            path: 'component',
            info: componentsInfo,
        },
        { name: 'Маршрутизация', path: 'routing', info: routingInfo },
        { name: 'Пайпы', path: 'pipe', info: pipesInfo },
        { name: 'Разное', path: 'others', info: othersInfo },
        { name: 'Сервисы', path: 'service', info: servicesInfo },
        // { name: 'Тестирование', path: 'test', info: testingInfo },
        { name: 'Формы', path: 'form', info: formsInfo },
        {
            name: 'Change Detection',
            path: 'change-detection',
            info: changeDetectionInfo,
        },
        {
            chapter: 'Библиотеки Angular',
            disabled: true,
        },
        { name: 'RxJS', path: 'rxjs', info: rxjsInfo },
        {
            name: 'Операторы RxJS',
            path: 'rxjs-operators',
            info: rxjsOperatorsInfo,
        },
        { name: 'NgRx', path: 'ngrx', info: ngrxInfo },
    ];
}
