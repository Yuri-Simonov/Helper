import { IInfo } from 'src/app/shared/interfaces';

export const LET: IInfo = {
    title: 'Директива <span class="variable">@let</span>',
    body: `<p>
                <span class="attention">
                    Директива <code>@let</code> используется в шаблоне компонента и позволяет создавать в нем локальные
                    переменные</span
                >.
            </p>
            <p>
                Принцип ее работы похож на объявление переменных с помощью ключевого слова <code>let</code> в
                JavaScript:
            </p>
            <ul>
                <li>Переменные можно переопределять внутри шаблона;</li>
                <li>Переменными можно пользоваться только после того, как они были объявлены;</li>
                <li>Переменные имеют блочную область видимости</li>
            </ul>
            <i class="subtitle">Пример с вложенностью объектов</i>
            <p>Данная директива может быть полезна, когда есть большая вложенность внутри объекта с данными:</p>
            <pre><code class="language-typescript">export class AppComponent {
    data = {
        one: {
            two: {
                three: {
                    title: 'Hello world',
                },
            },
        },
    };
}</code></pre>
            <p>
                И чтобы получить значения свойства <code>title</code>, можно один раз воспользоваться директивой
                <code>@let</code> в шаблоне компонента, создав локальную переменную. И далее ее использовать в нужных
                местах неограниченное количество раз:
            </p>
            <pre><code class="language-html">&#64;let title = data.one.two.three.title;

&lt;h1>{{ title }}&lt;/h1></code></pre>
            <i class="subtitle">Пример с асинхронной пайпой</i>
            <p>
                Можно также использовать директиву <code>@let</code> в шаблоне компонента для работы с асинхронными
                данными, у которых указана асинхронная пайпа:
            </p>
            <pre><code class="language-typescript">export class AppComponent {
    asyncData$ = of({
        one: {
            two: {
                three: {
                    title: 'Hello world',
                },
            },
        },
    });
}</code></pre>
            <p>В шаблоне компонента тогда код будет выглядеть следующим образом:</p>
            <pre><code class="language-html">&#64;let asyncTitle = (asyncData$ | async)?.one?.two?.three?.title;

&lt;h1>{{ asyncTitle }}&lt;/h1></code></pre>
            <i class="subtitle">Блочная область видимости</i>
            <p>
                Если создать локальную переменную с помощью директивы <code>@let</code>, то она будет иметь блочную
                область видимости.
            </p>
            <p>
                В примере ниже локальная переменная <code>title</code> создается внутри структурной директивы
                <code>if</code>:
            </p>
            <pre><code class="language-html">&#64;if(true) {
	&#64;let title = data.one.two.three.title;
	
	&lt;h1>{{ title }}&lt;/h1>
}

// будет ошибка
&lt;h1>{{ title }}&lt;/h1></code></pre>
            <p>
                И если мы захотим обратиться к локальной переменной <code>title</code> вне структурной директивы
                <code>if</code>, то будет ошибка.
            </p>`,
    selected: false,
    lastUpdate: '24.11.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/5p6IyZPEk1A?t=141',
        },
    ],
};
