import { IInfo } from '@types';

export const READ_VIEW_CHILD_AND_VIEW_CHILDREN: IInfo = {
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
};
