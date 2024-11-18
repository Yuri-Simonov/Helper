import { IInfo } from 'src/app/shared/interfaces';

export const KEY_COMBINATION_EVENTS: IInfo = {
    title: 'Обработка событий комбинаций клавиш',
    body: `<p>
		Очень редко, но бывают ситуации, когда необходимо обработать
		событие комбинации конкретных клавиш. В Angular это можно
		сделать следующим образом:
	</p>
	<pre><code class="language-html">&lt;input type="text" (keydown.control.enter)="someFunction()" /></code></pre>
	<p>
		Соответственно, когда <code>input</code> будет в фокусе, зажав комбинацию
		клавиш <code>Ctrl + Enter</code> у вас вызовется функция
		<code>someFunction</code>, в которую уже вам решать какую логику
		заложить. 
	</p>
	<p>Если нужно обработать еще больше клавиш, то также перечисляете их через точку, как в примере выше.</p>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
