import { IInfo } from 'src/app/shared/interfaces';

export const ATTRIBUTE: IInfo = {
    id: 'attribute',
    title: 'Декоратор <span class="variable">@Attribute</span>',
    body: `<p>
                В Angular данные от родителя к дочернему компоненту можно передавать как статически, так и динамически:
            </p>
            <pre><code class="language-html">&lt;!-- статическая передача данных --&gt;
&lt;app-child name="Вася">&lt;/app-child>

&lt;!-- динамическая передача данных --&gt;
&lt;app-child [name]="name">&lt;/app-child></code></pre>
            <p>
                Оба этих варианта обрабатываются внутри дочернего компонента с помощью декоратора <code>@Input()</code>:
            </p>
            <pre><code class="language-typescript">export class ChildComponent {
    @Input() name: string;

	ngOnChanges() {
		console.log(this.name);
	}
}</code></pre>
            <p>
                И всякий раз, когда механизм <code>ChangeDetection</code> будет проверять компонент на наличие
                изменений, он также будет проверять входящие свойства. Но когда в дочерний компонент передаются
                статические данные, проверять их каждый раз нет необходимости, т.к. после инициализации компонента они
                не изменятся на протяжении всего жизненного цикла компонента. Следовательно, появляются ненужные
                проверки данных на изменения.
            </p>
            <p>
                В случаях статической передачи данных в дочерний компонент, количество ненужных проверок можно уменьшить
                с помощью декоратора <code>@Attribute()</code>.
                <span class="attention"
                    >Данный декоратор позволяет передавать статические значения атрибутов дочерним компонентам напрямую
                    через их конструктор, а не через декоратор <code>@Input()</code></span
                >.
            </p>
            <pre><code class="language-typescript">export class ChildComponent {
    constructor(@Attribute('name') public name: string) {}
}</code></pre>
            <p>
                Соответственно, доступ к таким значениям можно уже получить внутри конструктора, а не в методе
                жизненного цикла <code>ngOnChanges</code>:
            </p>
            <pre><code class="language-typescript">export class ChildComponent {
    constructor(@Attribute('name') public name: string) {
		console.log(this.name); // Вася
	}
}</code></pre>
            <p>Или альтернативный вариант через функцию <code>inject</code> и класс <code>HostAttributeToken</code>:</p>
            <pre><code class="language-typescript">export class ChildComponent {
    name: string | null = inject(new HostAttributeToken('name'), {
        optional: true,
    });
}</code></pre>
            <p class="attention">
                Данный декоратор работает только со статическими данными. При попытке передать через декоратор
                <code>@Attribute()</code> динамический параметр, Angular выдаст ошибку.
            </p>`,
    selected: false,
    lastUpdate: '15.09.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/6b_KklZmQ_w',
        },
    ],
};
