import { IInfo } from 'src/app/shared/interfaces';

export const SKIP_SELF: IInfo = {
    id: 'skipSelf',
    title: 'Декоратор <span class="variable">@SkipSelf</span>',
    body: `<p>
                <span class="attention"
                    >Декоратор <code>@SkipSelf</code> сообщает Angular, что зависимость нужно искать начиная с
                    родителя и выше, а текущий инжектор игнорировать.</span
                >
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
	// есть регистрация запрашиваемой зависимости
	providers: [SomeService],
})

export class SomeComponent {
	constructor(@SkipSelf() private someService: SomeService) {}
}</code></pre>
            <p>
                Т.к. декоратор <code>@SkipSelf</code> сообщает Angular, что зависимость не нужно искать в текущем
                инжекторе, следовательно, ее регистрация в поле <code>providers</code> будет проигнорирована. И т.к.
                выше больше нигде нет регистрации запрашиваемой зависимости, то будет сгенерирована ошибка в
                <code>NullInjector</code>.
            </p>
            <p>
                Обработать эту ошибку можно при помощи декоратора <code>@Optional</code>, т.к.
                <span class="attention">Angular позволяет комбинировать декораторы</span> <code>DI</code>:
            </p>

            <pre><code class="language-typescript">@Component({
	selector: 'app-some-component',
	templateUrl: './some.component.html',
})

export class SomeComponent {
	// ошибки не будет благодаря декоратору @Optional
	constructor(@SkipSelf() @Optional() private someService: SomeService) {}
}</code></pre>
            <p><span class="attention">Порядок расположения декораторов не имеет значения</span>.</p>`,
    selected: false,
    lastUpdate: '14.12.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/y9kMzhq2ERM?t=170',
        },
    ],
};
