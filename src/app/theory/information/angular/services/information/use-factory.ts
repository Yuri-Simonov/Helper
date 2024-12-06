import { IInfo } from 'src/app/shared/interfaces';

export const USE_FACTORY: IInfo = {
    title: '<span class="variable">useFactory</span>',
    body: `<p>
                <span class="attention"
                    >Способ <code>useFactory</code> используется, когда в качестве зависимости регистрируется
                    функция</span
                >.
            </p>
            <p>
                <span class="attention"
                    >Данный способ сразу вызовет передаваемую функцию и запишет результат ее выполнения в свойство,
                    через которое она внедряется</span
                >.
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	providers: [
		{
			provide: TOKEN,
			useFactory: () => console.log('Какая-то логика внутри функции'),
		}
	],
})

export class AppComponent {
    constructor(@Inject(TOKEN) private token: string) {
        console.log('this.token', this.token); // Какая-то логика внутри функции
    }
}</code></pre>
            <p>
                Давайте посмотрим примеры посложнее, чем просто вывод сообщения в консоль, т.к. польза
                <code>useFactory</code> скорее заключается не в том, что мы можем регистрировать результат выполнения
                функции как зависимость, а в том, что
                <span class="attention">
                    мы можем наполнять эти функции различными условиями и уже исходя из них регистрировать те или иные
                    зависимости</span
                >.
            </p>
            <p>
                Допустим мы хотим исходя из условия внедрять те или иные данные. Для упрощения примера условие возьмем
                абстрактное. Например, если число будет больше, чем 0.5, то в свойство <code>token</code> будет
                записываться объект с соответствующим сообщением. Если меньше 0.5, то соответственно с другим.
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	providers: [
		{
			provide: TOKEN,
			useFactory: () => {
				if (Math.random() > 0.5) {
					return {
						message: 'Число больше 0.5',
					};
				}
				return {
					message: 'Число меньше 0.5',
				};
			}
		}
	]
})

export class AppComponent {
    constructor(@Inject(TOKEN) private token: string) {
        console.log('this.token', this.token);
    }
}</code></pre>
            <p>
                И если вывести свойство, через которое внедряется зависимость, то в консоли мы увидим одно из двух
                сообщений в зависимости от случайного числа.
            </p>
            <p>Также <code>useFactory</code> позволяет работать и с классами:</p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	providers: [
		{
			provide: TOKEN,
			useFactory: (http: HttpClient) => {
				if (Math.random() > 0.5) {
					return new RandomService();
				}
				return new DataService(http);
			},
			deps: [HttpClient],
		}
	]
})

export class AppComponent {
    constructor(@Inject(TOKEN) private token: string) {
        console.log('this.token', this.token);
    }
}</code></pre>
            <p>
                Допустим сервису <code>DataService</code> необходима другая зависимость, например,
                <code>HttpClient</code>:
            </p>
            <pre><code class="language-typescript">@Injectable()
export class DataService {
    constructor(private http: HttpClient) {}
}</code></pre>
            <p>
                В случаях, когда внутри <code>useFactory</code> используется функционал, зависящий от каких-либо других
                зависимостей (<code>new DataService(http)</code>), то их необходимо указывать в отдельном поле
                <code>deps</code>, значением которого выступает массив. И здесь через запятую перечисляются все
                необходимые зависимости для работы функционала внутри текущей функции.
            </p>
            <p>
                Сервису <code>DataService</code> необходима зависимость от модуля <code>HttpClient</code>, поэтому его
                мы и указываем в массиве <code>deps</code>.
            </p>
            <p>
                Далее необходимо данный модуль передать как параметр в функцию, присвоив ей свойство (в данном случае
                <code>http</code>). Здесь главное, чтобы тип свойства совпадал с классом зависимости, указанной в
                массиве <code>deps</code>. Так Angular понимает что с чем ему нужно связать.
            </p>
            <p>И дальше остается это свойство передать сервису <code>DataService</code> в качестве аргумента.</p>
            <p>
                В консоли браузера, опять же, в зависимости от случайного числа, будет выдаваться тот или иной
                результат.
            </p>`,
    selected: false,
    lastUpdate: '06.12.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/imUcdrYFTxs?t=713',
        },
    ],
};
