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
	<pre><code class="language-typescript">@Component({
	selector: 'app-root', // название компонента
	templateUrl: './app.component.html', // путь к HTML-файлу. Является обязательным свойством
	styleUrls: ['./app.component.scss'], // массив путей к SCSS-файлам
	providers: [SomeService], // если добавляются непосредственно в компонент какие-то зависимости
	changeDetection: ChangeDetectionStrategy.OnPush, // явное определение стратегии ChangeDetection
})

export class AppComponent {} // класс, к которому привязывается декоратор @Component()</code></pre>`,
        selected: false,
        lastUpdate: '08.02.2024',
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
<pre><code class="language-typescript">{
	title {
		currentValue: 'Какое-то текущее значение свойства title',
		firstChange: true, // если это первое значение поля title, будет true, иначе false
		previousValue: undefined // если это первое значение поля title, то предыдущего еще не было
	}
}</code></pre>
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
<pre><code class="language-typescript">// класс компонента
title: string = 'Какой-то заголовок';</code></pre>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;p>{{ title }}&lt;/p></code></pre>
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
<pre><code class="language-html">&lt;!-- шаблон app.component.ts -->
&lt;app-child>&lt;/app-child></code></pre>
<pre><code class="language-html">&lt;!-- шаблон child.component.ts -->
&lt;p>Простой шаблон без использования других компонентов в нем&lt;/p></code></pre>
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
                            инициализации</span
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
        lastUpdate: '08.02.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/Nnf6gtAY0vc',
            },
        ],
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
<pre><code class="language-typescript">// Как выглядит встроенный интерфейс OnInit под капотом
export declare interface OnInit {
    ngOnInit(): void;
}</code></pre>
            <p>Как это выглядит в компоненте:</p>
<pre><code class="language-typescript">export class ContactsItemComponent implements OnInit {
	ngOnInit() {
		console.log('OnInit')  // OnInit
	}
}</code></pre>
            <p>
                В примере выше, после ключевого слова <code>implements</code>, указывается реализация интерфейсов,
                соответствующих методам жизненного цикла, которые задействованы в текущем компоненте. В данном случае
                это <code>OnInit</code>. Если нужна реализация более одного интерфейса, они перечисляются через запятую.
            </p>`,
        selected: false,
        lastUpdate: '08.02.2024',
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
<pre><code class="language-typescript">// класс компонента
export class SomeComponent {
	_name: string = null; // приватная переменная

	@Input() set name(value: string) {
		this._name = value + '*';
	}

	get name(): string {
		return this._name || 'Аноним';
	}
}</code></pre>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;p>{{name}}&lt;/p></code></pre>

        <p>
            В классах JavaScript мы также можем создавать приватные переменные,
            к которым можно получить доступ с помощью геттеров и сеттеров (их
            еще называют методами доступа к переменной). В примере выше это
            переменная <code>_name</code>.
        </p>`,
        selected: false,
        lastUpdate: '08.02.2024',
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
    },
    {
        title: 'Способы взаимодействия между компонентами',
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
                    получают доступ к одному и ко всем дочерним
                    компонентам, удовлетворяющих условию селектора внутри декоратора</span>. С помощью данных декораторов можно получить и изменить (последнее не рекомендуется делать) информацию о свойствах и методах дочерних компонентов.
            </li>
            <li>
                <code>@ContentChild()</code> и <code>@ContentChildren()</code> -
                <span class="attention">
                    получают доступ к содержимому одного и всех дочерних
                    компонентов, удовлетворяющих условию селектора внутри декоратора</span>.
            </li>
            <li>
                Сервисы - своего рода
                <span class="attention">хранилища данных</span>, к которым могут
                обращаться компоненты, директивы и тд.
            </li>
        </ul>`,
        selected: false,
        lastUpdate: '08.02.2024',
        footerLinks: [
            {
                title: '@Input()',
                path: 'https://youtu.be/VUgOLgnBPcs?t=149',
            },
            {
                title: '@Output()',
                path: 'https://youtu.be/VUgOLgnBPcs?t=400',
            },
        ],
    },
    {
        title: `Объяснение, почему элемент <span class="variable">ng-content</span> не создает новый контент внутри дочернего компонента`,
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
		<pre><code class="language-typescript">// app.component.ts
showChild = false;
</code></pre>
<pre><code class="language-html">&lt;!-- app.component.html -->
&lt;button (click)="showChild = !showChild">&lt;/button>
&lt;app-child> 
	&lt;span *ngIf="showChild">Какое-то содержимое, которое передается внутрь дочернего компонента&lt;/span>
&lt;/app-child></code></pre>
		<pre><code class="language-typescript">// child.component.ts
ngOnInit() {
	console.log('Сработал метод'); // сработает только 1 раз, даже если нажимать на кнопку в родителе
}</code></pre>
<pre><code class="language-html">&lt;!-- child.component.html -->
&lt;ng-content>&lt;/ng-content></code></pre>
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
		<pre><code class="language-typescript">// app.component.ts
showChild = false;
</code></pre>
<pre><code class="language-html">&lt;!-- app.component.html -->
&lt;button (click)="showChild = !showChild">&lt;/button>
&lt;app-child *ngIf="showChild"> 
	&lt;span>Какое-то содержимое, которое передается внутрь дочернего компонента&lt;/span>
&lt;/app-child></code></pre>
		<pre><code class="language-typescript">// child.component.ts
ngOnInit() {
	console.log('Сработал метод'); // теперь метод будет срабатывать каждый, когда условие выше будет true
}</code></pre>
<pre><code class="language-html">&lt;!-- child.component.html -->
&lt;ng-content>&lt;/ng-content></code></pre>`,
        selected: false,
        lastUpdate: '08.02.2024',
    },
    {
        title: 'Создание пользовательских событий',
        body: `            <p>
                Пользовательские события создаются, когда нужно передать данные на 1 уровень вложенности наверх при
                срабатывании определенного события в дочернем компоненте или директиве.
            </p>
            <p>
                Ниже будет разобран код на примере дочернего компонента, но в самом низу также будут ссылки на
                видеообъяснения, где разобраны оба варианта.
            </p>
            <p>
                <span class="attention">
                    Создание пользовательских событий осуществляется за счет специального Angular-класса
                    <code>EventEmitter</code>, а передача данных наверх происходит за счет декоратора
                    <code>@Output&#40;&#41;</code></span
                >:
            </p>
            <pre><code class="language-typescript">// класс дочернего компонента
&#64;Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  	&#64;Output() nameChange = new EventEmitter();
}</code></pre>
            <p>
                В примере выше пользовательское событие будет хранится в свойстве <code>nameChange</code>. Благодаря
                декоратору <code>@Output&#40;&#41;</code> данному свойству будет доступен метод <code>emit</code>,
                который и отправляет данные на 1 уровень вложенности наверх.
            </p>
            <p>
                Но данный метод нужно теперь как-то вызвать. В качестве примера создадим кнопку в дочернем компоненте,
                по клику на которую будет вызываться метод <code>changeName</code> в классе дочернего компонента, внутри
                которого присутствует вызов метода <code>emit</code>:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон дочернего компонента -->
&lt;button (click)="changeName()">Создать событие&lt;/button></code></pre>
            <pre><code class="language-typescript">// класс дочернего компонента
@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
	&#64;Output() nameChange = new EventEmitter&lt;string>();

	changeName() {
		this.nameChange.emit();
	}
}</code></pre>
            <p>
                При текущем коде наверх родителю никакие данные не уйдут. Это удобно, когда нужно просто уведомить
                родителя о срабатывании события в дочернем компоненте, а дальше он уже будет выполнять какую-то свою
                логику. Но если нужно передать данные, то они указываются первым аргументом в методе <code>emit</code>:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон дочернего компонента -->
&lt;button (click)="changeName()">Создать событие&lt;/button></code></pre>
            <pre><code class="language-typescript">// класс дочернего компонента
@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
	&#64;Input() name!: string; // допустим имя приходит от родителя

	// можно также указать тип отправляемых наверх данных
	&#64;Output() nameChange = new EventEmitter&lt;string>();

	changeName() {
		this.nameChange.emit('Имя, заданное в дочернем компоненте');
	}
}</code></pre>
            <p>
                Теперь нужно научить родительский компонент обрабатывать созданное нами пользовательское событие выше.
                Делается это точно так же, как и с обычными событиями:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child [name]="childName" (nameChange)="setNewName($event)">&lt;/app-child></code></pre>
            <p>
                Т.е., в качестве названия события указывается имя свойства, в котором хранится пользовательское событие
                (экземпляр класса <code>EventEmitter</code>), и после знака равно указывается метод из класса
                родительского компонента, который вызовется при его срабатывании. Если в пользовательском событии
                передаются какие-то данные, то они будут храниться в специальном объекте <code>$event</code>.
            </p>
            <p>
                И теперь остается создать метод в классе родительского компонента, который будет вызываться при
                срабатывании пользовательского события:
            </p>
            <pre><code class="language-typescript">// класс родительского компонента
&#64;Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	childName: string = 'Имя дочернего компонента';

	setNewName(newName: string) {
		this.childName = newName;
	}
}</code></pre>
            <p>
                Внутри метода <code>setNewName</code> может быть любая логика. Выше в качестве примера изменяется свойство
                <code>childName</code>.
            </p>`,
        selected: false,
        lastUpdate: '24.02.2024',
        footerLinks: [
            { title: 'Пример с дочерним компонентом', path: 'https://youtu.be/VUgOLgnBPcs?t=402' },
            { title: 'Пример с директивой', path: 'https://youtu.be/qHfHV5Ej4pg?t=903' },
        ],
    },
    {
        title: 'Механизмы привязки данных',
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
<pre><code class="language-html">&lt;p>Hello, {{name}}&lt;/p> &lt;!-- (1) Основной способ использования интерполяции -->
&lt;input type="text" name={{name}}> &lt;!-- (2) Так тоже будет работать, но такая запись редко встречается --></code></pre>
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
<pre><code class="language-html">&lt;input type="text" [name]="name"> &lt;!-- (2*) запись второго примера из интерполяции через одностороннее связывание -->
&lt;input type="text" bind-name="name"> &lt;!-- (2**) Альтернативная запись. Встречается реже --></code></pre>
        <i class="subtitle">Обработка событий</i>
        <p>
            Что касается событий, то в Angular
            <span class="attention">
                все события можно отследить и обработать </span
            >, привязав к ним вызов метода класса. Делается это следующим
            образом:
        </p>
<pre><code class="language-html">&lt;button (click)="showItems()">Я кнопка&lt;/button>
&lt;button on-click="showItems()">Я кнопка-близнец&lt;/button> &lt;!-- альтернативный вариант записи --></code></pre>
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
<pre><code class="language-html">&lt;button (click)="showItems($event)">Я кнопка&lt;/button></code></pre>
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
		<pre><code class="language-html">&lt;some-item [(name)]="myName">&lt;/some-item></code></pre>
        <p>
            Запись <code>[(name)]="myName"</code> означает, что при изменении
            <code>name</code> в дочернем компоненте (откуда оно будет получено в
            измененном виде), измененное значение будет присвоено свойству
            <code>myName</code> компонента <code>some-item</code>.
        </p>`,
        selected: false,
        lastUpdate: '08.02.2024',
        footerLinks: [
            {
                title: 'интерполяция',
                path: 'https://youtu.be/YJEnopFp8Ak?t=67',
            },
            {
                title: 'одностороннее связывание',
                path: 'https://youtu.be/YJEnopFp8Ak?t=179',
            },
            {
                title: 'обработка событий',
                path: 'https://www.youtube.com/watch?v=hQ5hIFalxJE',
            },
            {
                title: 'двустороннее связывание',
                path: 'https://youtu.be/VUgOLgnBPcs?t=570',
            },
        ],
    },
    {
        title: 'Вложенные свойства атрибутов',
        body: `<p>
		В Angular можно использовать вложенные свойства у атрибутов.
		Например, вы хотите задать ширину элементу в процентах. Сделать
		это можно различными способами:
	</p>
<pre><code class="language-html">&lt;p style="width: 50%">Какой-то текст&lt;/p>
&lt;p [style.width.%]="50">Какой-то текст&lt;/p></code></pre>
	<p>Обе записи выдадут одинаковый результат.</p>`,
        selected: false,
        lastUpdate: '08.02.2024',
    },
    {
        title: 'Обработка событий комбинаций клавиш',
        body: `<p>
		Очень редко, но бывают ситуации, когда необходимо обработать
		событие комбинации конкретных клавиш. В Angular это можно
		сделать следующим образом:
	</p>
	<pre><code class="language-html">&lt;input type="text" (keydown.control.enter)="someFunction()" /></code></pre>
	<p>
		Соответственно, когда <code>input</code> будет в фокусе, зажав комбинацию
		клавиш <code>Ctrl + Enter</code> у вас вызовется функция
		<code>someFunction</code>, в которую уже вам решать какую логику
		заложить. 
	</p>
	<p>Если нужно обработать еще больше клавиш, то также перечисляете их через точку, как в примере выше.</p>`,
        selected: false,
        lastUpdate: '08.02.2024',
    },
    {
        title: 'Элемент <span class="variable">ng-template</span>',
        body: ``,
        selected: false,
        lastUpdate: '',
        footerLinks: [
            {
                path: 'https://youtu.be/vMxJPxWS0aI?t=12',
            },
        ],
        disabled: true,
    },
    {
        title: 'Элемент <span class="variable">ng-container</span>',
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
<pre><code class="language-html">&lt;div>
	&lt;ng-container *ngIf="true">
		&lt;p>Первый текст&lt;/p>
	&lt;/ng-container>
	&lt;ng-container *ngIf="false">
		&lt;p>Второй текст&lt;/p>
	&lt;/ng-container>
&lt;/div></code></pre>
            <p>
                В итоге, в браузере данный участок кода будет выглядеть
                следующим образом:
            </p>
<pre><code class="language-html">&lt;div>
	&lt;p>Первый текст&lt;/p>
&lt;/div></code></pre>
            <p>
                Как видно из примера, элемент <code>ng-container</code> не
                добавляет новые элементы в DOM-дерево.
            </p>`,
        selected: false,
        lastUpdate: '08.02.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/vMxJPxWS0aI?t=146',
            },
        ],
    },
    {
        title: 'Динамические компоненты',
        body: `<i class="subtitle">Создание динамического компонента</i>
            <p>
                <span class="attention"
                    >Динамические компоненты - это компоненты, которые создаются в момент, когда приложение уже
                    работает</span
                >. Такие компоненты, начиная с 11-ой версии Angular больше не нужно каким-либо образом объявлять в
                конфигурационном объекте декоратора <code>&#64;NgModule()</code>.
            </p>
            <p>
                Для создания динамического компонента в классе компонента необходимо получить ссылку на контейнер, т.е.
                место в шаблоне компонента, где он будет добавляться. И далее, например, в методе жизненного цикла
                <code>ngOnInit</code> с помощью метода <code>createComponent</code>, который доступен свойству,
                содержащему контейнер, создается уже непосредственно сам динамический компонент:
            </p>
            <pre><code class="language-typescript">// класс обычного компонента
export class AppComponent {
	constructor(private viewContainer: ViewContainerRef) {}

	ngOnInit() {
		// DynamicComponent - компонент, который не указан в модуле
		this.viewContainer.createComponent(DynamicComponent);
	}
}</code></pre>
            <p>
                Тут также стоит обратить внимание на то, куда именно происходит добавление динамического компонента. Он
                добавляется в DOM-дерево сразу после контейнера, а не внутрь него. В этом нет никакой ошибки, просто
                когда мы получаем ссылку на контейнер через конструктор, то в роли самого контейнера выступает уже
                непосредственно текущий компонент, в данном случае это <code>AppComponent</code>. Поэтому после него и
                будет добавляться наш динамический компонент <code>DynamicComponent</code>.
            </p>
            <p>
                Если все же необходимо создавать динамический компонент внутри <code>AppComponent</code>, то в таком
                случае можно создать какой-нибудь элемент разметки в шаблоне корневого компонента и использовать его как
                контейнер, т.к.
                <span class="attention">в роли контейнера можно использовать любой элемент разметки в шаблоне</span>. И
                далее можно воспользоваться декоратором <code>&#64;ViewChild()</code>, чтобы получить к нему доступ в
                классе компонента:
            </p>
            <pre><code class="language-javascript">&lt;!-- шаблон компонента -->
&lt;div #example>&lt;/div></code></pre>
            <pre><code class="language-typescript">// класс обычного компонента
export class AppComponent {
	&#64;ViewChild('example', { read: ViewContainerRef }) container: ViewContainerRef;

	ngAfterViewInit() {
		this.viewContainer.createComponent(DynamicComponent);
	}
}</code></pre>
            <p>
                Тут также
                <span class="attention">важно не забывать указывать дополнительный параметр <code>read</code></span
                >, чтобы Angular понимал, что мы хотим получить на выходе именно контейнер. Без такого явного указания
                работать не будет.
            </p>
            <p>
                Но чтобы не засорять DOM-дерево лишними элементами разметки, обычно в таких случаях используют элемент
                <code>ng-container</code>.
            </p>
            <i class="subtitle">Передача данных в динамические компоненты</i>
            <p>Передавать данные в динамические компоненты можно двумя способами.</p>
            <pre><code class="language-typescript">// класс динамического компонента
export class DynamicComponent {
	&#64;Input() name: string;

	ngOnChanges() {
		console.log('ngOnChanges', this.name);
	}
}</code></pre>
            <p>Первый способ - с помощью свойства <code>instance</code>:</p>
            <pre><code class="language-typescript">// класс обычного компонента
export class AppComponent {
	&#64;ViewChild('example', { read: ViewContainerRef })
	container!: ViewContainerRef;

	ngAfterViewInit() {
		const newComponent = this.container.createComponent(DynamicComponent);
		newComponent.instance.name = 'new name'; // установили новое значение свойства name
	}
}</code></pre>
            <p>
                Данный способ плох тем, что
                <span class="attention">происходит скорее не передача данных, а их перезапись</span>. При данном способе
                никак не задействуется декоратор <code>&#64;Input()</code>, следовательно, жизненный цикл динамического
                компонента ничего не знает о произошедших изменениях.
            </p>
            <p>
                Второй способ более практичен, в нем передача данных осуществляется с помощью метода
                <code>setInput</code>, которому необходимо передать 2 обязательных параметра. Первый параметр - это
                название свойства, которое мы передаем внутрь, а второй параметр - это его значение:
            </p>
            <pre><code class="language-typescript">// класс обычного компонента
export class AppComponent {
	&#64;ViewChild('example', { read: ViewContainerRef })
	container!: ViewContainerRef;

	ngAfterViewInit() {
		const newComponent = this.container.createComponent(DynamicComponent);
		newComponent.setInput('name', 'new name'); // установили новое значение свойства name
	}
}</code></pre>
            <p>
                При данном способе передача данных уже использует декоратор <code>&#64;Input()</code>, поэтому жизненный
                цикл будет знать о произошедших изменениях.
            </p>
            <i class="subtitle">Получение данных из динамических компонентов</i>
            <p>
                C получением данных, на момент заполнения текущей информации, дела пока обстоят не очень, т.к. создание
                пользовательских событий и передача данных родителю через декоратор <code>&#64;Output()</code> пока что
                не работают. Но возможно в будущем этот момент поправят.
            </p>
            <p>
                Но если нужно просто получить данные из динамического компонента, без всяких произошедших в нем событий,
                то сделать это можно так же через свойство <code>instance</code>. С помощью него обращаемся к свойству
                или методу и получаем данные. Только у метода обязательно должно возвращаться какое-то значение, иначе
                вернется <code>undefined</code>:
            </p>
            <pre><code class="language-typescript">// класс динамического компонента
export class DynamicComponent {
	callName() {
	    return 'any name'; // не забываем возвращать что-то
  }
}</code></pre>
            <pre><code class="language-typescript">// класс обычного компонента
export class AppComponent {
	&#64;ViewChild('example', { read: ViewContainerRef })
	container!: ViewContainerRef;

	ngAfterViewInit() {
		const newComponent = this.container.createComponent(DynamicComponent);
		const someData = newComponent.instance.callName();
    	console.log('someData', someData);
	}
}</code></pre>
            <i class="subtitle">Асинхронная загрузка динамических компонентов</i>
            <p>
                Еще одним преимуществом динамических компонентов является возможность вынести их в отдельный бандл,
                т.е., подгружать их лишь в тот момент, когда они нам необходимы. Делается это с помощью асинхронного
                кода.
            </p>
            <pre><code class="language-typescript">// класс обычного компонента
export class AppComponent {
	constructor(private viewContainer: ViewContainerRef) {}

	async asyncShowComponent() {
		const { DynamicComponent } = await import(
			'./components/dynamic/dynamic.component'
		);
		this.viewContainer.createComponent(DynamicComponent);
	}
}</code></pre>
            <p>
                Таким способом можно повысить скорость загрузки приложения, если вынести тяжелый какой-то компонент в
                отдельный бандл и загружать лишь при необходимости, а не тянуть его сразу.
            </p>`,
        selected: false,
        lastUpdate: '17.03.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/GC6H9NF9w1o',
            },
        ],
    },
    {
        title: 'Standalone компоненты',
        body: `<p>
                В 14-ой версии Angular были добавлены standalone сущности, в частности standalone компоненты, которые
                <span class="attention">могут существовать сами по себе, без декларирования их в модуле</span>.
            </p>
            <p>
                Сами по себе standalone компоненты - это что-то среднее между обычным компонентом и модулем. Т.е.
                <span class="attention">
                    он может быть независим как модуль и иметь свой шаблон, логику и стили как обычный компонент</span
                >.
            </p>
            <p>
                Потребность в standalone компонентах появилась из-за того, что модули порой служили лишь ненужной
                прослойкой в импортах. Такая картина часто случается в shared модулях, где все, что декларируется в
                модуле, отдается так же на экспорт:
            </p>
            <pre><code class="language-typescript">&#64;NgModule({
    declarations: [BlueComponent, RedComponent, GreenComponent],
    imports: [CommonModule],
    exports: [BlueComponent, RedComponent, GreenComponent],
})
export class SomeSharedModule {}</code></pre>
            <p>
                Чтобы сделать обычный компонент standalone компонентом, нужно в его декораторе указать свойство
                <code>standalone</code> со значением <code>true</code>:
            </p>
            <pre><code class="language-typescript">&#64;Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    styleUrl: './some.component.scss',
    standalone: true,
})
export class SomeComponent {}</code></pre>
            <p>
                Т.к. standalone компоненты являются самостоятельными, то все необходимые для их работы зависимости нужно
                так же в ним импортировать. Делается это в свойстве <code>exports</code> конфигурационного объекта
                декоратора <code>@Components&#40;&#41;</code>:
            </p>
            <pre><code class="language-typescript">&#64;Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    styleUrl: './some.component.scss',
    standalone: true,
	imports: [CommonModule],
})
export class SomeComponent {}</code></pre>
            <p>
                В примере выше импортируется модуль <code>CommonModule</code>. Такой импорт не является оптимальным для
                standalone компонентов, т.к. внутри модуля <code>CommonModule</code> содержится различный функционал,
                который вряд ли будет использоваться в компонентах в полном объеме. Вместо такого импорта лучше
                импортировать конкретный функционал:
            </p>
            <pre><code class="language-typescript">&#64;Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    styleUrl: './some.component.scss',
    standalone: true,
	imports: [NgClass], // изменили импорт
})
export class SomeComponent {}</code></pre>
            <p>
                В примере выше, в качестве примера импортируется атрибутивная директива <code>NgClass</code>, которую
                теперь можно использовать в шаблоне:
            </p>
            <pre><code class="language-html">&lt;p [ngClass]="{'some-css-class': true}">Текст&lt;/p></code></pre>`,
        selected: false,
        lastUpdate: '24.03.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/mDdCB2oR9IE',
            },
        ],
    },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
];
