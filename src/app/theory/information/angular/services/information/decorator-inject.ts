import { IInfo } from 'src/app/shared/interfaces';

export const DECORATOR_INJECT: IInfo = {
    title: 'Декоратор <span class="variable">@Inject</span>',
    body: `<p>
                <span class="attention"
                    >Декоратор <code>@Inject</code> используется для внедрения зависимостей по ключам (токенам) в
                    конструкторе класса</span
                >.
            </p>
            <p>
                Допустим, в качестве примера в компоненте через способ <code>useValue</code> регистрируется зависимость:
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	providers: [
		// регистрируем зависимость с помощью способа useValue
		{ provide: TOKEN, useValue: 'Какие-то строковые данные' },
	],
})</code></pre>
            <p>Чтобы получить к ней доступ с помощью декоратора <code>@Inject</code>, запись будет следующей:</p>
            <pre><code class="language-typescript">export class AppComponent {
    constructor(@Inject(TOKEN) private token: string) {}
}</code></pre>
            <p>
                Сначала указываем, что мы хотим внедрить зависимость с помощью декоратора <code>@Inject</code>. Далее в
                параметрах данного декоратора указываем ключ, по которому хотим внедрить зависимость
                (<code>TOKEN</code>). Затем указываем свойство, через которое необходимо получить доступ к содержимому
                внедряемой зависимости (<code>token</code>). И в самом конце указываем ее тип, чтобы TypeScript понимал
                с каким типом данных мы будем работать (<code>string</code>).
            </p>
            <p>И теперь можно работать с данной зависимостью. Например, можно вывести ее в консоль:</p>
            <pre><code class="language-typescript">export class AppComponent {
    constructor(@Inject(TOKEN) private token: string) {
        console.log('this.token', this.token); // Какие-то строковые данные
    }
}</code></pre>
            <p>С помощью данного декоратора классы тоже можно внедрять как зависимость:</p>
            <pre><code class="language-typescript">export class AppComponent {
    constructor(
		private dataService1: DataService,
    	@Inject(DataService) private dataService2: string
	) {}
}</code></pre>
            <p>
                Если вывести свойства <code>dataService1</code> и <code>dataService2</code> в консоль, то результат
                будет одинаковый. Иначе говоря, оба варианта записи делают одно и то же.
            </p>
            <p>
                На практике декоратор <code>@Inject</code> используется, когда необходимо в конструкторе класса внедрить
                какие-то данные, регистрируемые с помощью <code>useValue</code>. Когда через конструктор внедряется
                класс, используется классическая запись через конструктор, т.к. это выглядит более лаконично.
            </p>
            <p>
                Можно вообще не использовать ни декоратор <code>@Inject</code>, ни конструктор класса для внедрения
                зависимостей. Это возможно благодаря функции <code>inject</code>. Более подробно о ней рассказано в
                спойлере "<i>Функция <code>inject</code></i
                >".
            </p>`,
    selected: false,
    lastUpdate: '06.12.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/imUcdrYFTxs?t=391',
        },
    ],
};
