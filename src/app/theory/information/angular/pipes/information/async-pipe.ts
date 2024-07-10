import { IInfo } from '@types';

export const ASYNC_PIPE: IInfo = {
    title: 'Асинхронная пайпа',
    body: `<p>
                <span class="attention">Асинхронная пайпа автоматически подписывается</span> на
                <code>Observable</code> или <code>Promise</code> и позволяет отображать их текущие значения в шаблоне
                компонента. Помимо автоматической подписки, она также
                <span class="attention">автоматически отписывается</span> от <code>Observable</code> или
                <code>Promise</code>, когда происходит удаление компонента из DOM-дерева, т.е., когда у компонента
                вызывается метод жизненного цикла <code>ngOnDestroy</code>. Асинхронная пайпа освобождает нас от
                дополнительных рутинных действий, благодаря чему мы можем писать меньше кода.
            </p>
            <p>Пример использования асинхронной пайпы:</p>
            <pre><code class="language-typescript">// app.component.ts

export class AppComponent {
	// свойство для Observable
    exampleObservable$!: Observable&lt;any>;
	// свойство для Promise
    examplePromise$!: Promise&lt;any>;

    ngOnInit() {
		// пример для Observable
        this.exampleObservable$ = interval(1000).pipe(
            map((value) => value * 10)
        );

		// пример для Promise
        this.examplePromise$ = new Promise((resolve) => {
            setTimeout(() => resolve('Promise успешно выполнился'), 3000);
        });
    }
}</code></pre>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;!-- пример для Observable --&gt;
&lt;h1>Текущее значение: {{ exampleObservable$ | async }}&lt;/h1>

&lt;!-- пример для Promise --&gt;
&lt;h1>{{ examplePromise$ | async }}&lt;/h1>
			</code></pre>
            <p>
                Также обратите внимание на то, что в классе компонента мы не подписываемся на
                <code>Observable</code> или <code>Promise</code>. Асинхронная пайпа делает это самостоятельно, т.к. она
                используется со свойством, которому мы присвоили данный конструктор события в методе
                <code>ngOnInit</code>. Но если необходимо как-то изменить данные, перед тем, как отображать их в шаблоне
                компонента, то метод <code>pipe</code> все так же вызывается в классе компонента.
            </p>
            <p>
                Также с помощью асинхронной пайпы можно передавать асинхронные данные от родительского компонента к
                дочернему:
            </p>
            <pre><code class="language-typescript">// app.component.ts

export class AppComponent {
	// свойство для Observable
    exampleObservable$!: Observable&lt;any>;
	// свойство для Promise
    examplePromise$!: Promise&lt;any>;

    ngOnInit() {
		// пример для Observable
        this.exampleObservable$ = interval(1000).pipe(
            map((value) => value * 10)
        );

		// пример для Promise
        this.examplePromise$ = new Promise((resolve) => {
            setTimeout(() => resolve('Promise успешно выполнился'), 3000);
        });
    }
}</code></pre>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;app-child
    [observableValue]="(exampleObservable$ | async).currentValue"
>&lt;/app-child>
&lt;app-child [promiseValue]="examplePromise$ | async">&lt;/app-child>
			</code></pre>
            <p>
                Только в дочернем компоненте мы получаем уже не <code>Observable</code> или <code>Promise</code>, а
                именно их данные:
            </p>
            <pre><code class="language-typescript">// child.component.ts

export class ChildComponent {
    @Input() observableValue: number;
    @Input() promiseValue: string;
}</code></pre>`,
    selected: false,
    lastUpdate: '10.07.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/FYu84AqyQW8',
        },
    ],
};
