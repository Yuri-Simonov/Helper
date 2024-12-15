import { IInfo } from 'src/app/shared/interfaces';

export const USE_EXISTING: IInfo = {
    title: 'Способ <span class="variable">useExisting</span>',
    body: `<p>
                Способ <code>useExisting</code> в основном используется, когда
                <span class="attention"
                    >нужно зарегистрировать несколько токенов для одного и того же экземпляра сервиса. Это позволяет
                    избежать создания новых экземпляров для каждой зависимости и использовать уже существующие, но под
                    другим именем</span
                >.
            </p>
            <p>Допустим у нас есть 2 токена, один для обычных пользователей, а второй для админов:</p>
            <pre><code class="language-typescript">// токен для обычных пользователей
export const USER_SERVICE_TOKEN = new InjectionToken(
    'USER_SERVICE_TOKEN'
);

// токен для админов
export const ADMIN_SERVICE_TOKEN = new InjectionToken(
    'ADMIN_SERVICE_TOKEN'
);</code></pre>
            <p>
                И допустим у нас есть компонент, например <code>AppComponent</code>, внутри которого мы хотим условно
                разделить наш один единственный сервис на две его версии. Одна предназначенная для обычных пользователей
                (<code>userRandomService</code>), а вторая для админов (<code>adminRandomService</code>):
            </p>
            <pre><code class="language-typescript">export class AppComponent {
    constructor(
        @Inject(USER_SERVICE_TOKEN)
        private userRandomService: RandomService,
        @Inject(ADMIN_SERVICE_TOKEN)
        private adminRandomService: RandomService
    ) {}
}</code></pre>
            <p>
                Разные версии сервиса можно делать, например, для удобства масштабирования кода и сразу по названию
                сервиса понимать, что к чему относится. И в дальнейшем, при разрастании проекта можно спокойно будет
                разделить сервис на каждую из ролей.
            </p>
            <p>Сам сервис <code>RandomService</code> выглядит следующим образом:</p>
            <pre><code class="language-typescript">@Injectable({
    providedIn: 'root',
})
export class RandomService {
    private _randomNumber: number;

    constructor() {
        this._randomNumber = Math.floor(Math.random() * 100);
    }

    getRandomNumber() {
        return this._randomNumber;
    }
}</code></pre>
            <p>
                Теперь чтобы разделить сервис на две части, нужно зарегистрировать созданные ранее 2 токена. Если
                сделать это через <code>useClass</code>, то сервис <code>RandomService</code> перестанет быть
                <code>singleton</code>, т.к. <code>useClass</code> создает каждый раз новый экземпляр зависимости. И как
                следствие, функционал по обычным пользователям и админам будет работать с разными состояниями сервиса.
            </p>
            <p>
                Т.к. мы хотим работать с одним и тем же экземпляром сервиса, то необходимо использовать способ
                <code>useExisting</code>:
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	providers: [
		{ provide: USER_SERVICE_TOKEN, useExisting: RandomService },
    	{ provide: ADMIN_SERVICE_TOKEN, useExisting: RandomService },
	]
})

export class AppComponent {
    constructor(
        @Inject(USER_SERVICE_TOKEN)
        private userRandomService: RandomService,
        @Inject(ADMIN_SERVICE_TOKEN)
        private adminRandomService: RandomService
    ) {}
}</code></pre>`,
    selected: false,
    lastUpdate: '06.12.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/imUcdrYFTxs?t=561',
        },
    ],
};
