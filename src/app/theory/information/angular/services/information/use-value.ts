import { IInfo } from 'src/app/shared/interfaces';

export const USE_VALUE: IInfo = {
    title: 'Способ <span class="variable">useValue</span>',
    body: `<p>
                <span class="attention"
                    >Способ <code>useValue</code> позволяет указать фиксированное значение для регистрируемой
                    зависимости</span
                >. Часто применяется для глобальных настроек, которые не изменяются.
            </p>
            <p>
                Запись для способа <code>useValue</code> похожа способ <code>useClass</code>. Только в качестве ключа
                используется токен, а в качестве значения может быть уже что угодно. Более подробно про токены
                рассказано в спойлере "<i>Класс <code>InjectionToken</code></i
                >".
            </p>
            <p>
                Ниже представлены различные примеры того, что можно внедрить как зависимость через
                <code>useValue</code>:
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	providers: [
		// строка
		{ provide: TOKEN, useValue: 'Какие-то строковые данные' },
		// число
		{ provide: TOKEN, useValue: 1 },
		// булево
		{ provide: TOKEN, useValue: true },
		// объект
		{ provide: TOKEN, useValue: { name: 'Вася' } },
		// массив
		{ provide: TOKEN, useValue: [1, 2, 3] },
		// функция
		{
			provide: TOKEN,
			useValue: () => console.log('Какая-то логика внутри функции'),
		},
		// и т.д.
	],
})</code></pre>
            <p>Оставим пока что только пример со строкой:</p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	providers: [
		{ provide: TOKEN, useValue: 'Какие-то строковые данные' },
	],
})</code></pre>
            <p>
                На текущий момент мы лишь зарегистрировали зависимости в провайдерах. Чтобы получить доступ к
                содержимому по указанным ключам, т.е., внедрить их как зависимость, необходимо воспользоваться
                декоратором, который называется <code>Inject</code>. Более подробно о нем рассказано в спойлере "<i
                    >Декоратор <code>@Inject</code></i
                >".
            </p>
            <pre><code class="language-typescript">export class AppComponent {
    constructor(@Inject(TOKEN) private token: string) {
        console.log('this.token', this.token); // Какие-то строковые данные
    }
}</code></pre>
            <p>И в консоли мы увидим соответствующее сообщение: "<i>this.token Какие-то строковые данные</i>".</p>
            <p>В вариантах примеров <code>useValue</code> выше есть пример с функцией:</p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	providers: [
		{
			provide: TOKEN,
			useValue: () => console.log('Какая-то логика внутри функции'),
		},
	],
})</code></pre>
            <p>
                Если через <code>useValue</code> зарегистрировать функцию и вывести ее в консоль, то в ней мы увидим
                следующее:
            </p>
            <pre><code class="language-html">this.token () => console.log("&#92;u041A&#92;u0430&#92;u043A&#92;u0430&#92;u044F-&#92;...")</code></pre>
            <p>Иначе говоря, <span class="attention">функция просто преобразуется в строку</span>.</p>
            <p>
                <span class="attention"
                    >Когда в качестве зависимости необходимо получать результат выполнения функции, необходимо
                    использовать способ</span
                >
                <code>useFactory</code>.
            </p>`,
    selected: false,
    lastUpdate: '05.12.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/imUcdrYFTxs?t=233',
        },
    ],
};
