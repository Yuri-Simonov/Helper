import { IInfo } from 'src/app/shared/interfaces';

export const INJECT_VS_CONSTRUCTOR: IInfo = {
    title: 'Функция <span class="variable">inject</span> vs <span class="variable">constructor</span>',
    body: `<p>
                Внедрять зависимости можно как через <span class="variable">constructor</span> класса, так и через
                функцию <span class="variable">inject</span>
            </p>
            <p>Ниже показаны примеры внедрения произвольного сервиса <code>DataService</code> через оба способа.</p>
            <pre><code class="language-typescript">// пример через constructor
export class AppComponent {
    constructor(private dataService: DataService) {}
}</code></pre>
            <pre><code class="language-typescript">// пример через функцию inject
export class AppComponent {
	private dataService = inject(DataService);
}</code></pre>
            <p>Но между данными способами есть небольшие различия, которые описаны ниже.</p>
            <i class="subtitle">Места внедрения зависимостей</i>
            <p>
                Начнем с мест, где можно внедрять зависимости. С конструктором класса все понятно. Перечисляем нужные
                зависимости в круглых скобках и на этом варианты заканчиваются.
            </p>
            <pre><code class="language-typescript">export class AppComponent {
	// перечисляем зависимости в круглых скобках
    constructor(private dataService: DataService) {}
}</code></pre>
            <p>
                Функция <code>inject</code> позволяет внедрять зависимости как внутри конструктора, так и снаружи в
                свойствах класса:
            </p>
            <pre><code class="language-typescript">export class AppComponent {
	// внедрение зависимостей в свойствах класса
	private dataService1 = inject(DataService);
	private dataService2: DataService;

	constructor() {
		// внедрение зависимости в конструкторе класса
		this.dataService2 = inject(DataService);
	}
}</code></pre>
            <p>
                Но если попытаться вызвать функцию <code>inject</code> в пользовательском методе класса или в методах
                жизненного цикла компонента, то будет ошибка в консоли. Angular на такую запись ругаться не будет.
            </p>
            <pre><code class="language-typescript">export class AppComponent {
	private dataService: DataService;

	ngOnInit() {
		// недопустимое место вызова функции inject
		this.dataService = inject(DataService);
	}
}</code></pre>
            <i class="subtitle">Читаемость кода</i>
            <p>
                Те, кто давно работает с Angular, уже привыкли, что всё, что нужно, например, текущей сущности,
                внедряется в нее именно в конструкторе класса. А функция <code>inject</code> позволяет это делать при
                инициализации свойств класса. И внедрение зависимости может легко затеряться среди других свойств,
                которые могут быть, особенно если класс имеет большой функционал:
            </p>
            <pre><code class="language-typescript">export class AppComponent {
	// все подряд, и простые свойства, и внедрения зависимостей
	private dataService = inject(DataService);
	public userName: string = 'John';
	public userAge: number = 22;
	private userService = inject(UserService);
}</code></pre>
            <p>Т.е. снижается общая читаемость кода.</p>
            <p>
                Хотя если следить за чистотой и порядком в коде, разграничивая свойства класса и внедряемые зависимости,
                то можно этот момент и опустить.
            </p>
            <pre><code class="language-typescript">export class AppComponent {
	// отдельно простые свойства
	public userName: string = 'John';
	public userAge: number = 22;

	// отдельно внедрения зависимостей
	private dataService = inject(DataService);
	private userService = inject(UserService);
}</code></pre>
            <p>
                Плюс при таком подходе код якобы выглядит более лаконичным и не нужно использовать декоратор
                <code>@Inject</code>:
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-some',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: TOKEN, useValue: 123 }],
})
export class SomeComponent {
	// не нужен декоратор @Inject
	private token1 = inject(TOKEN);

	constructor(
		// нужен декоратор @Inject
        @Inject(TOKEN) private token2: number
    ) {}
}</code></pre>
            <i class="subtitle">Наследование классов</i>
            <p>Следующее различие заключается при использовании наследования классов.</p>
            <p>
                Допустим у нас есть 2 сервиса. Один будет использоваться как базовый класс, а второй будет от него
                наследоваться:
            </p>
            <pre><code class="language-typescript">// базовый сервис
@Injectable()
export class BasicService {}

// сервис, который наследуется от базового
@Injectable()
export class UserService extends BasicService {
    constructor() {
        super();
    }
}</code></pre>
            <p>В базовом классе внедрим какую-нибудь зависимость, например на модуль <code>HttpClient</code>:</p>
            <pre><code class="language-typescript">@Injectable()
export class BasicService {
    constructor(private http: HttpClient) {}
}</code></pre>
            <p>Т.к. второй сервис наследуется от базового, то ему теперь тоже необходимо внедрить эту зависимость:</p>
            <pre><code class="language-typescript">@Injectable()
export class BasicService {
    constructor(private http: HttpClient) {}
}

@Injectable()
export class UserService extends BasicService {
	// добавляем необходимую для базового класса зависимость
    constructor(http: HttpClient) {
        super(http);
    }
}</code></pre>
            <p>
                Если таких сервисов, которые наследуются от базового, несколько, то им всем необходимо будет добавлять
                зависимости, которые требуются базовому сервису.
            </p>
            <p>
                Если базовому сервису понадобятся в дальнейшем еще зависимости, то их аналогично нужно будет внедрять и
                наследникам. И т.д.
            </p>
            <p>
                Но если в базовом сервисе использовать функцию <code>inject</code>, тогда нам не нужно будет внедрять
                зависимости еще и в наследуемых классах, т.к. в базовом классе мы убираем внедрение зависимостей из
                конструктора:
            </p>
            <pre><code class="language-typescript">@Injectable()
export class BasicService {
	// Зависимость внедряется через функцию inject
    private httpInject = inject(HttpClient);
}

@Injectable()
export class UserService extends BasicService {
	// теперь в конструкторе наследуемого класса достаточно вызвать super
    constructor() {
        super();
    }
}</code></pre>
            <p>
                В дальнейшем,
                <span class="attention"
                    >если базовый класс будет как-то расширяться, нам не нужно будет редактировать еще код и в
                    наследуемых классах</span
                >. Что выглядит довольно-таки удобно.
            </p>`,
    selected: false,
    lastUpdate: '19.01.2025',
    footerLinks: [
        {
            path: 'https://youtu.be/GpRz_8EZvZY?t=225',
        },
    ],
};
