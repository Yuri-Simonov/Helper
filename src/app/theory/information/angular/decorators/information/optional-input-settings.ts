import { IInfo } from 'src/app/shared/interfaces';

export const OPTIONAL_INPUT_SETTINGS: IInfo = {
    title: 'Дополнительные настройки декоратора <span class="variable">@Input()</span>',
    body: `<i class="subtitle">Обязательное свойство</i>
            <p>
                По умолчанию входные данные декоратора <code>@Input&#40;&#41;</code> являются необязательными, поэтому
                ошибка проверки не возникает, если входные данные не предоставлены. При желании можно пометить
                передаваемое свойство на вход как обязательное:
            </p>
            <pre><code class="language-typescript">export class ChildComponent {
	&#64;Input({ required: true }) name: string;
}</code></pre>
            <p>
                Теперь текущему компоненту, где бы его не использовали, обязательно придется передавать свойство
                <code>name</code>, иначе Angular будет выдавать ошибку.
            </p>
            <i class="subtitle">Псевдонимы</i>
            <p>
                В декораторе <code>@Input&#40;&#41;</code> можно использовать сокращенную и полную (расширенную) записи:
            </p>
            <pre><code class="language-typescript">&#64;Input() name: string; // сокращенная запись
&#64;Input('name') userName: string; // полная запись
</code></pre>
            <p>
                Расширенная запись используется, когда необходимо переименовать входящее свойство, чтобы было удобно
                использовать его в текущем компоненте. Например, в компоненте уже используется свойство
                <code>name</code> и оно же по какой-то причине приходит извне. С помощью расширенной записи это и
                исправляется. Название входящего свойства указывается внутри круглых скобок, а его псевдоним после них.
            </p>
            <p>
                Но если в круглых скобках декоратора уже есть какие-то еще настройки, то псевдоним уже указывается как
                одна из этих настроек:
            </p>
            <pre><code class="language-typescript">export class ChildComponent {
	&#64;Input({ alias: "userName", required: true }) name: string;
}</code></pre>
            <i class="subtitle">Преобразование данных</i>
            <p>
                Поступающие данные извне через декоратор <code>@Input&#40;&#41;</code> могут быть так или иначе
                преобразованы перед тем, как присвоятся свойству компонента. Например, необходимо входные данные всегда
                переводить в верхний регистр:
            </p>
            <pre><code class="language-typescript">export class ChildComponent {
	&#64;Input({
		transform: (value: string) => value.toUpperCase()
	})
	name: string;
}</code></pre>
            <p>При использовании данного функционала следует учитывать, что:</p>
            <ul>
                <li>
                    Функция преобразования должна быть чистой, т.е., при одинаковых значениях аргументов она всегда
                    возвращает одинаковые значения и не должна иметь наблюдаемых побочных эффектов;
                </li>
                <li>Функция преобразования не должна содержать внутри тяжелых вычислений;</li>
                <li>
                    Функции преобразования не могут быть заданы условно, но при необходимости можно использовать
                    логические операторы внутри них.
                </li>
            </ul>
            <i class="subtitle">Преобразование булевого типа данных</i>
            <p>
                Например, иногда нам может потребоваться создать логическое входное свойство, что-то вроде
                переключателя:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон дочернего компонента -->
&lt;button [disabled]="disabled">{{ name }}&lt;/button></code></pre>
            <pre><code class="language-typescript">// класс дочернего компонента
export class ChildComponent {
	&#64;Input() disabled: boolean;
}</code></pre>
            <p>
                Но проблема в том, что для установки этого флага нам нужно использовать входное выражение (с помощью
                <code>[]</code>) в родительском компоненте:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child [disabled]="true">&lt;/app-child></code></pre>
            <p>
                Да, это работает. Но, что, если мы хотим упросить это дело и просто указывать атрибут, когда нам нужен
                один результат, и не указывать его, когда нужен другой, противоположный первому?
            </p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child disabled>&lt;/app-child></code></pre>
            <p>Этого можно добиться, применив преобразование <code>booleanAttribute</code>:</p>
            <pre><code class="language-typescript">// класс дочернего компонента
export class ChildComponent {
	&#64;Input({ transform: booleanAttribute }) disabled: boolean;
}</code></pre>
            <p>
                Теперь, чтобы в свойство <code>disabled</code> попало значение <code>true</code>, достаточно его просто
                указать на компоненте как атрибут тега (см. пример ниже). Если этого не сделать, значением свойства
                <code>disabled</code> будет <code>false</code>.
            </p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child disabled>&lt;/app-child></code></pre>
            <i class="subtitle">Преобразование числового типа данных</i>
            <p>Преобразование <code>numberAttribute</code> преобразует входящий тип данных в числовой:</p>
            <pre><code class="language-typescript">// класс дочернего компонента
export class ChildComponent {
	&#64;Input({ transform: numberAttribute }) age: string;
}</code></pre>
            <p>Имея это преобразование, можно установить свойство <code>age</code> следующим образом:</p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child age="16">&lt;/app-child></code></pre>
            <p>
                И теперь любые данные, которые передаются через свойство <code>age</code>, будут автоматически
                преобразовываться в число или <code>NaN</code>, если преобразование невозможно.
            </p>
            <p>Конечно, можно обойтись и без преобразования. Тогда пример выше выглядел бы следующим образом:</p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child [age]="16">&lt;/app-child></code></pre>`,
    selected: false,
    lastUpdate: '27.02.2024',
};
