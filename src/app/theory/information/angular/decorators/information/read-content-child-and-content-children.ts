import { IInfo } from '@types';

export const READ_CONTENT_CHILD_AND_CONTENT_CHILDREN: IInfo = {
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
};
