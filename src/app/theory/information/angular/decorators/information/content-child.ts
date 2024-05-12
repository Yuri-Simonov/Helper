import { IInfo } from '@types';

export const CONTENT_CHILD: IInfo = {
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
};
