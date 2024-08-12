import { IInfo } from '@types';

export const DETACH_WITH_DETECT_CHANGES: IInfo = {
    title: 'Вызов метода <span class="variable">detectChanges</span> после вызова метода <span class="variable">detach</span>',
    body: `<p>
                Вызов метода <code>detach</code> отключает отслеживание изменений в текущем компоненте и во всех
                дочерних, даже если данные изменятся. Однако тут есть одно "но".
                <span class="attention">
                    Если вызвать метод
                    <code>detectChanges</code> в компоненте, где ранее был вызван метод <code>detach</code> и после
                    этого произошли какие-то изменения, то они отобразятся на странице, т.е., механизм
                    <code>Change Detection</code> их отследит</span
                >.
            </p>
            <pre><code class="language-typescript">// app.component.ts

export class AppComponent {
    title: string = 'Hello, world!';

    constructor(private cdr: ChangeDetectorRef) {
		this.cdr.detach();
	}

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
            <p>
                В примере выше в конструкторе класса компонента отключается механизм <code>Change Detection</code>. Но
                если нажать на кнопку, то в обработчике клика вызовется метод <code>detectChanges</code> и данные
                обновятся.
            </p>
            <p>
                Тут подвох в следующем. Когда запускается механизм <code>Change Detection</code>, то он идет от корня к
                дочерним компонентам. После вызова метода <code>detach</code> мы как бы закрываем доступ к данному
                компоненту и его дочерним компонентам извне. А метод <code>detectChanges</code> не идет от корня к
                дочерним компонентам. Там, где он вызывается, образуется как бы локальный корень для механизма
                <code>Change Detection</code> и от него уже идет проверка текущего компонента и его дочерних
                компонентов.
            </p>
            <p>
                Т.к. в примере рассмотрен корневой компонент, то локальный корневой компонент совпал с фактическим.
                Т.е., механизм <code>Change Detection</code> запустился локально только для корневого компонента.
            </p>`,
    selected: false,
    lastUpdate: '10.08.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/USb74U5AK0E?t=525',
        },
    ],
};
