import { IInfo } from 'src/app/shared/interfaces';

export const CHANGE_DETECTION: IInfo = {
    title: 'Механизм <span class="variable">Change Detection</span>',
    body: `<p>
                Механизм <code>Change Detection</code> или как его еще называют "механизм отслеживания изменений" - это
                <span class="attention">
                    механизм, с помощью которого Angular проверяет, изменилось ли состояние нашего приложения и нужно ли
                    обновить DOM-дерево</span
                >.
            </p>
            <p>
                У данного механизма есть две стратегии, по которым он может работать в компоненте:
                <code>Default</code> или <code>OnPush</code>.
            </p>
            <p>
                В Angular для каждого компонента стратегия указывается в его декораторе в свойстве
                <code>changeDetection</code>. Оба варианта стратегии хранятся в перечислении
                <code>ChangeDetectionStrategy</code>. И после точки выбирается нужная стратегия:
            </p>
            <pre><code class="language-javascript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})</code></pre>
            <i class="subtitle">Стратегия Default</i>
            <p>
                Стратегия <code>Default</code> <span class="attention">используется по умолчанию</span> и ее явно в
                декораторе компонента указывать не нужно:
            </p>
            <pre><code class="language-javascript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})</code></pre>
            <p>
                <span class="attention"
                    >При данной стратегии механизм <code>Change Detection</code> будет проверять все компоненты каждый
                    раз, когда в любом из них будут изменяться данные или происходить какие-либо события в
                    DOM-дереве</span
                >.
            </p>
            <i class="subtitle">Стратегия OnPush</i>
            <p>
                <span class="attention"
                    >Стратегия <code>OnPush</code> используется для оптимизации количества проверок компонентов на
                    наличие изменений</span
                >.
            </p>
            <p>
                На реальных проектах данная стратегия используется во всех компонентах. Т.е., создали какой-то
                компонент, сразу изменили в нем стратегию с <code>Default</code> на <code>OnPush</code>:
            </p>
            <pre><code class="language-javascript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})</code></pre>
            <p>
                При данной стратегии механизм <code>Change Detection</code> будет запускаться только в следующих
                случаях:
            </p>
            <ul>
                <li>
                    <span class="attention"
                        >Поступили новые данные от родителя через декоратор <code>@Input()</code></span
                    >
                    - здесь речь идет про этап жизненного цикла
                    <code>OnChanges</code>, который запускается при инициализации компонента и при каждом дальнейшем
                    изменении входных свойств текущего компонента, которые попадают в него с помощью декоратора
                    <code>@Input()</code>. Тут следует помнить, что если вы передаете через <code>@Input()</code> объект
                    или массив, то его надо каждый раз создавать заново, т.к. иначе <code>OnChanges</code> будет
                    считать, что вы передаете все тот же объект или массив, т.к. ссылка не изменилась;
                </li>
                <li>
                    <span class="attention"
                        >Произошло событие DOM-дерева в шаблоне при условии, что у данного события есть обработчик</span
                    >
                    - например, произошел клик по кнопке и внутри компонента сработал метод-обработчик, который изменил
                    какие-то данные в шаблоне. Причем в случае браузерных событий, Angular расширяет стандартный метод
                    <code>addEventListener()</code>, добавляя после вызова оригинального обработчика события запуск
                    отслеживания изменений;
                </li>
                <li>
                    <span class="attention">Использование асинхронной пайпы (<code>async</code>)</span> - при изменении
                    асинхронных данных, они будут обновляться каждый раз при появлении новых значений;
                </li>
                <li><span class="attention">Использование сигналов</span>.</li>
            </ul>
            <i class="subtitle">Пример для декоратора @Input()</i>
            <p>В родительском компоненте создадим поток с помощью оператора <code>interval</code>:</p>
            <pre><code class="language-javascript">// app.component.ts

export class AppComponent {
    interval$ = interval(1000);
}</code></pre>
            <p>И с помощью асинхронной пайпы будем передавать значения потока в дочерний компонент:</p>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

@if (interval$ | async; as number) {
	&lt;app-child [number]="number">&lt;/app-child>
}</code></pre>
            <p>
                В дочернем компоненте, как обычно, обрабатываем входящие данные с помощью декоратора
                <code>@Input()</code>:
            </p>
            <pre><code class="language-javascript">// child.component.ts

export class ChildComponent {
    @Input() number: number;

	ngOnChanges() {
		console.log(this.number);
	}

	ngDoCheck() {
		console.log('ngDoCheck app-child');
	}
}</code></pre>
            <p>
                И в консоли каждую секунду будут появляться значение интервала и сообщение из метода
                <code>ngDoCheck</code>. А если мы попадаем в метод <code>ngDoCheck</code>, значит и механизм
                <code>Change Detection</code> проверил компонент на изменения.
            </p>
            <i class="subtitle">Пример для событий DOM-дерева</i>
            <p>Добавим в шаблон корневого компонента кнопку и повесим на нее простой обработчик клика:</p>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;button (click)="handleClick()">Click&lt;/button></code></pre>
            <p>В классе родительского компонента реализуем метод для обработки события клика:</p>
            <pre><code class="language-javascript">// child.component.ts

export class AppComponent {
	ngDoCheck() {
		console.log('ngDoCheck app-root');
	}

	handleClick() {
		console.log('Кнопка нажата!');
	}
}</code></pre>
            <p>
                После каждого нажатия на кнопку в консоли будут появляться сообщения из методов <code>ngDoCheck</code> и
                <code>handleClick</code>.
            </p>
            <i class="subtitle">Пример для асинхронной пайпы</i>
            <p>Вновь воспользуемся интервалом:</p>
            <pre><code class="language-javascript">// app.component.ts

export class AppComponent {
    interval$ = interval(1000);
}</code></pre>
            <p>И выведем в шаблоне данное свойство, добавив к нему асинхронную пайпу:</p>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;h1>{{ interval$ | async }}&lt;/h1></code></pre>
            <p>И на странице в браузере каждую секунду будут отображаться новые значения из потока.</p>
            <i class="subtitle">Пример для сигналов</i>
            <p>
                Создадим свойство и присвоим ему сигнал, значение которого можно изменять напрямую. Зададим ему значение
                <code>0</code>:
            </p>
            <pre><code class="language-javascript">// app.component.ts

export class AppComponent {
    signal = signal(0);
}</code></pre>
            <p>
                Далее в методе жизненного цикла <code>ngAfterViewInit</code> с помощью функции
                <code>setTimeout</code> спустя 3 секунды установим новое значение для сигнала равное <code>1</code>:
            </p>
            <pre><code class="language-javascript">// app.component.ts

export class AppComponent {
    signal = signal(0);

	ngAfterViewInit() {
        setTimeout(() => {
            this.sig.set(1);
        }, 3000);
    }
}</code></pre>
            <p>И т.к. наш сигнал - это обычная функция, следовательно, в шаблоне ее нужно просто вызвать:</p>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;h1>{{ signal() }}&lt;/h1></code></pre>
            <p>И спустя 3 секунды значение на странице браузера изменится с нуля на единицу.</p>`,
    selected: false,
    lastUpdate: '03.08.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/TP0PIFVQjJg',
        },
    ],
};
