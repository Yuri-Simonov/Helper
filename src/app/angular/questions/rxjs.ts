import { IQuestion } from '@types';

export const rxjsQuestions: IQuestion[] = [
    {
        title: 'В чем разница между Observable и Promise?',
        body: `<p>
            <code>Observable</code> - это
            <span class="attention">конструктор источника событий</span>, а
            <code>Promise</code> - это сам
            <span class="attention">источник событий</span>
        </p>
        <p>
            Чтобы в <code>Observable</code> появилось событие, на него кто-то
            должен подписаться.
            <span class="attention">Без подписки это просто набор методов</span
            >. С промисами же иная ситуация. Если интерпретатор кода доходит до
            промиса, то он выполняется и ему не нужны никакие подписчики.
        </p>
        <p>
            Еще одно отличие заключается в том, что у промисов, когда мы
            используем цепочки <code>then</code>, то мы работаем все с тем же
            промисом. В то время, как у <code>Observable</code> мы подписываемся
            каждый раз на новое событие.
        </p>`,
        selected: false,
    },
    {
        title: 'В чем разница между Observable и Subject?',
        body: `<p>
            Основное отличие этих двух типов объектов:
            <span class="attention">объекты </span> <code>Observable</code>
            <span class="attention">
                предназначены для одноадресной рассылки, а
            </span>
            <code>Subject</code>
            <span class="attention"> — для многоадресной рассылки.</span>
        </p>
        <p>
            Если рассмотреть более детально, то в потоковом программировании
            есть два основных интерфейса: <code>Observable</code> (наблюдаемый)
            и <code>Observer</code>
            (наблюдатель).
        </p>
        <p>
            <code>Observable</code> предназначен для потребителя, его можно
            преобразовать и подписаться:
        </p>
        <pre><code>observable$.<span class="method">pipe</span><span class="punctuation">(</span><span class="method">map</span><span class="punctuation">(</span>x <span class="operator">=></span> ...<span class="punctuation">)</span>, <span class="method">filter</span><span class="punctuation">(</span>x <span class="operator">=></span> ...<span class="punctuation">))</span>.<span class="method">subscribe</span><span class="punctuation">(</span>x <span class="operator">=></span> ...<span class="punctuation">)</span></code></pre>
        <p>
            <code>Observer</code> — это интерфейс, который используется для
            подачи наблюдаемого источника, будь то какие-то данные, ошибка или
            завершение наблюдения:
        </p>
        <pre><code>observer.<span class="method">next</span><span class="punctuation">(</span>newItem<span class="punctuation">)</span>
observer.<span class="method">error</span><span class="punctuation">(</span>error<span class="punctuation">)</span>
observer.<span class="method">complete</span><span class="punctuation">()</span></code></pre>
        <p>
            При этом мы можем создать новый <code>Observable</code> с помощью
            Observer:
        </p>
        <pre><code><span class="keyword">const</span> <span class="variable">newObs$</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">((</span>observer<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
	observer.<span class="function-name">next</span><span class="punctuation">(</span><span class="string">'тут передаем данные'</span><span class="punctuation">)</span>; <span class="comment">переданные данные попадут в data</span>
	observer.<span class="function-name">error</span><span class="punctuation">(</span><span class="string">'тут передаем ошибки'</span><span class="punctuation">)</span>; <span class="comment">переданные данные попадут в error</span>
	observer.<span class="function-name">complete()</span>; <span class="comment">// данный метод не принимает параметры</span>
<span class="punctuation">})</span>;

<span class="variable">newObs$</span>.<span class="function-name">subscribe</span><span class="punctuation">(</span>
	<span class="punctuation">(</span>data<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log</span><span class="punctuation">(</span><span class="string">'тут обрабатываем данные'</span><span class="punctuation">)</span>
	<span class="punctuation">}</span>,
	<span class="punctuation">(</span>error<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log</span><span class="punctuation">(</span><span class="string">'тут обрабатываем ошибки'</span><span class="punctuation">)</span>
	<span class="punctuation">}</span>,
	<span class="punctuation">()</span> <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log</span><span class="punctuation">(</span><span class="string">'тут обрабатываем завершение работы Observable'</span><span class="punctuation">)</span>
	<span class="punctuation">}</span>,
<span class="punctuation">)</span>;</code></pre>
        <p>
            Или мы можем использовать <code>Subject</code>, который реализует
            интерфейсы <code>Observable</code> и <code>Observer</code>:
        </p>
        <pre><code><span class="keyword">const</span> <span class="variable">subject$</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Subject</span><span class="type"><number></span><span class="punctuation">()</span>;

<span class="variable">subject$</span>.<span class="method">subscribe</span><span class="punctuation">((</span>value<span class="punctuation">)</span> <span class="operator">=></span> console.<span class="method">log</span><span class="punctuation">(</span><span class="string">'Первая подписка:'</span>, value<span class="punctuation">))</span>;
<span class="variable">subject$</span>.<span class="method">next</span><span class="punctuation">(</span><span class="number">3</span><span class="punctuation">)</span>;
<span class="variable">subject$</span>.<span class="method">subscribe</span><span class="punctuation">((</span>value<span class="punctuation">)</span> <span class="operator">=></span> console.<span class="method">log</span><span class="punctuation">(</span><span class="string">'Вторая подписка:'</span>, value<span class="punctuation">))</span>;
<span class="variable">subject$</span>.<span class="method">next</span><span class="punctuation">(</span><span class="number">9</span><span class="punctuation">)</span>;

<span class="comment">// в консоли мы увидем следующее:
Первая подписка: 3
Первая подписка: 9
Вторая подписка: 9
</span></code></pre>`,
        selected: false,
    },
    {
        title: 'Как из примитивного типа данных сделать Observable?',
        body: `<p>
            Для преобразования данных из примитов в тип <code>Observable</code>,
            в RxJs существуют специальные для этого операторы. Например,
            <code>of</code> и <code>from</code>.
        </p>
        <p>
            Оператор <code>of</code> подходит для случаев, когда необходимо из
            массива данных создать <code>Observable</code> и при подписке на
            источник события получать тот же массив целиком. При этом, оператор
            <code>of</code> создает поток с одним или несколькими элементами,
            который завершается сразу после их отправки.
        </p>
        <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">SomeComponent</span> <span class="punctuation">{</span>
    numbers$: <span class="class-name">Observable</span><span class="type"><number[]></span> <span class="operator">=</span> <span class="function-name">of</span><span class="punctuation">(</span><span class="array">[1, 2, 3]</span><span class="punctuation">)</span>; <span class="comment">// (*)</span>

    <span class="function-name">ngOnInit()</span> <span class="punctuation">{</span>
        <span class="object">this</span>.numbers$.<span class="function-name">subscribe</span><span class="punctuation">((</span>data: <span class="type">number[]</span><span class="punctuation">)</span> <span class="punctuation"><span class="operator">=></span></span> <span class="punctuation">{</span>
            console.<span class="function-name">log</span>(data); <span class="comment">// [1, 2, 3]</span>
        <span class="punctuation">})</span>;
    <span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>
        <p>Строка под "<code>*</code>" равносильна следующей записи:</p>
        <pre><code>numbers$: <span class="class-name">Observable</span><span class="type"><number[]></span> <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">((</span>observer<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
	observer.<span class="function-name">next</span><span class="punctuation">(</span><span class="array">[1, 2, 3]</span><span class="punctuation">)</span>;
<span class="punctuation">})</span>;</code></pre>
        <p>
            Если необходимо, чтобы обработчик вместо всего массива сразу получал
            каждый его элемент в отдельности, тогда используется оператор
            <code>from</code>.
        </p>
        <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">SomeComponent</span> <span class="punctuation">{</span>
    numbers$: <span class="class-name">Observable</span><span class="type"><number></span> <span class="operator">=</span> <span class="function-name">from</span><span class="punctuation">(</span><span class="array">[1, 2, 3]</span><span class="punctuation">)</span>;

    <span class="function-name">ngOnInit()</span> <span class="punctuation">{</span>
        <span class="object">this</span>.numbers$.<span class="function-name">subscribe</span><span class="punctuation">((</span>data: <span class="type">number</span><span class="punctuation">)</span> <span class="punctuation"><span class="operator">=></span></span> <span class="punctuation">{</span>
            console.<span class="function-name">log</span><span class="punctuation">(</span>data<span class="punctuation">)</span>; <span class="comment">// 1, 2, 3</span>
        <span class="punctuation">})</span>;
    <span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>`,
        selected: false,
    },
    {
        title: 'Объясните принцип действия Observable в RxJs?',
        body: `<p>
            <code>Observable</code> - это
            <span class="attention">объект-конструктор источника события</span>,
            который может обрабатывать как синхронный, так и асинхронный код.
        </p>
        <p>
            Сам по себе <code>Observable</code> не будет работать, потому что
            это лишь объект-конструктор. Чтобы написанный нами код внутри
            <code>Observable</code> заработал, на него необходимо подписаться с
            помощью метода <code>subscribe</code>.
        </p>
        <pre><code><span class="keyword">const</span> <span class="variable">newObs$</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">((</span>observer<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
	console.<span class="function-name">log</span><span class="punctuation">(</span><span class="string">'какой-то наш код внутри Observable'</span><span class="punctuation">)</span>;
<span class="punctuation">})</span>;
	
<span class="variable">newObs$</span>.<span class="function-name">subscribe()</span>; <span class="comment">// здесь мы подписались на Observable и получили сообщение в консоли</span></code></pre>
        <p>
            Выше рассмотрен самый простой вариант подписки на источник события.
            Но объект <code>observer</code>, принимаемый callback-функцией
            внутри класса <code>Observable</code>, под капотом имеет 3
            необязательных (опциональных) метода:
        </p>
        <ul>
            <li>
                <span class="attention">next</span> - принимает значение,
                которое будет возвращено функции-обработчику;
            </li>
            <li>
                <span class="attention">error</span> - принимает значение,
                возвращаемое функции-обработчику ошибок;
            </li>
            <li>
                <span class="attention">complete</span> - вызывается для
                уведомления "подписчиков" об окончании рассылки.
            </li>
        </ul>
        <p>
            Соответственно, в методе <code>subscribe</code> мы также можем
            прописать логику для каждого из перечисленных выше методов объекта:
        </p>
        <pre><code><span class="keyword">const</span> <span class="variable">newObs$</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">((</span>observer<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
	observer.<span class="function-name">next</span><span class="punctuation">(</span><span class="string">'тут передаем данные'</span><span class="punctuation">)</span>; <span class="comment">переданные данные попадут в data</span>
	observer.<span class="function-name">error</span><span class="punctuation">(</span><span class="string">'тут передаем ошибки'</span><span class="punctuation">)</span>; <span class="comment">переданные данные попадут в error</span>
	observer.<span class="function-name">complete()</span>; <span class="comment">// данный метод не принимает параметры</span>
<span class="punctuation">})</span>
	
<span class="variable">newObs$</span>.<span class="function-name">subscribe</span><span class="punctuation">(</span>
	<span class="punctuation">(</span>data<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log</span><span class="punctuation">(</span><span class="string">'тут обрабатываем данные'</span><span class="punctuation">)</span>
	<span class="punctuation">}</span>,
	<span class="punctuation">(</span>error<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log</span><span class="punctuation">(</span><span class="string">'тут обрабатываем ошибки'</span><span class="punctuation">)</span>
	<span class="punctuation">}</span>,
	<span class="punctuation">()</span> <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log</span><span class="punctuation">(</span><span class="string">'тут обрабатываем завершение работы Observable'</span><span class="punctuation">)</span>
	<span class="punctuation">}</span>,
<span class="punctuation">)</span>;</code></pre>
        <p>Альтернативная запись для подписки через объект с методами:</p>
        <pre><code><span class="variable">newObs$</span>.<span class="function-name">subscribe</span><span class="punctuation">({</span>
	<span class="key">next</span>: <span class="punctuation">(</span>data<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log</span><span class="punctuation">(</span><span class="string">'тут обрабатываем данные'</span><span class="punctuation">)</span>
	<span class="punctuation">}</span>,
	<span class="key">error</span>: <span class="punctuation">(</span>error<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log</span><span class="punctuation">(</span><span class="string">'тут обрабатываем ошибки'</span><span class="punctuation">)</span>
	<span class="punctuation">}</span>,
	<span class="key">complete</span>: <span class="punctuation">()</span> <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log</span><span class="punctuation">(</span><span class="string">'тут обрабатываем завершение работы Observable'</span><span class="punctuation">)</span>
	<span class="punctuation">}</span>,
<span class="punctuation">})</span>;</code></pre>
        <p>
            Если <code>Observable</code> не имеет метода <code>complete</code> и
            нет его обработки в методе <code>subscribe</code>, то не забывайте
            самостоятельно отписываться от таких подписок.
        </p>
        <pre><code><span class="variable">newObs$</span>.<span class="function-name">unsubscribe()</span>; <span class="comment">// не забываем отписаться</span></code></pre>`,
        selected: false,
    },
    {
        title: 'У какого типа данных в Angular можно вызвать метод "pipe"?',
        body: `<p>
            <span class="attention">Метод </span> <code>pipe</code>
            <span class="attention">
                применяется к данным, имеющих тип данных
            </span>
            <code>Observable</code>
            <span class="attention"> или его разновидности</span> (например,
            <code>Subject</code>).
        </p>
        <p>
            Причем внутри себя метод <code>pipe</code> принимает только те
            операторы, которые принимают <code>Observable</code> и возвращают
            <code>Observable</code>.
        </p>`,
        selected: false,
    },
    {
        title: 'Что такое "RxJs" и зачем это в Angular?',
        body: `<p>
            <span class="attention">RxJS</span> — это библиотека, реализующая
            принципы реактивного программирования для JavaScript. Основанная на
            объектах типа <code>Observable</code>, она упрощает написание и
            контроль асинхронного и событийного кода.
        </p>`,
        selected: false,
    },
    {
        title: 'Какие вы знаете разновидности объекта Subject и в чем их отличия?',
        body: `<p>В RxJS имеется несколько разновидностей <code>Subject</code>:</p>
        <ul>
            <li><span class="attention">BehaviorSubject</span></li>
            <li><span class="attention">ReplaySubject</span></li>
            <li><span class="attention">AsyncSubject</span></li>
        </ul>
        <i class="subtitle">Subject</i>
        <p>
            RxJS <code>Subject</code> является разновидностью объектов
            <code>Observable</code>. Особенность <code>Subject</code> в том, что
            он может отправлять данные одновременно множеству "потребителей",
            которые могут регистрироваться уже в процессе исполнения
            <code>Subject</code>, в то время как исполнение стандартного
            <code>Observable</code> осуществляется уникально для каждого его
            вызова.
        </p>
        <pre><code><span class="keyword">const</span> <span class="variable">subject$</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Subject</span><span class="type"><number></span><span class="punctuation">()</span>;

<span class="variable">subject$</span>.<span class="method">subscribe</span><span class="punctuation">((</span>value<span class="punctuation">)</span> <span class="operator">=></span> console.<span class="method">log</span><span class="punctuation">(</span><span class="string">'Первая подписка:'</span>, value<span class="punctuation">))</span>;
<span class="variable">subject$</span>.<span class="method">next</span><span class="punctuation">(</span><span class="number">3</span><span class="punctuation">)</span>;
<span class="variable">subject$</span>.<span class="method">subscribe</span><span class="punctuation">((</span>value<span class="punctuation">)</span> <span class="operator">=></span> console.<span class="method">log</span><span class="punctuation">(</span><span class="string">'Вторая подписка:'</span>, value<span class="punctuation">))</span>;
<span class="variable">subject$</span>.<span class="method">next</span><span class="punctuation">(</span><span class="number">9</span><span class="punctuation">)</span>;

<span class="comment">// в консоли мы увидем следующее:
Первая подписка: 3
Первая подписка: 9
Вторая подписка: 9
</span></code></pre>
        <i class="subtitle">BehaviorSubject</i>
        <p>
            <code>BehaviorSubject</code> —
            <span class="attention">
                передает новому подписчику последнее значение и в качестве
                аргумента принимает начальное значение </span
            >.
        </p>
        <pre><code><span class="keyword">const</span> <span class="variable">behaviorSubject$</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">BehaviorSubject</span><span class="type"><number></span><span class="punctuation">(</span><span class="number">5</span><span class="punctuation">)</span>;

<span class="variable">behaviorSubject$</span>.<span class="method">subscribe</span><span class="punctuation">((</span>value<span class="punctuation">)</span> <span class="operator">=></span> console.<span class="method">log</span><span class="punctuation">(</span><span class="string">'Первая подписка:'</span>, value<span class="punctuation">))</span>;
<span class="variable">behaviorSubject$</span>.<span class="method">subscribe</span><span class="punctuation">((</span>value<span class="punctuation">)</span> <span class="operator">=></span> console.<span class="method">log</span><span class="punctuation">(</span><span class="string">'Вторая подписка:'</span>, value<span class="punctuation">))</span>;
<span class="variable">behaviorSubject$</span>.<span class="method">next</span><span class="punctuation">(</span><span class="number">9</span><span class="punctuation">)</span>;

<span class="comment">// в консоли мы увидем следующее:
Первая подписка: 5
Вторая подписка: 5
Первая подписка: 9
Вторая подписка: 9
</span></code></pre>
        <i class="subtitle">ReplaySubject</i>
        <p>
            <code>ReplaySubject</code> —
            <span class="attention">
                передает новому подписчику все предыдущие значения, принимаемый
                параметр — количество предыдущих значений </span
            >.
        </p>
        <pre><code><span class="keyword">const</span> <span class="variable">replaySubject$</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">ReplaySubject</span><span class="type"><number></span><span class="punctuation">(</span><span class="number">2</span><span class="punctuation">)</span>;

<span class="variable">replaySubject$</span>.<span class="method">next</span><span class="punctuation">(</span><span class="number">3</span><span class="punctuation">)</span>;
<span class="variable">replaySubject$</span>.<span class="method">next</span><span class="punctuation">(</span><span class="number">6</span><span class="punctuation">)</span>;
<span class="variable">replaySubject$</span>.<span class="method">next</span><span class="punctuation">(</span><span class="number">9</span><span class="punctuation">)</span>;

<span class="variable">replaySubject$</span>.<span class="method">subscribe</span><span class="punctuation">((</span>value<span class="punctuation">)</span> <span class="operator">=></span> console.<span class="method">log</span><span class="punctuation">(</span><span class="string">'Результат: '</span>, value<span class="punctuation">))</span>;

<span class="comment">// в консоли мы увидем следующее:
Результат: 6
Результат: 9
</span></code></pre>
        <i class="subtitle">AsyncSubject</i>
        <p>
            <code>AsyncSubject</code> —
            <span class="attention">
                передает новому подписчику последнее значение, но только после
                того, как будет вызван метод
            </span>
            <code>complete</code>.
        </p>
        <pre><code><span class="keyword">const</span> <span class="variable">asyncSubject$</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">AsyncSubject</span><span class="type"><number></span><span class="punctuation">()</span>;

<span class="variable">asyncSubject$</span>.<span class="method">subscribe</span><span class="punctuation">((</span>value<span class="punctuation">)</span> <span class="operator">=></span> console.<span class="method">log</span><span class="punctuation">(</span><span class="string">'Результат: '</span>, value<span class="punctuation">))</span>;

<span class="variable">asyncSubject$</span>.<span class="method">next</span><span class="punctuation">(</span><span class="number">3</span><span class="punctuation">)</span>;
<span class="variable">asyncSubject$</span>.<span class="method">next</span><span class="punctuation">(</span><span class="number">6</span><span class="punctuation">)</span>;
<span class="variable">asyncSubject$</span>.<span class="method">next</span><span class="punctuation">(</span><span class="number">9</span><span class="punctuation">)</span>;

<span class="variable">asyncSubject$</span>.<span class="method">complete</span><span class="punctuation">()</span>;

<span class="comment">// в консоли мы увидем следующее:
Результат: 9
</span></code></pre>`,
        selected: false,
    },
    {
        title: 'Можно ли подписываться на события в конструкторе класса компонента?',
        body: `<p>
            <span class="attention">
                В конструкторе класса не стоит делать какие-либо подписки на
                события</span
            >, потому что когда вызывается конструктор класса, то
            <span class="attention">
                инициализируется лишь класс будущего компонента, но не сам
                компонент</span
            >. Следовательно, в этот момент нет никакой гарантии, что данная
            подписка сработает.
        </p>
        <p>
            Подписки на события можно делать в методах класса или на любом этапе
            жизненного цикла компонента, за исключением <code>OnDestroy</code>,
            потому что какой смысл делать на что-то подписку, когда компонент
            уничтожается. Если только вы хотите создать себе лишних проблем с
            утечкой памяти.
        </p>`,
        selected: false,
    },
    {
        title: 'Какие существуют способы отписки от "subscribe"?',
        body: `<p>
            Небольшой вступительный пример того, как делаются отписки от
            какого-либо события в нативном JavaScript:
        </p>
        <pre><code><span class="comment">// создаем функцию, которая будет делать подписку на setTimeout</span>
<span class="keyword">function</span> <span class="function-name">timer</span><span class="punctuation">(</span>cb, timeout<span class="punctuation">)</span> <span class="punctuation">{</span>
    <span class="keyword">const</span> <span class="variable">timeoutId</span> <span class="operator">=</span> <span class="function-name">setTimeout</span><span class="punctuation">(</span>cb, timeout<span class="punctuation">)</span>;
    <span class="keyword">return</span> <span class="punctuation">()</span> <span class="operator">=></span> <span class="function-name">clearInterval</span><span class="punctuation">(</span>timeoutId<span class="punctuation">)</span>;
<span class="punctuation">}</span>
<span class="comment">// замыкаем в переменную disposeTimer функцию, которая отменит подписку</span>
<span class="keyword">const</span> <span class="variable">disposeTimer</span> <span class="operator">=</span> <span class="function-name">timer</span><span class="punctuation">(</span>someFunction, <span class="number">1000</span><span class="punctuation">)</span>;
<span class="comment">// отменяем подписку</span>
<span class="function-name">disposeTimer()</span>;</code></pre>
        <p>Перейдем теперь непосредственно к RxJs.</p>
        <i class="subtitle">Сохранить подписку в переменную</i>
        <p>
            Самый простой способ отписаться от подписки - сохранить подписку в
            переменную и вызвать у нее метод <code>unsubscribe</code>, когда
            подписка нам уже не нужна:
        </p>
        <pre><code><span class="keyword">const</span> <span class="variable">timerSub</span>: <span class="type">Subscription</span> <span class="operator">=</span> <span class="function-name">timer</span><span class="punctuation">(</span><span class="number">1000</span><span class="punctuation">)</span>.<span class="method">subscribe()</span>;
<span class="variable">timerSub</span>.<span class="method">unsubscribe()</span>;</code></pre>
        <p>
            В примере выше нам необходимо следить за каждой подпиской. То есть,
            сохранять ее в переменную и затем где-то вызывать метод
            <code>unsubscribe</code>, что потом избавиться от подписки. Когда
            подписок много в компоненте, то становится очень много однообразного
            кода.
        </p>
        <i class="subtitle">takeUntil</i>
        <p>
            Другой способ, который находит более широкое на практике - это
            использовать <code>ReplaySubject</code> и оператор
            <code>takeUntil</code> для отписки сразу от всех подписок:
        </p>
        <pre><code>onDestroy$: <span class="type">ReplaySubject<any></span> <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">ReplaySubject</span><span class="type"><any></span><span class="punctuation">(</span><span class="number">1</span><span class="punctuation">)</span>;

<span class="method">ngOninit()</span> <span class="punctuation">{</span>
	<span class="object">this</span>.control.valueChanges
		.<span class="method">pipe</span><span class="punctuation">(</span>
			<span class="comment">// switchMap отписывается от старого Observable и подписывается на новый, который приходит из сервиса</span>
			<span class="comment">// это, кстати, еще один способ отписаться от события</span>
			<span class="function-name">switchMap((</span>userId<span class="punctuation">)</span> <span class="operator">=></span> <span class="object">this</span>.service.<span class="method">getUser(</span>userId<span class="punctuation">))</span>,
			<span class="comment">// берем данные пока компонент существует</span>
			<span class="function-name">takeUntil</span><span class="punctuation">(</span><span class="object">this</span>.onDestroy$<span class="punctuation">)</span>
		<span class="punctuation">)</span>
		.<span class="method">subscribe()</span>;
<span class="punctuation">}</span>

<span class="method">ngOnDestroy()</span> <span class="punctuation">{</span>
	<span class="comment">// в момент уничтожения компонента избавляемся от подписок</span>
	<span class="object">this</span>.onDestroy$.<span class="method">next(</span><span class="null">null</span><span class="punctuation">)</span>;
	<span class="object">this</span>.onDestroy$.<span class="method">complete()</span>;
<span class="punctuation">}</span></code></pre>
        <p>
            Вместо <code>ReplaySubject</code> можно использовать и просто
            <code>Subject</code>, но лучше все же использовать именно
            <code>ReplaySubject</code>, т.к. он сделает эмит последнего
            сообщения на случай, если подписка будет создана после уничтожения
            компонента.
        </p>`,
        selected: false,
    },
];