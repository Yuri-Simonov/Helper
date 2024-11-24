import { IInfo } from 'src/app/shared/interfaces';

export const PROVIDING_SERVICES: IInfo = {
    title: 'Самостоятельная регистрация зависимостей (<span class="variable">providedIn</span>)',
    body: `<p>
                Есть 2 способа зарегистрировать зависимость. Один из них - это когда зависимость регистрируется
                самостоятельно. Так могут делать сервисы и токены благодаря свойству <code>providedIn</code>, в котором
                указывается нужное значение. Второй способ рассмотрен в спойлере свойства <code>providers</code>.
            </p>
            <p>Для свойства <code>providedIn</code> можно указать следующие значения:</p>
            <ul>
                <li>
                    <span class="attention">platform</span> - зависимость будет зарегистрирована в инжекторе
                    <code>PlatformInjector</code>;
                </li>
                <pre><code class="language-typescript">@Injectable({
    providedIn: 'platform',
})
export class DataService {}</code></pre>
                <li>
                    <span class="attention">root</span> - зависимость будет зарегистрирована в корневом инжекторе
                    <code>RootInjector</code>. Данное значение по умолчанию устанавливается, когда сервис создается с
                    помощью команды Angular CLI;
                </li>
                <pre><code class="language-typescript">@Injectable({
    providedIn: 'root',
})
export class DataService {}</code></pre>
                <li><span class="attention">null</span> - зависимость нигде не зарегистрируется самостоятельно.</li>
				<pre><code class="language-typescript">@Injectable({
		providedIn: null,
	})
	export class DataService {}</code></pre>
            </ul>
            <p>
                Значение <code>null</code> уже
                <span class="attention">не относится к самостоятельной регистрации зависимости</span>. Это равносильно
                тому, что мы оставим декоратор <code>Injectable</code> пустым:
            </p>
            <pre><code class="language-typescript">@Injectable()
export class DataService {}</code></pre>
            <p>
                При использовании значения <code>null</code> зависимость необходимо будет вручную указать в поле
                <code>providers</code> того места, где предполагается его использование. Например, внедрим такую
                зависимость в компонент:
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	providers: [DataService],
})
export class AppComponent {
    constructor(private dataService: DataService) {
        console.log(this.dataService);
    }
}</code></pre>
            <p>Более подробно про значение <code>null</code> описано в спойлере свойства <code>providers</code>.</p>`,
    selected: false,
    lastUpdate: '27.10.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/mFem0yjCkn4?t=362',
        },
    ],
};
