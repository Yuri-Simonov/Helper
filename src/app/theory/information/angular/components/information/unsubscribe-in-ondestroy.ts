import { IInfo } from 'src/app/shared/interfaces';

export const UNSUBSCRIBE_IN_ONDESTROY: IInfo = {
    title: 'Важность отписывания от подписок в хуке <span class="variable">OnDestroy</span>',
    body: `<p>
            Данный этап жизненного цикла в основном
            <span class="attention"
                >используется для отписок от событий, на которые мы подписались
                в процессе работы компонента</span
            >.
        </p>
        <p>
            В примере ниже при инициализации компонента происходит подписка на
            событие маршрутизации. И в конце жизненного цикла данного компонента
            мы отменяем подписку на это же событие.
        </p>
<pre><code class="language-typescript">export class AngularComponent implements OnInit, OnDestroy {
    currentPath: string;
    currentPathSub: Subscription;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.currentPath = this.router.url;
        this.currentPathSub = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentPath = event.url;
            }
        });
	}
	
    ngOnDestroy(): void {
        this.currentPathSub.unsubscribe(); // не забываем отписаться
    }
}</code></pre>
        <p>
            Если мы не будем отписываться, но при этом удалять компонент,
            например, при переходе на другую страницу, а потом вернемся на
            страницу, где опять сработает подписка, то количество подписчиков
            уже будет 2, а не 1. Сделаем еще раз тоже самое, будет 3 подписки и тд.
            Следовательно,
            <span class="attention">
                будут лишние действия при работе кода, что явно плохо скажется
                на оптимизации.
            </span>
        </p>
        <p>
            Пример плохого использования подписок: у вас происходит подписка на
            какое-то событие внутри функции <code>setInterval</code> и вы не
            отписываетесь каждый раз при срабатывании кода. Рано или поздно
            произойдет утечка памяти и страничка в браузере "умрет" или ваше
            приложение попросту зависнет.
        </p>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
