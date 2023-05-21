import { IQuestion } from 'src/app/shared/types/question.interface';

export const routingQuestions: IQuestion[] = [
    {
        title: 'Как сделать асинхронную загрузку модуля?',
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
        <pre><code><span class="keyword">const</span> <span class="variable">routes</span>: <span class="type">Routes</span> <span class="operator">=</span> <span class="punctuation">[</span>
	<span class="punctuation">{</span>
		<span class="key">path</span>: <span class="string">'items'</span>,
		<span class="key">loadChildren</span>: <span class="punctuation">()</span> <span class="operator">=></span> <span class="import">import</span><span class="punctuation">(</span><span class="string">'./items/items.module'</span><span class="punctuation">)</span>.<span class="keyword">then</span><span class="punctuation">(</span>m <span class="operator">=></span> m.<span class="class-name">ItemsModule</span><span class="punctuation">)</span>,
		<span class="key">canLoad</span>: <span class="punctuation">[</span><span class="class-name">AuthGuard</span><span class="punctuation">]</span> <span class="comment">// для lazy load используется именно canLoad guard</span>
	<span class="punctuation">}</span>
<span class="punctuation">]</span>;</code></pre>
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
        <pre><code><span class="class-name">RouterModule</span>.<span class="method">forRoot</span><span class="punctuation">( '{}'</span>, <span class="punctuation">{</span> <span class="key">preloadingStrategy</span>: <span class="class-name">PreloadAllModules</span> <span class="punctuation">})</span></code></pre>
        <p>
            Также
            <span class="attention"
                >можно создавать собственные сценарии предзагрузки</span
            >. Обычно это делается, когда у вас большое приложение и какие-то
            страницы посещаются часто, а какие-то - нет. Логично, что часто
            используемые модули нужно подгружать фоном в первую очередь.
        </p>
        <pre><code><span class="comment">// custom-preloading-strategy.service.ts</span>
<span class="keyword">@Injectable</span><span class="punctuation">({</span> <span class="key">providedIn</span>: <span class="string">'root'</span> <span class="punctuation">})</span>
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">CustomPreloadingStrategyService</span> <span class="keyword">implements</span> <span class="interface-name">PreloadingStrategy</span> <span class="punctuation">{</span>
	<span class="method">preload(</span>route: <span class="type">Route</span>, load: <span class="type">() => Observable<span>'<'</span>any></span><span class="punctuation">)</span>: <span class="type">Observable<span>'<'</span>any></span> <span class="punctuation">{</span>
		<span class="keyword">const</span> <span class="variable">popularModules</span>: <span class="type">any</span> <span class="operator">=</span>  <span class="punctuation">[</span><span class="string">'contacts'</span>, <span class="string">'products'</span><span class="punctuation">]</span>
		<span class="keyword">if</span> <span class="punctuation">(</span>popularModules.<span class="method">includes(</span>route.path<span class="punctuation">)) {</span>
			<span class="return">return</span> <span class="function-name">load()</span>
		<span class="punctuation">}</span> <span class="keyword">else</span> <span class="punctuation">{</span>
			<span class="return">return</span> <span class="function-name">of</span><span class="punctuation">(</span><span class="null">null</span><span class="punctuation">)</span>
		<span class="punctuation">}</span>
 	<span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>
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
        <pre><code><span class="class-name">RouterModule</span>.<span class="method">forRoot</span><span class="punctuation">( '{}'</span>, <span class="punctuation">{</span> <span class="key">preloadingStrategy</span>: <span class="class-name">CustomPreloadingStrategyService</span> <span class="punctuation">})</span></code></pre>`,
        selected: false,
    },
    {
        title: 'Как разрешается или запрещается переход по указанному маршруту (защищенные пути)?',
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
        <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">AuthGuard</span> <span class="keyword">implements</span> <span class="interface-name">CanActivate</span> <span class="punctuation">{</span>
	<span class="method">canActivate</span><span class="punctuation">(</span>
		route: <span class="class-name">ActivatedRouteSnapshot</span>,
		state: <span class="class-name">RouterStateSnapshot</span><span class="punctuation">)</span>: <span class="type">Observable<</span><span class="type">boolean | UrlTree> | </span><span class="type">Promise<</span><span class="type">boolean | UrlTree> |</span> <span class="type">boolean | UrlTree</span> <span class="punctuation">{</span>
    	<span class="keyword">return</span> <span class="boolean">true</span>;
	<span class="punctuation">}</span>  
<span class="punctuation">}</span></code></pre>
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
        <pre><code><span class="keyword">const</span> <span class="variable">routes</span>: <span class="type">Routes</span> <span class="operator">=</span> <span class="punctuation">[</span>
	<span class="punctuation">{</span>
		<span class="key">path</span>: <span class="string">'products'</span>,
		<span class="key">component</span>: <span class="class-name">ProductsComponent</span>,
		<span class="key">canActivate</span>: <span class="punctuation">[</span><span class="class-name">AuthGuard</span><span class="punctuation">]</span>, <span class="comment">// Guard для родительского компонента</span>
    	<span class="key">canActivateChild</span>: <span class="punctuation">[</span><span class="class-name">AuthGuard</span><span class="punctuation">]</span>, <span class="comment">// Guard для дочерних компонентов</span>
		<span class="key">children</span>: <span class="punctuation">[{</span>
			<span class="key">path</span>: <span class="string">'product/:id'</span>,
			<span class="key">component</span>: <span class="class-name">ProductComponent</span>
		<span class="punctuation">}]</span>,
	<span class="punctuation">}</span>,
<span class="punctuation">]</span></code></pre>
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
        <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">AuthResolver</span> <span class="keyword">implements</span> <span class="interface-name">Resolve</span><span class="type">'<'boolean></span> <span class="punctuation">{</span>
    <span class="method">resolve</span><span class="punctuation">(</span>
        route: <span class="type">ActivatedRouteSnapshot</span>,
        state: <span class="type">RouterStateSnapshot</span>
    <span class="punctuation">)</span>: <span class="type">Observable'<'boolean></span> <span class="punctuation">{</span>
		<span class="keyword">if</span><span class="punctuation">(</span><span class="string">'какое-то условие'</span><span class="punctuation">) {</span>
			<span class="keyword">return</span> <span class="method">of</span><span class="punctuation">(</span><span class="boolean">true</span><span class="punctuation">)</span>;
		<span class="punctuation">}</span> <span class="keyword">else</span> <span class="punctuation">{</span>
			<span class="keyword">return</span> EMPTY; <span class="comment">// обратите внимание на возвращаемое значение в случае ложного условия</span>
		<span class="punctuation">}</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>
        <p>Как это выглядит в маршрутизаторе:</p>
        <pre><code><span class="keyword">const</span> <span class="variable">routes</span>: <span class="type">Routes</span> <span class="operator">=</span> <span class="punctuation">[</span>
	<span class="punctuation">{</span>
		<span class="key">path</span>: <span class="string">'products'</span>,
		<span class="key">component</span>: <span class="class-name">ProductsComponent</span>,
		<span class="key">resolve</span>: <span class="punctuation">{</span> <span class="key">auth</span>: <span class="class-name">AuthResolver</span> <span class="punctuation">}</span>, <span class="comment">// сообщаем о наличии resolver'а</span>
	<span class="punctuation">}</span>,
<span class="punctuation">]</span></code></pre>
        <p>
            Выполнение метода <code>resolve</code> (как синхронного, так и
            асинхронного) инициирует событие <code>NavigationEnd</code>, что
            можно использовать для скрытия прелоадера при переходах между
            страницами.
        </p>`,
        selected: false,
    },
    {
        title: 'Может ли в компоненте быть более одной директивы "router-outlet"?',
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
        <pre><code><span class="tag"><</span><span class="tag">router-outlet</span><span class="tag">></span><span class="tag"><</span><span class="tag">/router-outlet></span> <span class="comment">// основной маршрут</span>
<span class="tag"><</span><span class="tag">router-outlet</span> <span class="attribute">name</span><span class="operator">=</span><span class="string">"secondary"</span><span class="tag">></span><span class="tag"><</span><span class="tag">/router-outlet></span> <span class="comment">// второстепенный маршрут</span></code></pre>
        <p>Как этим пользоваться при задании маршрутов для компонентов:</p>
        <pre><code><span class="keyword">const</span> <span class="variable">routes</span>: <span class="type">Routes</span> <span class="operator">=</span> <span class="punctuation">[</span>
	<span class="punctuation">{</span>
		<span class="key">path</span>: <span class="string">'products'</span>,
		<span class="key">component</span>: <span class="class-name">ProductsComponent</span>,
	<span class="punctuation">}</span>,
	<span class="punctuation">{</span>
		<span class="key">path</span>: <span class="string">'products'</span>,
		<span class="key">component</span>: <span class="class-name">СosmeticsComponent</span>,
		<span class="key">outlet</span>: <span class="string">'secondary'</span> <span class="comment">// сообщаем Angular, что это второстепенный маршрут</span>
	<span class="punctuation">}</span>,
<span class="punctuation">]</span>

<span class="comment">// Будут показаны оба компонента, т.к. один основной, а второй - второстепенный.</span></code></pre>
        <p>
            В атрибуте <code>outlet</code> указывается какой именно из
            второстепенных маршрутов использовать. В данном случае, в шаблоне
            имя второстепенной директивы <code>router-outlet</code> равно
            "secondary", такое же имя указано в свойстве <code>outlet</code> в
            переменной <code>routes</code>.
        </p>`,
        selected: false,
    },
    {
        title: 'Какие существуют способы перехода с одного адреса на другой?',
        body: `<p>
            В Angular существует 2 способа перехода с одного маршрута на другой:
        </p>
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
            Данная директива используется для перехода по заданным URL и может
            быть указана не только у тега <code> "<" a></code>, но и у
            любого другого блочного HTML элемента.
        </p>
        <p>
            Совместно с <code>routerLink</code> используется директива
            <code>routerLinkActive</code>. Она
            <span class="attention"
                >принимает название класса, который будет добавлен
                элементу</span
            >
            (у которого указана директива <code>routerLinkActive</code>) при
            активном URL, на который они ссылаются.
        </p>
        <pre><code><span class="tag"><</span><span class="tag">a</span> <span class="directive">routerLink</span><span class="operator">=</span><span class="string">"/home"</span> <span class="directive">routerLinkActive</span><span class="operator">=</span><span class="string">"active"</span><span class="tag">></span>Home<span class="tag"><</span><span class="tag">/a></span></code></pre>
        <p>
            В примере выше показан вариант задания маршрута через абсолютный
            путь. Но для директивы <code>routerLink</code> также возможны еще 2
            варианта задания маршрута ссылки через относительные пути.
        </p>
        <ul>
            <li>
                Если путь начинается с "<code>/</code>",
                <span class="attention">
                    маршрутизатор ищет маршрут из корня приложения
                </span>
                (1);
            </li>
            <li>
                Если путь начинается с "<code>./</code>" или
                <code>со слова сразу</code>,
                <span class="attention">
                    маршрутизатор ищет дочерние элементы относительно текущего
                    маршрута
                </span>
                (2);
            </li>
            <li>
                Если путь начинается с "<code>../</code>",
                <span class="attention"
                    >маршрутизатор поднимается на один уровень вверх в дереве
                    маршрутов и уже оттуда начинает поиск </span
                >(3).
            </li>
        </ul>
        <pre><code><span class="tag"><</span><span class="tag">a</span> <span class="directive">routerLink</span><span class="operator">=</span><span class="string">"/home"</span> <span class="directive">routerLinkActive</span><span class="operator">=</span><span class="string">"active"</span><span class="tag">></span>Home<span class="tag"><</span><span class="tag">/a></span> <span class="comment">// (1)</span>
<span class="tag"><</span><span class="tag">a</span> <span class="directive">routerLink</span><span class="operator">=</span><span class="string">"./home"</span> <span class="directive">routerLinkActive</span><span class="operator">=</span><span class="string">"active"</span><span class="tag">></span>Home<span class="tag"><</span><span class="tag">/a></span> <span class="comment">// (2)</span>
<span class="tag"><</span><span class="tag">a</span> <span class="directive">routerLink</span><span class="operator">=</span><span class="string">"home"</span> <span class="directive">routerLinkActive</span><span class="operator">=</span><span class="string">"active"</span><span class="tag">></span>Home<span class="tag"><</span><span class="tag">/a></span> <span class="comment">// (2*) альтернативный вариант</span>
<span class="tag"><</span><span class="tag">a</span> <span class="directive">routerLink</span><span class="operator">=</span><span class="string">"../home"</span> <span class="directive">routerLinkActive</span><span class="operator">=</span><span class="string">"active"</span><span class="tag">></span>Home<span class="tag"><</span><span class="tag">/a></span> <span class="comment">// (3)</span></code></pre>
        <i class="subtitle">Сервис Router</i>
        <p>
            Любое Angular приложение, реализующее внутри себя навигацию, имеет
            единственный экземпляр сервиса <code>Router</code>, который хранит
            полную конфигурацию маршрутов и реализует API для работы с
            навигацией.
        </p>
        <p>
            У данного сервиса есть метод <code>navigate</code>, с помощью
            которого мы можем изменять текущий URL страницы. В качестве первого
            параметра он принимает массив, где задается URL, а в качестве
            второго — объект с дополнительными параметрами запрашиваемого
            маршрута:
        </p>
        <pre><code><span class="object">this</span>.router.<span class="method">navigate</span><span class="punctuation">([</span><span class="string">'profile'</span>, <span class="number">6</span><span class="punctuation">]</span>, <span class="punctuation">{</span>
	<span class="key">queryParams</span>: <span class="punctuation">{</span> <span class="key">id</span>: <span class="number">6</span> <span class="punctuation">}</span>
<span class="punctuation">'})'</span></code></pre>`,
        selected: false,
    },
    {
        title: 'Как обрабатываются несуществующие маршруты?',
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
        <pre><code><span class="keyword">const</span> <span class="variable">routes</span>: <span class="type">Routes</span> <span class="operator">=</span> <span class="punctuation">[</span>
	<span class="punctuation">{</span>
		<span class="key">path</span>: <span class="string">'**'</span>,
		<span class="key">component</span>: <span class="class-name">ErrorComponent</span>,
	<span class="punctuation">}</span>,
<span class="punctuation">]</span>
</code></pre>`,
        selected: false,
    },
    {
        title: 'Важен ли порядок маршрутов при их определении в модуле?',
        body: `<p>
            <span class="attention"
                >Порядок маршрутов важен, т.к. маршрутизатор ищет первый
                подходящий маршрут в порядке их определения</span
            >.
        </p>
        <p>
            То есть, если вы при перечислении расположите сначала маршрут "**",
            а затем любой другой маршрут, например, "home", то на "home" вы
            никогда не попадете, т.к. маршрутизатор найдет совпадение маршрута
            уже в "**".
        </p>
        <pre><code><span class="keyword">const</span> <span class="variable">routes</span>: <span class="type">Routes</span> <span class="operator">=</span> <span class="punctuation">[</span>
	<span class="punctuation">{</span>
		<span class="key">path</span>: <span class="string">'**'</span>,
		<span class="key">component</span>: <span class="class-name">ErrorComponent</span>,
	<span class="punctuation">}</span>,
	<span class="punctuation">{</span>
		<span class="key">path</span>: <span class="string">'home'</span>, <span class="comment">// сюда маршрутизатор не дойдет</span>
		<span class="key">component</span>: <span class="class-name">HomeComponent</span>,
	<span class="punctuation">}</span>,
<span class="punctuation">]</span>
</code></pre>
        <p>
            Поэтому обработка любого URL ('**') всегда должна определяться в
            самом конце:
        </p>
        <pre><code><span class="keyword">const</span> <span class="variable">routes</span>: <span class="type">Routes</span> <span class="operator">=</span> <span class="punctuation">[</span>
	<span class="punctuation">{</span>
		<span class="key">path</span>: <span class="string">'home'</span>,
		<span class="key">component</span>: <span class="class-name">HomeComponent</span>, <span class="comment">// теперь все ок</span>
	<span class="punctuation">}</span>,
	<span class="punctuation">{</span>
		<span class="key">path</span>: <span class="string">'**'</span>,
		<span class="key">component</span>: <span class="class-name">ErrorComponent</span>,
	<span class="punctuation">}</span>,
<span class="punctuation">]</span>
</code></pre>`,
        selected: false,
    },
    {
        title: 'Как передаются параметры в динамических путях?',
        body: `<p>
            Динамические пути строятся на основе каких-то данных. Самый простой
            пример - это отображение какого-либо товара по заданному "id".
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
        <pre><code><span class="keyword">const</span> <span class="variable">routes</span>: <span class="type">Routes</span> <span class="operator">=</span> <span class="punctuation">[</span>
	<span class="punctuation">{</span>
		<span class="key">path</span>: <span class="string">'products'</span>,
		<span class="key">component</span>: <span class="class-name">ProductsComponent</span>,
		<span class="key">children</span>: <span class="punctuation">[{</span>
			<span class="key">path</span>: <span class="string">'product/:id'</span>, <span class="comment">// маршрут зависит от переданного id</span>
			<span class="key">component</span>: <span class="class-name">ProductComponent</span>
			<span class="key">data</span>: <span class="punctuation">{</span><span class="key">breadcrumbs</span>: <span class="string">'Product info'</span><span class="punctuation">}</span>
		<span class="punctuation">}]</span>,
	<span class="punctuation">}</span>,
<span class="punctuation">]</span></code></pre>
        <p>
            Получить всю необходимую информацию, включая динамические параметры,
            можно из сервиса <code>ActivatedRoute</code>.
        </p>
        <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">ProductComponent</span> <span class="punctuation">{</span>
	<span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">private</span> route: <span class="service-name">ActivatedRoute</span><span class="punctuation">) {</span>
		console.<span class="method">log</span><span class="punctuation">(</span><span class="object">this</span>.route<span class="punctuation">)</span> <span class="comment">// объект с различной информацией о текущем маршруте </span>
	<span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>
        <i class="subtitle"
            >В каком месте надо передавать динамические параметры?</i
        >
        <p>
            Первый вариант: в методе <code>navigate</code>, который вторым
            параметром принимает объект с дополнительными данными маршрута:
        </p>
        <pre><code><span class="object">this</span>.router.<span class="method">navigate</span><span class="punctuation">([</span><span class="string">'profile'</span>, <span class="number">6</span><span class="punctuation">]</span>, <span class="punctuation">{</span>
	<span class="key">queryParams</span>: <span class="punctuation">{</span> <span class="key">id</span>: <span class="number">6</span> <span class="punctuation">}</span>
<span class="punctuation">})</span></code></pre>
        <p>
            И второй вариант: непосредственно в шаблоне в директиве
            <code>routerLink</code>.
        </p>
        <pre><code><span class="tag"><</span><span class="tag">a</span> <span class="punctuation">[</span><span class="directive">routerLink</span><span class="punctuation">]</span><span class="operator">=</span><span class="punctuation">[</span><span class="string">"/product"</span>, <span class="number">"6"</span><span class="punctuation">]</span><span class="tag">></span>Ссылка на какой-то продукт<span class="tag"><</span><span class="tag">/a></span> <span class="comment">// Вместо цифры 6 может быть какая-то переменная</span></code></pre>`,
        selected: false,
    },
    {
        title: 'Какие происходят события маршрутизации при переходе с одного маршрута на другой?',
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
        <pre><code><span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">private</span> router: <span class="class-name">Router</span><span class="punctuation">) {</span>
	<span class="object">this</span>.router.events.<span class="method">subscribe</span><span class="punctuation">((</span>event<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
		<span class="keyword">if</span> <span class="punctuation">(</span>event <span class="keyword">instanceof</span> <span class="class-name">NavigationStart</span><span class="punctuation">) {</span>
			console.<span class="method">log</span><span class="punctuation">(</span><span class="string">'Navigation Start'</span><span class="punctuation">)</span>;
		<span class="punctuation">}</span>
	<span class="punctuation">})</span>;
<span class="punctuation">}</span></code></pre>
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
    },
    {
        title: 'Что представляет из себя маршрутизация в Angular?',
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
        <pre><code><span class="keyword">const</span> <span class="variable">routes</span>: <span class="type">Routes</span> <span class="operator">=</span> <span class="punctuation">[</span>
	<span class="punctuation">{</span>
		<span class="key">path</span>: <span class="string">'home'</span>,
		<span class="key">component</span>: <span class="class-name">HomeRouteComponent</span>,
		<span class="key">children</span>: <span class="punctuation">[{</span> <span class="key">path</span>: <span class="string">'profile'</span>,  <span class="key">component</span>: <span class="class-name">ProfileRouteComponent</span> <span class="punctuation">}]</span>,
	<span class="punctuation">}</span>,
	<span class="punctuation">{</span>
    	<span class="key">path</span>: <span class="string">'contacts'</span>,
	    <span class="key">redirectTo</span>: <span class="string">'/home'</span>,
    	<span class="key">pathMatch</span>: <span class="string">'full'</span>,
	<span class="punctuation">}</span>,
<span class="punctuation">]</span>

<span class="keyword">@NgModule</span><span class="punctuation">({</span>
	<span class="key">imports</span>: <span class="punctuation">[</span><span class="class-name">RouterModule</span>.<span class="method">forRoot</span><span class="punctuation">(</span><span class="variable">routes</span><span class="punctuation">)]</span>, <span class="comment">// не забываем импортировать routes</span>
	<span class="key">exports</span>: <span class="punctuation">[</span><span class="class-name">RouterModule</span><span 	class="punctuation">]</span>,
<span class="punctuation">})</span>

<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">AppRoutingModule</span> <span class="punctuation">{}</span>
</code></pre>`,
        selected: false,
    },
];
