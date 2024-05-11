import { IInfo } from '@types';

export const NG_CLASS: IInfo = {
    title: 'Атрибутивная директива <span class="variable">ngClass</span>',
    body: `<p>
                <span class="attention"
                    >Атрибутивная директива <code>ngClass</code> позволяет как
                    статически, так и динамически изменять css-классы на
                    элементе DOM-дерева в зависимости от каких-либо
                    условий</span
                >.
            </p>
            <p>
                В качестве значений <code>ngClass</code> может принимать строки,
                массивы и объекты.
            </p>
            <i class="subtitle">Примеры со строками</i>
<pre><code class="language-html">&lt;some-element ngClass="first second">...&lt;some-element> &lt;!-- статический вариант записи -->
&lt;some-element [ngClass]="'first second'">...&lt;some-element> &lt;!-- динамический вариант записи --></code></pre>

            <p>
                Как видно из примера выше, просто перечисляем css-классы внутри
                кавычек, которые нужно добавить на элемент DOM-дерева.
            </p>
            <i class="subtitle">Пример с массивом</i>
			<pre><code class="language-html">&lt;some-element [ngClass]="['first', 'second']">...&lt;some-element></code></pre>
            <p>
                Здесь уже нужные css-классы перечисляются как элементы массива.
            </p>
            <i class="subtitle">Примеры с объектами</i>
            <p>
                Варианты записи, когда в качестве значений для
                <code>ngClass</code> указываются строки или массивы, практически
                не встречаются, т.к. не позволяют использовать условия, в
                зависимости от которых будет добавляться или убираться тот или
                иной css-класс. Объекты же позволяют это делать, поэтому в
                основном они и используются.
            </p>
           	<pre><code class="language-html">&lt;some-element [ngClass]="{'first': true, 'second': false}">...&lt;some-element></code></pre>
            <p>
                В примере выше для каждого css-класса задается условие его
                отображения. Если оно правдиво (<code>true</code>), то css-класс
                добавляется на элемент DOM-дерева. Если условие ложно, тогда
                css-класс не добавляется.
            </p>
			<pre><code class="language-html">&lt;some-element [ngClass]="{'class1 class2' : true}">...&lt;some-element></code></pre>
            <p>
                В примере выше показано, что <code>ngClass</code> также
                позволяет отображать или скрывать сразу несколько css-классов в
                зависимости от одного и того же условия.
            </p>`,
    selected: false,
    lastUpdate: '08.02.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/qNUp8t5QOxs?t=12',
        },
    ],
};
