import { IInfo } from '@types';

export const STYLE_ENCAPSULATION: IInfo = {
    title: 'Инкапсуляция стилей. <span class="variable">ViewEncapsulation</span>',
    body: `<p>
                <span class="attention">Инкапсуляция стилей - это область видимости стилей текущего компонента</span>.
                За нее отвечает свойство <code>encapsulation</code> декоратора <code>@Component()</code>.
            </p>
            <p>
                В качестве значения данного свойства используется один из трех вариантов, которые хранятся в
                перечислении <code>ViewEncapsulation</code>:
            </p>
            <ul>
                <li>
                    <code>ViewEncapsulation.Emulated</code> - это эмулируемая инкапсуляция, которая
                    <span class="attention">используется по умолчанию</span>. Этот вариант указывать явно в декораторе
                    не нужно;
                </li>
                <li>
                    <code>ViewEncapsulation.ShadowDom</code> - это инкапсуляция с помощью теневого DOM-дерева
                    (ShadowDom);
                </li>
                <li><code>ViewEncapsulation.None</code> - это отсутствие инкапсуляции в компоненте вовсе.</li>
            </ul>
            <i class="subtitle">ViewEncapsulation.Emulated</i>
            <p>
                Т.к. данное значение инкапсуляции используется по умолчанию, то явно его указывать в конфигурационном
                объекте декоратора не нужно. Ниже данное значение указано лишь ради примера.
            </p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	// Задаем вид инкапсуляции
	encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {}</code></pre>
            <p>
                Если объяснять, что такое эмулируемая инкапсуляция простыми словами, то
                <span class="attention">
                    это когда стили конкретного компонента работают только внутри него самого и не влияют никак на
                    другие компоненты </span
                >.
            </p>
            <p>
                Допустим у нас есть 2 компонента: <code>AppComponent</code> и <code>ChildComponent</code>. И в одном из
                них изменили цвет текста:
            </p>
            <pre><code class="language-scss">// app.component.scss

h1 {
	color: blue;
}</code></pre>
            <p>Шаблон компонента <code>AppComponent</code> выглядит следующим образом:</p>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;h1>Заголовок компонента AppComponent (app-root)&lt;/h1>
&lt;app-child>&lt;/app-child></code></pre>
            <p>В шаблоне компонента <code>ChildComponent</code> так же добавим заголовок:</p>
            <pre><code class="language-html">&lt;!-- child.component.html --&gt;

&lt;h1>Заголовок компонента ChildComponent (app-child)&lt;/h1></code></pre>
            <p>
                И в таком примере цвет текста изменит только заголовок компонента <code>AppComponent</code>, т.к. стили
                будут распространяться только на него. На компонент <code>ChildComponent</code> не подействуют стили,
                заданные в файле <code>app.component.scss</code>, благодаря эмулируемой инкапсуляции.
            </p>
            <p>
                Принцип работы эмулируемой инкапсуляции заключается в том, что Angular под капотом добавляет различные
                атрибуты ко всем элементам разметки компонента, который использует данный вид инкапсуляции. Всего таких
                атрибутов два вида. Первый начинается с префикса <code>_nghost</code>, а второй с
                <code>_ngcontent</code>:
            </p>
            <pre><code class="language-html">&lt;app-root _nghost-ng-c633397996>
	&lt;h1 _ngcontent-ng-c633397996>Заголовок компонента AppComponent (app-root)&lt;/h1>
	&lt;app-child _ngcontent-ng-c633397996 _nghost-ng-c2472379333>&lt;/app-child>	
&lt;/app-root></code></pre>
            <p>
                Исходя из этих префиксов уже можно догадаться, что атрибут, начинающийся с <code>_nghost</code>,
                добавляется элементам, у которых есть дочерние элементы, т.е. сам элемент является родителем или, если
                переводить дословно, хозяином.
            </p>
            <p>
                Соответственно, если элемент является дочерним, то у него будет атрибут, начинающийся с префикса
                <code>_ngcontent</code>.
            </p>
            <p>
                Но также на одном и том же элементе могут быть оба эти атрибута одновременно, как, например, сейчас на
                компоненте <code>app-child</code>. Т.к. он является дочерним элементом для корневого компонента
                <code>app-root</code> и в это же время он является родителем для своего заголовка <code>h1</code>.
            </p>
            <p>
                После этих префиксов идет уникальное имя для текущего приложения (<code>ng</code>), т.к. на одной и той
                же странице может быть запущено сразу несколько Angular-приложений. И у каждого, соответственно, будет
                свое имя и таким образом их стили не будут пересекаться.
            </p>
            <p>
                И в самом конце идет буква "<code>с</code>" с номером. Буква "<code>с</code>" - это сокращение от слова
                "component", а номер - это просто его уникальный идентификатор, чтобы опять же, избежать пересечения
                стилей с другими компонентами.
            </p>
            <p>
                Также можно заметить, что атрибуты, начинающиеся с префикса <code>_ngcontent</code> имеют те же
                порядковые номера, что и их родители с атрибутами <code>_nghost</code>.
            </p>
            <p>Пример того, как такие стили выглядят в браузере:</p>
            <pre><code class="language-scss">h1[_ngcontent-ng-c633397996] {
    color: blue;
}</code></pre>
            <i class="subtitle">ViewEncapsulation.ShadowDOM</i>
            <p>
                Для задания данного вида инкапсуляции необходимо его явно указывать в конфигурационном объекте
                декоратора:
            </p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	// Задаем вид инкапсуляции
	encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {}</code></pre>
            <p>Продублируем пример из эмулируемой инкапсуляции:</p>
            <pre><code class="language-scss">// app.component.scss

h1 {
	color: blue;
}</code></pre>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;h1>Заголовок компонента AppComponent (app-root)&lt;/h1>
&lt;app-child>&lt;/app-child></code></pre>
            <pre><code class="language-html">&lt;!-- child.component.html --&gt;

&lt;h1>Заголовок компонента ChildComponent (app-child)&lt;/h1></code></pre>
            <p>
                При данном виде инкапсуляции уже оба заголовка (компонентов <code>app-root</code> и
                <code>app-child</code>) изменят цвет текста.
            </p>
            <p>
                Все дело в том, что
                <span class="attention">
                    при данном виде инкапсуляции для компонентов создается теневое DOM-дерево, т.е. такие компоненты
                    становятся изолированными от основного DOM-дерева и не будут использовать его глобальные стили</span
                >.
            </p>
            <p>
                Тут также еще стоит обратить внимание на то, что содержимое компонента, в котором включен данный вид
                инкапсуляции, оборачивается в элемент <code>shadow-root</code>, внутри которого устанавливаются новые
                глобальные стили для содержимого элемента <code>shadow-root</code>. Фактически, стили, которые до этого
                распространялись только на компонент <code>AppComponent</code>, теперь стали глобальными для всего его
                содержимого. Поэтому дочерний компонент видит стили компонента <code>AppComponent</code> и из-за этого
                цвет заголовка изменился.
            </p>
            <p>При данном виде инкапсуляции Angular также под капотом добавляет атрибуты на элементы разметки.</p>
            <i class="subtitle">ViewEncapsulation.None</i>
            <p>При данном значении инкапсуляция полностью отключается для конкретного компонента.</p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	// Задаем вид инкапсуляции
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}</code></pre>
            <p>Допустим в компоненте <code>ChildComponent</code> мы задали новый цвет для заголовка <code>h1</code>:</p>
            <pre><code class="language-scss">// child.component.scss

h1 {
	color: cyan;
}</code></pre>
            <p>
                То в таком случае данный стиль для заголовка <code>h1</code> станет глобальным для всего проекта. Т.е.,
                если где-то еще в проекте используется заголовок <code>h1</code> и у него не задан стиль для цвета
                текста, то он к нему тоже применится стиль <code>color: cyan</code>, даже несмотря на то, что он
                находится в другом компоненте.
            </p>
            <p>
                В данном случае к заголовку <code>h1</code> компонента AppComponent также применится данный стиль. Т.е.,
                фактически мы сломали стили в другом месте проекта.
            </p>
            <p>
                <span class="attention"
                    >Отключение инкапсуляции - это крайне нежелательный вариант написания стилей в проекте, т.к.
                    приносит лишь проблемы при разрастании проекта. Поэтому старайтесь им вообще не пользоваться</span
                >.
            </p>`,
    selected: false,
    lastUpdate: '08.06.2024',
    footerLinks: [{ path: 'https://youtu.be/5sx8_jKl5GU?t=213' }],
};
