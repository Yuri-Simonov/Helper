import { IInfo } from '@types';

export const VIEW_CHILDREN: IInfo = {
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
};
