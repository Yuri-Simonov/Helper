import { IInfo } from 'src/app/shared/interfaces';

export const ROUTING_EVENTS: IInfo = {
    title: 'События маршрутизации при переходе с одного маршрута на другой',
    body: `<p>
            В момент перехода с одного адреса на другой, в Angular приложении
            происходят следующие события:
        </p>
        <ul>
            <li>
                <span class="attention">NavigationStart</span> - начало
                навигации;
            </li>
            <li>
                <span class="attention">RoutesRecognized</span> - завершение
                процесса парсинга URL и распознавания маршрута;
            </li>
            <li>
                <span class="attention">RouteConfigLoadStart</span> -
                инициируется непосредственно перед асинхронной загрузкой
                маршрута (для модулей, подгружаемых асинхронно с помощью метода
                <code>loadChildren</code>);
            </li>
            <li>
                <span class="attention">RouteConfigLoadEnd</span> - инициируется
                непосредственно после асинхронной загрузки маршрута;
            </li>
            <li>
                <span class="attention">NavigationEnd</span> - завершение
                навигации;
            </li>
            <li>
                <span class="attention">NavigationCancel</span> - навигация
                отклонена. Возникает, когда <code>Guard</code> возвращает
                <code>false</code>;
            </li>
            <li>
                <span class="attention">NavigationError</span> - возникновение
                непредвиденной ошибки в процессе осуществления навигации.
            </li>
        </ul>
        <p>
            Перечисленные выше события могут быть обработаны в любом компоненте
            или сервисе приложения. Чтобы определить для них обработчики,
            необходимо подписаться на свойство <code>events</code> сервиса
            <code>Router</code>.
        </p>
<pre><code class="language-typescript">constructor(private router: Router) {
	this.router.events.subscribe((event) => {
		if (event instanceof NavigationStart) {
			console.log('Navigation Start');
		}
	});
}</code></pre>
        <p>
            В примере выше в консоль выведется сообщение в момент начала
            процесса перехода на другой адрес.
        </p>
        <p>
            <span class="attention"
                >События маршрутизации часто используются для отображения и
                скрытия индикатора загрузки страницы.</span
            >
        </p>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
