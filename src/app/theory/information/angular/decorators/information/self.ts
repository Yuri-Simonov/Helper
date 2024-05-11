import { IInfo } from '@types';

export const SELF: IInfo = {
    title: 'Декоратор <span class="variable">@Self()</span>',
    body: `<p>
		Сервисы могут быть определены на трех уровнях и, когда компонент
		запрашивает сервис, то
		<span class="attention">
			поиск начинается с нижних уровней и затем вверх по
			иерархии</span
		>:
	</p>
	<ul>
		<li>
			<span class="attention">Уровень компонента</span> - сначала
			Angular будет искать вызываемый сервис здесь;
		</li>
		<li>
			<span class="attention">Уровень модуля</span> - потом в
			родительском модуле, если не найдет в компоненте;
		</li>
		<li>
			<span class="attention">Уровень приложения</span> - и если
			все еще не нашел, то будет осуществляться поиск в корневом
			модуле. Если и здесь не найдется определение сервиса, то
			будет сгенерирована ошибка.
		</li>
	</ul>
	<p>
		<span class="attention">
			Декоратор <code>@Self()</code> сообщит <code>DI</code>, что поиск
			нужно осуществлять только лишь в провайдере текущего компонента</span>.
		Но также стоит учитывать тот факт, что <span class="attention">
			если <code>DI</code> не
			найдет сервис в текущем компоненте, будет сгенерирована ошибка</span>.
	</p>
	<pre><code class="language-typescript">@Component({
	selector: 'app-some-component',
	templateUrl: './some.component.html',
	providers: [SomeService], // добавление сервиса на уровне компонента
})

export class SomeComponent {
	constructor(@Self() private someService: SomeService) {}
}</code></pre>`,
    selected: false,
    lastUpdate: '23.09.2023',
};
