import { IInfo } from 'src/app/shared/interfaces';

export const SKIP_SELF: IInfo = {
    title: 'Декоратор <span class="variable">@SkipSelf()</span>',
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
                Если и здесь не найдется определение сервиса, то будет
                сгенерирована ошибка.
            </li>
        </ul>
        <p>
            Допустим, вы определили сервис на уровне компонента и на уровне всего приложения. И вам нужен
            последний. В этом случае
            вам и поможет декоратор <code>@SkipSelf()</code>, который <span class="attention">исключает поиск сервиса на том уровне, где он указан</span>, то есть, в нашем случае на уровне компонента.
        </p>
        <pre><code class="language-typescript">@Component({
	selector: 'app-some-component',
	templateUrl: './some.component.html',
	providers: [SomeService], // добавление сервиса на уровне компонента
})

export class SomeComponent {
	constructor(@SkipSelf() private someService: SomeService) {}
}</code></pre>
        <p>
            Исходя из вышесказанного, можно сделать следующий трюк: если указать
            два одинаковых сервиса в одном компоненте, но перед одним из них
            поставить <code>@SkipSelf()</code>, то удастся получить доступ к
            локальному и глобальному экземплярам одновременно.
        </p>`,
    selected: false,
    lastUpdate: '23.09.2023',
};
