import { IInfo } from '@types';

export const DIFFERENCES_BETWEEN_DIRECTIVE_AND_COMPONENT_LIFECYCLE: IInfo = {
    title: 'Различия между жизненными циклами компонента и директивы',
    body: `<p>
		Если заглянуть "под капот" интерфейса декоратора компонента, то можно
		увидеть, что он наследуются от интерфейса декоратора директивы:
	</p>
<pre><code class="language-typescript">// из файла "@angular/core"
export declare interface Component extends Directive {}</code></pre>
	<p>
		Следовательно, 
		<span class="attention">
			компоненты - это те же директивы, но с дополнительными
			возможностями</span
		>. Поэтому можно сделать вывод от том, что
		<span class="attention"
			>директивы имеют аналогичный жизненный цикл, что и
			компоненты</span>, т.е. <span class="attention">различий нет</span>.
	</p>`,
    selected: false,
    lastUpdate: '07.10.2023',
};
