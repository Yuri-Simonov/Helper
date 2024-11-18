import { IInfo } from 'src/app/shared/interfaces';

export const STYLE_SELECTORS: IInfo = {
    title: 'Селекторы стилей <span class="variable">:host</span>, <span class="variable">:host-context</span> и <span class="variable">::ng-deep</span>',
    body: `<p>В Angular есть 3 встроенных селектора для задания стилей:</p>
            <ul>
                <li>
                    <code>:host</code> -
                    <span class="attention">позволяет добавлять стили непосредственно на сам компонент</span>;
                </li>
                <li>
                    <code>:host-context</code> -
                    <span class="attention"
                        >позволяет применять стили к компоненту, если он находится внутри определенного контекста;</span
                    >
                </li>
                <li>
                    <code>::ng-deep</code> -
                    <span class="attention"
                        >позволяет применять стили к дочерним компонентам и их элементам разметки, игнорируя
                        инкапсуляцию стилей</span
                    >.
                </li>
            </ul>
            <i class="subtitle">Селектор :host</i>
            <p>
                <span class="attention">По умолчанию все компоненты в Angular являются инлайновыми элементами</span>,
                т.е., занимают лишь ширину своего содержимого. И т.к. селектор <code>:host</code> позволяет добавлять
                стили непосредственно на сам компонент, то на практике его часто используют, чтобы сделать компонент
                блочным элементом:
            </p>
            <pre><code class="language-scss">// child.component.scss

:host {
	display: block;
}</code></pre>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;app-child>&lt;/app-child>
</code></pre>
            <p>Во что преобразуется в браузере данный селектор:</p>
            <pre><code class="language-scss">[_nghost-ng-c750168442] {
    display: block;
}</code></pre>
            <p>Теперь дочерний компонент будет блочным элементом и займет всю доступную ширину.</p>
            <p>
                Селектору <code>:host</code> также можно задавать дополнительный параметр, в роли которого выступают
                различные CSS-селекторы:
            </p>
            <pre><code class="language-scss">// child.component.scss

:host(.orange) {
	color: orange;
}</code></pre>
            <p>
                Стиль из кода выше применится к дочернему компоненту, если на нем будет CSS-класс <code>orange</code>:
            </p>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;!-- стиль НЕ применится, т.к. нет CSS-класса '.orange' --&gt;
&lt;app-child>&lt;/app-child>

&lt;!-- стиль применится, т.к. есть CSS-класс '.orange' --&gt;
&lt;app-child class="orange">&lt;/app-child>
</code></pre>
            <p>Во что преобразуется в браузере данный селектор:</p>
            <pre><code class="language-scss">.orange[_nghost-ng-c750168447] {
    color: orange;
}</code></pre>
            <i class="subtitle">Селектор :host-context</i>
            <p>
                Селектор <code>:host-context</code> позволяет применять стили к компоненту, если он находится внутри определенного
                контекста. Это очень полезно, когда нужно изменить стили компонента в зависимости от его окружения.
            </p>
            <p>
                Допустим у нас есть дочерний компонент внутри тега <code>div</code> и внутри тега <code>article</code>:
            </p>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;div>
	&lt;app-child>&lt;/app-child>
&lt;/div>
&lt;article>
	&lt;app-child>&lt;/app-child>
&lt;/article></code></pre>
            <p>
                И если мы хотим задать стили только для дочернего компонента, который находится внутри тега
                <code>article</code>, то селектор будет выглядеть следующим образом:
            </p>
            <pre><code class="language-scss">// child.component.scss

:host-context(article) {
	color: orange;
}</code></pre>
            <p>Во что преобразуется в браузере данный селектор:</p>
            <pre><code class="language-scss">article[_nghost-ng-c3430695920], article [_nghost-ng-c3430695920] {
    color: yellow;
}</code></pre>
            <p>
                Тут также стоит уточнить, как работает контекст. Сначала селектор <code>:host-context</code> будет
                искать переданный в него дополнительный селектор на самом компоненте. Если не найдет, продолжит искать
                его уже на родительском элементе. Если и там не найдет, то будет искать на родителе, который расположен
                еще уровнем выше. И так пока не дойдет вплоть до корневого тега <code>html</code>. Если на всем этом
                пути он так и не найдет указанный внутри круглых скобок селектор, значит стили не применятся.
            </p>
            <i class="subtitle">Селектор ::ng-deep</i>
            <p>
                У селекторов <code>:host</code> и <code>:host-context</code> так же есть еще одно ограничение - они не
                видят дочерние элементы в своих компонентах. Для этого в Angular есть селектор <code>::ng-deep</code>.
            </p>
            <p>
                Данный селектор позволяет применять стили к дочерним компонентам и их элементам разметки, игнорируя
                инкапсуляцию стилей. Он очень выручает, когда нужно изменить стили дочерних компонентов или элементов
                внутри них, не изменяя их напрямую.
            </p>
            <p>
                Например, мы хотим изменить цвет текста заголовка <code>h1</code> компонента <code>app-child</code> из
                стилей корневого компонента <code>app-root</code>:
            </p>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;app-child>&lt;/app-child>
</code></pre>
            <pre><code class="language-scss">// app.component.scss

app-child h1 {
	color: blue;
}</code></pre>
            <pre><code class="language-html">&lt;!-- child.component.html --&gt;

&lt;h1>Заголовок компонента&lt;/h1>
</code></pre>
            <p>
                При данном коде цвет заголовка <code>h1</code> в дочернем компоненте не изменится из-за инкапсуляции
                стилей.
            </p>
            <p>Чтобы ее игнорировать для конкретного селектора, нужно в нем указать селектор <code>::ng-deep</code>:</p>
            <pre><code class="language-scss">// app.component.scss

::ng-deep app-child h1 {
	color: blue;
}</code></pre>
            <p>Теперь цвет текста дочернего заголовка изменится.</p>
            <p>
                Тут еще стоит обратить внимание на то, как в таком случае в итоге преобразуются стили в браузере. Из-за
                того, что по указанному селектору отключается инкапсуляция, в нем отсутствуют атрибуты, которые Angular
                добавляет под капотом. Так можно легко визуально отличать стили, которые используют селектор
                <code>::ng-deep</code>:
            </p>
            <pre><code class="language-scss">// стили в браузере

app-child h1 {
	color: blue;
}</code></pre>
            <p>
                Казалось бы, универсальный селектор, позволяет перебивать стили откуда угодно. Но, к сожалению, у него
                есть и обратная сторона медали - он часто становится причиной возникновения ситуаций, когда с его
                помощью поправили стили в одном месте, а сломали в другом. К тому же, злоупотребление им приводит к
                проблемам с поддержкой и читаемостью кода. Поэтому старайтесь использовать его только в крайних случаях.
            </p>
            <p>
                На рабочих проектах часто используют данный селектор внутри селектора <code>:host</code>. Это позволяет
                снизить вероятность поломки стилей в побочных местах, т.к. инкапсуляция будет отключена по данному
                селектору лишь внутри конкретного компонента, а не во всем проекте:
            </p>
            <pre><code class="language-scss">// app.component.scss

:host ::ng-deep app-child h1 {
	color: blue;
}</code></pre>
            <p>В данном случае стили в браузере теперь будут выглядеть так:</p>
            <pre><code class="language-scss">// стили в браузере

[_nghost-ng-c3283738248] app-child h1 {
	color: blue;
}</code></pre>`,
    selected: false,
    lastUpdate: '09.06.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/1GlMQJmSla0',
        },
    ],
};
