import { IQuestion } from '@types';

export const decoratorQuestions: IQuestion[] = [
    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    // },
    {
        title: 'Что такое декоратор в Angular?',
        body: `<p>
		Декораторы - это
		<span class="attention"
			>функции, которые расширяют набор полей и методов класса, к
			которому они привязаны.</span
		>
	</p>
	<pre><code><span class="keyword">@Component</span><span class="punctuation">({</span>
	<span class="key">selector</span>: <span class="string">'app-some-component'</span>,
	<span class="key">styleUrls</span>: <span class="string">'./some.component.scss'</span>,
	<span class="key">templateUrl</span>: <span class="string">'./some.component.html'</span>,
<span class="punctuation">})</span>

<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">SomeComponent</span> <span class="punctuation">{}</span></code></pre>
	<p>
		В примере выше класс <code>SomeComponent</code> расширяется
		набором методов и полей от декоратора <code>@Component</code>,
		которые переданы внутри конфигурационного объекта.
	</p>`,
        selected: false,
    },
    {
        title: 'Зачем нужно свойство "bootstrap" в декораторе "@NgModule()"?',
        body: `<p>
            В свойстве <code>bootstrap</code> указывается компонент, который
            <span class="attention">
                будет использоваться в качестве основного при загрузке модуля.
            </span>
        </p>
        <p>
            Причем только корневой модуль может определять свойство
            <code>bootstrap</code> (а также импортировать
            <code>BrowserModule</code>).
        </p>`,
        selected: false,
    },
    {
        title: 'Зачем сервису нужен декоратор "@Injectable()" и может ли сервис работать без него?',
        body: `<p>
            Декоратор <code>@Injectable()</code>
            <span class="attention">
                нужен для явного указания того, что сервис может использовать
                другие сервисы.
            </span>
        </p>
        <pre><code><span class="comment">// пример использования данного декоратора</span>
<span class="keyword">@Injectable</span><span class="punctuation">({</span><span class="key">providedIn</span>: <span class="string">'root'</span><span class="punctuation">})</span></code></pre>
        <p>
            Иначе говоря, данный декоратор гарантирует, что встроенный механизм
            внедрения зависимостей (dependency injection) сможет создать объект
            этого класса и передать в него в качестве зависимости другой объект
            (другой сервис или компонент, если в этом есть необходимость).
        </p>
        <p>
            Если серсис не использует никакие другие зависимости, то данный
            декоратор можно и не указывать. Без него сервис тоже будет работать.
            Но
            <span class="attention">
                среди Angular-разработчиков существует договоренность, что
                данный декоратор стоит применять к любому классу сервиса.
            </span>
        </p>`,
        selected: false,
    },

    {
        title: 'Какая разница между декораторами "@Input()" и "@Output()"?',
        body: `<p>
            Компоненты Angular могут принимать от родителя данные и так же их
            отдавать. За это как раз и отвечают декораторы
            <code>@Input()</code> и <code>@Output()</code>, где исходя из
            названия становится понятно, что:
        </p>
        <ul>
            <li>
                <code>@Input() </code> -
                <span class="attention"> принимает входящие данные </span>
                (пропсы);
            </li>
            <li>
                <code> @Output() </code> -
                <span class="attention">
                    отдает родителю данные при срабатывании какого-то события.
                </span>
            </li>
        </ul>`,
        selected: false,
    },
    {
        title: 'Как правильно передавать объект в декоратор "@Input()", чтобы дочерний компонент каждый раз видел изменения в этом объекте?',
        body: `<p>
            <span class="attention"
                >В JavaScript объекты передаются по ссылке</span
            >. Поэтому если сначала передать объект через декоратор
            <code>@Input()</code> в дочерний компонент, а потом поменять в этом
            объекте какое-то значение и попытаться внось передать тот же объект
            с измененным значением в дочерний компонент, то в дочернем
            компоненте вы не увидите никакой разницы.
        </p>
        <p>
            Чтобы решить данную проблему, необходимо каждый раз передавать в
            дочерний компонент новый объект. Ниже приведен один из вариантов
            решения через spread-оператор.
        </p>
        <pre><code><span class="object">this</span>.someObject <span class="operator">=</span> <span class="punctuation">{</span> <span class="operator">...</span><span class="object">this</span>.someObject, <span class="key">name</span>: <span class="string">'новое имя'</span> <span class="punctuation">}</span></code></pre>`,
        selected: false,
    },
    {
        title: 'Объясните принцип работы декоратора "@Self()"?',
        body: `<p>
		Сервисы могут быть определены на трех уровнях и, когда компонент
		запрашивает сервис, то
		<span class="attention">
			поиск начинается с нижних уровней и затем вверх по
			иерархии</span
		>:
	</p>
	<ul>
		<li>
			<span class="attention">Уровень компонента</span> - сначала
			Angular будет искать вызываемый сервис здесь;
		</li>
		<li>
			<span class="attention">Уровень модуля</span> - потом в
			родительском модуле, если не найдет в компоненте;
		</li>
		<li>
			<span class="attention">Уровень приложения</span> - и если
			все еще не нашел, то будет осуществляться поиск в корневом
			модуле. Если и здесь не найдется определение сервиса, то
			будет сгенерирована ошибка.
		</li>
	</ul>
	<p>
		Декоратор <code>@Self</code> сообщит <code>DI</code>, что поиск
		нужно осуществлять лишь только в провайдере текущего компонента.
		Но также стоит учитывать тот факт, что если <code>DI</code> не
		найдет сервис в текущем компоненте, будет ошибка.
	</p>
	<pre><code><span class="keyword">@Component</span><span class="punctuation">({</span>
	<span class="key">selector</span>: <span class="string">'app-some-component'</span>,
	<span class="key">templateUrl</span>: <span class="string">'./some.component.html'</span>,
	<span class="key">providers</span>: <span class="punctuation">[</span><span class="service-name">SomeService</span><span class="punctuation">]</span>, <span class="comment">// добавление сервиса на уровне компонента</span>
<span class="punctuation">})</span>

<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">SomeComponent</span> <span class="punctuation">{</span>
	<span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">@Self()</span> <span class="keyword">private</span> someService: <span class="type">SomeService</span><span class="punctuation">)</span> <span class="punctuation">{}</span>
<span class="punctuation">}</span></code></pre>`,
        selected: false,
    },
    {
        title: 'Объясните принцип работы декоратора "@SkipSelf()"?',
        body: `<p>
            Сервисы могут быть определены на трех уровнях и, когда компонент
            запрашивает сервис, то
            <span class="attention">
                поиск начинается с нижних уровней и затем вверх по
                иерархии</span
            >:
        </p>
        <ul>
            <li>
                <span class="attention">Уровень компонента</span> - сначала
                Angular будет искать вызываемый сервис здесь;
            </li>
            <li>
                <span class="attention">Уровень модуля</span> - потом в
                родительском модуле, если не найдет в компоненте;
            </li>
            <li>
                <span class="attention">Уровень приложения</span> - и если все
                еще не нашел, то будет осуществляться поиск в корневом модуле.
                Если и здесь не найдется определение сервиса, то будет
                сгенерирована ошибка.
            </li>
        </ul>
        <p>
            Допустим, вы определили сервис на уровне компонента, но вам нужен
            тот же самый сервис, который определен на уровне приложения. В этом
            вам и поможет декоратор <code>@SkipSelf()</code>.
        </p>
        <p>
            Иначе говоря, если указать <code>@SkipSelf()</code> в конструкторе
            перед нужным сервисом, то
            <span class="attention">
                поиск сервиса на этом уровне будет исключен из поиска.
            </span>
        </p>
        <pre><code><span class="keyword">@Component</span><span class="punctuation">({</span>
	<span class="key">selector</span>: <span class="string">'app-some-component'</span>,
	<span class="key">templateUrl</span>: <span class="string">'./some.component.html'</span>,
	<span class="key">providers</span>: <span class="punctuation">[</span><span class="service-name">SomeService</span><span class="punctuation">]</span>, <span class="comment">// добавление сервиса на уровне компонента</span>
<span class="punctuation">})</span>

<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">SomeComponent</span> <span class="punctuation">{</span>
	<span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">@SkipSelf()</span> <span class="keyword">private</span> someService: <span class="type">SomeService</span><span class="punctuation">)</span> <span class="punctuation">{}</span>
<span class="punctuation">}</span></code></pre>
        <p>
            Исходя из вышесказанного, можно сделать следующий трюк: если указать
            два одинаковых сервиса в одном компоненте, но перед одним из них
            поставить <code>@SkipSelf()</code>, то удастся получить доступ к
            локальному и глобальному экземплярам одновременно.
        </p>`,
        selected: false,
    },
    {
        title: 'Объясните принцип работы декоратора "@Optional()"?',
        body: `<p>
            Сервисы могут быть определены на трех уровнях и, когда компонент
            запрашивает сервис, то
            <span class="attention">
                поиск начинается с нижних уровней и затем вверх по
                иерархии</span
            >:
        </p>
        <ul>
            <li>
                <span class="attention">Уровень компонента</span> - сначала
                Angular будет искать вызываемый сервис здесь;
            </li>
            <li>
                <span class="attention">Уровень модуля</span> - потом в
                родительском модуле, если не найдет в компоненте;
            </li>
            <li>
                <span class="attention">Уровень приложения</span> - и если все
                еще не нашел, то будет осуществляться поиск в корневом модуле.
                Если и здесь не найдется определение сервиса, то
                <span class="attention"> будет сгенерирована ошибка </span>.
            </li>
        </ul>
        <p>
            С помощью декоратора <code>@Optional()</code> мы можем обработать
            эту ошибку. В переменную, которая должна была стать экземпляром
            сервиса, просто запишется <code>null</code>.
        </p>`,
        selected: false,
    },
    {
        title: 'Объясните принцип работы декоратора "@Host()"?',
        body: `<p>
		Декоратор <code>@Host</code> сообщает <code>DI</code>
		<span class="attention"
			>искать зависимость в любом инжекторе, пока он не достигнет
			хоста</span
		>. В большинстве случаев компонент и является хостом.
	</p>
	<p>
		Существует два распространенных случая, в которых хост-компонент
		отличается от текущего класса компонента:
	</p>
	<ul>
		<li>
			<span class="attention">Директива</span>. Директива будет
			искать зависимость в компоненте, в котором она находится.
		</li>
		<li>
			<span class="attention">Проекция</span>. Когда компонент
			находится внутри
			<code>
				<span><</span>ng-content><span><</span>/ng-content>
			</code>
			другого компонента. Внутренний компонент будет искать
			зависимости во внешнем компоненте.
		</li>
	</ul>
	<pre><code><span class="keyword">class</span> <span class="class-name">OtherService</span> <span class="punctuation">{}</span>

<span class="keyword">class</span> <span class="class-name">HostService</span> <span class="punctuation">{}</span>

<span class="keyword">@Directive</span><span class="punctuation">({</span><span class="key">selector</span>: <span class="string">'child-directive'</span><span class="punctuation">})</span>

<span class="keyword">class</span> <span class="class-name">ChildDirective</span> <span class="punctuation">{</span>
	logs: <span class="type">string[]</span> <span class="operator">=</span> <span class="punctuation">[]</span>;

	<span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">@Optional() @Host()</span> os: <span class="type">OtherService</span>, <span class="keyword">@Optional() @Host()</span> hs: <span class="type">HostService</span><span class="punctuation">) {</span>
		<span class="comment">// os имеет значение null: true</span>
		<span class="object">this</span>.logs.<span class="method">push</span><span class="punctuation">(</span><span class="string">"os is null: "</span> <span class="operator">+</span> <span class="punctuation">(</span>os <span class="operator">===</span> <span class="null">null</span><span class="punctuation">))</span>;
		<span class="comment">// hs - это экземпляр HostService: true</span>
		<span class="object">this</span>.logs.<span class="method">push</span><span class="punctuation">(</span><span class="string">"hs is an instance of HostService: "</span> <span class="operator">+</span> <span class="punctuation">(</span>hs <span class="keyword">instanceof</span> <span class="class-name">HostService</span><span class="punctuation">))</span>;
	<span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="keyword">@Component</span><span class="punctuation">({</span>
	<span class="key">selector</span>: <span class="string">'parent-cmp'</span>,
	<span class="key">viewProviders</span>: <span class="punctuation">[</span><span class="class-name">HostService</span><span class="punctuation">]</span>,
	<span class="key">template</span>: <span class="string">'<span><</span>child-directive><span><</span>/child-directive>'</span>,
<span class="punctuation">})</span>

<span class="keyword">class</span> <span class="class-name">ParentCmp</span> <span class="punctuation">{}</span>

<span class="keyword">@Component</span><span class="punctuation">({</span>
	<span class="key">selector</span>: <span class="string">'app'</span>,
	<span class="key">viewProviders</span>: <span class="punctuation">[</span><span class="class-name">OtherService</span><span class="punctuation">]</span>,
	<span class="key">template</span>: <span class="string">'<span><</span>parent-cmp><span><</span>/parent-cmp>'</span>,
<span class="punctuation">})</span>

<span class="keyword">class</span> <span class="class-name">App</span> <span class="punctuation">{}</span></code></pre>`,
        selected: false,
    },
    {
        title: 'Объясните принцип работы декоратора "@Attribute()"?',
        body: `<p>
		В Ангуляре данные от родителя к дочернему компоненту можно
		передавать как статически, так и динамически:
	</p>
	<pre><code><span class="tag"><</span><span class="tag">app-child</span> <span class="attribute">name</span><span class="operator">=</span><span class="string">"name"</span><span class="tag">></span><span class="tag"><</span><span class="tag">/app-child></span> <span class="comment">// статическая передача данных</span>
<span class="tag"><</span><span class="tag">app-child</span> <span class="attribute">[name]</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">name</span><span class="punctuation">"</span><span class="tag">></span><span class="tag"><</span><span class="tag">/app-child></span> <span class="comment">// динамическая передача данных</span></code></pre>
	<p>
		Декоратор <code>@Input</code> может обрабатывать и тот, и другой
		варианты. И т.к. данные могут изменяться, механизм
		<code>ChangeDetection</code> будет его тоже проверять на наличие
		изменений. Даже если вы передаете статические данные и они никак
		не изменяются.
	</p>
	<p>
		Чтобы снизить нагрузку на механизм
		<code>ChangeDetection</code> и не проверять статические данные,
		используется декоратор <code>@Attribute</code>, который
		<span class="attention"
			>помечает входящий параметр как неизменяемый на протяжении
			всего жизненного цикла приложения</span
		>.
	</p>
	<p>Пример использования:</p>
	<pre><code><span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">@Attribute</span><span class="punctuation">(</span><span class="string">'name'</span><span class="punctuation">)</span> <span class="keyword">private</span> name: <span class="type">string</span><span class="punctuation">) {}</span></code></pre>
	<p>
		Как видите, значение теперь принемается в конструкторе класса, а
		не в одном из хуков жизненного цикла компонента. Соответственно, если вы
		захотите передать через декоратор
		<code>@Attribute</code> динамический параметр, то Ангуляр выдаст
		вам ошибку.
	</p>`,
        selected: false,
        lastUpdate: '26.07.2023',
    },
    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    // },
];
