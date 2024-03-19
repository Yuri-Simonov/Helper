import { IQuestion } from '@types';

export const decoratorQuestions: IQuestion[] = [
    {
        title: 'Декораторы в Angular',
        body: `<p>
		Декораторы - это
		<span class="attention"
			>функции, которые расширяют набор полей и методов класса, к
			которому они привязаны.</span
		>
	</p>
	<pre><code class="language-typescript">@Component({
	selector: 'app-some-component',
	styleUrls: './some.component.scss',
	templateUrl: './some.component.html',
})

export class SomeComponent {}</code></pre>
	<p>
		В примере выше класс <code>SomeComponent</code> расширяется
		набором методов и полей от декоратора <code>@Component()</code>,
		которые переданы внутри конфигурационного объекта.
	</p>`,
        selected: false,
        lastUpdate: '14.09.2023',
    },
    {
        title: 'Свойство <span class="variable">bootstrap</span> декоратора <span class="variable">@NgModule()</span>',
        body: `<p>
            В свойстве <code>bootstrap</code> указывается компонент, который
            <span class="attention">
                будет использоваться в качестве основного при загрузке модуля.
            </span>
        </p>
        <p>
            Причем только корневой модуль может определять свойство
            <code>bootstrap</code> (а также импортировать модуль, отвечающий за работу приложения в браузере - 
            <code>BrowserModule</code>).
        </p>`,
        selected: false,
        lastUpdate: '14.09.2023',
    },
    {
        title: 'Разница между декораторами <span class="variable">@Input()</span> и <span class="variable">@Output()</span>',
        body: `<p>
            Дочерние компоненты Angular могут как принимать данные от родителя, так и
            отдавать их. За это как раз и отвечают декораторы
            <code>@Input()</code> и <code>@Output()</code>, где:
        </p>
        <ul>
            <li>
                <code>@Input() </code> -
                <span class="attention"> принимает входящие данные </span>
                (пропсы) от родительского компонента;
				<pre><code class="language-typescript">export class ChildComponent {
  	&#64;Input() name: string;
}</code></pre>
            </li>
            <li>
                <code> @Output() </code> -
                <span class="attention">
                    отправляет родителю данные при срабатывании какого-то пользовательского события
                </span> (с помощью экземпляра класса <code>EventEmitter</code> и его метода <code>emit</code>).
				<pre><code class="language-typescript">export class ChildComponent {
  	&#64;Output() nameChange = new EventEmitter();

	changeName() {
		this.nameChange.emit();
	}
}</code></pre>
            </li>
        </ul>`,
        selected: false,
        lastUpdate: '27.02.2024',
    },
    {
        title: 'Передача объектов через декоратор <span class="variable">@Input()</span>',
        body: `<p>
            <span class="attention"
                >В JavaScript объекты передаются по ссылке</span
            >. Поэтому, если сначала передать объект через декоратор
            <code>@Input()</code> в дочерний компонент, а потом поменять в этом
            объекте какое-то значение и попытаться внось передать тот же объект
            с измененным значением в дочерний компонент, то в дочернем
            компоненте вы не увидите никаких изменений.
        </p>
        <p>
            Чтобы решить данную проблему, необходимо каждый раз передавать в
            дочерний компонент новый объект. Ниже приведен один из вариантов
            решения через <code>spread-оператор</code>.
        </p>
        <pre><code class="language-typescript">this.someObject = { ...this.someObject, name: 'новое имя' }</code></pre>`,
        selected: false,
        lastUpdate: '14.09.2023',
    },
    {
        title: 'Дополнительные настройки декоратора <span class="variable">@Input()</span>',
        body: `<i class="subtitle">Обязательное свойство</i>
            <p>
                По умолчанию входные данные декоратора <code>@Input&#40;&#41;</code> являются необязательными, поэтому
                ошибка проверки не возникает, если входные данные не предоставлены. При желании можно пометить
                передаваемое свойство на вход как обязательное:
            </p>
            <pre><code class="language-typescript">export class ChildComponent {
	&#64;Input({ required: true }) name: string;
}</code></pre>
            <p>
                Теперь текущему компоненту, где бы его не использовали, обязательно придется передавать свойство
                <code>name</code>, иначе Angular будет выдавать ошибку.
            </p>
            <i class="subtitle">Псевдонимы</i>
            <p>
                В декораторе <code>@Input&#40;&#41;</code> можно использовать сокращенную и полную (расширенную) записи:
            </p>
            <pre><code class="language-typescript">&#64;Input() name: string; // сокращенная запись
&#64;Input('name') userName: string; // полная запись
</code></pre>
            <p>
                Расширенная запись используется, когда необходимо переименовать входящее свойство, чтобы было удобно
                использовать его в текущем компоненте. Например, в компоненте уже используется свойство
                <code>name</code> и оно же по какой-то причине приходит извне. С помощью расширенной записи это и
                исправляется. Название входящего свойства указывается внутри круглых скобок, а его псевдоним после них.
            </p>
            <p>
                Но если в круглых скобках декоратора уже есть какие-то еще настройки, то псевдоним уже указывается как
                одна из этих настроек:
            </p>
            <pre><code class="language-typescript">export class ChildComponent {
	&#64;Input({ alias: "userName", required: true }) name: string;
}</code></pre>
            <i class="subtitle">Преобразование данных</i>
            <p>
                Поступающие данные извне через декоратор <code>@Input&#40;&#41;</code> могут быть так или иначе
                преобразованы перед тем, как присвоятся свойству компонента. Например, необходимо входные данные всегда
                переводить в верхний регистр:
            </p>
            <pre><code class="language-typescript">export class ChildComponent {
	&#64;Input({
		transform: (value: string) => value.toUpperCase()
	})
	name: string;
}</code></pre>
            <p>При использовании данного функционала следует учитывать, что:</p>
            <ul>
                <li>
                    Функция преобразования должна быть чистой, т.е., при одинаковых значениях аргументов она всегда
                    возвращает одинаковые значения и не должна иметь наблюдаемых побочных эффектов;
                </li>
                <li>Функция преобразования не должна содержать внутри тяжелых вычислений;</li>
                <li>
                    Функции преобразования не могут быть заданы условно, но при необходимости можно использовать
                    логические операторы внутри них.
                </li>
            </ul>
            <i class="subtitle">Преобразование булевого типа данных</i>
            <p>
                Например, иногда нам может потребоваться создать логическое входное свойство, что-то вроде
                переключателя:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон дочернего компонента -->
&lt;button [disabled]="disabled">{{ name }}&lt;/button></code></pre>
            <pre><code class="language-typescript">// класс дочернего компонента
export class ChildComponent {
	&#64;Input() disabled: boolean;
}</code></pre>
            <p>
                Но проблема в том, что для установки этого флага нам нужно использовать входное выражение (с помощью
                <code>[]</code>) в родительском компоненте:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child [disabled]="true">&lt;/app-child></code></pre>
            <p>
                Да, это работает. Но, что, если мы хотим упросить это дело и просто указывать атрибут, когда нам нужен
                один результат, и не указывать его, когда нужен другой, противоположный первому?
            </p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child disabled>&lt;/app-child></code></pre>
            <p>Этого можно добиться, применив преобразование <code>booleanAttribute</code>:</p>
            <pre><code class="language-typescript">// класс дочернего компонента
export class ChildComponent {
	&#64;Input({ transform: booleanAttribute }) disabled: boolean;
}</code></pre>
            <p>
                Теперь, чтобы в свойство <code>disabled</code> попало значение <code>true</code>, достаточно его просто
                указать на компоненте как атрибут тега (см. пример ниже). Если этого не сделать, значением свойства
                <code>disabled</code> будет <code>false</code>.
            </p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child disabled>&lt;/app-child></code></pre>
            <i class="subtitle">Преобразование числового типа данных</i>
            <p>Преобразование <code>numberAttribute</code> преобразует входящий тип данных в числовой:</p>
            <pre><code class="language-typescript">// класс дочернего компонента
export class ChildComponent {
	&#64;Input({ transform: numberAttribute }) age: string;
}</code></pre>
            <p>Имея это преобразование, можно установить свойство <code>age</code> следующим образом:</p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child age="16">&lt;/app-child></code></pre>
            <p>
                И теперь любые данные, которые передаются через свойство <code>age</code>, будут автоматически
                преобразовываться в число или <code>NaN</code>, если преобразование невозможно.
            </p>
            <p>Конечно, можно обойтись и без преобразования. Тогда пример выше выглядел бы следующим образом:</p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child [age]="16">&lt;/app-child></code></pre>`,
        selected: false,
        lastUpdate: '27.02.2024',
    },
    {
        title: 'Свойство <span class="variable">exportAs</span> декоратора <span class="variable">@Directive()</span>',
        body: `<p>
                Свойство <code>exportAs</code> декоратроа <code>@Directive&#40;&#41;</code>
                <span class="attention">
                    позволяет задавать имя, которое можно использовать в шаблоне компонента для присвоения заданной
                    директивы (или компонента) шаблонной переменной.
                </span>
            </p>
            <pre><code class="language-typescript">// класс директивы
&#64;Directive({
	selector: '[appCustomDirective]',
	exportAs: 'custom'
})
class CustomDirective {
	getMessage() {
        console.log('Меня вызвали!')
    }
}
</code></pre>
            <pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;p appCustomDirective #example="custom">&lt;/p>
&lt;button (click)="example.getMessage()">&lt;/button>
</code></pre>
            <p>
                В примере выше у кнопки есть слушатель события клика, который при срабатывании будет вызывать метод
                <code>getMessage</code> из директивы <code>appCustomDirective</code>, даже не смотря на то, что на
                кнопке она не висит. Связь осуществляется засчет свойства <code>exportAs</code> и шаблонной переменной
                <code>example</code>.
            </p>
            <p>
                Выше был рассмотрен пример, когда через шаблонную переменную передается директива.
                <span class="attention">
                    С декоратором
                    <code>@Component&#40;&#41;</code> свойство <code>exportAs</code> работает точно так же</span
                >.
            </p>
            <i class="subtitle">Когда может пригодится свойство exportAs?</i>
            <p>
                Например, когда в директиве или компоненте заложен какой-то функционал, и в зависимости от него
                необходимо в шаблоне делать какие-то визуальные изменения или менять структуру DOM-дерева.
            </p>
            <p>
                Также свойство <code>exportAs</code> может быть использовано для получения доступа к директивам или
                компонентам в шаблоне, где нет большой необходимости использовать декоратор
                <code>@ViewChild&#40;&#41;</code>.
            </p>`,
        selected: false,
        lastUpdate: '25.02.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/7W-EMTHV8dQ',
            },
        ],
    },
    {
        title: 'Декоратор <span class="variable">@ViewChild()</span>',
        body: `<p>
                <span class="attention"
                    >Декоратор <code>@ViewChild&#40;&#41;</code> позволяет в классе компонента получать доступ к
                    содержимому шаблона того же компонента, в котором он используются</span
                >.
            </p>
            <p>Он имеет следующий синтаксис:</p>
            <pre><code class="language-typescript">@ViewChild('selector') propertyName: dataType;</code></pre>
            <p>
                В примере ниже в классе родительского компонента предоставляется доступ к элементу разметки из шаблона по указанному
                селектору в декораторе
                <code>@ViewChild&#40;&#41;</code>. В данном случае это шаблонная переменная <code>paragraph</code>.
                Важно еще отметить, что декоратор <code>@ViewChild&#40;&#41;</code>
                <span class="attention">
                    находит первое совпадение с указанным в нем селектором и на этом дальнейший поиск совпадений по
                    селектору в шаблоне прекращается</span
                >.
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;p #paragraph>Простой параграф&lt;/p></code></pre>
<pre><code class="language-typescript">// класс компонента
@ViewChild('paragraph') paragraph: ElementRef<HTMLParagraphElement>;</code></pre>

            <p>
                В качестве селектора в основном используют следующие варианты (есть и другие, но они используются
                гораздо реже):
            </p>
            <ul>
                <li>
                    <span class="attention">Шаблонные переменные</span> - поиск в шаблоне будет осуществляться по
                    шаблонным переменным;
                </li>
                <li>
                    <span class="attention">TemplateRef</span> - поиск в шаблоне будет осуществляться по элементам
                    <code>ng-template</code>;
                </li>
                <li>
                    <span class="attention">Название класса компонента или директивы</span> - поиск в шаблоне будет
                    осуществляться по названию класса компонента или директивы.
                </li>
            </ul>
            <p>Ниже представлены примеры для каждого из этих случаев:</p>
            <pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;p #paragraph>Простой параграф&lt;/p> (1)

&lt;ng-template #template>Параграф внутри элемента ng-template&lt;/ng-template> (2)
&lt;ng-template>Параграф внутри элемента ng-template&lt;/ng-template> (2*)

&lt;app-child #component>&lt;/app-child> (3)
&lt;app-child>&lt;/app-child> (3*)</code></pre>
            <pre><code class="language-typescript">// класс компонента
@ViewChild('paragraph') paragraph: ElementRef<HTMLParagraphElement>; (1)

@ViewChild('template') template: TemplateRef<HTMLParagraphElement>; (2)
@ViewChild(TemplateRef) template: TemplateRef<HTMLParagraphElement>; (2*)

@ViewChild('component') component: ChildComponent; (3)
@ViewChild(ChildComponent) component: ChildComponent; (3*)</code></pre>
            <p>
                В примерах выше со звёздочкой показано как использовать декоратор
                <code>@ViewChild&#40;&#41;</code> без использования шаблонных переменных в разметке.
            </p>
            <p>Можно так же указывать и мультиселекторы, делается это через запятую в формате строки:</p>
			<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;app-child>&lt;/app-child>
&lt;p #paragraph>Простой параграф&lt;/p></code></pre>
			<pre><code class="language-typescript">// класс компонента
@ViewChild('paragraph, ChildComponent') paragraph: ElementRef&lt;HTMLParagraphElement | ChildComponent>;</code></pre>
            <p>
                В примере выше под условие селектора попадают оба элемента разметки, но т.к. дочерний компонент в
                разметке стоит раньше параграфа, поэтому именно его данные декоратор
                <code>@ViewChild&#40;&#41;</code> запишет в свойство <code>paragraph</code>.
            </p>`,
        selected: false,
        lastUpdate: '14.01.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/R3kexfhgU4Q?t=60',
            },
        ],
    },
    {
        title: 'Параметр <span class="variable">static</span> декоратора <span class="variable">@ViewChild()</span>',
        body: `<p>
                У декоратора <code>@ViewChild&#40;&#41;</code> есть также и дополнительные параметры. Одним из них
                является булевый параметр <code>static</code>. По умолчанию он имеет значение <code>false</code>. Это
                означает, что доступ к шаблону компонента декоратор <code>@ViewChild&#40;&#41;</code> получает после
                того, как было инициализировано представление компонента. Поэтому данные и появляются начиная с метода
                <code>ngAfterViewInit</code>.
            </p>
            <pre><code class="language-typescript">// Обе записи равносильны
@ViewChild('paragraph') paragraph: ElementRef&lt;HTMLParagraphElement>;
@ViewChild('paragraph', { static: false }) paragraph: ElementRef&lt;HTMLParagraphElement>;</code></pre>
            <p>
                Это сценарий работы директивы <code>@ViewChild&#40;&#41;</code> по умолчанию. Но его можно изменить,
                установив значение параметра <code>static</code> в значение <code>true</code>.
            </p>
            <pre><code class="language-typescript">@ViewChild('paragraph', { static: true }) paragraph: ElementRef&lt;HTMLParagraphElement>;</code></pre>
            <p>
                В этом случае декоратор <code>@ViewChild&#40;&#41;</code> получает доступ к шаблону компонента еще до
                того, как он прошел все проверки и был полностью инициализирован. Такой вариант использования декоратора
                может быть полезно в случаях, когда нужно получить доступ к элементам DOM-дерева или данным дочернего
                компонента до того, как он будет полностью инициализирован.
            </p>
            <p>
                Тут также важно, чтобы на таком элементе не висела структурная директива
                <code>@if</code> (<code>*if</code>) и не изменялось в дальнейшем содержимое этого элемента. Декоратор
                <code>@ViewChild&#40;&#41;</code> не увидит изменения. Тут нужны уже различные дополнительные решения
                для такого сценария работы приложения.
            </p>
            <p>
                То есть, иначе говоря, когда параметр <code>static</code> имеет значение <code>true</code>, это влияет
                на то, в какой момент жизненного цикла мы получаем данные в свойство, которое использует декоратор
                <code>@ViewChild&#40;&#41;</code> с этим параметром. При этом значении данные будут доступны уже в
                методе <code>ngOnInit</code>.
            </p>
            <p>
                Но это не является хорошей практикой. Все же
                <span class="attention"
                    >рекомендуется позволять Angular самому управлять жизненными циклами всех компонентов</span
                >
                и получать доступ к их информации в соответствующие этапы жизненного цикла. Использование параметра
                <code>static</code> со значением <code>true</code> следует рассматривать как обходное решение для
                конкретных проблем, а не как общую практику.
            </p>`,
        selected: false,
        lastUpdate: '14.01.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/R3kexfhgU4Q?t=555',
            },
        ],
    },
    {
        title: 'Декоратор <span class="variable">@ViewChildren()</span>',
        body: `<p>
                <span class="attention"
                    >Декоратор <code>@ViewChildren&#40;&#41;</code> позволяет в классе компонента получать доступ к
                    содержимому шаблона того же компонента, в котором он используются</span
                >.
            </p>
            <p>Он имеет следующий синтаксис:</p>
			<pre><code class="language-typescript">@ViewChildren('selector') propertyName: QueryList&lt;dataType>;</code></pre>
            <p>
                В отличие от декоратора <code>@ViewChild&#40;&#41;</code>, который находит первое совпадение по
                селектору и прекращает дальнейший поиск, декоратор <code>@ViewChildren&#40;&#41;</code>
                <span class="attention"
                    >будет искать все совпадения с указанным в нем селектором и складывать их в объект
                    <code>QueryList</code></span
                >.
            </p>
            <p>
                В примере ниже в классе компонента предоставляется доступ к элементам разметки из шаблона по указанному
                селектору в декораторе
                <code>@ViewChildren&#40;&#41;</code>. В данном случае это элементы с шаблонной переменной
                <code>paragraph</code>.
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;p #paragraph>Простой параграф&lt;/p>
&lt;p #paragraph>Еще один простой параграф&lt;/p></code></pre>
            <pre><code class="language-typescript">// класс компонента
@ViewChildren('paragraph') paragraph: QueryList&lt;ElementRef&lt;HTMLParagraphElement>>;</code></pre>
            <p>
                В качестве селектора в основном используют следующие варианты (есть и другие, но они используются
                гораздо реже):
            </p>
            <ul>
                <li>
                    <span class="attention">Шаблонные переменные</span> - поиск в шаблоне будет осуществляться по
                    шаблонным переменным;
                </li>
                <li>
                    <span class="attention">TemplateRef</span> - поиск в шаблоне будет осуществляться по элементам
                    <code>ng-template</code>;
                </li>
                <li>
                    <span class="attention">Название класса компонента или директивы</span> - поиск в шаблоне будет
                    осуществляться по компонентам или директивам.
                </li>
            </ul>
            <p>Ниже представлены примеры для каждого из этих случаев:</p>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;p #paragraph>Простой параграф&lt;/p> (1)

&lt;ng-template #template>Параграф внутри элемента ng-template&lt;/ng-template> (2)
&lt;ng-template>Параграф внутри элемента ng-template&lt;/ng-template> (2*)

&lt;app-child #component>&lt;/app-child> (3)
&lt;app-child>&lt;/app-child> (3*)</code></pre>
<pre><code class="language-typescript">// класс компонента
@ViewChildren('paragraph') paragraph: QueryList&lt;ElementRef&lt;HTMLParagraphElement>>; (1)

@ViewChildren('template') template: QueryList&lt;TemplateRef&lt;HTMLParagraphElement>>; (2)
@ViewChildren(TemplateRef) template: QueryList&lt;TemplateRef&lt;HTMLParagraphElement>>; (2*)

@ViewChildren('component') component: QueryList&lt;ChildComponent>; (3)
@ViewChildren(ChildComponent) component: QueryList&lt;ChildComponent>; (3*)

Немного пояснения по коду выше:
(1) - найдется лишь один параграф
(2) - найдется лишь элемент ng-template, у которого есть шаблонная переменная template
(2*) - найдутся оба элемента ng-template
(3) - найдется лишь компонент app-child, у которого есть шаблонная переменная component
(3*) - найдутся оба компонента
</code></pre>
            <p>
                В примерах выше со звёздочкой показано как использовать декоратор
                <code>@ViewChildren&#40;&#41;</code> без использования шаблонных переменных в разметке.
            </p>
            <p>Можно так же указывать и мультиселекторы, делается это через запятую в формате строки:</p>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;app-child>&lt;/app-child>
&lt;p #paragraph>Простой параграф&lt;/p></code></pre>
<pre><code class="language-typescript">// класс компонента
@ViewChildren('paragraph, ChildComponent') paragraph: ElementRef&lt;HTMLParagraphElement | ChildComponent>;</code></pre>
            <p>
                В примере выше под условие селектора попадают оба элемента разметки, поэтому декоратор
                <code>@ViewChildren&#40;&#41;</code> добавит их оба в свойство <code>paragraph</code>.
            </p>
            <i class="subtitle">Класс QueryList</i>
            <p>
                <code>QueryList</code> - это ангуляровский класс, который
                <span class="attention"
                    >является неизменяемым списком элементов, то есть, доступен только для получения информации</span
                >.
            </p>
            <p>
                Его нужно указывать в качестве типа для свойства, которое указано после декоратора
                <code>@ViewChildren&#40;&#41;</code>. Причем у него необходимо обязательно указывать дженерик,
                сообщающий TypeScript, с какими данными он должен работать.
            </p>
            <p>
                Если у элемента указать тип данных <code>QueryList</code>, то это будет объект с определенным набором
                свойств, в котором из общедоступных свойств нет массива со списком элементов, которые в него попали. Но
                у класса <code>QueryList</code> помимо свойств есть также и различные методы, по наименованию и
                функционалу повторяющие методы массивов из нативного JavaScript.
            </p>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;app-child #component>&lt;/app-child>
&lt;app-child>&lt;/app-child></code></pre>
<pre><code class="language-typescript">// класс компонента
@ViewChildren(ChildComponent) component: QueryList&lt;ChildComponent>;

ngAfterViewInit() {
	this.component.forEach((item) => console.log('item', item));
}</code></pre>
            <p>
                В примере выше в консоли браузера выведется каждый найденный дочерний компонент в отдельной строке со
                всем своим содержимым.
            </p>`,
        selected: false,
        lastUpdate: '14.01.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/R3kexfhgU4Q?t=767',
            },
        ],
    },
    {
        title: 'Метод жизненного цикла, начиная с которого доступна информация в декораторах <span class="variable">@ViewChild()</span> и <span class="variable">@ViewChildren()</span>',
        body: `<p>
                Т.к. декораторы свойств <code>@ViewChild&#40;&#41;</code> и <code>@ViewChildren&#40;&#41;</code> следят
                за шаблоном текущего компонента, а его представление (представление - шаблон текущего компонента +
                шаблоны дочерних компонентов, которые в нем присутствуют) инициализируется перед вызовом метода
                <code>ngAfterViewInit</code>, следовательно, первые данные появятся именно в этом методе. До него будет
                <code>undefined</code>.
            </p>`,
        selected: false,
        lastUpdate: '14.01.2024',
    },
    {
        title: 'Параметр <span class="variable">read</span> декораторов <span class="variable">@ViewChild()</span> и <span class="variable">@ViewChildren()</span>',
        body: `<p>
                У декораторов <code>@ViewChild&#40;&#41;</code> и <code>@ViewChildren&#40;&#41;</code> есть параметр
                <code>read</code>, который служит, своего рода, фильтром получаемых данных по указанному селектору.
            </p>
            <p>
                В качестве значения для параметра <code>read</code> в основном используют следующие варианты (есть и
                другие, но они используются гораздо реже):
            </p>
            <ul>
                <li>
                    <span class="attention">ElementRef</span>, если мы ожидаем получение данных только через шаблонную
                    переменную;
                </li>
                <li>
                    <span class="attention">TemplateRef</span>, если мы ожидаем получение только элементов
                    <code>ng-template</code>;
                </li>
                <li>
                    <span class="attention">Название класса компонента или директивы</span>, если мы ожидаем получение
                    только компонентов или директив соответственно.
                </li>
            </ul>
            <p>
                Допустим, в шаблоне имеются параграф и дочерний компонент с одинаковым названием шаблонной переменной,
                причем дочерний компонент идет после параграфа, что важно, например, для декоратора
                <code>@ViewChild&#40;&#41;</code>:
            </p>
			<pre><code class="language-html">&lt;p #element>Простой параграф&lt;/p>
&lt;app-child #element>&lt;/app-child></code></pre>
            <p>
                Однако, с помощью параметра <code>read</code> мы можем не учитывать параграфы и фильтровать их, оставляя
                лишь найденные дочерние компоненты:
            </p>
			<pre><code class="language-typescript">@ViewChild('element', { read: ChildComponent }) element: ElementRef&lt;ChildComponent>;</code></pre>
            <p>В итоге, в свойстве <code>element</code> будут лишь данные дочернего компонента.</p>`,
        selected: false,
        lastUpdate: '14.01.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/R3kexfhgU4Q?t=654',
            },
        ],
    },
    {
        title: 'Декоратор <span class="variable">@ContentChild()</span>',
        body: `<p>
                <span class="attention"
                    >Декоратор <code>&#64;ContentChild()</code> позволяет по указанному в нем селектору получать доступ к содержимому дочернего
                    компонента, которое заключено между его тегами в месте вызова этого компонента. Это содержимое в
                    дочернем компоненте подставляется вместо элемента <code>ng-content</code>.</span
                >
            </p>
            <p>Данный декоратор имеет следующий синтаксис:</p>
            <pre><code class="language-javascript">&#64;ViewChild('selector') propertyName: dataType;</code></pre>
            <p>
                Декоратор <code>&#64;ContentChild()</code> указывается в дочернем компоненте, в отличие от того же
                декоратора <code>&#64;ViewChild()</code>, который указывается в классе родительского компонента.
            </p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child>
	&lt;p #paragraph>Простой параграф&lt;/p> &lt;!-- содержимое компонента -->
&lt;/app-child></code></pre>
            <pre><code class="language-typescript">// класс дочернего компонента
&#64;ContentChild('paragraph') paragraph: ElementRef;</code></pre>
             <p>
                В качестве селектора в основном используют следующие варианты (есть и другие, но они используются
                гораздо реже):
            </p>
            <ul>
                <li>
                    <span class="attention">Шаблонные переменные</span> - поиск в содержимом будет осуществляться по
                    шаблонным переменным;
                </li>
                <li>
                    <span class="attention">TemplateRef</span> - поиск в содержимом будет осуществляться по элементам
                    <code>ng-template</code>;
                </li>
                <li>
                    <span class="attention">Название класса компонента или директивы</span> - поиск в содержимом будет
                    осуществляться по названию класса компонента или директивы.
                </li>
            </ul>
            <p>Ниже представлены примеры для каждого из этих случаев:</p>
            <pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;app-child>
	&lt;p #paragraph>Простой параграф&lt;/p> (1)
&lt;/app-child> 

&lt;app-child>
	&lt;ng-template #template>Параграф внутри элемента ng-template&lt;/ng-template> (2)
&lt;/app-child> 
&lt;app-child>
	&lt;ng-template>Параграф внутри элемента ng-template&lt;/ng-template> (2*)
&lt;/app-child> 

&lt;app-child>
	&lt;app-another-child #component>&lt;/app-another-child> (3)
&lt;/app-child>
&lt;app-child>
	&lt;app-another-child>&lt;/app-another-child> (3*)
&lt;/app-child>
</code></pre>
            <pre><code class="language-typescript">// класс компонента
&#64;ContentChild('paragraph') paragraph: ElementRef<HTMLParagraphElement>; (1)

&#64;ContentChild('template') template: TemplateRef<HTMLParagraphElement>; (2)
&#64;ContentChild(TemplateRef) template: TemplateRef<HTMLParagraphElement>; (2*)

&#64;ContentChild('component') component: ChildComponent; (3)
&#64;ContentChild(AnotherChildComponent) component: AnotherChildComponent; (3*)</code></pre>
            <p>
                В примерах выше со звёздочкой показано как использовать декоратор
                <code>&#64;ContentChild&#40;&#41;</code> без использования шаблонных переменных в разметке.
            </p>
            <p>Можно так же указывать и мультиселекторы, делается это через запятую в формате строки:</p>
			<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;app-child>
	&lt;app-another-child>&lt;/app-another-child>
	&lt;p #paragraph>Простой параграф&lt;/p>
&lt;/app-child> </code></pre>
			<pre><code class="language-typescript">// класс компонента
&#64;ContentChild('paragraph, AnotherChildComponent') paragraph: ElementRef&lt;HTMLParagraphElement | AnotherChildComponent>;</code></pre>
            <p>
                В примере выше под условие селектора попадают оба элемента разметки, но т.к. дочерний компонент в
                разметке стоит раньше параграфа, поэтому именно его данные декоратор
                <code>&#64;ContentChild&#40;&#41;</code> запишет в свойство <code>paragraph</code>.
            </p>`,
        selected: false,
        lastUpdate: '10.02.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/zKvPvfkbHrw?t=48',
            },
        ],
    },
    {
        title: 'Параметр <span class="variable">static</span> декоратора <span class="variable">@ContentChild()</span>',
        body: `<p>
                У декоратора <code>@ContentChild&#40;&#41;</code> есть также и дополнительные параметры. Одним из них
                является булевый параметр <code>static</code>. По умолчанию он имеет значение <code>false</code>. Это
                означает, что доступ к содержимому компонента декоратор <code>@ContentChild&#40;&#41;</code> получает
                после того, как оно было проинициализировано. Поэтому данные и появляются начиная с метода
                <code>ngAfterContentInit</code>.
            </p>
            <pre><code class="language-typescript">// Обе записи равносильны
&#64;ContentChild('paragraph') paragraph: ElementRef&lt;HTMLParagraphElement>;
&#64;ContentChild('paragraph', { static: false }) paragraph: ElementRef&lt;HTMLParagraphElement>;</code></pre>
            <p>
                Это сценарий работы директивы <code>@ContentChild&#40;&#41;</code> по умолчанию. Но его можно изменить,
                установив значение параметра <code>static</code> в значение <code>true</code>.
            </p>
            <pre><code class="language-typescript">&#64;ContentChild('paragraph', { static: true }) paragraph: ElementRef&lt;HTMLParagraphElement>;</code></pre>
            <p>
                В этом случае декоратор <code>@ContentChild&#40;&#41;</code> получает доступ к содержимому компонента
                еще до того, как оно прошло все проверки и было полностью инициализирован. Такой вариант использования
                декоратора может быть полезно в случаях, когда нужно получить доступ к содержимому до того, как оно будет полностью инициализирован.
            </p>
            <p>
                Тут также важно, чтобы на таком элементе не висела структурная директива
                <code>@if</code> (<code>*if</code>) и не изменялось в дальнейшем содержимое этого элемента. Декоратор
                <code>@ContentChild&#40;&#41;</code> не увидит изменения. Тут нужны уже различные дополнительные решения
                для такого сценария работы приложения.
            </p>
            <p>
                То есть, иначе говоря, когда параметр <code>static</code> имеет значение <code>true</code>, это влияет
                на то, в какой момент жизненного цикла мы получаем данные в свойство, которое использует декоратор
                <code>@ContentChild&#40;&#41;</code> с этим параметром. При этом значении данные будут доступны уже в
                методе <code>ngOnInit</code>.
            </p>
            <p>
                Но это не является хорошей практикой. Все же
                <span class="attention"
                    >рекомендуется позволять Angular самому управлять жизненными циклами всех компонентов</span
                >
                и получать доступ к их информации в соответствующие этапы жизненного цикла. Использование параметра
                <code>static</code> со значением <code>true</code> следует рассматривать как обходное решение для
                конкретных проблем, а не как общую практику.
            </p>`,
        selected: false,
        lastUpdate: '10.02.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/zKvPvfkbHrw?t=305',
            },
        ],
    },
    {
        title: 'Декоратор <span class="variable">@ContentChildren()</span>',
        body: ` <p>
                <span class="attention"
                    >Декоратор <code>&#64;ContentChildren()</code> позволяет по указанному в нем селектору получать
                    доступ к содержимым дочерних компонентов, которые заключены между их тегами в месте вызова этих
                    компонента. Эти содержимые в дочерних компонентах подставляются вместо элементов
                    <code>ng-content</code>.</span
                >
            </p>
            <p>Данный декоратор имеет следующий синтаксис:</p>
            <pre><code class="language-javascript">&#64;ViewChildren('selector') propertyName: QueryList&lt;dataType>;</code></pre>
            <p>
                Декоратор <code>&#64;ContentChildren()</code> указывается в дочернем компоненте, в отличие от того же
                декоратора <code>&#64;ViewChildren()</code>, который указывается в классе родительского компонента.
            </p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child>
	&lt;p #paragraph>Простой параграф&lt;/p> &lt;!-- содержимое компонента -->
&lt;/app-child></code></pre>
            <pre><code class="language-typescript">// класс дочернего компонента
&#64;ContentChildren('paragraph') paragraph: ElementRef;</code></pre>
            <p>
                В качестве селектора в основном используют следующие варианты (есть и другие, но они используются
                гораздо реже):
            </p>
            <ul>
                <li>
                    <span class="attention">Шаблонные переменные</span> - поиск в содержимом будет осуществляться по
                    шаблонным переменным;
                </li>
                <li>
                    <span class="attention">TemplateRef</span> - поиск в содержимом будет осуществляться по элементам
                    <code>ng-template</code>;
                </li>
                <li>
                    <span class="attention">Название класса компонента или директивы</span> - поиск в содержимом будет
                    осуществляться по названию класса компонента или директивы.
                </li>
            </ul>
            <p>Ниже представлены примеры для каждого из этих случаев:</p>
            <pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;app-child>
	&lt;p #paragraph>Простой параграф&lt;/p> (1)
&lt;/app-child> 

&lt;app-child>
	&lt;ng-template #template>Параграф внутри элемента ng-template&lt;/ng-template> (2)
&lt;/app-child> 
&lt;app-child>
	&lt;ng-template>Параграф внутри элемента ng-template&lt;/ng-template> (2*)
&lt;/app-child> 

&lt;app-child>
	&lt;app-another-child #component>&lt;/app-another-child> (3)
&lt;/app-child>
&lt;app-child>
	&lt;app-another-child>&lt;/app-another-child> (3*)
&lt;/app-child>
</code></pre>
            <pre><code class="language-typescript">// класс компонента
&#64;ContentChildren('paragraph') paragraph: QueryList&lt;ElementRef<HTMLParagraphElement></HTMLParagraphElement>>; (1)

&#64;ContentChildren('template') template: QueryList&lt;TemplateRef<HTMLParagraphElement></HTMLParagraphElement>>; (2)
&#64;ContentChildren(TemplateRef) template: QueryList&lt;TemplateRef<HTMLParagraphElement></HTMLParagraphElement>>; (2*)

&#64;ContentChildren('component') component: QueryList&lt;ChildComponent>; (3)
&#64;ContentChildren(AnotherChildComponent) component: QueryList&lt;AnotherChildComponent>; (3*)</code></pre>
            <p>
                В примерах выше со звёздочкой показано как использовать декоратор
                <code>&#64;ContentChildren&#40;&#41;</code> без использования шаблонных переменных в разметке.
            </p>
            <p>Можно так же указывать и мультиселекторы, делается это через запятую в формате строки:</p>
            <pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;app-child>
	&lt;app-another-child>&lt;/app-another-child>
	&lt;p #paragraph>Простой параграф&lt;/p>
&lt;/app-child> </code></pre>
            <pre><code class="language-typescript">// класс компонента
&#64;ContentChildren('paragraph, AnotherChildComponent') paragraph: ElementRef&lt;HTMLParagraphElement | AnotherChildComponent>;</code></pre>
            <p>
                В примере выше под условие селектора попадают оба элемента разметки, но т.к. дочерний компонент в
                разметке стоит раньше параграфа, поэтому именно его данные декоратор
                <code>&#64;ContentChildren&#40;&#41;</code> запишет в свойство <code>paragraph</code>.
            </p>`,
        selected: false,
        lastUpdate: '10.02.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/zKvPvfkbHrw?t=453',
            },
        ],
    },
    {
        title: 'Метод жизненного цикла, начиная с которого доступна информация в декораторах <span class="variable">@ContentChild()</span> и <span class="variable">@ContentChildren()</span>',
        body: `<p>
                Т.к. декораторы свойств <code>@ContentChild&#40;&#41;</code> и
                <code>@ContentChildren&#40;&#41;</code> следят за содержимым текущего компонента, а оно инициализуруется
                перед вызовом метода <code>ngAfterContentInit</code>, следовательно, первые данные появятся именно в
                этом методе. До него будет <code>undefined</code>.
            </p>`,
        selected: false,
        lastUpdate: '10.02.2024',
    },
    {
        title: 'Параметр <span class="variable">read</span> декораторов <span class="variable">@ContentChild()</span> и <span class="variable">@ContentChildren()</span>',
        body: `<p>
                У декораторов <code>@ContentChild&#40;&#41;</code> и <code>@ContentChildren&#40;&#41;</code> есть
                параметр <code>read</code>, который служит, своего рода, фильтром получаемых данных по указанному
                селектору.
            </p>
            <p>
                В качестве значения для параметра <code>read</code> в основном используют следующие варианты (есть и
                другие, но они используются гораздо реже):
            </p>
            <ul>
                <li>
                    <span class="attention">ElementRef</span>, если мы ожидаем получение данных только через шаблонную
                    переменную;
                </li>
                <li>
                    <span class="attention">TemplateRef</span>, если мы ожидаем получение только элементов
                    <code>ng-template</code>;
                </li>
                <li>
                    <span class="attention">Название класса компонента или директивы</span>, если мы ожидаем получение
                    только компонентов или директив соответственно.
                </li>
            </ul>
            <p>
                Допустим, в содержимом компонента имеются параграф и дочерний компонент с одинаковым названием шаблонной
                переменной, причем дочерний компонент идет после параграфа, что важно, например, для декоратора
                <code>@ContentChild&#40;&#41;</code>:
            </p>
            <pre><code class="language-html">&lt;app-child #element>
	&lt;p #element>Простой параграф&lt;/p>
	&lt;app-another-child #element>&lt;/app-another-child>
&lt;/app-child></code></pre>
            <p>
                Однако, с помощью параметра <code>read</code> мы можем не учитывать параграфы и фильтровать их, оставляя
                лишь найденные дочерние компоненты:
            </p>
            <pre><code class="language-typescript">&#64;ContentChild('element', { read: AnotherChildComponent }) element: ElementRef&lt;AnotherChildComponent>;</code></pre>
            <p>В итоге, в свойстве <code>element</code> будут лишь данные дочернего компонента.</p>`,
        selected: false,
        lastUpdate: '10.02.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/zKvPvfkbHrw?t=363',
            },
        ],
    },
    {
        title: 'Параметр <span class="variable">descendants</span> декораторов <span class="variable">@ContentChild()</span> и <span class="variable">@ContentChildren()</span>',
        body: `<p>
                В отличие от декораторов <code>@ViewChild&#40;&#41;</code> и <code>@ViewChildren&#40;&#41;</code>, у
                декораторов <code>@ContentChild&#40;&#41;</code> и <code>@ContentChildren&#40;&#41;</code>, есть еще
                параметр <code>descendants</code>, который
                <span class="attention">отвечает за то, будут ли включены потомки в поиск по селектору или нет</span>.
            </p>
            <pre><code class="language-typescript">&#64;ContentChild(ChildComponent, { descendants: false }) component: ChildComponent;</code></pre>
            <p>
                По умолчанию данный параметр имеет значение <code>true</code>. Это означает, что, если мы, например, в
                шаблоне сделаем пример, когда в содержимом компонента будет находится компонент, а внутри него еще
                компонент и он имеет шаблонную переменную, то при поиске декораторы
                <code>@ContentChild&#40;&#41;</code> и <code>@ContentChildren&#40;&#41;</code> его увидят, если указать
                соответствующий для него селектор.
            </p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child>
  &lt;app-another-child>
    &lt;app-deep-child #descendants>
	  Компонент deep-child
    &lt;/app-deep-child>
  &lt;/app-another-child>
&lt;/app-child></code></pre>

            <pre><code class="language-typescript">&#64;ContentChild('deep', { descendants: true }) component!: DeepComponent;</code></pre>
            <p>
                В примере выше компонент <code>DeepComponent</code> будет найден по шаблонной переменной
                <code>deep</code>. Но если изменить значение параметра <code>descendants</code> на <code>false</code>,
                то
                <span class="attention">
                    поиск по селектору будет происходить среди только прямых потомков, которые находятся первом уровне
                    вложенности </span
                >.
            </p>
            <pre><code class="language-typescript">&#64;ContentChild('deep', { descendants: false }) component!: DeepComponent;</code></pre>
            <p>
                Теперь в свойстве <code>component</code> будет <code>undefined</code>, т.к. нужный нам компонент
                <span class="attention">не находится на первом уровне вложенности</span>.
            </p>`,
        selected: false,
        lastUpdate: '10.02.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/zKvPvfkbHrw?t=387',
            },
        ],
    },
    {
        title: 'Декоратор <span class="variable">@Attribute()</span>',
        body: `<p>
		В Angular данные от родителя к дочернему компоненту можно
		передавать как статически, так и динамически:
	</p>
	<pre><code class="language-html">&lt;app-child name="какая-то_строка">&lt;/app-child> &lt;!-- статическая передача данных -->
&lt;app-child [name]="какая-то_переменная">&lt;/app-child> &lt;!-- динамическая передача данных --></code></pre>
	<p>
		Декоратор <code>@Input()</code> может обрабатывать и тот, и другой
		варианты. И т.к. данные могут изменяться, механизм
		<code>ChangeDetection</code> будет его тоже проверять на наличие
		изменений. Даже если вы каждый раз передаете статические данные и они никак
		не изменяются.
	</p>
	<p>
		Чтобы снизить нагрузку на механизм
		<code>ChangeDetection</code> и не проверять статические данные,
		используется декоратор <code>@Attribute()</code>, который
		<span class="attention"
			>помечает входящий параметр как неизменяемый на протяжении
			всего жизненного цикла приложения</span
		>.
	</p>
	<p>Пример использования:</p>
	<pre><code class="language-typescript">constructor(@Attribute('name') private name: string) {}</code></pre>
	<p>
		Как видите, в отличие от декоратора <code>@Input()</code> значение теперь принимается в конструкторе класса, а не в одном из хуков жизненного цикла компонента. А как вы знаете, конструктор вызывается лишь единожды, когда инициируется сам класс, а не компонент, поэтому
		свойство не может быть динамическим и механизм <code>ChangeDetection</code> его не отслеживает. Соответственно, <span class="attention">если вы
		захотите передать через декоратор
		<code>@Attribute()</code> динамический параметр, то Angular выдаст
		вам ошибку</span>.
	</p>`,
        selected: false,
        lastUpdate: '23.09.2023',
    },
    {
        title: 'Декоратор <span class="variable">@Injectable()</span>',
        body: `<p>
            Декоратор <code>@Injectable()</code>
            <span class="attention">
                нужен для явного указания того, что сервис может использовать
                другие сервисы.
            </span>
        </p>
        <pre><code class="language-typescript">// пример использования данного декоратора
@Injectable({providedIn: 'root'})</code></pre>
        <p>
            Иначе говоря, данный декоратор гарантирует, что встроенный механизм
            внедрения зависимостей (<code>dependency injection</code>) сможет создать объект
            этого класса и передать в него в качестве зависимости другие объекты
            (другие сервисы или компоненты, если в этом есть необходимость).
        </p>
        <p>
            Если сервис не использует никакие другие зависимости, то данный
            декоратор можно и не указывать. <span class="attention">Без него сервис тоже будет работать</span>.
            Но среди Angular-разработчиков существует договоренность, что
                данный декоратор стоит применять к любому классу сервиса.
        </p>`,
        selected: false,
        lastUpdate: '14.09.2023',
    },
    {
        title: 'Декоратор <span class="variable">@Self()</span>',
        body: `<p>
		Сервисы могут быть определены на трех уровнях и, когда компонент
		запрашивает сервис, то
		<span class="attention">
			поиск начинается с нижних уровней и затем вверх по
			иерархии</span
		>:
	</p>
	<ul>
		<li>
			<span class="attention">Уровень компонента</span> - сначала
			Angular будет искать вызываемый сервис здесь;
		</li>
		<li>
			<span class="attention">Уровень модуля</span> - потом в
			родительском модуле, если не найдет в компоненте;
		</li>
		<li>
			<span class="attention">Уровень приложения</span> - и если
			все еще не нашел, то будет осуществляться поиск в корневом
			модуле. Если и здесь не найдется определение сервиса, то
			будет сгенерирована ошибка.
		</li>
	</ul>
	<p>
		<span class="attention">
			Декоратор <code>@Self()</code> сообщит <code>DI</code>, что поиск
			нужно осуществлять только лишь в провайдере текущего компонента</span>.
		Но также стоит учитывать тот факт, что <span class="attention">
			если <code>DI</code> не
			найдет сервис в текущем компоненте, будет сгенерирована ошибка</span>.
	</p>
	<pre><code class="language-typescript">@Component({
	selector: 'app-some-component',
	templateUrl: './some.component.html',
	providers: [SomeService], // добавление сервиса на уровне компонента
})

export class SomeComponent {
	constructor(@Self() private someService: SomeService) {}
}</code></pre>`,
        selected: false,
        lastUpdate: '23.09.2023',
    },
    {
        title: 'Декоратор <span class="variable">@SkipSelf()</span>',
        body: `<p>
            Сервисы могут быть определены на трех уровнях и, когда компонент
            запрашивает сервис, то
            <span class="attention">
                поиск начинается с нижних уровней и затем вверх по
                иерархии</span
            >:
        </p>
        <ul>
            <li>
                <span class="attention">Уровень компонента</span> - сначала
                Angular будет искать вызываемый сервис здесь;
            </li>
            <li>
                <span class="attention">Уровень модуля</span> - потом в
                родительском модуле, если не найдет в компоненте;
            </li>
            <li>
                <span class="attention">Уровень приложения</span> - и если все
                еще не нашел, то будет осуществляться поиск в корневом модуле.
                Если и здесь не найдется определение сервиса, то будет
                сгенерирована ошибка.
            </li>
        </ul>
        <p>
            Допустим, вы определили сервис на уровне компонента и на уровне всего приложения. И вам нужен
            последний. В этом случае
            вам и поможет декоратор <code>@SkipSelf()</code>, который <span class="attention">исключает поиск сервиса на том уровне, где он указан</span>, то есть, в нашем случае на уровне компонента.
        </p>
        <pre><code class="language-typescript">@Component({
	selector: 'app-some-component',
	templateUrl: './some.component.html',
	providers: [SomeService], // добавление сервиса на уровне компонента
})

export class SomeComponent {
	constructor(@SkipSelf() private someService: SomeService) {}
}</code></pre>
        <p>
            Исходя из вышесказанного, можно сделать следующий трюк: если указать
            два одинаковых сервиса в одном компоненте, но перед одним из них
            поставить <code>@SkipSelf()</code>, то удастся получить доступ к
            локальному и глобальному экземплярам одновременно.
        </p>`,
        selected: false,
        lastUpdate: '23.09.2023',
    },
    {
        title: 'Декоратор <span class="variable">@Optional()</span>',
        body: `<p>
            Сервисы могут быть определены на трех уровнях и, когда компонент
            запрашивает сервис, то
            <span class="attention">
                поиск начинается с нижних уровней и затем вверх по
                иерархии</span
            >:
        </p>
        <ul>
            <li>
                <span class="attention">Уровень компонента</span> - сначала
                Angular будет искать вызываемый сервис здесь;
            </li>
            <li>
                <span class="attention">Уровень модуля</span> - потом в
                родительском модуле, если не найдет в компоненте;
            </li>
            <li>
                <span class="attention">Уровень приложения</span> - и если все
                еще не нашел, то будет осуществляться поиск в корневом модуле.
                Если и здесь не найдется определение сервиса, то
                <span class="attention"> будет сгенерирована ошибка </span>.
            </li>
        </ul>
        <p>
            С помощью декоратора <span class="attention"><code>@Optional()</code> мы можем обработать
            эту ошибку. В переменную, которая должна была стать экземпляром
            сервиса, просто запишется <code>null</code></span>.
        </p>
		<pre><code class="language-typescript">@Component({
	selector: 'app-some-component',
	templateUrl: './some.component.html',
	providers: [SomeService], // добавление сервиса на уровне компонента
})

export class SomeComponent {
	constructor(@Optional() private someService: SomeService) {}
}</code></pre>`,
        selected: false,
        lastUpdate: '03.02.2024',
    },
    {
        title: 'Декоратор <span class="variable">@Host()</span>',
        body: `<p>
		Декоратор <code>@Host</code> сообщает <code>DI</code>
		<span class="attention"
			>искать зависимость в любом инжекторе, пока он не достигнет
			хоста</span
		>. В большинстве случаев компонент и является хостом.
	</p>
	<p>
		Существует два распространенных случая, в которых хост-компонент
		отличается от текущего класса компонента:
	</p>
	<ul>
		<li>
			<span class="attention">Директива</span>. Директива будет
			искать зависимость в компоненте, в котором она находится.
		</li>
		<li>
			<span class="attention">Проекция</span>. Когда компонент
			находится внутри
			<code>ng-content</code>
			другого компонента. Внутренний компонент будет искать
			зависимости во внешнем компоненте.
		</li>
	</ul>
	<pre><code class="language-typescript">class OtherService {}

class HostService {}

@Directive({selector: 'child-directive'})

class ChildDirective {
	logs: string[] = [];

	constructor(@Optional() @Host() os: OtherService, @Optional() @Host() hs: HostService) {
		// os имеет значение null: true
		this.logs.push("os is null: " + (os === null));
		// hs - это экземпляр HostService: true
		this.logs.push("hs is an instance of HostService: " + (hs instanceof HostService));
	}
}

@Component({
	selector: 'parent-component',
	viewProviders: [HostService],
	template: '&lt;child-directive>&lt;/child-directive>',
})

class ParentComponent {}

@Component({
	selector: 'app',
	viewProviders: [OtherService],
	template: '&lt;parent-component>&lt;/parent-component>',
})

class App {}</code></pre>`,
        selected: false,
        lastUpdate: '23.09.2023',
    },
    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    // 	lastUpdate: '',
    // },
];
