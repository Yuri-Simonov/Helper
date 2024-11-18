import { IInfo } from 'src/app/shared/interfaces';

export const CREATING_CUSTOM_STRUCTURAL_DIRECTIVES: IInfo = {
    title: 'Создание пользовательских структурных директив',
    body: `<i class="subtitle">Создание структурной директивы</i>
            <p>Для создания кастомной структурной директивы необходимо получить ссылки на 2 элемента:</p>
            <ul>
                <li>
                    <span class="attention">Элемент <code>ng-template</code></span
                    >, т.к. звездочка под капотом оборачивает в него элемент разметки, на котором висит структурная
                    директива;
                </li>
                <li>
                    <span class="attention">Контейнер</span> - место в шаблоне компонента, где будет отображаться
                    элемент <code>ng-template</code>.
                </li>
            </ul>
            <pre><code class="language-typescript">// класс директивы
&#64;Directive({
	selector: '[appSomeDirective]',
})
export class SomeDirective {
	constructor(
		private template: TemplateRef&lt;any>,
		private viewContainer: ViewContainerRef,
	) {}
}</code></pre>
            <p>
                Контейнер имеет тип <code>ViewContainerRef</code>. Это
                <span class="attention">
                    специальный ангуляровский класс, который позволяет управлять элементами представления
                </span>
                (<code>view</code>), например, добавлять их, удалять или как-то изменять.
            </p>
            <p>
                Допустим в шаблоне компонента есть элемент разметки, на котором висит наша пока еще пустая структурная
                директива:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;p *appCustomDirective="toggler">
	Параграф с кастомной структурной директивой
&lt;/p></code></pre>
            <p>
                Если оставить код как он есть сейчас, то параграф не будет отображаться на странице в браузере, т.к.
                символ звездочки, используемый для обозначения структурных директив - это лишь синтаксический сахар,
                который в итоге оборачивает элемент разметки в элемент <code>ng-template</code>. А он в свою очередь без
                явного указания места отрисовки не отображаются на странице. Поэтому это вполне нормальное поведение.
            </p>
            <p>
                Чтобы отобразить содержимое структурной директивы, необходимо воспользоваться методом
                <code>createEmbeddedView</code>, который доступен свойству <code>viewContainer</code>.
                <span class="attention">
                    Метод
                    <code>createEmbeddedView</code> отрисовывает на странице содержимое, переданного в него элемента
                    <code>ng-template</code>, который указывается первым параметром</span
                >.
            </p>
            <pre><code class="language-typescript">// класс директивы
&#64;Directive({
	selector: '[appSomeDirective]',
})
export class SomeDirective {
	constructor(
		private template: TemplateRef&lt;any>,
		private viewContainer: ViewContainerRef,
	) {}

	ngOnInit() {
		this.viewContainer.createEmbeddedView(this.template);
    }
}</code></pre>
            <i class="subtitle">Реализация функционала ngIf</i>
            <p>Реализовать самый простой функционал встроенной директивы <code>*ngIf</code> довольно-таки просто.</p>
            <p>Для ее примера нам понадобится булевое свойство в классе компонента:</p>
            <pre><code class="language-typescript">// класс компонента
toggler: boolean = true;</code></pre>
            <p>
                А также кнопка, по клику на которую будет изменяться булевое значение. Это же значение будем передавать
                директиве:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;button (click)="toggler = !toggler">Кнопка&lt;/button>

&lt;p *appCustomDirective="toggler">
	Параграф с кастомной структурной директивой
&lt;/p></code></pre>
            <p>
                Сделать логику удаления/добавления элемента разметки в DOM-дерево можно, например, с помощью тернарного
                оператора. Отрисовку содержимого элемента
                <code>ng-template</code> в контейнере с помощью метода <code>createEmbeddedView</code> уже разобрали
                выше. А вот
                <span class="attention">
                    очистка содержимого контейнера осуществляется с помощью метода <code>clear</code></span
                >, который так же доступен свойству <code>template</code>:
            </p>
            <pre><code class="language-typescript">// класс директивы
&#64;Directive({
	selector: '[appSomeDirective]',
})
export class SomeDirective {
	&#64;Input() appCustomDirective!: any; // принимаем входящие данные

	constructor(
		private template: TemplateRef&lt;any>,
		private viewContainer: ViewContainerRef,
	) {}

	ngOnChanges() {
        this.appCustomDirective
            ? this.viewContainer.createEmbeddedView(this.template)
            : this.viewContainer.clear();
    }
}</code></pre>
            <p>
                Теперь при клике на кнопку, в зависимости от текущего значения свойства <code>toggler</code>, параграф
                либо будет отображаться на странице в браузере, либо нет.
            </p>
            <i class="subtitle">Передача контекста</i>
            <p>
                В классе директивы содержимое элемента <code>ng-template</code> отрисовывается с помощью метода
                <code>createEmbeddedView</code>. Но в нем также можно задавать различный контекст.
                <span class="attention">Он указывается вторым параметром и представляет собой простой объект</span>.
            </p>
            <p>
                Например, при добавлении содержимого элемента <code>ng-template</code> в DOM-дерево, будем также
                передавать ключ <code>time</code>, значением которого будет текущее время:
            </p>
            <pre><code class="language-typescript">// класс директивы
&#64;Directive({
	selector: '[appSomeDirective]',
})
export class SomeDirective {
	&#64;Input() appCustomDirective!: any;

	time!: Date;

	constructor(
		private template: TemplateRef&lt;any>,
		private viewContainer: ViewContainerRef,
	) {}

	ngOnChanges() {
        this.time = new Date();
        this.appCustomDirective
            ? this.viewContainer.createEmbeddedView(this.template, {
                  time: this.time, // одно из значений контекста
              })
            : this.viewContainer.clear();
    }
}</code></pre>
            <p>
                Сама же передача контекста элементу <code>ng-template</code> в случае со структурными директивами будет
                выглядеть следующим образом:
                <span class="attention">
                    после основного значения ставим точку с запятой и с помощью ключевого слова
                    <code>let</code> объявляем новую локальную переменную, которая будет видна лишь внутри контейнера, и
                    присваиваем ей значение ключа из передаваемого объекта контекста</span
                >:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;button (click)="toggler = !toggler">Кнопка&lt;/button>

&lt;p *appCustomDirective="toggler; let time = time">
	&lt;span>Параграф с директивой&lt;/span>
    &lt;br />
	&lt;!-- пайп date для удобства -->
    &lt;span>Data: {{ time | date: "hh:mm:ss" }}&lt;/span>
&lt;/p></code></pre>
            <p>
                Теперь каждый раз, когда содержимое элемента <code>ng-template</code> будет появляться на странице в
                браузере, внутрь него так же каждый раз будет передаваться новое (текущее) время.
            </p>
            <i class="subtitle">Передача других данных, отличных от названия директивы</i>
            <p>
                Бывает также необходимость передавать внутрь директивы через декоратор <code>Input</code> более одного
                свойства. Делается это следующим образом: в шаблоне, на элементе, где используется структурная
                директива,
                <span class="attention"
                    >ставится точка с запятой и указывается свойство, которое нужно передать в директиву. И после
                    двоеточия указывается значение для данного свойства</span
                >:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;button (click)="toggler = !toggler">Кнопка&lt;/button>

&lt;p *appCustomDirective="toggler; let time = time; hello: 'world'">
	&lt;span>Параграф с директивой&lt;/span>
    &lt;br />
	&lt;!-- пайп date для удобства -->
    &lt;span>Data: {{ time | date: "hh:mm:ss" }}&lt;/span>
&lt;/p></code></pre>
            <p>
                Т.е.,
                <span class="attention">
                    если нужно что-то передать внутрь директивы, то данные указываются либо сразу после названия
                    директивы, либо через двоеточие. Если же нужно наоборот передать контекст в шаблон, то создание
                    переменных происходит через ключевое слово <code>let</code></span
                >.
            </p>
            <p>
                Внутри директивы данное свойство так же обрабатывается с помощью декоратора <code>Input</code>, но
                <span class="attention"> перед его названием добавляется название селектора директивы</span>:
            </p>
            <pre><code class="language-typescript">// класс директивы
&#64;Directive({
	selector: '[appSomeDirective]',
})
export class SomeDirective {
	&#64;Input() appCustomDirective!: any;
	&#64;Input() appCustomDirectiveHello!: string; // приняли данные нового свойства

	time!: Date;

	constructor(
		private template: TemplateRef&lt;any>,
		private viewContainer: ViewContainerRef,
	) {}

	ngOnChanges() {
		// вывод данных в консоль ради примера
		console.log('hello', this.appCustomDirectiveHello);

        this.time = new Date();
        this.appCustomDirective
            ? this.viewContainer.createEmbeddedView(this.template, {
                  time: this.time,
              })
            : this.viewContainer.clear();
    }
}</code></pre>
            <p>
                Например, передаваемое из шаблона свойство <code>hello</code> будет называться
                <code>appCustomDirectiveHello</code>, где <code>appCustomDirective</code> - это имя селектора директивы,
                а <code>Hello</code> - это имя передаваемого извне свойства, только с большой буквы.
            </p>`,
    selected: false,
    lastUpdate: '08.03.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/U16l0-Aoy5Y',
        },
    ],
};
