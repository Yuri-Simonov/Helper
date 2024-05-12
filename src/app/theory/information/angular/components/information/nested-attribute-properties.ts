import { IInfo } from '@types';

export const NESTED_ATTRIBUTE_PROPERTIES: IInfo = {
    title: 'Вложенные свойства атрибутов',
    body: `<p>
		В Angular можно использовать вложенные свойства у атрибутов.
		Например, вы хотите задать ширину элементу в процентах. Сделать
		это можно различными способами:
	</p>
<pre><code class="language-html">&lt;p style="width: 50%">Какой-то текст&lt;/p>
&lt;p [style.width.%]="50">Какой-то текст&lt;/p></code></pre>
	<p>Обе записи выдадут одинаковый результат.</p>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
