import { IQuestion } from '@types';

export const componentQuestions: IQuestion[] = [
    {
        title: 'Компоненты в Angular',
        body: `<p>
                <span class="attention">Angular компонент</span> - это часть
                интерфейса приложения с собственными шаблоном, логикой и
                стилями.
            </p>
            <p>Все компоненты в совокупности и есть приложение Angular.</p>
            <p>
                За создание компонента отвечает декоратор
                <code>@Component()</code>.
            </p>
            <pre><code><span class="function-name">@Component</span><span class="punctuation">({</span>
	<span class="key">selector</span>: <span class="string">'app-root'</span>, <span class="comment">// название компонента</span>
	<span class="key">templateUrl</span>: <span class="string">'./app.component.html'</span>, <span
		class="comment">// путь к HTML-файлу. Является обязательным свойством</span>
	<span class="key">styleUrls</span>: <span class="punctuation">[</span><span
		class="string">'./app.component.scss'</span><span class="punctuation">]</span>, <span class="comment">// массив путей к SCSS-файлам</span>
	<span class="key">providers</span>: <span class="punctuation">[</span><span
		class="service-name">SomeService</span><span class="punctuation">]</span>, <span class="comment">// если добавляются непосредственно в компонент какие-то зависимости</span>
	<span class="key">changeDetection</span>: <span>ChangeDetectionStrategy.OnPush</span>, <span class="comment">// явное определение стратегии ChangeDetection</span>
<span class="punctuation">})</span>

<span class="export">export</span> <span class="keyword">class</span> <span
	class="class-name">AppComponent</span> <span class="punctuation">{}</span> <span class="comment">// класс, к которому привязывается декоратор @Component()</span></code></pre>`,
        selected: false,
        lastUpdate: '19.10.2023',
    },
    {
        title: 'Жизненный цикл компонента (Angular hooks)',
        body: `<p>
                Каждый компонент имеет свой жизненный цикл, где на каждом этапе цикла вызываются соответствующие методы,
                так называемые хуки (Angular Hooks).
            </p>
            <p>
                Также стоит помнить, что
                <span class="attention"> сначала инициализируется конструктор класса компонента</span>, то есть,
                создается экземпляр компонента, и только после этого компонент начинает свой жизненный цикл. В
                конструкторе класса задаются (при необходимости) стартовые параметры или логика, которые сработают еще
                до вызова методов жизненного цикла. Также здесь внедряются зависимости, необходимые для работы текущего
                компонента. Если ничего из этого не нужно компоненту, то конструктор класса можно и вовсе не писать.
            </p>
            <p>Ниже перечислены все методы жизненного цикла компонента в порядке их вызова.</p>
            <ul>
                <li>
                    <p>
                        <span class="attention">ngOnChanges</span> - вызывается после того, как были проверены значения
                        входных свойств класса компонента, и до того, как был проверен шаблон текущего компонента.
                    </p>
                    <p>
                        У данного метода есть одна отличительная особенность от других методов жизненного цикла - это
                        <span class="attention"
                            >опциональный параметр <code>changes</code> с типом <code>SimpleChanges</code></span
                        >. Он представляет собой объект, внутри которого присутствуют поля, по названию совпадающие с
                        параметрами, которые текущий компонент получает от родителя через декоратор
                        <code>@Input&#40;&#41;</code>.
                    </p>
                    <p>Пример такого объекта, когда от родителя мы получаем свойство <code>title</code>:</p>
                    <pre><code><span class="punctuation">{</span>
	title <span class="punctuation">{</span>
		currentValue: <span class="string">'Какое-то текущее значение свойства title'</span>,
		firstChange: <span class="boolean">true</span>, <span class="comment">// если это первое значение поля title, будет true, иначе false</span>
		previousValue: <span class="undefined">undefined</span> <span class="comment">// если это первое значение поля title, то предыдущего еще не было</span>
	<span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>
                    <p>
                        Стоит также иметь ввиду, что метод <code>ngOnChanges</code> вызывается
                        <span class="attention">
                            только если есть входные параметры через декоратор <code>@Input&#40;&#41;</code>
                        </span>
                        у текущего компонента.
                    </p>
                </li>
                <li>
                    <p>
                        <span class="attention">ngOnInit</span> - вызывается единожды после того, как Angular впервые
                        проверил все свойства компонента, связанные с данными, и до того, как был проверен шаблон
                        текущего компонента.
                    </p>
                    <p>Пример свойства компонента, связанного с данными:</p>
                    <pre><code><span class="comment comment_start">// в классе компонента</span>
title: <span class="type">string</span> <span class="operator">=</span> <span class="string">'Какой-то заголовок'</span>;

<span class="comment comment_start">// в шаблоне компонента</span>
<span class="tag">&lt;p></span>&#123;&#123; title &#125;&#125;<span class="tag">&lt;/p></span>
</code></pre>
                    <p>
                        Вот как только Angular проверит в данном случае это свойство, вот тогда и будет вызван метод
                        <code>ngOnInit</code>.
                    </p>
                    <p>
                        Если у компонента нет каких-либо входных параметров через декоратор
                        <code>@Input&#40;&#41;</code>, как это часто бывает в родительских компонентах, то метод
                        <code>ngOnChanges</code> не вызывается, следовательно, метод <code>ngOnInit</code> вызовется
                        первым после запуска жизненного цикла компонента.
                    </p>
                </li>
                <li>
                    <p><span class="attention">ngDoCheck</span> - вызывается при любых изменениях в компоненте.</p>
                    <p>У данного метода несколько сценариев вызова:</p>
                    <ul>
                        <li>
                            Если происходит инициализация компонента, то метод <code>ngDoCheck</code> вызовется после
                            вызова метода <code>ngOnInit</code>, т.е. произойдет реагирование на установку свойств
                            компонента;
                        </li>
                        <li>
                            Если ранее метод <code>ngOnInit</code> уже вызывался, т.е. компонент уже хотя бы раз прошел
                            все этапы жизненного цикла (не считая метод <code>ngOnDestroy</code>, отвечающий за удаление
                            компонента из DOM-дерева), то метод <code>ngDoCheck</code> будет вызываться каждый раз после
                            вызова метода <code>ngOnChanges</code>, т.е. произойдет реагирование на изменение входных
                            свойств компонента;
                        </li>
                        <li>
                            В добавок к этому, данный метод также будет вызываться всякий раз, когда будет происходит
                            изменение одного или нескольких внутренних свойств или случаться какое-то событие в
                            компоненте, которое влияет на данные одного или нескольких свойств этого компонента. Тут уже
                            будет происходить реагирование на изменения, которые нашел механизм
                            <code>Change Detection</code>.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <span class="attention">ngAfterContentInit</span> - вызывается единожды после того, как Angular
                        полностью инициализирует все содержимое, которое заключено между его тегами в месте вызова этого
                        компонента. Это содержимое в дочернем компоненте подставляется вместо элемента
                        <code>ng-content</code>.
                    </p>
                    <p>
                        Даже если в компоненте нет элемента <code>ng-content</code>, данный метод все равно вызовется
                        при инициализации компонента.
                    </p>
                </li>
                <li>
                    <p>
                        <span class="attention">ngAfterContentChecked</span> - вызывается после того, как механизм
                        <code>Change Detection</code> завершил проверку всего содержимого, заключенного между тегами
                        компонента в месте его вызова. Опять же, это содержимое подставляется вместо элемента
                        <code>ng-content</code> уже в самом компоненте.
                    </p>
                    <p>По последовательности вызовов среди методов жизненного цикла у него есть 2 сценария:</p>
                    <ul>
                        <li>
                            При инициализации компонента метод <code>ngAfterContentCheck</code> вызывается по
                            очередности после вызова метода <code>ngAfterContentInit</code>;
                        </li>
                        <li>
                            Все последующие разы данный метод будет вызываться по очередности после метода
                            <code>ngDoCheck</code>.
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        <span class="attention">ngAfterViewInit</span> - вызывается единожды после того, как Angular
                        полностью инициализирует представление компонента. Под представлением понимается содержимое
                        шаблона компонента, включая шаблоны других компонентов, которые в нем присутствуют;
                    </p>
                    <p>
                        В зависимости от того, является ли текущий компонент родительским для какого-то другого
                        компонента или нет, поведение метода <code>ngAfterViewInit</code> будет немного отличаться.
                    </p>
                    <p>
                        Допустим у нас есть родительский и дочерний компоненты (app.component.ts и child.component.ts
                        соответственно):
                    </p>
                    <pre><code><span class="comment comment_start">// шаблон app.component.ts</span>
<span class="tag">&lt;app-child></span><span class="tag">&lt;/app-child></span>

<span class="comment comment_start">// шаблон child.component.ts</span>
<span class="tag">&lt;p></span>Простой шаблон без использования других компонентов в нем<span class="tag">&lt;/p></span>
</code></pre>
                    <p>
                        При таком сценарии, в момент инициализации компонента, консоль браузера будет выглядеть
                        следующим образом:
                    </p>
                    <img
                        class="large-img"
                        src="./assets/img/angular/component/example_ng_after_view_init.jpg"
                        alt="example ngAfterViewInit"
                    />
                    <p>
                        Сперва у нас вызывается родительский конструктор, затем дочерний. Потом родительский компонент
                        начинает свой жизненный цикл и доходит до метода <code>ngAfterContentChecked</code>. После него
                        запускается уже жизненный цикл дочернего компонента. Полностью его проходит и только после него
                        вызывается родительские методы <code>ngAfterViewInit</code> и <code>ngAfterViewChecked</code>.
                    </p>
                    <i class="subtitle">Почему так происходит?</i>
                    <p>
                        Метод <code>ngAfterViewInit</code> вызывается после того, как инициализируется содержимое
                        шаблона компонента, включая шаблоны других компонентов, которые в нем присутствуют.
                    </p>
                    <p>
                        Т.к. в шаблоне дочернего компонента <code>app-child</code> у нас нет других компонентов, поэтому
                        жизненный цикл при инициализации прошел полностью сразу.
                    </p>
                    <p>
                        В родительском же шаблоне ситуация иная, т.к. добавлен в него дочерний компонент. Поэтому он
                        дождался пока полностью пройдет инициализация шаблона дочернего компонента и своего шаблона в
                        целом и только после этого продолжил свой жизненный цикл.
                    </p>
                    <p>
                        Иначе говоря,
                        <span class="attention">
                            каждый родитель в дереве компонентов будет ждать полное выполнение жизненного цикла всех
                            своих дочерних компонентов, чтобы полностью пройти свой собственный жизненный цикл при
                            инициализии</span
                        >. И так пока цепочка жизненных циклов не дойдет до корневого компонента.
                    </p>
                </li>
                <li>
                    <p>
                        <span class="attention">ngAfterViewChecked</span> - вызывается после того, как механизм
                        <code>Change Detection</code> завершит проверку представления компонента на наличие изменений.
                    </p>
                    <p>По последовательно вызовов среди методов жизненного цикла у него есть 2 сценария:</p>
                    <ul>
                        <li>
                            При инициализации компонента метод <code>ngAfterViewChecked</code> вызывается после вызова
                            метода <code>ngAfterViewInit</code>;
                        </li>
                        <li>
                            Все последующие разы данный метод будет вызываться по очередности после метода
                            <code>ngAfterContentChecked</code>.
                        </li>
                    </ul>
                </li>
                <li>
                    <span class="attention">ngOnDestroy</span> - вызывается в момент удаления компонента из DOM-дерева.
                    На данном этапе
                    <span class="attention"
                        >следует отписываться от данных типа <code>Observable</code> и обработчиков событий, чтобы
                        избежать утечек памяти</span
                    >.
                </li>
            </ul>`,
        selected: false,
        lastUpdate: '24.12.2023',
    },
    {
        title: 'Имплементация методов жизненного цикла',
        body: ` <p>
                Для класса компонента следует указывать реализацию встроенных интерфейсов, которые содержат внутри себя
                функции, совпадающие по названию с названием интерфейса + префикс
                <code>ng</code>.
            </p>
            <p>
                Например, метод жизненного цикла <code>ngOnInit</code> реализует интерфейс <code>OnInit</code>,
                прибавляем префикс <code>ng</code> и получаем сам метод <code>ngOnInit</code>:
            </p>
            <pre><code><span class="comment comment_start">// Как выглядит встроенный интерфейс OnInit под капотом</span>
<span class="export">export</span> <span class="keyword">declare interface</span> <span class="interface-name">OnInit</span> <span class="punctuation">{</span>
    <span class="method">ngOnInit()</span>: <span class="type">void</span>;
<span class="punctuation">}</span></code></pre>
            <p>Как это выглядит в компоненте:</p>
            <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">ContactsItemComponent</span> <span class="keyword">implements</span> <span class="interface-name">OnInit</span> <span class="punctuation">{</span>
	<span class="method">ngOnInit()</span> <span class="punctuation">{</span>
		console.<span class="function-name">log</span><span class="punctuation">(</span><span class="string">'OnInit'</span><span class="punctuation">)</span> <span class="comment"> // OnInit</span>
	<span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>
            <p>
                В примере выше, после ключевого слова <code>implements</code>, указывается реализация интерфейсов,
                соответствующих методам жизненного цикла, которые задействованы в текущем компоненте. В данном случае
                это <code>OnInit</code>. Если нужна реализация более одного интерфейса, они перечисляются через запятую.
            </p>`,
        selected: false,
        lastUpdate: '24.12.2023',
    },
    {
        title: 'Использование <span class="variable">Getter</span> и <span class="variable">Setter</span> внутри компонента',
        body: `<p>
            Геттерами (Getter) и сеттерами (Setter) называются методы Angular-компонента, которые
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
        <pre><code><span class="comment comment_start">// класс компонента</span>
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">SomeComponent</span> <span class="punctuation">{</span>
	_name: <span class="type">string</span> <span class="operator">=</span> <span class="null">null</span>; <span class="comment">// приватная переменная</span>

	<span class="function-name">@Input()</span> <span class="keyword">set</span> <span class="method">name</span><span class="punctuation">(</span>value: <span class="type">string</span><span class="punctuation">)</span> <span class="punctuation">{</span>
		<span class="object">this</span>._name <span class="operator">=</span> value <span class="operator">+</span> <span class="string">'*'</span>;
	<span class="punctuation">}</span>

	<span class="keyword">get</span> <span class="method">name()</span>: <span class="type">string</span> <span class="punctuation">{</span>
		<span class="keyword">return</span> <span class="object">this</span>._name <span class="operator">||</span> <span class="string">'Аноним'</span>;
	<span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="comment comment_start">// шаблон компонента</span>
<span class="tag"><</span><span class="tag">p></span><span class="punctuation">{{</span><span class="variable">name</span><span class="punctuation">}}</span><span class="tag"><</span><span class="tag">/p></span></code></pre>
        <p>
            В классах JavaScript мы также можем создавать приватные переменные,
            к которым можно получить доступ с помощью геттеров и сеттеров (их
            еще называют методами доступа к переменной). В примере выше это
            переменная <code>_name</code>.
        </p>`,
        selected: false,
        lastUpdate: '19.10.2023',
    },
    {
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
        <p>
            Если мы не будем отписываться, но при этом удалять компонент,
            например, при переходе на другую страницу, а потом вернемся на
            страницу, где опять стаработает подписка, то количество подписчиков
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
            происзойдет утечка памяти и страничка в браузере "умрет" или ваше
            приложение попросту зависнет.
        </p>`,
        selected: false,
        lastUpdate: '04.11.2023',
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
    {
        title: `Создает ли ng-content новый контент внутри дочернего компонента?`,
        body: `<p>
		<span class="attention">
			Элемент <code>ng-content</code> не создает новый контент, а
			проецирует уже существующий, который передается между
			открывающим и закрывающим тегами дочернего компонента</span
		>. Поэтому
		<span class="attention">
			за создание и удаление отвечает компонент, в котором
			объявлен контент</span
		>.
	</p>
	<p>
		Для примера воспользуемся структурной директивой
		<code>*ngIf</code>, которая при смене условия полностью
		удаляет/создает элемент в DOM-дереве, при этом
		<code>OnDestroy</code> / <code>OnInit</code> должны срабатывать
		каждый раз соответствующим образом.
	</p>
	<pre><code><span class="comment comment_start">// app.component.ts</span>
<span class="variable">showChild</span> <span class="operator">=</span> <span class="boolean">false</span>;

<span class="comment comment_start">// app.component.html</span>
<span class="tag"><</span><span class="tag">button</span> <span class="keyword">(click)</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">showChild</span> <span class="operator">=</span> <span class="operator">!</span><span class="variable">showChild</span><span class="punctuation">"</span><span class="tag">></span><span class="tag"><</span><span class="tag">/button></span>
<span class="tag"><</span><span class="tag">app-child></span> 
	<span class="tag"><</span><span class="tag">span</span> <span class="keyword">*ngIf</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">showChild</span><span class="punctuation">"</span><span class="tag">></span><span class="string">Какое-то содержимое, которое передается внутрь дочернего компонента</span><span class="tag"><</span><span class="tag">/span></span>
<span class="tag"><</span><span class="tag">/app-child></span>
		

<span class="comment comment_start">// child.component.ts</span>
<span class="method">ngOnInit() {</span>
	console.<span class="method">log(</span><span class="string">'Сработал метод'</span><span class="punctuation">)</span>; <span class="comment">// сработает только 1 раз, даже если нажимать на кнопку в родителе</span>
<span class="punctuation">}</span>

<span class="comment comment_start">// child.component.html</span>
<span class="tag"><</span><span class="tag">ng-content</span><span class="tag">></span><span class="tag"><</span><span class="tag">/ng-content></span>
		</code></pre>
	<p>
		Хоть мы и повесили условие, но хуки жизненного цикла компонента
		не срабатывают при смене условия. Почему так происходит? Все
		просто на самом деле.
		<span class="attention">
			Если мы делаем по условию лишь содержимое, то сам компонент
			как инициировался в DOM-дереве, так в нем и остается, даже
			если мы меняем условие</span
		>. В этом легко убедиться, открыв разметку в браузере в режиме
		разработчика.
	</p>
	<p>
		Если необходимо, чтобы содержимое инициировалось и уничтожалось
		каждый раз при переключении кнопки, условие нужно ставить на сам
		компонент:
	</p>
	<pre><code><span class="comment comment_start">// app.component.ts</span>
<span class="variable">showChild</span> <span class="operator">=</span> <span class="boolean">false</span>;

<span class="comment comment_start">// app.component.html</span>
<span class="tag"><</span><span class="tag">button</span> <span class="keyword">(click)</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">showChild</span> <span class="operator">=</span> <span class="operator">!</span><span class="variable">showChild</span><span class="punctuation">"</span><span class="tag">></span><span class="tag"><</span><span class="tag">/button></span>
<span class="tag"><</span><span class="tag">app-child</span> <span class="keyword">*ngIf</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">showChild</span><span class="punctuation">"</span><span class="tag">></span>
	<span class="tag"><</span><span class="tag">span></span><span class="string">Какое-то содержимое, которое передается внутрь дочернего компонента</span><span class="tag"><</span><span class="tag">/span></span>
<span class="tag"><</span><span class="tag">/app-child></span>
		

<span class="comment comment_start">// child.component.ts</span>
<span class="method">ngOnInit() {</span>
	console.<span class="method">log(</span><span class="string">'Сработал метод'</span><span class="punctuation">)</span>; <span class="comment">// метод будет срабатывать каждый раз при инициализации компонента</span>
<span class="punctuation">}</span>

<span class="comment comment_start">// child.component.html</span>
<span class="tag"><</span><span class="tag">ng-content</span><span class="tag">></span><span class="tag"><</span><span class="tag">/ng-content></span></code></pre>`,
        selected: false,
        lastUpdate: '03.08.2023',
    },
    {
        title: 'Как создаются пользовательские события?',
        body: ``,
        selected: false,
        lastUpdate: '',
        disabled: true,
    },
    {
        title: 'Какие существуют механизмы привязки данных?',
        body: `<p>В Angular существует 4 способа привязки данных:</p>
        <ul>
            <li>
                <span class="attention">интерполяция</span> - данные берутся из
                компонента;
            </li>
            <li>
                <span class="attention">одностороннее связывание</span>
                - данные берутся из компонента;
            </li>
            <li>
                <span class="attention">обработка событий</span> - данные после
                определенного события возвращаются в компонент;
            </li>
            <li>
                <span class="attention">двустороннее связывание</span> - данные
                берутся из компонента и после определенного события ему же
                возвращаются.
            </li>
        </ul>
        <i class="subtitle">Интерполяция</i>
        <p>Примеры интерполяции:</p>
        <pre><code><span class="tag"><</span><span class="tag">p</span><span class="tag">></span>Hello, <span class="punctuation">{{</span><span class="variable">name</span><span class="punctuation">}}</span><span class="tag"><</span><span class="tag">/p</span><span class="tag">></span> <span class="comment">// (1) Основной способ использования интерполяции</span>
<span class="tag"><</span><span class="tag">input</span> <span class="keyword">type</span><span class="operator">=</span><span class="string">"text"</span> <span class="keyword">name</span><span class="operator">=</span><span class="punctuation">{{</span><span class="variable">name</span><span class="punctuation">}}</span><span class="tag">></span> <span class="comment">// (2) Так тоже будет работать, но такая запись редко встречается</span></code></pre>
        <p>
            При использовании интерполяции данные для переменной
            <code>name</code> берутся из того же самого компонента, к которому
            привязан шаблон с текущей разметкой. Данный способ привязки данных
            обычно используется, чтобы вывести в содержимом разметки какие-то
            данные.
        </p>
        <i class="subtitle">Одностороннее связывание</i>
        <p>
            Если необходимо изменять данные атрибутов элементов разметки, то
            интерполяцию тоже можно использовать (см. выше пример (2)), но в
            основном это делают через
            <span class="attention">одностороннее связывание</span>. Но суть та
            же:
        </p>
        <pre><code><span class="tag"><</span><span class="tag">input</span> <span class="keyword">type</span><span class="operator">=</span><span class="string">"text"</span> <span class="keyword"><span class="punctuation">[</span><span class="keyword">name</span><span class="punctuation">]</span></span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">name</span><span class="punctuation">"</span><span class="tag">></span> <span class="comment">// (2*) запись второго примера из интерполяции через одностороннее связывание</span>
<span class="tag"><</span><span class="tag">input</span> <span class="keyword">type</span><span class="operator">=</span><span class="string">"text"</span> <span class="keyword"><span class="keyword">bind-name</span></span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">name</span><span class="punctuation">"</span><span class="tag">></span> <span class="comment">// (2**) Альтернативная запись. Встречается реже</span></code></pre>
        <i class="subtitle">Обработка событий</i>
        <p>
            Что касается событий, то в Angular
            <span class="attention">
                все события можно отследить и обработать </span
            >, привязав к ним вызов метода класса. Делается это следующим
            образом:
        </p>
        <pre><code><span class="tag"><</span><span class="tag">button</span> <span class="punctuation">(</span><span class="keyword">click</span><span class="punctuation">)</span><span class="operator">=</span><span class="punctuation">"</span><span class="function-name">showItems</span><span class="punctuation">()</span><span class="punctuation">"</span><span class="tag">></span>Я кнопка<span class="tag"><</span><span class="tag">/button</span><span class="tag">></span>
<span class="tag"><</span><span class="tag">button</span> <span class="keyword">on-click</span><span class="operator">=</span><span class="punctuation">"</span><span class="function-name">showItems</span><span class="punctuation">()</span><span class="punctuation">"</span><span class="tag">></span>Я кнопка-близнец<span class="tag"><</span><span class="tag">/button</span><span class="tag">></span> <span class="comment">// альтернативный вариант записи</span></code></pre>
        <p>
            В данных примерах при клике на кнопку будет вызвана функция
            <code>showItems()</code>. Названия событий всегда должны быть
            заключены в круглые скобки или предваряться префиксом
            <code>on-</code>.
        </p>
        <p>
            Если необходимо получить подробную информацию о событии, то она
            хранится в объекте <code>$event</code>, который передается в функцию
            в качестве аргумента.
        </p>
        <pre><code><span class="tag"><</span><span class="tag">button</span> <span class="punctuation">(</span><span class="keyword">click</span><span class="punctuation">)</span><span class="operator">=</span><span class="punctuation">"</span><span class="function-name">showItems</span><span class="punctuation">(</span>$event<span class="punctuation">)</span><span class="punctuation">"</span><span class="tag">></span>Я кнопка<span class="tag"><</span><span class="tag">/button</span><span class="tag">></span></code></pre>
        <p>
            Помимо встроенных событий можно создавать также и свои -
            <span class="attention">пользовательские события</span>. За этот
            функционал отвечает класс <code>EventEmitter</code>.
        </p>
        <i class="subtitle">Двустороннее связывание</i>
        <p>
            Механизм двустороннего связывания (two way binding) используется,
            когда
            <span class="attention"
                >необходимо отобразить свойство в шаблоне</span
            >
            (одностороннее связывание)
            <span class="attention">и обновить его при изменении значения</span>
            (обработка события)
            <span class="attention">без перезагрузки страницы</span>.
        </p>
        <p>
            Синтаксис двустороннего связывания представляет собой слияние
            одностороннего связывания ("<code>[]</code>") и привязки события
            ("<code>()</code>").
        </p>
        <pre><code><span class="tag"><</span><span class="tag">some-item</span> <span class="punctuation">[(</span><span class="keyword">name</span><span class="punctuation">)]</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">myName</span><span class="punctuation">"</span><span class="tag">></span><span class="tag"><</span><span class="tag">/some-item</span><span class="tag">></span></code></pre>
        <p>
            Запись <code>[(name)]="myName"</code> означает, что при изменении
            <code>name</code> в дочернем компоненте (откуда оно будет получено в
            измененном виде), измененнное значение будет присвоено свойству
            <code>myName</code> компонента <code>some-item</code>.
        </p>`,
        selected: false,
    },
    {
        title: 'Вложенные свойства атрибутов',
        body: `<p>
		В ангуляре можно использовать вложенные свойства у атрибутов.
		Например, вы хотите задать ширину элементу в процентах. Сделать
		это можно различными способами:
	</p>
	<pre><code><span class="tag"><</span><span class="tag">p</span> <span class="attribute">style</span><span class="operator">=</span><span class="string">"width: 50%"</span><span class="tag">></span>Какой-то текст<span class="tag"><</span><span class="tag">/p></span>
<span class="tag"><</span><span class="tag">p</span> <span class="attribute">[style.width.%]</span><span class="operator">=</span><span class="string">"50"</span><span class="tag">></span>Какой-то текст<span class="tag"><</span><span class="tag">/p></span>
</code></pre>
	<p>Обе записи выдадут одинаковый результат.</p>`,
        selected: false,
        lastUpdate: '05.07.2023',
    },
    {
        title: 'Обработка событий комбинаций клавиш',
        body: `<p>
		Очень редко, но бывают ситуации, когда необходимо обработать
		событие комбинации конкретных клавиш. В Ангуляре это можно
		сделать следующим образом:
	</p>
	<pre><code><span class="tag"><</span><span class="tag">input</span> <span class="attribute">type</span><span class="operator">=</span><span class="string">"text"</span> <span class="attribute">(keydown.control.enter)</span><span class="operator">=</span><span class="string">"</span><span class="function-name">someFunction()</span><span class="string">"</span> <span class="tag">/></span></code></pre>
	<p>
		Соответственно, когда инпут будет в фокусе, зажав комбинацию
		клавиш <code>Ctrl + Enter</code> у вас вызовется функция
		<code>someFunction</code>, в которую уже вам решать какую логику
		заложить. 
	</p>
	<p>Если нужно обработать еще больше клавиш, то также перечисляете их через точку, как в примере выше.</p>`,
        selected: false,
        lastUpdate: '06.07.2023',
    },
    {
        title: 'Элемент ng-template',
        body: ``,
        selected: false,
        lastUpdate: '',
        disabled: true,
    },
    {
        title: 'Элемент ng-container',
        body: `<p>
                Элемент <code>ng-container</code> - это
                <span class="attention">
                    специальный элемент, который может содержать структурные
                    директивы без добавления новых элементов в DOM-дерево</span
                >.
            </p>
            <p>
                Допустим, в редакторе кода у нас имеется следующий код,
                содержащий внутри себя 2 элемента <code>ng-container</code>, на
                каждом из которых весит структурная директива
                <code>*ngIf</code>:
            </p>
            <pre><code><span class="tag">&lt;div></span>
	<span class="tag">&lt;ng-container</span> <span class="keyword">*ngIf</span><span class="operator">=</span><span class="punctuation">"</span><span class="boolean">true</span><span class="punctuation">"</span><span class="tag">></span>
		<span class="tag">&lt;p></span>Первый текст<span class="tag">&lt;/p></span>
	<span class="tag">&lt;/ng-container></span>
	<span class="tag">&lt;ng-container</span> <span class="keyword">*ngIf</span><span class="operator">=</span><span class="punctuation">"</span><span class="boolean">false</span><span class="punctuation">"</span><span class="tag">></span>
		<span class="tag">&lt;p></span>Второй текст<span class="tag">&lt;/p></span>
	<span class="tag">&lt;/ng-container></span>
<span class="tag">&lt;/div></span></code></pre>
            <p>
                В итоге, в браузере данный участок кода будет выглядеть
                следующим образом:
            </p>
            <pre><code><span class="tag">&lt;div></span>
	<span class="tag">&lt;p></span>Первый текст<span class="tag">&lt;/p></span>
<span class="tag">&lt;/div></span></code></pre>
            <p>
                Как видно из примера, элемент <code>ng-container</code> не
                добавляет новые элементы в DOM-дерево.
            </p>`,
        selected: false,
        lastUpdate: '19.11.2023',
    },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
];
