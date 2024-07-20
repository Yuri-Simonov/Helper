import { IInfo } from '@types';

export const ATTRIBUTE: IInfo = {
    title: 'Декоратор <span class="variable">@Attribute()</span>',
    body: `<p>
		В Angular данные от родителя к дочернему компоненту можно
		передавать как статически, так и динамически:
	</p>
	<pre><code class="language-html">&lt;app-child name="какая-то_строка">&lt;/app-child> &lt;!-- статическая передача данных -->
&lt;app-child [name]="какая-то_переменная">&lt;/app-child> &lt;!-- динамическая передача данных --></code></pre>
	<p>
		Декоратор <code>@Input()</code> может обрабатывать и тот, и другой
		варианты. И т.к. данные могут изменяться, механизм
		<code>ChangeDetection</code> будет его тоже проверять на наличие
		изменений. Даже если вы каждый раз передаете статические данные и они никак
		не изменяются.
	</p>
	<p>
		Чтобы снизить нагрузку на механизм
		<code>ChangeDetection</code> и не проверять статические данные,
		используется декоратор <code>@Attribute()</code>, который
		<span class="attention"
			>помечает входящий параметр как неизменяемый на протяжении
			всего жизненного цикла приложения</span
		>.
	</p>
	<p>Пример использования:</p>
	<pre><code class="language-typescript">constructor(@Attribute('name') private name: string) {}</code></pre>
	<p>
		Как видите, в отличие от декоратора <code>@Input()</code> значение теперь принимается в конструкторе класса, а не в одном из хуков жизненного цикла компонента. А как вы знаете, конструктор вызывается лишь единожды, когда инициируется сам класс, а не компонент, поэтому
		свойство не может быть динамическим и механизм <code>ChangeDetection</code> его не отслеживает. Соответственно, <span class="attention">если вы
		захотите передать через декоратор
		<code>@Attribute()</code> динамический параметр, то Angular выдаст
		вам ошибку</span>.
	</p>`,
    selected: false,
    lastUpdate: '23.09.2023',
};