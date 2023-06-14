import { IQuestion } from '@types';

export const componentQuestions: IQuestion[] = [
    {
        title: 'Что такое компонент в Angular?',
        body: `<p>
            <span class="attention">Angular компонент</span> - это часть
            интерфейса приложения с собственными шаблоном, логикой и стилями.
            Причем последние два являются необязательными.
        </p>
        <p>Все компоненты в совокупности и есть Angular App.</p>
        <p>
            За создание компонента отвечает декоратор
            <code>@Component()</code>.
        </p>
        <pre><code><span class="keyword">@Component</span><span class="punctuation">({</span>
	<span class="key">selector</span>: <span class="string">'app-root'</span>, <span class="comment">// название компонента</span>
	<span class="key">templateUrl</span>: <span class="string">'./app.component.html'</span>, <span class="comment">// путь к HTML-файлу. Является обязательным свойством</span>
	<span class="key">styleUrls</span>: <span class="punctuation">[</span><span class="string">'./app.component.scss'</span><span class="punctuation">]</span>, <span class="comment">// массив путей к SCSS-файлам</span>
	<span class="key">providers</span>: <span class="punctuation">[</span><span class="service-name">SomeHttpService</span><span class="punctuation">]</span>, <span class="comment">// если добавляются непосредственно в компонент какие-то зависимости</span>
	<span class="key">changeDetection</span>: <span>ChangeDetectionStrategy.OnPush</span>, <span class="comment">// явное определение стратегии ChangeDetection</span>
<span class="punctuation">})</span>

<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">AppComponent</span> <span class="punctuation">{}</span> <span class="comment">// класс, к которому привязывается декоратор @Component()</span></code></pre>`,
        selected: false,
    },
    {
        title: 'Расскажите про жизненный цикл компонента (Angular hooks)?',
        body: `<p>
            Каждый компонент имеет свой жизненный цикл, где на каждом этапе
            цикла вызываются соответствующие методы, так называемые хуки
            (Angular Hooks).
        </p>
        <p>
            Ниже перечислены все методы жизненного цикла компонента в порядке их
            вызова:
        </p>
        <ul>
            <li>
                <span class="attention">OnChanges</span> - устанавливаются или
                изменяются значения входных свойств класса компонента;
            </li>
            <li>
                <span class="attention">OnInit</span> - устанавливаются свойства
                самого компонента. Данный метод вызывается единожды вслед за
                первым вызовом <code>OnChanges()</code>;
            </li>
            <li>
                <span class="attention">DoCheck</span> - происходит изменение
                свойства или какое-то событие;
            </li>
            <li>
                <span class="attention">AfterContentInit</span> - в шаблон
                включается контент, заключенный между тегами компонента (в
                дочернем компоненте это содержимое подставится вместо
                <code>
                    <span><</span>ng-content><span><</span>/ng-content> </code
                >);
            </li>
            <li>
                <span class="attention">AfterContentChecked</span> - аналогичен
                <code>DoCheck()</code>, только используется для контента,
                заключенного между тегами компонента (происходит проверка на
                изменение содержимого, которое подставляется вместо
                <code>
                    <span><</span>ng-content><span><</span>/ng-content> </code
                >);
            </li>
            <li>
                <span class="attention">AfterViewInit</span> - инициализируются
                дочерние компоненты, указанные в шаблоне текущего компонента;
            </li>
            <li>
                <span class="attention">AfterViewChecked</span> - аналогичен
                <code>DoCheck()</code>, только используется для отслеживания
                изменений в дочерних компонентах;
            </li>
            <li>
                <span class="attention">OnDestroy</span> - компонент удаляется
                из DOM-дерева.
            </li>
        </ul>
        <p>
            Angular hooks реализованы в виде интерфейсов, реализующих функции,
            совпадающие по названию с названием интерфейса + префикс
            <code>ng</code>:
        </p>
        <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">ContactsItemComponent</span> <span class="keyword">implements</span> <span class="interface-name">OnInit</span> <span class="punctuation">{</span>
	<span class="method">ngOnInit()</span> <span class="punctuation">{</span>
		console.<span class="function-name">log</span><span class="punctuation">('</span><span class="string">OnInit</span><span class="punctuation">')</span> <span class="comment"> // OnInit</span>
	<span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>
        <p>
            Также при написании кода считается хорошим тоном указывать у класса
            реализацию того или иного метода, используемого в нем. В примере
            выше это <code>implements OnInit</code>.
        </p>`,
        selected: false,
    },
    {
        title: 'Зачем нужны Getter и Setter внутри компонента?',
        body: `<p>
            Геттерами и сеттерами называются методы Angular компонента, которые
            <span class="attention"
                >используются для получения и модификации значений его
                свойств</span
            >.
        </p>
        <p>
            <code>Getter</code> вызывается в момент обращения к свойству (в
            шаблоне или в других методах классах), <code>Setter</code> - в
            момент присвоения ему значения (обычно это свойства с декоратором
            <code>@Input()</code>).
        </p>
        <p>
            Для создания геттера и сеттера используются соответствующие ключевые
            слова - <code>get</code> и <code>set</code>:
        </p>
        <pre><code><span class="comment">// компонент</span>
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">SomeComponent</span> <span class="punctuation">{</span>
	_name: <span class="type">string</span> <span class="operator">=</span> <span class="null">null</span>; <span class="comment">// приватная переменная</span>

	<span class="keyword">@Input()</span> <span class="keyword">set</span> <span class="method">name</span><span class="punctuation">(</span>value: <span class="type">string</span><span class="punctuation">)</span> <span class="punctuation">{</span>
		<span class="object">this</span>._name <span class="operator">=</span> value <span class="operator">+</span> <span class="string">'*'</span>;
	<span class="punctuation">}</span>

	<span class="keyword">get</span> <span class="method">name()</span>: <span class="type">string</span> <span class="punctuation">{</span>
		<span class="keyword">return</span> <span class="object">this</span>._name <span class="operator">||</span> <span class="string">'Аноним'</span>;
	<span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="comment">// шаблон</span>
<span class="tag"><</span><span class="tag">p></span><span class="punctuation">{{</span><span class="variable">name</span><span class="punctuation">}}</span><span class="tag"><</span><span class="tag">/p></span></code></pre>
        <p>
            В классах JavaScript мы также можем создавать приватные переменные,
            к которым можно получить доступ с помощью геттеров и сеттеров (их
            еще называют методами доступа к переменной). В примере выше это
            переменная <code>_name</code>.
        </p>`,
        selected: false,
    },
    {
        title: 'Зачем используется OnDestroy?',
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
        <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">AngularComponent</span> <span class="keyword">implements</span> <span class="interface-name">OnInit</span>, <span class="interface-name">OnDestroy</span> <span class="punctuation">{</span>
    currentPath: <span class="type">string</span>;
    currentPathSub: <span class="type">Subscription</span>;

    <span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">private</span> router: <span class="type">Router</span><span class="punctuation">) {}</span>

    <span class="function-name">ngOnInit()</span>: <span class="type">void</span> <span class="punctuation">{</span>
        <span class="object">this</span>.currentPath <span class="operator">=</span> <span class="object">this</span>.router.url;
        <span class="object">this</span>.currentPathSub <span class="operator">=</span> <span class="object">this</span>.router.events.<span class="method">subscribe</span><span class="punctuation">((</span>event<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
            <span class="keyword">if</span> <span class="punctuation">(</span>event <span class="keyword">instanceof</span> <span class="class-name">NavigationEnd</span><span class="punctuation">) {</span>
                <span class="object">this</span>.currentPath <span class="operator">=</span> event.url;
            <span class="punctuation">}</span>
        <span class="punctuation">});</span>
	<span class="punctuation">}</span>
	
    <span class="function-name">ngOnDestroy()</span>: <span class="type">void</span> <span class="punctuation">{</span>
        <span class="object">this</span>.currentPathSub.<span class="function-name">unsubscribe()</span>; <span class="comment">// не забываем отписаться</span>
    <span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>
        <i class="subtitle">Зачем нужно отписываться от подписок?</i>
        <p>
            Если мы не будем отписываться, но при этом удалять компонент,
            например, при переходе на другую страницу, а потом вернемся на
            страницу, где опять стаработает подписка, то количество подписчиков
            уже будет 2, а не 1. Сделаем тоже самое, будет 3 подписки и тд.
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
            происзойдет утечка памяти и страничка в браузере "умрет" или ваше
            приложение попросту "зависнет".
        </p>`,
        selected: false,
    },
    {
        title: 'Какие вы знаете способы взаимодействия между компонентами?',
        body: `<p>
            Чтобы передать данные из одного компонента в другой, существуют
            следующие способы:
        </p>
        <ul>
            <li>
                <code>@Input()</code> -
                <span class="attention">
                    позволяет передавать значения дочерним компонентам</span
                >, но только на один уровень иерархии;
            </li>
            <li>
                <code>@Output()</code> -
                <span class="attention">
                    позволяет передавать родителю данные при срабатывании
                    какого-то события</span
                >, но только на один уровень иерархии.
            </li>
            <li>
                <code>@ViewChild()</code> и <code>@ViewChildren()</code> -
                <span class="attention">
                    получают доступ к прямому одному и ко всем дочерним
                    компонентам
                </span>
                (если быть точнее, то к их свойстам)
            </li>
            <li>
                Сервисы - своего рода
                <span class="attention">хранилище данных</span>, к которым могут
                обращаться компоненты.
            </li>
        </ul>`,
        selected: false,
    },
];
