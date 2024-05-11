import { IInfo } from '@types';

export const ASYNC_ROUTING: IInfo = {
    title: 'Асинхронная маршрутизация',
    body: `<p>
            Асинхронная маршрутизация (lazy load routing)
            <span class="attention"
                >решает проблему оптимизации загрузки приложения</span
            >
            и используется в основном, когда приложение начинает разрастаться и
            увеличивается общее время его загрузки.
        </p>
        <p>
            <span class="attention">
                Асинхронная маршрутизация позволяет загружать модули в момент
                обращения пользователя к одному из его маршрутов или загружать
                только те, которые доступны пользователю в зависимости от его
                прав.
            </span>
        </p>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: 'items',
		loadChildren: () => import('./items/items.module').then(m => m.ItemsModule),
		canLoad: [AuthGuard] // для lazy load используется именно canLoad guard
	}
];</code></pre>
        <p>
            Также в Angular
            <span class="attention"
                >можно загружать асинхронные модули в фоновом режиме</span
            >. По умолчанию данная опция отключена.
        </p>
        <p>
            Для того, чтобы включить загрузку асинхронных модулей в фоновом
            режиме, необходимо в объекте конфигурации вторым параметром методу
            маршрутизации <code>forRoot</code> передать свойство
            <code>preloadStrategy</code> со значением
            <code>PreloadAllModules</code>:
        </p>
<pre><code class="language-typescript">RouterModule.forRoot( '{}', { preloadingStrategy: PreloadAllModules })</code></pre>
        <p>
            Также
            <span class="attention"
                >можно создавать собственные сценарии предзагрузки</span
            >. Обычно это делается, когда у вас большое приложение и какие-то
            страницы посещаются часто, а какие-то - нет. Логично, что часто
            используемые модули нужно подгружать фоном в первую очередь.
        </p>
<pre><code class="language-typescript">// custom-preloading-strategy.service.ts
@Injectable({ providedIn: 'root' })
export class CustomPreloadingStrategyService implements PreloadingStrategy {
	preload(route: Route, load: () => Observable<any>): Observable<any> {
		const popularModules: any =  ['contacts', 'products']
		if (popularModules.includes(route.path)) {
			return load()
		} else {
			return of(null)
		}
 	}
}</code></pre>
        <p>
            В примере выше предварительно загружаются модули, URL которых
            начинается с одного из значений, описанных в массиве переменной
            <code>popularModules</code>. Метод <code>preload</code> всегда
            должен возвращать Observable и вызывается для каждого маршрута с
            двумя аргументами - маршрут (<code>route</code>) и функция загрузки
            модуля (<code>load</code>). Если модуль не удовлетворяет критерию
            предварительной загрузки, необходимо вернуть
            <code>Observable</code> со значением <code>null</code>.
        </p>
        <p>
            И теперь остается лишь указать данную стратегию в свойстве
            <code>preloadStrategy</code>:
        </p>
		<pre><code class="language-typescript">RouterModule.forRoot( '{}', { preloadingStrategy: CustomPreloadingStrategyService })</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
