import { IInfo } from 'src/app/shared/interfaces';

export const REQUEST_DATA: IInfo = {
    title: 'Запросы к серверу',
    body: `<p>
                В Angular за http-запросы отвечает модуль <code>HttpClient</code>. Чтобы воспользоваться его
                функционалом, его необходимо внедрить в сервис как зависимость:
            </p>
            <pre><code class="language-typescript">// data.service.ts
				
@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}
}</code></pre>
            <p>
                Но модуль <code>HttpClient</code> не будет работать, если не внедрить его в корень проекта. Делается в
                файле <code>app.config.ts</code> с помощью функции <code>provideHttpClient</code>:
            </p>
            <pre><code class="language-typescript">// app.config.ts

export const appConfig: ApplicationConfig = {
    providers: [
		..., // другие различные внедрения
        provideHttpClient(),
    ],
};</code></pre>
            <p>
                И теперь можно обращаться к серверу за информацией. Обратимся, например, к общедоступному API
                jsonplaceholder и получим информацию о пользователях:
            </p>
            <pre><code class="language-typescript">export class DataService {
    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
}</code></pre>
            <p>Данным сервисом можно воспользоваться, например, в компоненте:</p>
            <pre><code class="language-typescript">export class AppComponent {
    users: any;

    constructor(
        private dataService: DataService,
        private cdr: ChangeDetectorRef
    ) {
		/**
		 * Все методы модуля HttpClient возвращают Observable.
		 * Чтобы получить данные из потока, на него необходимо подписаться
		*/
        this.dataService.getUsers().subscribe((users) => {
            this.users = users;
			// если используется стратегия OnPush
            this.cdr.detectChanges();
        });
    }
}</code></pre>
            <p>И в шаблоне компонента можно просто вывести через интерполяцию данное значение:</p>
            <pre><code class="language-html">&#64;if (users) {
	&lt;ul>
		&#64;for (user of users; track $index) {
			&lt;li>{{ user.name }}&lt;/li>
		}
	&lt;/ul>
}</code></pre>

            <p>Т.к. все методы модуля <code>HttpClient</code> возвращают <code>Observable</code>, то пример выше можно улучшить за счет использования асинхронной пайпы, которая и предназначена для работы с потоками.</p>
			<p>Использование асинхронной пайпы, во-первых, позволяет писать меньше кода, а во-вторых, нам не нужно следить еще и за тем, чтобы отписываться от потоков по время уничтожения компонентов из DOM-дерева. Ведь как вы уже знаете, если не отписываться от потоков, это может привести к утечке памяти. А та же асинхронная пайпа будет это делать самостоятельно.</p>
			<p>Перепишем класс компонента на использование асинхронной пайпы:</p>
			<pre><code class="language-typescript">export class AppComponent {
    users$: Observable<any>;

    constructor(private dataService: DataService) {
        this.users$ = this.dataService.getUsers();
    }
}</code></pre>
<p>Также обратите внимание, что нам теперь не нужно вызывать механизм <code>Change Detection</code>, когда приходят данные с сервера. Асинхронная пайпа сделает это самостоятельно.</p>
<p>Напомню, что асинхронная пайпа относится к типу <code>impure</code>. Данный тип пайп вызывает механизм <code>Change Detection</code> на каждое изменение данных в связанных с ними свойствах.</p>
<p>И теперь остается лишь вывести данные в шаблоне компонента:</p>
<pre><code class="language-html">&#64;if (users$ | async; as users) {
	&lt;ul>
		&#64;for (user of users; track $index) {
			&lt;li>{{ user.name }}&lt;/li>
		}
	&lt;/ul>
}</code></pre>`,
    selected: false,
    lastUpdate: '04.10.2024',
    footerLinks: [
        {
            title: 'Запрос данных',
            path: 'https://youtu.be/oOrI3qm7tK8?t=239',
        },
        {
            title: 'Сервисы и AsyncPipe',
            path: 'https://youtu.be/oOrI3qm7tK8?t=340',
        },
    ],
};
