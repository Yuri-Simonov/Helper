import { IInfo } from '@types';

export const DESCENDANTS_CONTENT_CHILD_AND_CONTENT_CHILDREN: IInfo = {
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
};
