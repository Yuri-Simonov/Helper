import { IInfo } from '@types';

export const CREATING_CUSTOM_ATTRIBUTE_DIRECTIVES: IInfo = {
    title: 'Создание пользовательских атрибутивных директив',
    body: `<p>
                <span class="attention"
                    >Создание самой простой пользовательской атрибутивной директивы ограничивается лишь классом, на
                    который ссылается декоратор <code>@Directive&#40;&#41;</code></span
                >. И если нам нужно как-то обратиться к ней в шаблоне компонента, то стоит задать ей поле
                <code>selector</code> в конфигурационном объекте.
            </p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {}</code></pre>
            <p>
                После создания минимально-необходимого кода для работы директивы, ее можно добавлять к элементам
                разметки:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента --> 
&lt;p someAttr>Какой-то текст&lt;/p></code></pre>
            <p>
                Получать доступ к элементу разметки, на котором висит пользовательская директива, можно как минимум
                двумя способами.
            </p>
			<i class="subtitle">Первый способ - ElementRef</i>
            <p>
                Первый способ - с помощью
                <span class="attention">специального ангуляровского класса <code>ElementRef</code></span
                >. И с помощью его свойства <code>nativeElement</code> можно получить доступ к элементу разметки по
                ссылке и изменять его свойства:
            </p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	constructor (private element: ElementRef) {
		element.nativeElement.style.fontSize = '20px';
	}
}</code></pre>
            <p>
                Данный способ имеет 1 весомый недостаток, о котором также сказано
                <a target="_blank" href="https://angular.io/api/core/ElementRef">в официальной документации</a>,
                <span class="attention"> он делает уязвимым приложение к XSS атакам</span>.
            </p>
			<i class="subtitle">Второй способ - @HostBinding&#40;&#41;</i>
            <p>
                Второй способ - с помощью <span class="attention">декоратора <code>@HostBinding&#40;&#41;</code></span
                >. Этот способ считается более правильным и не несет никаких рисков безопасности для приложения.
            </p>
            <p>
                В примере ниже представлены примеры того, как изменяются инлайновые стили, атрибуты и CSS-классы. Именно
                <span class="attention">эти 3 варианта позволяет изменять данный декоратор</span>:
            </p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	// с помощью префикса "style." изменяются инлайновые стили
	@HostBinding('style.color') color: string = 'lime';
	// с помощью префикса "attr." изменяются атрибуты
	@HostBinding('attr.color') attr: string = 'lime';
	// с помощью префикса "class." изменяются CSS-классы
	@HostBinding('class.color') class: boolean = true;
}</code></pre>

            <p>В итоге в браузере элемент разметки будет выглядеть следующим образом:</p>
            <pre><code class="language-html">&lt;!-- разметка в браузере --> 
&lt;p someAttr style="color:lime" color="lime" class="color">Какой-то текст&lt;/p></code></pre>
            <p>
                Разберем также обратный сценарий, когда на элементе присутствуют инлайновые стили, атрибут и CSS-класс:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента --> 
&lt;p someAttr style="color:lime" color="lime" class="color">Какой-то текст&lt;/p></code></pre>
            <p>
                Для того, чтобы убрать инлайновые стили или атрибут, нужно в качестве их значения указать
                <code>null</code>, или <code>undefined</code>, или <span class="attention">не указывать значение вовсе</span>. В последнем случае надо
                также указать хотя бы тип <code>any</code>, чтобы не было ошибки типизации. А чтобы убрать CSS-класс,
                достаточно булевое значение изменить на <code>false</code>:
            </p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	@HostBinding('style.color') color: string = null; // или undefined
	@HostBinding('attr.color') attr: any; // если не указывать значение вовсе
	@HostBinding('class.color') class: boolean = false;
}</code></pre>
<i class="subtitle">Передача данных внутрь директивы</i>
            <p>
                Выше рассмотрены примеры, когда директива создается без получения каких-либо данных внутрь. Для того, чтобы в директиву передать какие-то данные, нужно поставить знак равно и после него
                указать необходимые данные:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента --> 

&lt;!-- статические данные для директивы --> 
&lt;p someAttr="20">Какой-то текст&lt;/p>

&lt;!-- динамические данные для директивы --> 
&lt;p [someAttr]="someVariable">Какой-то текст&lt;/p></code></pre>
            <p>
                И внутри директивы с помощью декоратора <code>@Input&#40;&#41;</code> нужно обработать входящие данные:
            </p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	@Input('someAttr') someAttrProps: any;
}</code></pre>
<i class="subtitle">Декоратор @HostListener&#40;&#41;</i>
            <p>
                Также внутри директив можно изменять свойства элемента разметки при срабатывании определенных событий.
                Делается это с помощью декоратора <code>@HostListener&#40;&#41;</code>, т.к. он
                <span class="attention"> используется для отслеживания различных событий DOM-дерева</span>, например
                события клика, скролла и т.д. Также
                <span class="attention">
                    данный декоратор предоставляет метод-обработчик, который запускается при возникновении указанного в
                    нем события</span
                >.
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента --> 
&lt;p someAttr>Какой-то текст&lt;/p></code></pre>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	@HostBinding('style.color') color: string = "green";

	@HostListener('mouseenter') handleMouseenter() {
		this.setNewFontSize("red"); // при наведении будет устанавливаться красный цвет текста
	}	

	@HostListener('mouseleave') handleMouseleave() {
		this.setNewFontSize("green"); // при наведении будет устанавливаться зеленый цвет текста
	}	
	
	setNewColor(newColor: string): void {
		this.color = newColor;
	}
}</code></pre>
<i class="subtitle">Дополнительные параметры декоратора @HostListener&#40;&#41;</i>
            <p>
                Декоратор <code>@HostListener&#40;&#41;</code> вторым параметром может также принимать массив
                дополнительный аргументов, в котором указывается специальный объект <code>$event</code> или его
                свойства:
            </p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	@HostListener('click', ['$event', '$event.target']) handleMouseleave(event: any, eventTarget: any) {
		console.log('event', event); // здесь получим все данные объекта $event
		console.log('eventTarget', eventTarget); // а здесь лишь его свойство $event.target
	}	
}</code></pre>
<i class="subtitle">Глобальные объекты</i>
            <p>
                Декоратор <code>@HostListener&#40;&#41;</code> также позволяет отлавливать события глобальных объектов
                <code>document:</code>, <code>window:</code> и <code>body:</code>. Знак "<code>:</code>" не просто так
                стоит на конце. Это такая форма записи.
            </p>
            <p>В примере ниже событие клика будет отлавливаться внутри глобального объекта <code>document:</code>:</p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	@HostListener('document:click') handleMouseleave() {
		console.log('document click!');
	}	
}</code></pre>
			<i class="subtitle">Пользовательские события</i>
            <p>Внутри пользовательских директив доступно создание пользовательских событий:</p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	@Output() colorChange = new EventEmitter();

	@HostListener('click') handleClick(data: any) {
		this.getRandomColor();
	}

	getRandomColor() {
		const newColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
		this.colorChange.emit(newColor);
	}
}</code></pre>
            <p>
                Эти пользовательские события обрабатываются точно так же, что и пользовательские события дочерних
                компонентов:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента --> 
&lt;p someAttr (colorChange)="setColor($event)">Какой-то текст&lt;/p></code></pre>
            <pre><code class="language-typescript">// класс компонента
@Directive({
	selector: '[someAttr]',
})
export class SomeComponent {
	setColor(newColor: string) {
		this.colorProperty = newColor;
	}
}</code></pre>`,
    selected: false,
    lastUpdate: '22.02.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/qHfHV5Ej4pg',
        },
    ],
};
