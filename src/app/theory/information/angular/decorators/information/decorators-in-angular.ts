import { IInfo } from 'src/app/shared/interfaces';

export const DECORATORS_IN_ANGULAR: IInfo = {
    title: 'Декораторы в Angular',
    body: `<p>
                Декораторы - это
                <span class="attention"
                    >функции, которые расширяют набор полей и методов класса, к которому они привязаны.</span
                >
            </p>
            <p>
                Ниже показан пример использования декоратора <code>@Component()</code>. Внутри него указан
                конфигурационный объект, который расширяет функционал класса <code>SomeComponent</code>:
            </p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-some-component',
	styleUrls: './some.component.scss',
	templateUrl: './some.component.html',
})

export class SomeComponent {}</code></pre>
            <p>
                Благодаря указанию декоратора <code>@Component()</code> Angular понимает, что класс
                <code>SomeComponent</code> является компонентом.
            </p>
			<p>В Angular есть и другие декораторы, которые помогают Angular понимать, что мы хотим делать с классом ниже:</p>
			<ul>
				<li><span class="attention">@Component()</span> - декоратор компонента;</li>
				<li><span class="attention">@Injectable()</span> - декоратор сервиса;</li>
				<li><span class="attention">@Directive()</span> - декоратор директивы;</li>
				<li><span class="attention">@Pipe()</span> - декоратор пайпы;</li>
				<li><span class="attention">@NgModule()</span> - декоратор модуля.</li>
			</ul>
			<p>Помимо декораторов, перечисленных выше, в Angular есть еще декораторы, которые используются непосредственно в коде.</p>
			<ul>
				<li><span class="attention">@Input()</span> - декоратор, позволяющий получать данные из родительского компонента;</li>
				<li><span class="attention">@Output()</span> - декоратор, позволяющий передавать данные в родительский компонент;</li>
				<li><span class="attention">@ViewChild()</span> - декоратор, позволяющий получать данные из дочернего компонента;</li>
				<li><span class="attention">@Inject()</span> - декоратор, позволяющий получать доступ к внедряемой зависимости.</li>
				<li>и так далее...</li>
			</ul>
			<p>Информацию об указанных декораторах и не только можно найти в этом и других разделах данного проекта.</p>`,
    selected: false,
    lastUpdate: '14.12.2024',
};
