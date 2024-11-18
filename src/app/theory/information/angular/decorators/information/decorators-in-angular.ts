import { IInfo } from 'src/app/shared/interfaces';

export const DECORATORS_IN_ANGULAR: IInfo = {
    title: 'Декораторы в Angular',
    body: `<p>
		Декораторы - это
		<span class="attention"
			>функции, которые расширяют набор полей и методов класса, к
			которому они привязаны.</span
		>
	</p>
	<pre><code class="language-typescript">@Component({
	selector: 'app-some-component',
	styleUrls: './some.component.scss',
	templateUrl: './some.component.html',
})

export class SomeComponent {}</code></pre>
	<p>
		В примере выше класс <code>SomeComponent</code> расширяется
		набором методов и полей от декоратора <code>@Component()</code>,
		которые переданы внутри конфигурационного объекта.
	</p>`,
    selected: false,
    lastUpdate: '14.09.2023',
};
