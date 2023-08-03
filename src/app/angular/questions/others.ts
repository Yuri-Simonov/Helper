import { IQuestion } from '@types';

export const othersQuestions: IQuestion[] = [
    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    // },
    {
        title: 'Что такое "Angular CLI"?',
        body: `<p>
            <span class="attention">Angular CLI</span> - это npm-модуль,
            реализующий интерфейс командной строки для создания, разработки и
            поддержки Angular приложений. В системе он должен быть установлен
            глобально.
        </p>`,
        selected: false,
    },

    {
        title: 'Какие существуют механизмы компиляции приложения в Angular?',
        body: `<p>
            Начиная с 9-ой версии Angular, механизм
            <code>Angular compile</code> реализован в двух режимах:
        </p>
        <ul>
            <li>
                <span class="attention">JIT-компиляция</span>
                (Just-in-TIme) -
                <span class="attention"
                    >приложение компилируется в момент его запуска в
                    браузере</span
                >. Используется по умолчанию;
            </li>
            <li>
                <span class="attention">AOT-компиляция</span>
                (Ahead-of-Time) -
                <span class="attention"
                    >компиляция происходит в момент сборки приложения</span
                >.
            </li>
        </ul>
        <p>
            В режиме разработки рекомендуется использовать JIT-компиляцию, т.к.
            сборка приложения занимает меньше времени. Если же необходима
            итоговая версия приложения, то рекомендуется испольльзовать
            AOT-компиляцию.
        </p>
        <p>
            При сборке приложения с флагом
            <code>--prod</code> AOT-компиляция используется по умолчанию.
        </p>`,
        selected: false,
    },
    {
        title: 'Как создаются пользовательские события?',
        body: `<p>
            <i>В разработке...</i>
        </p>`,
        selected: false,
    },
    {
        title: 'Как можно оптимизировать выполнение цикла "*ngFor"?',
        body: `<p>
            <span class="attention">
                При изменении массива Angular перерисовывает DOM-дерево
                полностью</span
            >. Но если использовать функцию <code>trackBy</code>, то Angular
            будет понимать, какой элемент изменился, а затем
            <span class="attention">
                внесёт изменения в DOM только для этого конкретного
                элемента</span
            >.
        </p>
        <p>Как это выглядит на практике:</p>
        <pre><code><span class="comment">// в шаблоне (someItem.component.html)</span>
<span class="tag"><</span><span class="tag">li</span> <span class="keyword">*ngFor</span><span class="operator">=</span><span class="punctuation">"</span><span class="keyword">let</span> item <span class="keyword">of</span> items; <span class="keyword">trackBy</span>: <span class="function-name">trackByFunction</span><span class="punctuation">"</span><span class="tag">></span><span class="tag"><</span><span class="tag">/li></span>

<span class="comment">// в компоненте (someItem.component.ts)</span>
<span class="function-name">trackByFunction</span><span class="punctuation">(</span>index, item<span class="punctuation">)</span> <span class="punctuation">{</span>
	<span class="keyword">return</span> item.id<span class="punctuation">;</span> <span class="comment">// уникальный идентификатор, соответствующий элементу</span>
<span class="punctuation">}</span></code></pre>`,
        selected: false,
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
        title: 'Объясните принцип работы "Dependency injection"?',
        body: `<p>
            <code>Dependency injection</code> (или сокращенно "DI") - это
            механизм, который позволяет, например, классу "А" просить объекты
            класса "Б" (или любого другого), но при этом их не создавать, потому
            что класс "А" не знает, что нужно передать в конструктор класса "Б"
            из данных, чтобы получить в ответ желаемое.
        </p>
        <p>
            Иначе говоря: <code>Dependency injection</code>
            <span class="attention">
                нужен для разворачивания зависимостей, которые присутствуют в
                конструкторе конкретного класса, а также чтобы код не отвечал за
                создание необходимых зависимостей, а делала это отдельная
                конфигурируемая система автоматически</span
            >.
        </p>
        <p>Пример использования "DI":</p>
        <pre><code><span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">private</span> httpClient: <span class="interface-name">HttpClient</span><span class="punctuation">)</span> <span class="punctuation">{}</span></code></pre>
        <p>
            В каком-то классе запрашивается модуль <code>HttpClient</code> и
            записывается в приватную переменную <code>httpClient</code>.
        </p>
        <i class="subtitle"
            >Но как Ангуляр понимает, что ему нужно сделать, когда мы добавляем
            в конструктор какую-либо зависимость?</i
        >
        <p>
            Если рассматривать пример с модулем <code>HttpClient</code>, то для
            его работы в модуль текущего компонента необходимо в
            конфигурационный объект декоратора
            <code>@NgModule()</code> импортировать модуль
            <code>HttpClientModule</code>, в котором уже и будет прописана
            инструкция того, как создать объект, который запрашивается в
            конструкторе примера выше.
        </p>
        <pre><code><span class="keyword">@NgModule</span><span class="punctuation">({</span>
	<span class="key">imports</span><span class="punctuation">: [</span><span class="module-name">HttpClientModule</span><span class="punctuation">]</span>
<span class="punctuation">})</span></code></pre>
        <i class="subtitle">Зачем так все усложнять?</i>
        <p>
            На самом деле это наоборот упрощает нам разработку. Потому что, если
            бы мы реализовывали логику <code>HttpClient</code> каждый раз
            самостоятельно, то нам бы приходилось писать очень много кода,
            потому что сам модуль <code>HttpClient</code> зависит от другого
            класса - <code>HttpHandler</code>.
        </p>
        <pre><code><span class="export">export</span> <span class="keyword">declare</span> <span class="keyword">class</span> <span class="class-name">HttpClient</span> <span class="punctuation">{</span>
	<span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">private</span> handler: <span class="interface-name">HttpHandler</span><span class="punctuation">)</span>;
<span class="punctuation">}</span></code></pre>
        <p>
            Модуль <code>HttpHandler</code> уже ни от кого не зависит, поэтому в
            нем уже будет создаваться новый объект через ключевое слово
            <code>new</code>.
        </p>
        <p>
            После этого Ангуляр возвращается обратно в <code>HttpClient</code> и
            видит, что <code>HttpHandler</code> уже создан. И так по цепочке
            вверх, пока не вернется в конструктор, где изначально и запрашивался
            данный модуль.
        </p>
        <p>
            Причем если мы будем вызывать <code>HttpClient</code> в другом
            компоненте этого же модуля, в нем уже будет определен
            <code>HttpHandler</code> и сам <code>HttpClient</code> уже будет
            готов в выдаче в запрашиваемом месте. Повторно вся эта цепочка
            сверху вниз и обратно проходить не будет.
            <span class="attention"
                >Полный проход осуществляется только первый раз, когда нужные
                составляющие еще не определены</span
            >.
        </p>`,
        selected: false,
    },
    {
        title: 'В чем заключается отличие "ng-container" от "ng-template"?',
        body: `<p>
            <i>В разработке...</i>
        </p>`,
        selected: false,
    },
    {
        title: 'Что такое модуль в Angular?',
        body: `<p>
            <span class="attention">Angular модуль</span> - это класс c
            декоратором <code>@NgModule()</code>, который служит изолирующей
            логической объединяющей структурой для компонентов, директив,
            фильтров и сервисов.
        </p>
        <pre><code><span class="keyword">@NgModule</span><span class="punctuation">({</span>
	<span class="key">declarations</span><span class="punctuation">: [</span><span class="class-name">ParentComponent</span><span class="punctuation">]</span>, <span class="comment">// дочерние компоненты, директивы и фильтры</span>
	<span class="key">entryComponents</span><span class="punctuation">: [</span><span class="class-name">SomeDynamicComponent</span><span class="punctuation">]</span>, <span class="comment">// компоненты, которые будут подгружаться динамически</span>
	<span class="key">imports</span><span class="punctuation">: [</span><span class="class-name">SomeModule</span><span class="punctuation">]</span>, <span class="comment">// другие модули, используемые в текущем модуле</span>
	<span class="key">providers</span><span class="punctuation">: [</span><span class="class-name">SomeService</span><span class="punctuation">]</span>, <span class="comment">// импортирование в модуль необходимых сервисов приложения</span>
	<span class="key">bootstrap</span><span class="punctuation">: [</span><span class="class-name">ParentComponent</span><span class="punctuation">]</span>, <span class="comment">// имя главного компонента модуля</span>
	<span class="key">exports</span><span class="punctuation">: [</span><span class="class-name">SomeComponent</span><span class="punctuation">]</span>, <span class="comment">// экспортируемые компоненты, директивы и фильтры, которые могут быть использованы другими модулями</span>
<span class="punctuation">})</span>
	
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">ParentModule</span> <span class="punctuation">{}</span> <span class="comment">// класс, к которому привязывается декоратор @NgModule()</span></code>
				</pre>`,
        selected: false,
    },
    {
        title: 'В каком файле нужно подключать сторонние скрипты и стили и почему?',
        body: `<p>
            Cторонние скрипты и стили должны подключаться в
            <span class="attention">angular.json</span>, а не в index.html как
            это делается в верстке, например.
        </p>
        <i class="subtitle"> Почему именно так? </i>
        <p>
            Важно, чтобы все настройки были в одном месте, а не размазаны по
            всему приложению. Причем файл angular.json как раз для этого и
            предназначен, т.к.
            <span class="attention">
                является главным конфигурационным файлом
            </span>
            Angular Workspace.
        </p>`,
        selected: false,
    },
    {
        title: 'Что такое "Renderer 2" и зачем он в Angular?',
        body: `<p>
            <i>В разработке...</i>
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
];
