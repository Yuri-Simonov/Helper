import { IInfo } from 'src/app/shared/interfaces';

export const SIGNALS_UNSUBSCRIBE: IInfo = {
    title: 'Управление жизненным циклом через DI',
    body: `<p>
                До появления сигналов управление "долгоживущими" подписками и другими ресурсами было тесно связано с
                хуками жизненного цикла, в частности с <code>ngOnDestroy</code>. Это приводило к большому количеству
                повторяющегося кода (<code>takeUntil</code>, <code>unsubscribe</code> и т.д.).
            </p>
            <pre><code class="language-typescript">@Component({...})
export class OldComponent implements OnInit, OnDestroy {
	private subscription: Subscription;

	ngOnInit() {
		this.subscription = someObservable$.subscribe(...);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}</code></pre>
            <p>
                Сигнальный <code>effect</code> предлагает более элегантный подход, используя существующий механизм
                <code>Dependency Injection</code> (DI) и токен <code>DestroyRef</code>.
            </p>
            <pre><code class="language-typescript">@Component({...})
export class NewComponent {
	constructor() {
		effect(() => {
			// Этот эффект автоматически подпишется на сигналы внутри
			// и будет автоматически уничтожен вместе с компонентом.
			console.log(&#96;Значение сигнала: &#36;{mySignal()}&#96;);
		});
	}
}</code></pre>
            <i class="subtitle">Как это работает?</i>
            <p>
                <code>effect</code>, вызванный в конструкторе компонента, автоматически "цепляется" к
                <code>DestroyRef</code> этого компонента. <code>DestroyRef</code> - это DI-токен, который предоставляет
                хук <code>onDestroy</code>. Когда компонент уничтожается, <code>DestroyRef</code>
                вызывает все зарегистрированные на нем колбэки, включая функцию очистки, неявно созданную для нашего
                <code>effect</code>.
            </p>
            <p>
                Это делает код чище и позволяет легко выносить реактивную логику в отдельные сервисы или композитные
                функции, не привязываясь к хукам жизненного цикла конкретного компонента.
            </p>`,
    selected: false,
    lastUpdate: '14.12.2025',
};
