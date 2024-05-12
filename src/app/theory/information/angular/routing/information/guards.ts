import { IInfo } from '@types';

export const GUARDS: IInfo = {
    title: 'Разрешение и запрет перехода по указанному маршруту (защищенные пути)',
    body: `<p>
            Разрешать или ограничивать доступ к тем или иным маршрутам на основе
            определенных условий мы можем с помощью <code>Route Guards</code>,
            которые
            <span class="attention">
                представляют из себя обычные классы или функции, реализующие
                определенный интерфейс.
            </span>
        </p>
        <p>
            Причем важной чертой <code>Guards</code> является то, что<span
                class="attention"
            >
                они всегда должны возвращать либо
            </span>
            <code>true</code><span class="attention">, либо</span>
            <code>false</code> в зависимости от каких-либо условий, будь они
            синхронные или асинхронные. И если будет возвращено
            <code>false</code>, будет инициировано событие маршрутизации
            <code>NavigationCancel</code>, которое не даст перейти по заданному
            маршруту.
        </p>
<pre><code class="language-typescript">export class AuthGuard implements CanActivate {
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    	return true;
	}  
}</code></pre>
        <p>Существуют следующие виды <code>Guards</code>:</p>
        <ul>
            <li>
                <span class="attention">CanMatch</span> - отображает или
                скрывает возможный маршрут; Например, если
                <code>CanMatch</code> вернул вам <code>false</code>, то при
                переходе на указанный адрес, Angular выдаст вам ошибку 404, если
                не стоит обработка несуществующих путей в маршрутизаторе;
            </li>
            <li>
                <span class="attention">CanLoad</span> - разрешает или запрещает
                загрузку модуля, загружаемого асинхронно;
            </li>
            <li>
                <span class="attention">CanDeactivate</span> - разрешает или
                запрещает уход с текущего маршрута. Обычно используется для
                подтверждения ухода пользователя со страницы, где могут остаться
                несохраненные данные;
            </li>
            <li>
                <span class="attention">CanActivateChild</span> - разрешает или
                запрещает доступ к дочернему маршруту;
            </li>
            <li>
                <span class="attention">CanActivate</span> - разрешает или
                запрещает доступ к маршруту;
            </li>
            <li>
                <span class="attention">Resolve</span> - выполняет какое-либо
                действие перед переходом на маршрут, обычно ожидает данные от
                сервера;
            </li>
        </ul>
        <p>
            В списке выше <code>Guards</code> расположены в порядке срабатывания
            проверок, за исключением <code>Resolve</code>, он живет немного по
            своим условиям. Об этом чуть ниже.
        </p>
        <p>
            У одного URL может быть одновременно несколько guard-ов, причем
            одного и того же типа.
        </p>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: 'products',
		component: ProductsComponent,
		canActivate: [AuthGuard], // Guard для родительского компонента
    	canActivateChild: [AuthGuard], // Guard для дочерних компонентов
		children: [{
			path: 'product/:id',
			component: ProductComponent
		}],
	},
]</code></pre>
        <p>
            Вернемся к событию <code>Resolve</code>. Обычно данное событие
            используется, когда переход на указанный маршрут надо осуществить
            или отклонить в зависимости от результата, который надо "подождать".
            В таких случаях уже используется сервис <code>Resolver</code>.
        </p>
        <p>
            <code>Resolver</code> - это сервис, реализующий интерфейс
            <code>Resolve</code>, а именно метод <code>resolve</code>, который
            <span class="attention">
                обязательно должен возвращать данные типа
            </span>
            <code>Observable</code>. Указанный для любого маршрута,
            <code>Resolver</code> разрешает переход на него после выполнения
            <code>Observable</code> в <code>resolve</code>.
        </p>
<pre><code class="language-typescript">export class AuthResolver implements Resolve<boolean> {
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
		if('какое-то условие') {
			return of(true);
		} else {
			return EMPTY; // обратите внимание на возвращаемое значение в случае ложного условия
		}
    }
}</code></pre>
        <p>Как это выглядит в маршрутизаторе:</p>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: 'products',
		component: ProductsComponent,
		resolve: { auth: AuthResolver }, // сообщаем о наличии resolver'а
	}
]</code></pre>
        <p>
            Выполнение метода <code>resolve</code> (как синхронного, так и
            асинхронного) инициирует событие <code>NavigationEnd</code>, что
            можно использовать для скрытия прелоадера при переходах между
            страницами.
        </p>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
