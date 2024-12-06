import { IInfo } from 'src/app/shared/interfaces';

export const MULTI: IInfo = {
    title: 'Свойство <span class="variable">multi</span>',
    body: `<p>
                <span class="attention"
                    >Свойство <code>multi</code> позволяет по одному и тому же ключу регистрировать несколько
                    зависимостей</span
                >.
            </p>
            <p>В примере ниже по ключу <code>TOKEN</code> регистрируются сразу 3 зависимости:</p>
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
	],
})

export class AppComponent {
    constructor(@Inject(TOKEN) private token: string) {
        console.log(this.token);
    }
}</code></pre>
            <p>
                Если оставить текущий код как есть, то в консоли мы увидим последнее значение зарегистрированной
                зависимости <code>true</code>. Это значит, что
                <span class="attention"
                    >при использовании одного и того же ключа для разных регистрируемых зависимостей, будет происходить
                    перезапись его значения на более новое. А старое будет стираться</span
                >.
            </p>
            <p>
                Если каждой регистрируемой зависимости по одному и тому же ключу добавить свойство
                <code>multi</code> со значением <code>true</code>, тогда зависимости будут складываться в массив
                зависимостей и будут доступны по ключу <code>TOKEN</code>:
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	providers: [
		// строка
		{ provide: TOKEN, useValue: 'Какие-то строковые данные', multi: true },
		// число
		{ provide: TOKEN, useValue: 1, multi: true },
		// булево
		{ provide: TOKEN, useValue: true, multi: true },
	],
})

export class AppComponent {
    constructor(@Inject(TOKEN) private token: string) {
        console.log(this.token);
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-html">[
	'Какие-то строковые данные',
	1,
	true	
]</code></pre>
            <p>
                У данного свойства есть ограничение.
                <span class="attention">
                    Оно указывается либо у всех зависимостей по указанному ключу в рамках конкретной сущности, либо не
                    указывается ни у кого вовсе</span
                >.
            </p>
            <p>
                Данное свойство довольно-таки часто используется на практике. Например, чтобы внедрять различные
                настройки для компонентов и в зависимости от них уже что-то отображать в компоненте или нет. И т.д.
            </p>`,
    selected: false,
    lastUpdate: '06.12.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/imUcdrYFTxs?t=833',
        },
    ],
};
