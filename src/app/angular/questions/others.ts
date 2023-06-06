import { IQuestion } from '@types';

export const othersQuestions: IQuestion[] = [
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
        title: 'Объясните принцип работы механизма "ChangeDetection"?',
        body: `<p>
            Механизм <code>ChangeDetection</code> или как его еще называют
            "отслеживание изменений" - это
            <span class="attention">
                механизм в Angular, который отвечает за изменение выражений в
                шаблонах при их изменении в компоненте.
            </span>
        </p>
        <p>
            Данный механизм запускается каждый раз, когда происходит какое-то
            браузерное событие, пользовать что-то сделал в приложении или
            вызывается <code>setInterval()</code> и тд. Причем в случае
            браузерных событий, Angular расширяет стандартный метод
            <code>addEventListener()</code>, добавляя после вызова
            "оригинального" обработчика события запуск отслеживания изменений.
        </p>
        <p>
            В механизме <code>ChangeDetection</code> важную роль играет
            библиотека <code>zone.js</code>, которая лежит под капотом Angular и
            делит все приложение на секции. Где происходят изменения, там и
            запускается механизм <code>ChangeDetection</code>.
        </p>
        <p>
            Еще один важный момент:
            <span class="attention"
                >запуск механизма ChangeDetection в родительском компоненте
                автоматически инициирует запуск механизма во всех дочерних
                компонентах.</span
            >
        </p>
        <i class="subtitle">ChangeDetectionStrategy</i>
        <p>
            В Angular есть два варианта работы алгоритма отслеживания изменений:
        </p>
        <ul>
            <li><span class="attention">OnPush</span>;</li>
            <li>
                <span class="attention">Default</span> (используется по
                умолчанию).
            </li>
        </ul>
        <p>
            Алгоритм задается в свойстве <code>changeDetection</code> объекта
            конфигурации декоратора <code>@Component()</code> и указывается для
            каждого компонента отдельно.
        </p>
        <pre><code><span class="keyword">@Component</span><span class="punctuation">({</span>
	<span class="key">selector</span>: <span class="string">'app-root'</span>, <span class="comment">// название компонента</span>
	<span class="key">templateUrl</span>: <span class="string">'./app.component.html'</span>, <span class="comment">// путь к HTML-файлу. Является обязательным свойством</span>
	<span class="key">changeDetection</span>: <span>ChangeDetectionStrategy.OnPush</span>, <span class="comment">// явное определение стратегии ChangeDetection</span>
<span class="punctuation">})</span>

<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">AppComponent</span> <span class="punctuation">{}</span> <span class="comment">// класс, к которому привязывается декоратор @Component()</span></code></pre>
        <p>
            Итак, при варианте <code>Default</code> механизм отслеживания будет
            запускаться каждый раз при каком-либо изменении в приложении.
        </p>
        <p>
            Стратегия <code>OnPush</code> указывается для компонентов, которые
            предназначены для отображения каких-либо статических данных. Но на
            практике обычно <code>OnPush</code> используют во всех компонентах,
            т.к. такой подход повышает эффективности работы приложения за счет
            снижения количества вызовов механизма <code>ChangeDetection</code>.
        </p>
        <p>
            Стратегия <code>OnPush</code> будет запускаться только в 3 случаях:
        </p>
        <ul>
            <li>
                <span class="attention">Произошло событие в шаблоне</span> -
                например, произошел клик по кнопке и внутри компонента вызвалась
                какая-то функция, которая изменила текст в шаблоне. Такие
                события помечают текущий компонент как "измененный" и при
                последующей проверке механизм
                <code>ChangeDetectionStrategy</code> увидит эту "пометку" и
                проверит этот компонент, тем самым отобразив изменения;
            </li>
            <li>
                <span class="attention"
                    >Поступили новые данные от родителя</span
                >
                - здесь речь идет про этап жизненного цикла
                <code>OnChanges</code>, который запускатся при инициализации
                компонента и при каждом дальнейшем изменении входных свойств
                текущего компонента, которые попадают в него с помощью
                декоратора <code>@Input()</code>. Тут следует помнить, что если
                вы передаете через <code>@Input()</code> объект или массив, то
                его надо каждый раз создавать заново, т.к. иначе
                <code>OnChanges</code> будет считать, что вы передаете все тот
                же объект или массив, т.к. ссылка не изменилась;
            </li>
            <li>
                <span class="attention">Использование пайпы</span>
                <code>async</code> - данный фильтр под капотом запускает метод
                <code>markForCheck</code> из встроенного cервиса
                <code>ChangeDetectorRef</code>.
            </li>
        </ul>`,
        selected: false,
    },
    {
        title: 'Зачем в Angular сервис "ChangeDetectorRef"?',
        body: `<p>
            Сервис <code>ChangeDetectorRef</code> позволяет взять управление
            механизмом отслеживания изменений (<code>ChangeDetection</code>)
            полностью под свой контроль.
        </p>
        <p>Методы сервиса:</p>
        <ul>
            <li>
                <span class="attention">detach</span> - полностью отключает
                механизм <code>ChangeDetection</code>. Здесь также важно
                уточнить, что если мы отключаем у родителя проверку изменений,
                то и у его дочерних компонентов она будет отключена,
                соответственно, и DOM-дерево тоже не будет обновляться;
            </li>
            <li>
                <span class="attention">reattach</span> - используется после
                вызова <code>detach</code> для активации механизма
                <code>ChangeDetection</code>. Стоит добавить, что данный метод
                полезен только для компонентов верхнего уровня, где отключен
                механизм <code>ChangeDetection</code>, т.к. если у родителя он
                выключен, то на дочерние компоненты метод
                <code>reattach</code> не произведет никакого эффекта;
            </li>
            <li>
                <span class="attention">markForCheck</span> - помечает как
                "измененный" текущий компонент, где данный метод был вызван, а
                также все родительские компоненты, вплоть до корневого
                компонента. И при следующем запуске механизма
                <code>ChangeDetection</code> он пройдет по "помеченной" ветке и
                отрисует изменения, если они есть. Сработает только 1 раз;
            </li>
            <li>
                <span class="attention">detectChanges</span> - одноразово
                запускает механизм отслеживания изменений для текущего
                компонента и его потомков;
            </li>
            <li>
                <span class="attention">checkNoChanges</span> - данный метод
                гарантирует отсутствие изменений на текущем запуске
                <code>ChangeDetection</code>, выбрасывая исключение, если
                входящие свойства были изменены, либо есть необходимость
                обновить DOM.
            </li>
        </ul>
        <p>
            В примере ниже изначально отключается механизм отслеживания
            изменений в конструкторе. Затем в переменную
            <code>value</code> вносятся изменения, но они не отобразятся сразу
            на странице. Чтобы их отобразить, мы должны нажать на кнопку,
            которая представлена в шаблоне, т.к. к ней привязана функция,
            отвечающая за принудительный запуск механизма отслеживания.
        </p>
        <pre><code><span class="comment">// шаблон</span>
<span class="tag"><</span><span class="tag">button</span> <span class="keyword">(click)</span><span class="operator">=</span><span class="punctuation">"</span><span class="function-name">applyChanges()</span><span class="punctuation">"</span><span class="tag">></span>Применить изменения<span class="tag"><</span><span class="tag">button/></span>

<span class="comment">// компонент</span>
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">ManualDetectionComponent</span> <span class="punctuation">{</span>
	value: <span class="type">string</span> <span class="operator">=</span> <span class="string">'Начальное значение'</span>; 
	
	<span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">private</span> <span>changeDetectorRef</span>: <span class="class-name">ChangeDetectorRef</span><span class="punctuation">) {</span>
		<span class="object">this</span>.changeDetectionRef.<span class="method">detach</span><span class="punctuation">()</span>; <span class="comment">// отключаем механизм ChangeDetection</span>
		<span class="object">this</span>.value <span class="operator">=</span> <span class="string">'Какие-то изменения'</span>;
	<span class="punctuation">}</span>
	
	<span class="function-name">applyChanges</span><span class="punctuation">():</span> <span class="type">void</span> <span class="punctuation">{</span>
		<span class="object">this</span>.changeDetectionRef.<span class="method">detectChanges</span><span class="punctuation">()</span>; <span class="comment">// принудительно запускаем механизм ChangeDetection</span>
	<span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>`,
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
];
