import { IInfo } from 'src/app/shared/interfaces';

export const FROM_EVENT: IInfo = {
    title: '<span class="variable">fromEvent</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>fromEvent</code> используется для создания <code>Observable</code> из событий,
                    происходящих в DOM-дереве</span
                >, таких как клик мыши, нажатие клавиш и т.д.
            </p>
            <img src="assets/img/angular/rxjs/fromEvent.png" alt="оператор fromEvent" />
            <p>
                У данного оператора есть 2 обязательных параметра (также есть еще 2 опциональных параметра, но они
                используются крайне редко):
            </p>
            <ul>
                <li>
                    <span class="attention">target</span> - задает элемент DOM-дерева или
                    глобальный объект (например, <code>document</code>), у которого необходимо отслеживать происходящие
                    в нем события;
                </li>
                <li>
                    <span class="attention">eventName</span> - задает конкретный тип
                    прослушиваемого события. Строковый тип данных.
                </li>
            </ul>
            <p>Пример с кликом по глобальному объекту <code>document</code>:</p>
            <pre><code class='language-typescript'>export class ForExamplesComponent {
    ngOnInit() {
        const clicks = fromEvent(document, 'click');
        clicks.subscribe(console.log);
    }
}</code></pre>
            <p>В консоли мы увидим объект с типом <code>PointerEvent</code>:</p>
            <pre><code class='language-typescript'>PointerEvent {...}</code></pre>
            <p>
                В примере выше, внутри "<code>...</code>" будет содержаться вся информация о произошедшем на странице
                событии клика.
            </p>
            <p>Пример с кликом по найденному элементу DOM-дерева с помощью метода <code>querySelector</code>:</p>
            <pre><code class='language-typescript'>export class ForExamplesComponent {
    ngOnInit() {
        const body = document.querySelector('body');

        if (body) {
            const clicks = fromEvent(body, 'click');
            clicks.subscribe(console.log);
        }
    }
}</code></pre>
            <p>
                В консоли мы также увидим объект с типом <code>PointerEvent</code>, но данные в нем будут уже другие, т.к.
                координаты клика, с высокой долей вероятности, будут отличаться:
            </p>
            <pre><code class='language-typescript'>PointerEvent {...}</code></pre>
			<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>`,
    selected: false,
    lastUpdate: '30.04.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Видеообъяснение',
            path: 'https://youtu.be/A-3UoqDqkyU?t=196',
        },
        {
            title: 'Анимация работы оператора',
            path: 'https://rxjstutorial.com/docs/creation-operators/fromEvent/',
        },
    ],
};
