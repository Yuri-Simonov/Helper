import { IQuestion } from '@types';

export const routingQuestions: IQuestion[] = [
    {
        title: 'Маршрутизация в Angular',
        body: `<p>
            В Angular маршрутизация представляет собой
            <span class="attention"> переход от одного представления </span>
            (шаблона)
            <span class="attention">
                к другому в зависимости от заданного URL без перезагрузки
                страницы</span
            >, т.к. маршрутизация в Angular реализует принцип "Simple Page
            Application" (SPA).
        </p>
        <p>При определении маршрута часто указывают следующие свойств:</p>
        <ul>
            <li><span class="attention">path</span> — название маршрута;</li>
            <li>
                <span class="attention">component</span> — компонент, который
                будет отрисован при переходе на URL, указанный в свойстве
                <code>path</code>;
            </li>
            <li>
                <span class="attention">children</span> — указывает дочерние
                пути относительно текущего маршрута;
            </li>
            <li>
                <span class="attention">data</span> — передача дополнительных
                данных (например, значения хлебных крошек и тд);
            </li>
            <li>
                <span class="attention">redirectTo</span> — переадресация на
                указанный URL при попадании на маршрут, указанный в
                <code>path</code>;
            </li>
            <li>
                <span class="attention">pathMatch</span> — определяет совпадение
                маршрута <code>path</code> с текущим. Используется совместно с
                <code>redirectTo</code>.
            </li>
        </ul>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: 'home',
		component: HomeRouteComponent,
		children: [{ path: 'profile',  component: ProfileRouteComponent }],
	},
	{
    	path: 'contacts',
	    redirectTo: '/home',
    	pathMatch: 'full',
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)], // не забываем импортировать routes
	exports: [RouterModule],
})

export class AppRoutingModule {}</code></pre>`,
        selected: false,
        lastUpdate: '08.02.2024',
    },
    {
        title: 'Важность последовательности маршрутов при их определении в модуле',
        body: `<p>
            <span class="attention"
                >Последовательность маршрутов важна, т.к. маршрутизатор ищет первый
                подходящий маршрут в порядке их определения</span
            >.
        </p>
        <p>
            То есть, если вы при перечислении расположите сначала маршрут "**",
            а затем любой другой маршрут, например, "home", то на "home" вы
            никогда не попадете, т.к. маршрутизатор найдет совпадение маршрута
            уже в "**".
        </p>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: '**',
		component: ErrorComponent,
	},
	{
		path: 'home', // сюда маршрутизатор не дойдет
		component: HomeComponent,
	},
]</code></pre>
        <p>
            Поэтому обработка любого URL ('**') всегда должна определяться в
            самом конце:
        </p>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent, // теперь все ок
	},
	{
		path: '**',
		component: ErrorComponent,
	},
]</code></pre>`,
        selected: false,
        lastUpdate: '08.02.2024',
    },

    {
        title: 'Более одной директивы <span class="variable">router-outlet</span> в одном шаблоне компонента',
        body: `<p>
            В Angular есть основные и второстепенные маршруты.
            <span class="attention"
                >В пределах одного компонента может быть только один основной
                маршрут и сколько угодно второстепенных</span
            >. При этом
            <span class="attention"
                >основные и второстепенные маршруты полностью независимы друг от
                друга</span
            >.
        </p>
        <p>
            Основные создается как обычно, а для создания второстепенных
            маршрутов при их определении нужно указать значения атрибута
            <code>name</code>:
        </p>
<pre><code class="language-html">&lt;router-outlet>&lt;/router-outlet> &lt;!-- основной маршрут -->
&lt;router-outlet name="secondary">&lt;/router-outlet> &lt;!-- второстепенный маршрут --></code></pre>
        <p>Как этим пользоваться при задании маршрутов для компонентов:</p>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: 'products',
		component: ProductsComponent,
	},
	{
		path: 'products',
		component: СosmeticsComponent,
		outlet: 'secondary' // сообщаем для Angular, что это второстепенный маршрут
	},
]

// Будут показаны оба компонента, т.к. один основной, а второй - второстепенный.</code></pre>
        <p>
            В атрибуте <code>outlet</code> указывается какой именно из
            второстепенных маршрутов использовать. В данном случае, в шаблоне
            имя второстепенной директивы <code>router-outlet</code> равно
            "secondary", такое же имя указано в свойстве <code>outlet</code> в
            переменной <code>routes</code>.
        </p>`,
        selected: false,
        lastUpdate: '08.02.2024',
    },
    {
        title: 'Способы роутинга с одного адреса на другой',
        body: `<p>В Angular существует 2 способа перехода с одного маршрута на другой:</p>
            <ul>
                <li>
                    <span class="attention">с помощью директивы</span>
                    <code>routerLink</code>;
                </li>
                <li>
                    <span class="attention">с помощью сервиса</span>
                    <code>Router</code>.
                </li>
            </ul>
            <i class="subtitle">Директива routerLink</i>
            <p>
                Данная директива используется для перехода по заданным URL и может быть указана не только у тега
                <code>&lt;a></code>, но и у любого другого блочного HTML элемента.
            </p>
            <p>
                Совместно с <code>routerLink</code> используется директива <code>routerLinkActive</code>. Она
                <span class="attention">принимает название класса, который будет добавлен элементу</span>
                (у которого указана директива <code>routerLinkActive</code>) при активном URL, на который они ссылаются.
            </p>
			<pre><code class="language-html">&lt;a routerLink="/home" routerLinkActive="active">Home&lt;/a></code></pre>

            <p>
                В примере выше показан вариант задания маршрута через абсолютный путь. Но для директивы
                <code>routerLink</code> также возможны еще 2 варианта задания маршрута ссылки через относительные пути.
            </p>
            <ul>
                <li>
                    Если путь начинается с "<code>/</code>",
                    <span class="attention"> маршрутизатор ищет маршрут из корня приложения </span>
                    (1);
                </li>
                <li>
                    Если путь начинается с "<code>./</code>" или
                    <code>со слова сразу</code>,
                    <span class="attention"> маршрутизатор ищет дочерние элементы относительно текущего маршрута </span>
                    (2);
                </li>
                <li>
                    Если путь начинается с "<code>../</code>",
                    <span class="attention"
                        >маршрутизатор поднимается на один уровень вверх в дереве маршрутов и уже оттуда начинает поиск </span
                    >(3).
                </li>
            </ul>
<pre><code class="language-html">&lt;a routerLink="/home" routerLinkActive="active">Home&lt;/a> &lt;!-- (1) -->
&lt;a routerLink="./home" routerLinkActive="active">Home&lt;/a> &lt;!-- (2) -->
&lt;a routerLink="home" routerLinkActive="active">Home&lt;/a> &lt;!-- (2*) альтернативный вариант -->
&lt;a routerLink="../home" routerLinkActive="active">Home&lt;/a> &lt;!-- (3) --></code></pre>
            <i class="subtitle">Сервис Router</i>
            <p>
                Любое Angular приложение, реализующее внутри себя навигацию, имеет единственный экземпляр сервиса
                <code>Router</code>, который хранит полную конфигурацию маршрутов и реализует API для работы с
                навигацией.
            </p>
            <p>
                У данного сервиса есть метод <code>navigate</code>, с помощью которого мы можем изменять текущий URL
                страницы. В качестве первого параметра он принимает массив, где задается URL, а в качестве второго —
                объект с дополнительными параметрами запрашиваемого маршрута:
            </p>
<pre><code class="language-typescript">this.router.navigate(['profile', 6], {
	queryParams: { id: 6 }
})</code></pre>`,
        selected: false,
        lastUpdate: '08.02.2024',
    },
    {
        title: 'Обработка несуществующих маршрутов',
        body: `<p>
            Для обработки несуществующих маршрутов
            <span class="attention"
                >необходимо использовать path со значением</span
            >
            <code>**</code> (означает любой маршрут). Таким образом, если
            запрошенный URL не найдет соответствий в списке маршрутов
            приложения, то маршрутизатор отобразит компонент, указанный для
            <code>**</code>.
        </p>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: '**',
		component: ErrorComponent,
	}
]</code></pre>`,
        selected: false,
        lastUpdate: '08.02.2024',
    },

    {
        title: 'Использование динамических параметров при маршрутизации',
        body: `<p>
            Динамические пути строятся на основе каких-то данных. Самый простой
            пример - это отображение какого-либо товара по заданному <code>id</code>.
        </p>
        <p>
            <span class="attention"
                >Динамические пути создаются путем добавления</span
            >
            "<code>:</code>"
            <span class="attention">
                перед частью маршрута, в которой мы хотим выводить контент в
                зависимости от каких-то данных</span
            >.
        </p>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: 'products',
		component: ProductsComponent,
		children: [{
			path: 'product/:id', // маршрут зависит от переданного id
			component: ProductComponent
			data: {breadcrumbs: 'Product info'}
		}],
	},
]</code></pre>
        <p>
            Получить всю необходимую информацию, включая динамические параметры,
            можно из сервиса <code>ActivatedRoute</code>.
        </p>
<pre><code class="language-typescript">export class ProductComponent {
	constructor(private route: ActivatedRoute) {
		console.log(this.route) // объект с различной информацией о текущем маршруте 
	}
}</code></pre>
        <i class="subtitle"
            >В каком месте надо передавать динамические параметры?</i
        >
        <p>
            Первый вариант: в методе <code>navigate</code>, который вторым
            параметром принимает объект с дополнительными данными маршрута:
        </p>
<pre><code class="language-typescript">this.router.navigate(['profile', 6], {
	queryParams: { id: 6 }
})</code></pre>
        <p>
            И второй вариант: непосредственно в шаблоне в директиве
            <code>routerLink</code>.
        </p>
		<pre><code class="language-html">&lt;a [routerLink]=["/product", "6"]>Ссылка на какой-то продукт&lt;/a> &lt;!-- Вместо цифры 6 может быть какая-то переменная --></code></pre>`,
        selected: false,
        lastUpdate: '08.02.2024',
    },
    {
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
    },
    {
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
    },
    {
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
    },
];
