import { IInfo } from 'src/app/shared/interfaces';

export const VIEW_CHILD: IInfo = {
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
};
