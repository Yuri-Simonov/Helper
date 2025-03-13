import { IInfo } from 'src/app/shared/interfaces';

export const ROUTE_REUSE_STRATEGY: IInfo = {
    title: '<span class="variable">RouteReuseStrategy</span>',
    body: `<p>
                По умолчанию Angular уничтожает компонент при смене маршрута, даже если возвращаешься на тот же путь. Но
                данное поведение можно изменить с помощью <code>RouteReuseStrategy</code>.
            </p>
            <p>
                <code>RouteReuseStrategy</code> — это
                <span class="attention">механизм кэширования компонентов при навигации</span>.
            </p>
            <p>Он позволяет:</p>
            <ul>
                <li>
                    Сохранять состояние компонентов при возврате (например, список товаров не перерисовывается заново);
                </li>
                <li>Переключаться между маршрутами без уничтожения и пересоздания компонентов;</li>
                <li>Настраивать переиспользование маршрутов по своему усмотрению.</li>
            </ul>
            <p>
                Чтобы изменить поведение по умолчанию, необходимо создать класс, реализующий класс
                <code>RouteReuseStrategy</code> и переопределяющий его методы:
            </p>
            <pre><code class="language-typescript">import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
	private storedRoutes = new Map&lt;string, DetachedRouteHandle>();

	// Определяем, следует ли отсоединить компонент (сохранить его)
	shouldDetach(route: ActivatedRouteSnapshot): boolean {
		return route.routeConfig?.path === 'home'; // Кэшируем только 'home'
	}

	// Сохраняем компонент
	store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
		if (handle) this.storedRoutes.set(route.routeConfig!.path!, handle);
	}

	// Определяем, следует ли восстановить компонент
	shouldAttach(route: ActivatedRouteSnapshot): boolean {
		return this.storedRoutes.has(route.routeConfig!.path!);
	}

	// Получаем сохранённый компонент
	retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
		return this.storedRoutes.get(route.routeConfig!.path!) || null;
	}

	// Разрешаем переиспользование маршрута (не пересоздавать компонент)
	shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
		return future.routeConfig === curr.routeConfig;
	}
}
</code></pre>
            <p>
                И далее необходимо зарегистрировать данный класс как зависимость в нужном нам месте. В примере ниже он
                регистрируется в корневом компоненте:
            </p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-root',
	template: '',
	providers: [{ provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }],
})
export class AppComponent {}</code></pre>
            <p>
                Данную стратегию не стоит использовать, если в компоненте используются подписки, которые могут создать
                утечки памяти.
            </p>`,
    selected: false,
    lastUpdate: '13.03.2025',
};
