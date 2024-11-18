import { IInfo } from 'src/app/shared/interfaces';

export const OPTIONAL: IInfo = {
    title: 'Декоратор <span class="variable">@Optional()</span>',
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
                <span class="attention">Уровень приложения</span> - и если все
                еще не нашел, то будет осуществляться поиск в корневом модуле.
                Если и здесь не найдется определение сервиса, то
                <span class="attention"> будет сгенерирована ошибка </span>.
            </li>
        </ul>
        <p>
            С помощью декоратора <span class="attention"><code>@Optional()</code> мы можем обработать
            эту ошибку. В переменную, которая должна была стать экземпляром
            сервиса, просто запишется <code>null</code></span>.
        </p>
		<pre><code class="language-typescript">@Component({
	selector: 'app-some-component',
	templateUrl: './some.component.html',
	providers: [SomeService], // добавление сервиса на уровне компонента
})

export class SomeComponent {
	constructor(@Optional() private someService: SomeService) {}
}</code></pre>`,
    selected: false,
    lastUpdate: '03.02.2024',
};
