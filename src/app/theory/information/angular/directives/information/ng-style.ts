import { IInfo } from 'src/app/shared/interfaces';

export const NG_STYLE: IInfo = {
    title: 'Атрибутивная директива <span class="variable">ngStyle</span>',
    body: `<p>
                <span class="attention"
                    >Атрибутивная директива <code>ngStyle</code> позволяет
                    изменять инлайновые стили на элементе DOM-дерева в
                    зависимости от каких-либо условий</span
                >.
            </p>
            <p>
                В качестве значений <code>ngStyle</code> принимает объекты, где
                в качестве ключа указывается css-свойство, а в качестве значения
                соответствующая корректная величина для данного css-свойства.
                Иначе Angular просто вырежет при компиляции некорректные данные.
            </p>
			<pre><code class="language-html">&lt;some-element [ngStyle]="{'color': 'red'}">...&lt;some-element></code></pre>
            <p>
                Также необязательно писать все стили в шаблоне компонента. Их
                можно вынести в отдельную переменную класс компонента и
                передать ее в качестве значения для директивы
                <code>ngStyle</code>:
            </p>
<pre><code class="language-typescript">// класс компонента
cssProperties = {'color': 'red', 'display': 'block'}</code></pre>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;some-element [ngStyle]="cssProperties">...&lt;some-element></code></pre>
            <p>
                К тому же, внутри <code>ngStyle</code> можно сразу задавать
                css-свойству размерность:
            </p>
			<pre><code class="language-html">&lt;some-element [ngStyle]="{'font-size.px': 20}">...&lt;some-element></code></pre>`,
    selected: false,
    lastUpdate: '08.02.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/qNUp8t5QOxs?t=290',
        },
    ],
};
