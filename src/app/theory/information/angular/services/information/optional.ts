import { IInfo } from 'src/app/shared/interfaces';

export const OPTIONAL: IInfo = {
    id: 'optional',
    title: 'Декоратор <span class="variable">@Optional</span>',
    body: `<p>
                <span class="attention"
                    >Декоратор <code>@Optional</code> позволяет сделать внедряемую зависимость опциональной</span
                >.
            </p>
            <p>
                При классическом внедрении зависимости, если сервис не будет найден, <code>NullInjector</code> выдаст
                ошибку, сообщающую, что нет провайдера для запрашиваемой зависимости.
            </p>
            <p>
                <span class="attention">
                    Если указать у внедряемой зависимости декоратор <code>@Optional</code>, то в таком случае вместо
                    ошибки мы получим <code>null</code> в свойстве, через которое хотим получить доступ к внедряемой
                    зависимости</span
                >.
            </p>
            <p>
                Допустим у нас есть сервис <code>SomeService</code>, который самостоятельно нигде не регистрируется,
                т.е., его декоратор <code>@Injectable()</code> пуст:
            </p>
            <pre><code class="language-typescript">@Injectable()
export class SomeService {}</code></pre>
            <p>
                В таком случае, когда в компоненте будет запрашиваться зависимость на данный сервис и при этом он все
                также нигде не зарегистрирован, в свойство <code>someService</code> будет записан <code>null</code>.
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
    lastUpdate: '14.12.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/y9kMzhq2ERM?t=14',
        },
    ],
};
