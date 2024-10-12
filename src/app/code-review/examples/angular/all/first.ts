import { IInfo } from '@types';

export const FIRST_EXAMPLE: IInfo = {
    title: '1-ый пример',
    body: `<p>Посмотрите на код ниже и попробуйте найти участки кода, которые требуют доработки.</p>
	<pre><code class="language-typescript">import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
    selector: 'app-root',
    template: '&lt;div id="data-container">{{ getData() }}&lt;/div>',
    standalone: true,
})
export class AppComponent implements OnInit {
    title = 'Плохой код';
    data: any;
    observable$: Observable<number> = interval(1000);

    constructor() {
        this.getData();
    }

    ngOnInit() {
        this.observable$.subscribe((val) => {
            console.log(val);
        });
    }

    getData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                this.data = data;
                this.updateDOM();
            })
            .catch((error) => console.error(error));

        return this.data;
    }

    updateDOM() {
        (document.getElementById('data-container') as HTMLElement).innerHTML = this.data;
    }
}</code></pre>`,
    tasks: [
        {
            title: 'Код-ревью',
            body: `<p>
                В данном коде есть несколько проблем, которые могут привести к неэффективной работе приложения,
                потенциальным багам и нарушению принципов Angular.
            </p>
            <p>Ниже рассмотрены недочеты кода изолированно друг от друга.</p>
            <p>Также в самом низу показан пример исправленного кода.</p>
            <i class="subtitle">Не используется стратегия OnPush для механизма Change Detection</i>
            <p>Нужно добавить стратегию <code>OnPush</code> для текущего компонента:</p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    template: '&lt;div id="data-container">{{ getData() }}&lt;/div>',
    standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})</code></pre>
            <p>
                Также стоит помнить, что при стратегии <code>OnPush</code>, когда изменяются данные внутри класса
                компонента, необходимо явно уведомлять Angular об этом с помощью класса <code>ChangeDetectorRef</code> и
                его методов.
            </p>
            <i class="subtitle">Вызов метода getData в шаблоне компонента</i>
            <p>
                Метод <code>getData</code> вызывается в шаблоне напрямую через интерполяцию. Это приведет к тому, что
                Angular будет вызывать этот метод при каждом цикле обнаружения изменений. И т.к. в текущем коде стоит
                дефолтная стратегия для механизма <code>Change Detection</code>, то вызовы будут происходить при любых
                изменениях данных.
            </p>
            <p>
                В данном примере внутри метода <code>getData</code> через функцию <code>fetch</code> отправляется запрос
                на сервер. А при ответе данные записываются в переменную <code>data</code>. На каждый ответ сервера
                будет вызываться механизм <code>Change Detection</code>, который из-за дефолтной стратегии будет
                вызывать метод <code>getData</code>. И в итоге мы получаем зацикливание и, как следствие, утечку памяти.
            </p>
            <p>
                Такой код требует доработки. В данном случае стоит заменить вызов метода <code>getData</code> в шаблоне
                компонента на свойство.
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    template: '&lt;div id="data-container">{{ data$ | async }}&lt;/div>',
    standalone: true,
})</code></pre>
            <p>
                Т.к. функция <code>fetch</code> в методе <code>getData</code> делает запрос на сервер, следовательно, данные мы получаем асинхронно. В
                таком случае целесообразно будет использовать асинхронную пайпу.
            </p>
            <i class="subtitle">Проблемы с асинхронностью в методе getData</i>
            <p>
                Здесь проблема отчасти похожа на предыдущую. Метод <code>getData</code> возвращает синхронно свойство
                <code>this.data</code>. Но запись значения в данное свойство происходит, когда приходит ответ от сервера
                внутри функции <code>fetch</code>. Причем ответ приходит асинхронно.
            </p>
            <p>
                В итоге это приводит к тому, что вызов метода <code>getData</code> возвращает старое значение свойства
                <code>this.data</code>, которое на начальном этапе равно <code>undefined</code>. А данные с сервера
                придут уже после вызова метода <code>getData</code>. При стратегии <code>OnPush</code> в шаблоне
                компонента мы бы ничего не увидели. Но т.к. в примере указана дефолтная стратегия, это вовсе приведет
                к зацикливанию и отправке бесконечных запросов на сервер.
            </p>
            <p>
                Для решения данной проблемы стоит также переписать метод <code>getData</code> таким образом, чтобы он
                возвращал <code>Observable</code> или <code>Promise</code>, а в шаблоне компонента использовать
                асинхронную пайпу.
            </p>
            <i class="subtitle">Вызов метода getData в конструкторе класса</i>
            <p>
                В конструкторе вызывается метод <code>getData</code>, который делает сетевой запрос. Это плохая
                практика, так как конструктор предназначен для инициализации зависимостей. Асинхронные операции должны
                выполняться в жизненных циклах Angular, например в <code>ngOnInit</code>.
            </p>
            <i class="subtitle">Прямое манипулирование DOM-деревом</i>
            <p>
                В методе <code>updateDOM</code> используется <code>document.getElementById</code> для прямого изменения
                DOM. В Angular не рекомендуется использовать прямые манипуляции с DOM, т.к. это нарушает подход,
                основанный на шаблонах и реактивности.
            </p>
            <p>
                В данном случае метод <code>updateDOM</code> вообще не нужен. Достаточно просто обновить свойство
                <code>this.data</code> и отобразить его значение в шаблоне компонента. При использовании совместно со
                стратегией <code>OnPush</code>, необходимо будет также вызвать механизм <code>Change Detection</code>,
                чтобы он проверил компонент на изменения и отобразил их на странице браузера.
            </p>
            <i class="subtitle">Потенциальная утечка памяти из-за подписки</i>
            <p>
                Если используется метод <code>subscribe</code> в классе компонента, то необходимо учитывать, что при
                удалении компонента из DOM-дерева, необходимо отписаться от всех имеющих подписок. В противном случае
                возможна потенциальная утечка памяти.
            </p>
            <p>
                Для решения данной проблемы можно использовать метод <code>unsubscribe</code>, асинхронную пайпу в
                шаблоне компонента или оператор <code>takeUntil</code> совместно с <code>Subject</code>.
            </p>
            <i class="subtitle">Использование функции fetch в Angular</i>
            <p>
                В Angular рекомендуется использовать встроенный модуль <code>HttpClient</code> для работы с
                HTTP-запросами, а не функцию <code>fetch</code> из нативного JavaScript. Модуль
                <code>HttpClient</code> предоставляет более удобные методы, встроенную обработку ошибок и работает с
                RxJS.
            </p>
            <i class="subtitle">Отсутствие типизации у свойства data</i>
            <p>
                В коде отсутствует строгая типизация у свойства <code>data</code>, т.к. в качестве типа указано
                <code>any</code>. Это снижает читаемость кода и может привести в дальнейшем к ошибкам.
            </p>
            <p>Для решения данной проблемы необходимо создать интерфейс и типизировать свойство <code>data</code>.</p>
            <pre><code class="language-typescript">interface IData {
  id: number;
  name: string;
  // другие различные поля...
}

export class AppComponent implements OnInit {
	// ...
	data: IData;
	// ...
}</code></pre>
            <i class="subtitle">Обращение к серверу внутри компонента</i>
            <p>
                Обращение к серверу должно осуществляться через сервис, а не компонент. Т.к. компоненты в Angular
                предназначены для управления представлением (UI) и взаимодействием с пользователем, а сервисы — для
                выполнения бизнес-логики и работы с данными. Запросы к серверу относятся к бизнес-логике, а не к
                управлению интерфейсом, поэтому их логично размещать в сервисах. Это делает код более читаемым и
                поддерживаемым.
            </p>
            <p>
                Поэтому для решения данной проблемы необходимо создать отдельный сервис и вынести обращение к серверу в
                него. А в компоненте просто внедрить на него зависимость и использовать его функционал.
            </p>
            <i class="subtitle">Отсутствие корректной обработки ошибки при ответе сервера</i>
            <p>
                Сервер вполне может быть недоступен или вернуть ошибку. На этот случай в примере ошибка обрабатывается
                простым выводом сообщения в консоль, но в таком случае пользователь не поймет, что что-то пошло не так.
            </p>
            <p>
                В таком случае можно, например, в свойство <code>data</code> установить пустой массив или объект, чтобы
                код не падал. А пользователя уведомить сообщением, что что-то пошло не так.
            </p>
            <i class="subtitle">Нерациональное использование оператора interval</i>
            <p>
                В данном коде оператор <code>interval</code> создаёт поток чисел каждую секунду, однако, неясно, какую
                цель это выполняет. Если задача в том, чтобы просто выводить в консоль значение каждую секунду, то это
                может быть излишне. Возможно, стоит задуматься, зачем этот <code>Observable</code> здесь нужен, и если
                это временное решение, его стоит убрать или заменить на что-то более целенаправленное.
            </p>
            <i class="subtitle">Исправленный код</i>
            <p>
                Ниже представлен пример более корректного кода. Конечно, он не идеален, если придираться. Но в любом
                случае, он более читаем и с ним куда легче будет работать в дальнейшем.
            </p>
            <pre><code class="language-typescript">// ./services/data.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IData } from '../interfaces/data.interface';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    getData(): Observable&lt;IData[]> {
        return this.http.get&lt;IData[]>('https://jsonplaceholder.typicode.com/users');
    }
}</code></pre>
            <pre><code class="language-typescript">// ./interfaces/data.interface.ts

export interface IData {
    id: number;
    name: string;
}</code></pre>
            <pre><code class="language-typescript">// app.component.ts

import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { DataService } from './services/data.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { IData } from './interfaces/data.interface';

@Component({
    selector: 'app-root',
    template: '&lt;div>{{ data$ | async | json }}&lt;/div>',
    standalone: true,
    imports: [AsyncPipe, JsonPipe],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    data$: Observable&lt;IData[]>;

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.data$ = this.dataService.getData().pipe(
            catchError(() => {
                alert('Не удалось загрузить данные');
                return of([]);
            })
        );
    }
}</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '13.10.2024',
};
