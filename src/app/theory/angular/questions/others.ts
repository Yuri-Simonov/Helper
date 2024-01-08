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
        body: ``,
        selected: false,
        lastUpdate: '',
        disabled: true,
    },
];
