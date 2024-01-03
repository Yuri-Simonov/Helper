import { IQuestion } from '@types';

export const pipeQuestions: IQuestion[] = [
    {
        title: 'Pipe в Angular',
        body: `<p>
                <span class="attention">Angular pipe</span> - это класс, который
                предваряется декоратором <code>@Pipe()</code> и реализует
                интерфейс <code>PipeTransform</code> с одним единственным
                методом <code>transform()</code>. <span class="attention">Они используются для преобразования
                данных прямо в HTML-шаблоне</span>. Их также называют "фильтрами".
            </p>
            <p>
                Простой пример использования пайпы, в котором текст приводится в
                нижний регистр:
            </p>
            <pre><code><span class="tag">&lt;p</span><span class="tag">></span><span class="punctuation">&#123;&#123;</span> <span class="punctuation">"</span><span class="string">ПРИМЕР</span><span class="punctuation">"</span> <span class="operator">|</span> <span class="function-name">lowercase</span> <span class="punctuation">&#125;&#125;</span><span class="tag">&lt;/p></span> <span class="comment">// пример</span></code></pre>
            <p>
                Как видно из примера, наименование пайпы указывается после
                символа "<code>|</code>", следующим за значением, которое
                необходимо преобразовать.
            </p>
            <p>
                Некоторые пайпы, такие как <code>date</code>, принимают
                параметры, передаваемые после имени фильтра, которые разделяются
                символом "<code>:</code>". В примере ниже после "<code>:</code>"
                передается формат отображения даты.
            </p>
            <pre><code><span class="tag">&lt;p</span><span class="tag">></span><span class="punctuation">&#123;&#123;</span> <span class="punctuation">"</span><span class="string">какая-то дата</span><span class="punctuation">"</span> <span class="operator">|</span> <span class="function-name">date</span><span class="punctuation">: '</span><span class="string">dd.MM.yyyy</span><span class="punctuation">'</span> <span class="punctuation">&#125;&#125;</span><span class="tag">&lt;/p></span> <span class="comment">// например, 15.04.2023</span></code></pre>
            <p>
                К одному и тому же значению допустимо примененять сразу
                несколько пайп, причем конечный результат будет зависеть от
                последовательности их применения:
            </p>
            <pre><code><span class="tag">&lt;p</span><span class="tag">></span><span class="punctuation">&#123;&#123;</span> <span class="punctuation">"</span><span class="string">Какие-то данные</span><span class="punctuation">"</span> <span class="operator">|</span> <span class="function-name">pipe1</span> <span class="operator">|</span> <span class="function-name">pipe2</span> <span class="operator">|</span> <span class="function-name">pipe3</span> <span class="punctuation">&#125;&#125;</span><span class="tag">&lt;/p></span></code></pre>`,
        selected: false,
        lastUpdate: '05.11.2023',
        footerLinks: [
            {
                path: 'https://youtu.be/uH8GFf68n3Y',
            },
        ],
    },
    {
        title: 'Разница между <span class="variable">pure</span> и <span class="variable">impure</span> pipes',
        body: `<p>
                <code>Pure</code> и <code>impure</code> пайпы
                <span class="attention"
                    >отличаются по принципу работы механизма отслеживания
                    изменений.</span
                >
            </p>
            <p>
                Первый тип используется по умолчанию и в конфигурационном
                объекте декоратора <code>@Pipe()</code> обычно не указывается.
            </p>
            <pre><code><span class="function-name">@Pipe</span><span class="punctuation">({</span>
	<span class="key">name</span>: <span class="string">'customPipe'</span>,
	<span class="key">pure</span>: <span class="boolean">true</span> <span class="comment">// значение по умолчанию, его можно не указывать</span>
<span class="punctuation">})</span></code></pre>
            <p>
                Для пайп типа <code>pure</code>
                <span class="attention">
                    обновление значения происходит только при его прямом
                    изменении или смене ссылки</span
                >, если речь идет о массивах и объектах.
            </p>
            <p>
                Для пайп типа <code>impure</code>
                <span class="attention">
                    значение будет обновляться при любом изменении данных</span
                >, а также при любом событии, произошедшем в приложении, будь то
                клик мыши, клавиатуры и тд. Но в данном случае в
                конфигурационном объекте уже явно необходимо это указать:
            </p>
            <pre><code><span class="function-name">@Pipe</span><span class="punctuation">({</span>
	<span class="key">name</span>: <span class="string">'customPipe'</span>,
	<span class="key">pure</span>: <span class="boolean">false</span> <span class="comment">// явное указание типа</span>
<span class="punctuation">})</span></code></pre>
            <p>
                Второй тип следует использовать с умом, т.к. частое обновление
                значения пайпы требует больших ресурсов.
            </p>`,
        selected: false,
        lastUpdate: '05.11.2023',
        footerLinks: [
            {
                path: 'https://youtu.be/QSxMaa9YCgI',
            },
        ],
    },
    {
        title: 'Создание пользовательских pipe',
        body: `<p>
                Рассмотрим пример создания пайпы, в которой текст, имеющий длину
                больше 200 символов, обрезается и ему в конец добавляется "...".
            </p>
            <pre><code><span class="function-name">@Pipe</span><span class="punctuation">(&#123;</span> <span class="key">name</span>: <span class="string">'customPipe'</span><span class="punctuation"> &#125;)</span>
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">CustomPipePipe</span> <span class="keyword">implements</span> <span class="class-name">PipeTransform</span> <span class="punctuation">&#123;</span>
    <span class="method">transform</span><span class="punctuation">(</span>value: <span class="type">string</span>, maxLength: <span class="type">number</span> <span class="operator">=</span> <span class="number">200</span><span class="punctuation">):</span> <span class="type">string</span> <span class="punctuation">&#123;</span>
        <span class="keyword">if</span> <span class="punctuation">(</span>value.<span class="property">length</span> <span class="operator">></span> maxLength<span class="punctuation">)</span>
            <span class="keyword">return</span> value.<span class="method">substring</span><span class="punctuation">(</span><span class="number">0</span>, maxLength<span class="punctuation">)</span> <span class="operator">+</span> <span class="string">'...'</span>;
        <span class="keyword">else</span> <span class="keyword">return</span> value;
    <span class="punctuation">&#125;</span>
<span class="punctuation">&#125;</span></code></pre>
            <p>
                У декоратора <code>@Pipe()</code> существует конфигурационный
                объект, в котором свойство <code>name</code> является
                обязательным.
                <span class="attention">
                    Значением данного свойства будет имя текущего
                    пользовательского пайпа, по которому он будет вызываться
                </span>
                в HTML-шаблоне или в компоненте.
            </p>
            <p>Пример использования в HTML-шаблоне:</p>
            <pre><code><span class="comment comment_start">// в классе компонента</span>
<span>someString</span><span>:</span> <span class="type">string</span> <span class="operator">=</span> <span class="string">'какая-то строка на 1000 символов'</span>
	
<span class="comment comment_start">// в шаблоне компонента</span>
<span class="tag">&lt;p</span><span class="tag">></span><span class="punctuation">&#123;&#123;</span> <span class="variable">someString</span> <span class="operator">|</span> <span class="pipe-name">customPipe</span> <span class="punctuation">&#125;&#125;</span><span class="tag">&lt;/p></span> <span class="comment">// текст обрежется до 200 символов и добавится в конец "..."</span></code></pre>
            <p>
                При данном способе использования пайпы ее необходимо
                задекларировать в модуле в поле <code>declarations</code>.
            </p>
            <p>Пример использования в компоненте:</p>
            <pre><code><span class="comment comment_start">// в классе компонента</span>
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">CustomPipeComponent</span> <span class="keyword">implements</span> <span class="interface-name">OnInit</span> <span class="punctuation">&#123;</span>
    text: <span class="type">string</span> <span class="operator">=</span> <span class="string">'какая-то строка на 1000 символов'</span>;

    <span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">private</span> customPipe: <span class="type">CustomPipePipe</span><span class="punctuation">) &#123;&#125;</span>

    <span class="function-name">ngOnInit</span><span class="punctuation">()</span> <span class="punctuation">&#123;</span>
        console.<span class="function-name">log</span><span class="punctuation">(</span><span class="string">'перед customPipe'</span>, <span class="object">this</span>.text.<span class="property">length</span><span class="punctuation">)</span>; <span class="comment">// 1000</span>
        <span class="object">this</span>.text <span class="operator">=</span> <span class="object">this</span>.customPipe.<span class="method">transform</span><span class="punctuation">(</span><span class="object">this</span>.text<span class="punctuation">)</span>;
        console.<span class="function-name">log</span><span class="punctuation">(</span><span class="string">'после customPipe'</span>, <span class="object">this</span>.text.<span class="property">length</span><span class="punctuation">)</span>; <span class="comment">// 203</span>
    <span class="punctuation">&#125;</span>
<span class="punctuation">&#125;</span></code></pre>
            <p>
                При данном способе использования пайпы ее необходимо
                задекларировать в модуле в поле <code>providers</code>.
            </p>`,
        selected: false,
        lastUpdate: '05.11.2023',
        footerLinks: [
            {
                path: 'https://youtu.be/aaBSCHwsYiw',
            },
        ],
    },
];
