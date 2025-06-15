import { IInfo } from 'src/app/shared/interfaces';

export const FORM_CONTROL: IInfo = {
    title: 'Класс <span class="variable">FormControl</span>',
    body: `<p>Допустим у нас есть инпут в шаблоне компонента:</p>
            <pre><code class="language-html">&lt;input type="text" /></code></pre>
            <p>
                Чтобы его сделать элементом реактивной формы, в классе компонента необходимо создать новое свойство и
                присвоить ему новый экземпляр класса <code>FormControl</code>:
            </p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	imports: [ReactiveFormsModule],
})
export class AppComponent {
	inputField = new FormControl('Стартовое значение');
}</code></pre>
            <p>
                <code>FormControl</code> — это ангуляровский класс, который
                <span class="attention">представляет одно поле формы с его значением, валидаторами и состоянием</span>.
                Это своего рода аналог директивы <code>ngModel</code> из шаблонных форм, но имеет больше возможностей.
            </p>
            <p>
                Внутри класса <code>FormControl</code> первым параметром задается значение по умолчанию для поля
                реактивной формы.
            </p>
            <p>
                Чтобы связать это свойство с полем формы в шаблоне компонента, необходимо на элемент формы повесить
                директиву <code>formControl</code> и в качестве ее значения указать данное свойство:
            </p>
            <pre><code class="language-html">&lt;input type="text" [formControl]="inputField" /></code></pre>
            <p>И такого кода уже будет достаточно для работы поля.</p>
            <p>
                Если нужно что-то отобразить в разметке в зависимости от состояния поля формы, то просто обращаемся к
                только что созданному свойству из класса компонента и выбираем нужное состояние:
            </p>
            <pre><code class="language-html">&lt;input type="text" [formControl]="inputField" />
&lt;p>Текущее значение: {{ inputField.value }}&lt;/p></code></pre>
            <i class="subtitle">Методы класса FormControl</i>
            <p>Класс <code>FormControl</code> имеет набор различных методов.</p>
            <p>Например, с помощью метода <code>setValue</code> можно установить новое значение в инпуте:</p>
            <pre><code class="language-html">&lt;input type="text" [formControl]="inputField" />
&lt;button (click)="inputField.setValue('Новое значение')">Обновить значение&lt;/button></code></pre>
            <p>А с помощью метода <code>reset</code> можно сбросить поле к заданному значению:</p>
            <pre><code class="language-html">&lt;input type="text" [formControl]="inputField" />
&lt;button (click)="inputField.reset()">Сбросить значение&lt;/button></code></pre>
            <p>
                На первый взгляд может показаться, что они делают одно и то же, т.к. формально
                <code>setValue</code> тоже может сбросить значение:
            </p>
            <pre><code class="language-html">&lt;input type="text" [formControl]="inputField" />
&lt;button (click)="inputField.setValue('')">Обновить значение&lt;/button></code></pre>
            <p>Но все же между этими двумя методами есть существенная разница:</p>
            <ul>
                <li>
                    Метод <code>setValue</code>
                    <span class="attention">
                        устанавливает новое значение, не сбрасывая при этом состояния поля или формы</span
                    >;
                </li>
                <li>
                    Метод <code>reset</code>
                    <span class="attention">сбрасывает как значение, так и состояние поля или формы</span>.
                </li>
            </ul>
            <p>Имейте это ввиду.</p>
            <i class="subtitle">Параметры класса FormControl</i>
            <p>Когда мы создаем поля формы с помощью класса FormControl, в него можно передать 3 параметра:</p>
            <ul>
                <li>Первый параметр задает стартовое значение поля;</li>
                <li>Второй параметр добавляет синхронные валидаторы на поле формы;</li>
                <li>И третий параметр добавляет уже асинхронные валидаторы.</li>
            </ul>
            <p>С первым параметром все должно быть предельно понятно. Просто задаем стартовое значение:</p>
            <pre><code class="language-typescript">export class AppComponent {
	inputField = new FormControl('Стартовое значение');
}</code></pre>
            <p>Второй и третий параметры задаются через запятую:</p>
            <pre><code class="language-typescript">export class AppComponent {
	inputField = new FormControl('Значение по умолчанию', Validators.required, someAsyncValidator);
}</code></pre>
            <p>
                В Angular уже есть встроенные синхронные валидаторы. Для их использования необходимо обратиться к
                другому ангуляровскому классу <code>Validators</code> и выбрать необходимый валидатор из предложенных.
                Если необходимо добавить на поле несколько валидаторов, тогда они оборачиваются в массив и валидаторы
                перечисляются как элементы этого массива:
            </p>
            <pre><code class="language-typescript">export class AppComponent {
	inputField = new FormControl('Значение по умолчанию', [Validators.required, Validators.minLength(3)], someAsyncValidator);
}</code></pre>
            <p>
                В примере выше третьим параметром указан произвольный кастомный асинхронный валидатор
                <code>someAsyncValidator</code>, т.к. в Angular не заложены встроенные асинхронные валидаторы. Тут
                используются только кастомные. Они рассмотрены в другом спойлере.
            </p>
            <p>
                Для синхронных валидаторов так же можно использовать кастомные валидаторы. Они рассмотрены в другом
                спойлере.
            </p>
            <p>
                Можно использовать и альтернативный вариант задания валидаторов. Для этого внутри класса
                <code>FormControl</code> вторым параметром можно указать объект, в котором будут доступны опциональные
                свойства <code>validators</code> и <code>asyncValidators</code>. И в них уже указываются нужные
                валидаторы:
            </p>
            <pre><code class="language-typescript">export class AppComponent {
	inputField = new FormControl('Значение по умолчанию', {
		validators: [Validators.minLength(3), Validators.required],
		asyncValidators: someAsyncValidator,
	});
}</code></pre>`,
    selected: false,
    lastUpdate: '15.06.2025',
    footerLinks: [
        {
            path: 'https://youtu.be/CAfqkH9ACXk?t=45',
        },
    ],
};
