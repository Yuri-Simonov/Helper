import { IInfo } from 'src/app/shared/interfaces';

export const CHANGE_DETECTOR_REF: IInfo = {
    title: 'Класс <span class="variable">ChangeDetectorRef</span>. Управление механизмом <span class="variable">Change Detection</span>',
    body: `            <p>
                <span class="attention"
                    >Класс <code>ChangeDetectorRef</code> используется для ручного управления механизмом
                    <code>Change Detection</code></span
                >.
            </p>
            <p>
                Данный класс уже встроен в Angular и, чтобы получить к нему доступ в компоненте, достаточно в
                конструкторе внедрить на него зависимость:
            </p>
            <pre><code class="language-typescript">export class AppComponent {
    constructor(private cdr: ChangeDetectorRef) {}
}</code></pre>
            <p>
                Т.к. данный класс имеет довольно-таки длинное название, поэтому на рабочих проектах часто его сокращают
                до трех букв "cdr".
            </p>
            <p>У данного класса есть следующий набор методов:</p>
            <ul>
                <li>
                    <span class="attention">detach</span> - после вызова данного метода механизм
                    <code>Change Detection</code> больше не будет проверять текущий компонент и все его дочерние
                    компоненты на изменения, даже если данные в них изменятся;
                </li>
                <li>
                    <span class="attention">reattach</span> - отменяет действие метода detach, т.е., восстанавливает
                    отслеживание изменений для текущего компонента и его дочерних компонентов;
                </li>
                <li>
                    <span class="attention">markForCheck</span> - помечает текущий компонент и всех его родителей вплоть
                    до корневого компонента как измененные. Это заставит механизм
                    <code>Change Detection</code> проверить все эти компоненты в следующем цикле отслеживания изменений;
                </li>
                <li>
                    <span class="attention">detectChanges</span> - запускает процесс отслеживания изменений для текущего
                    компонента и всех его потомков.
                </li>
            </ul>
            <p>Ниже представлены примеры для каждого из методов.</p>
            <i class="subtitle">detach</i>
            <p>Для упрощения примера в нем подразумевается использование стратегии <code>Default</code>.</p>
            <pre><code class="language-typescript">// app.component.ts

export class AppComponent {
    title: string = 'Hello, world!';

    constructor(private cdr: ChangeDetectorRef) {}

    ngAfterViewInit() {
		this.cdr.detach();
        this.title = 'Привет, мир!';
    }
}</code></pre>
            <pre><code class="language-html">&lt;!-- app.component.html -->

&lt;h1>Заголовок: {{ title }}&lt;/h1></code></pre>
            <p>
                В данном примере на странице в браузере отобразится заголовок "Hello, world!". Значение заголовка на
                "Привет, мир!" не изменится, т.к. перед этим действием отключается отслеживание изменений в текущем
                компоненте с помощью метода <code>detach</code>.
            </p>
            <i class="subtitle">reattach</i>
            <p>Для упрощения примера в нем подразумевается использование стратегии <code>Default</code>.</p>
            <pre><code class="language-typescript">// app.component.ts

export class AppComponent {
    title: string = 'Hello, world!';

    constructor(private cdr: ChangeDetectorRef) {}

    ngAfterViewInit() {
		this.cdr.detach();
        this.title = 'Привет, мир!';

        setTimeout(() => {
            this.cdr.reattach();
            this.title = 'Вторая попытка!';
        }, 1000);
    }
}</code></pre>
            <pre><code class="language-html">&lt;!-- app.component.html -->

&lt;h1>Заголовок: {{ title }}&lt;/h1></code></pre>
            <p>
                Изначальное поведение здесь будет как и в прошлом примере. Но после срабатывания функции
                <code>setTimeout</code> вызывается метод <code>reattach</code>, который вновь включает отслеживание
                изменений в текущем компоненте и его дочерних компонентах. Поэтому следующее за них изменение значения
                заголовка уже будет отображаться в браузере.
            </p>
            <i class="subtitle">markForCheck</i>
            <p>Данный пример подразумевается использование стратегии <code>OnPush</code>.</p>
            <pre><code class="language-typescript">// app.component.ts

export class AppComponent {
    title: string = 'Hello, world!';

    constructor(private cdr: ChangeDetectorRef) {}

    ngAfterViewInit() {
        this.title = 'Привет, мир!';

        setTimeout(() => {
            this.cdr.markForCheck();
        }, 1000);
    }
}</code></pre>
            <pre><code class="language-html">&lt;!-- app.component.html -->

&lt;h1>Заголовок: {{ title }}&lt;/h1></code></pre>
            <p>
                В примере выше изменения значения заголовка отобразятся лишь спустя секунду, когда метод
                <code>markForCheck</code> будет вызван. Он пометит текущий компонент как измененный. И т.к. функция
                <code>setTimeout</code> вызывает механизм <code>Change Detection</code>, то при этой проверке он уже
                увидит, что компонент помечен, как измененный, поэтому проверит его на изменения и, как следствие, на
                странице браузера обновится значение заголовка.
            </p>
            <i class="subtitle">detectChanges</i>
            <p>Данный пример подразумевается использование стратегии <code>OnPush</code>.</p>
            <pre><code class="language-typescript">// app.component.ts

export class AppComponent {
    title: string = 'Hello, world!';

    constructor(private cdr: ChangeDetectorRef) {}

    ngAfterViewInit() {
        this.title = 'Привет, мир!';
    }

	handleClick() { 
		this.cdr.detectChanges();
	}
}</code></pre>
            <pre><code class="language-html">&lt;!-- app.component.html -->

&lt;h1>Заголовок: {{ title }}&lt;/h1>
&lt;button (click)="handleClick()">Обновить данные&lt;/button></code></pre>
            <p>В примере выше изменения значения заголовка отобразятся при нажатии на кнопку.</p>`,
    selected: false,
    lastUpdate: '08.08.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/USb74U5AK0E',
        },
    ],
};
