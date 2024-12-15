import { IInfo } from 'src/app/shared/interfaces';

export const SELF: IInfo = {
    title: 'Декоратор <span class="variable">@Self()</span>',
    body: `<p>
                <span class="attention"
                    >Декоратор <code>@Self()</code> сообщает Angular, что зависимость нужно искать только в том
                    инжекторе, где она запрашивается. Все родительские инжекторы будут игнорироваться</span
                >. Если регистрация запрашиваемой зависимости не будет найдена в текущем инжекторе, то будет
                сгенерирована ошибка в <code>NullInjector</code>.
            </p>
            <p>
                Допустим у нас есть сервис <code>SomeService</code>, который самостоятельно нигде не регистрируется,
                т.е., его декоратор <code>@Injectable()</code> пуст:
            </p>
            <pre><code class="language-typescript">@Injectable()
export class SomeService {}</code></pre>
            <p>И есть компонент, в котором есть регистрация запрашиваемой зависимости:</p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-some-component',
	templateUrl: './some.component.html',
	// регистрация запрашиваемой зависимости
	providers: [SomeService],
})

export class SomeComponent {
	constructor(@Self() private someService: SomeService) {}
}</code></pre>
            <p>
                В таком случае все будет работать корректно, т.к. запрошенная зависимость будет найдена в текущем
                инжекторе.
            </p>
            <p>
                В примере выше, если убрать регистрацию сервиса <code>SomeService</code> в поле <code>providers</code>,
                то будет сгенерирована ошибка. Ее можно обработать при помощи декоратора <code>@Optional()</code>, т.к.
                <span class="attention">Angular позволяет комбинировать декораторы</span> <code>DI</code>:
            </p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-some-component',
	templateUrl: './some.component.html',
	// нет регистрации запрашиваемой зависимости
})

export class SomeComponent {
	// ошибки не будет благодаря декоратору @Optional()
	constructor(@Self() @Optional() private someService: SomeService) {}
}</code></pre>
            <p>Также учтите, что <span class="attention">порядок расположения данных декораторов не имеет значения</span>.</p>`,
    selected: false,
    lastUpdate: '14.12.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/y9kMzhq2ERM?t=108',
        },
    ],
};
