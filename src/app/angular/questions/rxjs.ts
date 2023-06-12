import { IQuestion } from '@types';

export const rxjsQuestions: IQuestion[] = [
    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    // },
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
        title: 'В чем разница между Observable и Promise?',
        body: `<p>
                <code>Observable</code> - это
                <span class="attention">конструктор источника событий</span>, а
                <code>Promise</code> - это сам
                <span class="attention">источник событий</span>.
            </p>
            <p>
                Чтобы в <code>Observable</code> появилось событие, на него
                кто-то должен подписаться.
                <span class="attention"
                    >Без подписки это просто набор методов</span
                >. С промисами же иная ситуация. Если интерпретатор кода доходит
                до промиса, то он выполняется и ему не нужны никакие подписчики.
            </p>
            <p>
                Еще одно отличие заключается в том, что у промисов, когда мы
                используем цепочки <code>then</code>, то мы работаем все с тем
                же промисом. В то время, как у <code>Observable</code> мы
                подписываемся каждый раз на новое событие.
            </p>
            <p>Для большего понимания несколько примеров ниже.</p>
            <i class="subtitle">0 подписчиков у Observable</i>
            <pre><code>promise <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Promise</span><span class="punctuation">(</span>resolve <span class="operator">=></span> <span class="punctuation">{</span>
	console.<span class="function-name">log(</span><span class="string">'Promise создан'</span><span class="punctuation">)</span>;
	<span class="function-name">resolve(</span><span class="string">'результат Promise'</span><span class="punctuation">)</span>
<span class="punctuation">})</span>;

source <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">(</span>subscriber <span class="operator">=></span> <span class="punctuation">{</span>
	console.<span class="function-name">log(</span><span class="string">'Observable создан'</span><span class="punctuation">)</span>;
	subscriber.<span class="function-name">next(</span><span class="string">'результат Observable'</span><span class="punctuation">)</span>;
<span class="punctuation">})</span>;</code></pre>
            <p>Результат в консоли:</p>
            <pre><code><span class="comment">// Promise создан</span></code></pre>
            <i class="subtitle">1 подписчик у Observable</i>
            <pre><code>promise <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Promise</span><span class="punctuation">(</span>resolve <span class="operator">=></span> <span class="punctuation">{</span>
	console.<span class="function-name">log(</span><span class="string">'Promise создан'</span><span class="punctuation">)</span>;
	<span class="function-name">resolve(</span><span class="string">'результат Promise'</span><span class="punctuation">)</span>
<span class="punctuation">})</span>;

source <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">(</span>subscriber <span class="operator">=></span> <span class="punctuation">{</span>
	console.<span class="function-name">log(</span><span class="string">'Observable создан'</span><span class="punctuation">)</span>;
	subscriber.<span class="function-name">next(</span><span class="string">'результат Observable'</span><span class="punctuation">)</span>;
<span class="punctuation">})</span>;

promise.<span class="function-name">then(</span>data <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'полученные данные:'</span>, data<span class="punctuation">))</span>;
source.<span class="function-name">subscribe(</span>val <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'полученные данные:'</span>, val<span class="punctuation">))</span>;</code></pre>
            <p>Результат в консоли:</p>
            <pre><code><span class="comment">// Promise создан</span>
<span class="comment">// Observable создан</span>
<span class="comment">// результат Observable</span>
<span class="comment">// результат Promise</span></code></pre>
            <i class="subtitle">2 подписчика у Observable</i>
            <pre><code>promise <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Promise</span><span class="punctuation">(</span>resolve <span class="operator">=></span> <span class="punctuation">{</span>
	console.<span class="function-name">log(</span><span class="string">'Promise создан'</span><span class="punctuation">)</span>;
	<span class="function-name">resolve(</span><span class="string">'результат Promise'</span><span class="punctuation">)</span>
<span class="punctuation">})</span>;

source <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">(</span>subscriber <span class="operator">=></span> <span class="punctuation">{</span>
	console.<span class="function-name">log(</span><span class="string">'Observable создан'</span><span class="punctuation">)</span>;
	subscriber.<span class="function-name">next(</span><span class="string">'результат Observable'</span><span class="punctuation">)</span>;
<span class="punctuation">})</span>;

promise.<span class="function-name">then(</span>data <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'полученные данные:'</span>, data<span class="punctuation">))</span>;
source.<span class="function-name">subscribe(</span>val <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'полученные данные:'</span>, val<span class="punctuation">))</span>;

promise.<span class="function-name">then(</span>data <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'полученные данные:'</span>, data<span class="punctuation">))</span>;
source.<span class="function-name">subscribe(</span>val <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'полученные данные:'</span>, val<span class="punctuation">))</span>;</code></pre>
            <p>Результат в консоли:</p>
            <pre><code><span class="comment">// Promise создан</span>
<span class="comment">// Observable создан</span>
<span class="comment">// результат Observable</span>
<span class="comment">// Observable создан</span>
<span class="comment">// результат Observable</span>
<span class="comment">// результат Promise</span>
<span class="comment">// результат Promise</span></code></pre>`,
        selected: false,
    },
    {
        title: 'В чем разница между Observable и Array?',
        body: `<p>
                У объектов <code>Observable</code> (конечно же, имеется ввиду
                операторы метода <code>pipe</code>) и <code>Array</code> (методы массивов) есть
                схожий по названию функционал:
                <code>map, filter, reduce</code> и т.д. Кроме того,
                перечисленный функционал этих объектов работает одинаково под
                капотом. Но все же есть одно но: <span class="attention">разный порядок выполнения кода.</span>
            </p>
            <p>
                Чтобы было более понятно о чем идет речь, ниже представлены
                примеры работы цепочки методов массива и цепочки операторов
                метода <code>pipe</code>.
            </p>
            <i class="subtitle">Array</i>
            <p>Для начала разберемся как ведут себя методы у массивов:</p>
            <pre><code>someArray <span class="operator">=</span> <span class="punctuation">[</span><span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>, <span class="number">40</span><span class="punctuation">]</span>;

result <span class="operator">=</span> someArray
	.<span class="function-name">map(</span>item <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log(</span><span class="string">'[MAP]'</span>, item<span class="punctuation">)</span>;
		<span class="keyword">return</span> item <span class="operator">+</span> <span class="number">5</span>;
	<span class="punctuation">})</span>
	.<span class="function-name">filter(</span>item <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log(</span><span class="string">'[FILTER]'</span>, item<span class="punctuation">)</span>;
		<span class="keyword">return</span> item <span class="operator">></span> <span class="number">30</span>;
	<span class="punctuation">})</span>
	.<span class="function-name">reduce((</span>acc, item<span class="punctuation">)</span> <span class="operator">=></span> acc <span class="operator">+</span> item<span class="punctuation">)</span>;

console.<span class="function-name">log(</span><span class="string">'Результат:'</span>, result<span class="punctuation">)</span>;</code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code><span class="comment">// [MAP] 10</span>
<span class="comment">// [MAP]: 20</span>
<span class="comment">// [MAP]: 30</span>
<span class="comment">// [MAP]: 40</span>
<span class="comment">// [FILTER]: 15</span>
<span class="comment">// [FILTER]: 25</span>
<span class="comment">// [FILTER]: 35</span>
<span class="comment">// [FILTER]: 45</span>
<span class="comment">// Результат: 80</span></code></pre>
            <p>
                Как видите, сначала массив <code>someArray</code> полностью
                прошел через метод <code>map</code> и только потом он попал в
                метод <code>filter</code> и аналогично затем в метод
                <code>reduce</code>.
            </p>
            <i class="subtitle">Observable</i>
            <p>
                А теперь проделаем все то же самое, но уже для
                <code>Observable</code> с тем же массивом данных:
            </p>
            <pre><code>someArray <span class="operator">=</span> <span class="punctuation">[</span><span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>, <span class="number">40</span><span class="punctuation">]</span>;

<span class="function-name">from(</span>someArray<span class="punctuation">)</span>.<span class="function-name">pipe(</span>
	<span class="function-name">map(</span>item <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log(</span><span class="string">'[MAP]'</span>, item<span class="punctuation">)</span>;
		<span class="keyword">return</span> item <span class="operator">+</span> <span class="number">5</span>;
	<span class="punctuation">})</span>
	.<span class="function-name">filter(</span>item <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log(</span><span class="string">'[FILTER]'</span>, item<span class="punctuation">)</span>;
		<span class="keyword">return</span> item <span class="operator">></span> <span class="number">30</span>;
	<span class="punctuation">})</span>
	.<span class="function-name">reduce((</span>acc, item<span class="punctuation">)</span> <span class="operator">=></span> acc <span class="operator">+</span> item<span class="punctuation">)</span>
)
.<span class="function-name">subscribe(</span>val <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'next:'</span>, val<span class="punctuation">))</span>;</code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code><span class="comment">// [MAP] 10</span>
<span class="comment">// [FILTER]: 15</span>
<span class="comment">// [MAP]: 20</span>
<span class="comment">// [FILTER]: 25</span>
<span class="comment">// [MAP]: 30</span>
<span class="comment">// [FILTER]: 35</span>
<span class="comment">// [MAP]: 40</span>
<span class="comment">// [FILTER]: 45</span>
<span class="comment">// Результат: 80</span></code></pre>
            <p>
                Как видите, результат выполнения кода отличается. Теперь каждый
                элемент массива <code>someArray</code> полностью проходит
                цепочку операторов, за исключением оператора
                <code>reduce</code>, т.к. он отрабатывает по завершению потока.
            </p>
            <p>
                Если вам нужен результат после каждого элемента, успешно
                прошеднего операторы <code>map</code> и <code>filter</code>,
                воспользуйтесь оператором <code>scan</code>:
            </p>
            <pre><code>someArray <span class="operator">=</span> <span class="punctuation">[</span><span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>, <span class="number">40</span><span class="punctuation">]</span>;

<span class="function-name">from(</span>someArray<span class="punctuation">)</span>.<span class="function-name">pipe(</span>
	<span class="function-name">map(</span>item <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log(</span><span class="string">'[MAP]'</span>, item<span class="punctuation">)</span>;
		<span class="keyword">return</span> item <span class="operator">+</span> <span class="number">5</span>;
	<span class="punctuation">})</span>
	.<span class="function-name">filter(</span>item <span class="operator">=></span> <span class="punctuation">{</span>
		console.<span class="function-name">log(</span><span class="string">'[FILTER]'</span>, item<span class="punctuation">)</span>;
		<span class="keyword">return</span> item <span class="operator">></span> <span class="number">30</span>;
	<span class="punctuation">})</span>
	.<span class="function-name">scan((</span>acc, item<span class="punctuation">)</span> <span class="operator">=></span> acc <span class="operator">+</span> item<span class="punctuation">)</span>
)
.<span class="function-name">subscribe(</span>val <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'next:'</span>, val<span class="punctuation">))</span>;</code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code><span class="comment">// [MAP] 10</span>
<span class="comment">// [FILTER]: 15</span>
<span class="comment">// [MAP]: 20</span>
<span class="comment">// [FILTER]: 25</span>
<span class="comment">// [MAP]: 30</span>
<span class="comment">// [FILTER]: 35</span>
<span class="comment">// Результат: 35</span>
<span class="comment">// [MAP]: 40</span>
<span class="comment">// [FILTER]: 45</span>
<span class="comment">// Результат: 80</span></code></pre>
            <p>Итог всего вышесказанного:</p>
            <ul>
                <li>
                    <span class="attention">
                        Объект типа <code>Array</code> обрабатывает все свои
                        элементы в одном методе и только после этого переходит к
                        другому методу</span
                    >;
                </li>
                <li>
                    <span class="attention">
                        Объект типа <code>Observable</code> поочередно прогоняет
                        свои элементы через операторы, указанные в методе
                        <code>pipe</code>.
                    </span>
                </li>
            </ul>`,
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
    {
        title: 'Способы обработки ошибок в RxJs',
        body: `<p>
                Чтобы ваше приложение "не падало" из-за возможной ошибки
                (например, сервер не отвечает на ваш запрос), эти самые ошибки
                можно и нужно обрабатывать.
            </p>
            <p>В Angular обрабатывать ошибки можно несколькими способами:</p>
            <i class="subtitle">Оператор catchError</i>
            <p>
                <span class="attention">
                    Оператор <code>catchError</code> позволяет обработать
                    возможную ошибку без каких-либо дополнительных побочных
                    эффектов.
                </span>
            </p>
            <pre><code>source <span class="operator">=</span> <span class="function-name">throwError(</span><span class="string">'какая-то ошибка'</span><span class="punctuation">)</span>; <span class="comment">// имитируем ошибку</span>

subscription <span class="operator">=</span> source.<span class="function-name">pipe(</span>
		<span class="function-name">catchError(</span>err <span class="operator">=></span> <span class="punctuation">{</span>
			console.<span class="function-name">log(</span><span class="string">'отловлена ошибка:'</span>, err<span class="punctuation">)</span>;
			<span class="keyword">return</span> <span class="function-name">of(</span><span class="string">'данные обработки ошибки'</span><span class="punctuation">)</span>; <span class="comment">// обязательно нужно вернуть данные типа Observable</span>
		<span class="punctuation">})</span>
  	<span class="punctuation">)</span>
	.<span class="function-name">subscribe(</span>
		val <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'next:'</span>, val<span class="punctuation">)</span>,
		err <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'error:'</span>, err<span class="punctuation">)</span>,
		<span class="punctuation">()</span> <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'completed:'</span>, <span class="string">'поток завершен'</span><span class="punctuation">)</span>
	<span class="punctuation">)</span>;</code></pre>
            <p>
                В результате выполнения данного кода в консоли мы увидим
                следующее:
            </p>
            <pre><code><span class="comment">// отловлена ошибка: какая-то ошибка</span>
<span class="comment">// next: данные обработки ошибки</span>
<span class="comment">// completed: поток завершен</span></code></pre>
            <i class="subtitle">Оператор retry</i>
            <p>
                <span class="attention"
                    >Оператор <code>retry</code> при возникновении ошибки будет
                    запрашивать данные повторно.</span
                >
                Количество повторных запросов передается параметров в метод:
            </p>
            <pre><code>source <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">(</span>subscriber <span class="operator">=></span> <span class="punctuation">{</span>
  	console.<span class="function-name">log(</span><span class="string">'Следующая попытка'</span><span class="punctuation">)</span>;
 	subscriber.<span class="function-name">error(</span><span class="string">'какая-то ошибка'</span><span class="punctuation">)</span>; <span class="comment">// имитируем ошибку</span>
});

subscription <span class="operator">=</span> source.<span class="function-name">pipe(</span><span class="function-name">retry(</span><span class="number">2</span><span class="punctuation">))</span> <span class="comment">// в случае ошибки запрашиваем данные повторно 2 раза</span>
	.<span class="function-name">subscribe(</span>
		val <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'next:'</span>, val<span class="punctuation">)</span>,
		err <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'error:'</span>, err<span class="punctuation">)</span>,
		<span class="punctuation">()</span> <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'completed:'</span>, <span class="string">'поток завершен'</span><span class="punctuation">)</span>
	<span class="punctuation">)</span>;</code></pre>
            <p>
                В примере выше мы намеренно у <code>source</code> имитируем
                ошибку и делаем поочередно еще 2 запроса на получение данных.
                Если за эти 2 запроса мы не получаем данные, тогда уже у
                <code>subscription</code> сработает метод <code>error</code>.
            </p>
            <pre><code><span class="comment">// Следующая попытка</span>
<span class="comment">// Следующая попытка</span>
<span class="comment">// Следующая попытка</span>
<span class="comment">// error: какая-то ошибка</span></code></pre>
            <i class="subtitle">Оператор retryWhen</i>
            <p>
                Оператор <code>retryWhen</code> своего рода модификация
                оператора <code>retry</code>.
                <span class="attention"
                    >Данный оператор будет вызываться уже по определенному
                    условию - по результату выполнения другого
                    <code>Observable</code></span
                >:
            </p>
            <pre><code>flag <span class="operator">=</span> <span class="boolean">true</span>;

source <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">(</span>subscriber <span class="operator">=></span> <span class="punctuation">{</span>
  console.<span class="function-name">log(</span><span class="string">'имитация обращения к серверу'</span><span class="punctuation">)</span>;
  <span class="keyword">if</span> <span class="punctuation">(</span>flag<span class="punctuation">) {</span>
    subscriber.<span class="function-name">error(</span><span class="string">'какая-то ошибка'</span><span class="punctuation">)</span>;
    flag <span class="operator">=</span> <span class="boolean">false</span>;
  <span class="punctuation">}</span> <span class="keyword">else</span> <span class="punctuation">{</span>
    subscriber.<span class="function-name">next(</span><span class="string">'успешный ответ сервера'</span><span class="punctuation">)</span>;
  <span class="punctuation">}</span>
<span class="punctuation">})</span>;

obs <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">(</span>subscriber <span class="operator">=></span> <span class="punctuation">{</span>
  console.<span class="function-name">log(</span><span class="string">'подожди секундочку'</span><span class="punctuation">)</span>;
  <span class="function-name">setTimeout(()</span> <span class="operator">=></span> subscriber.<span class="function-name">next(</span><span class="string">'какие-то данные'</span><span class="punctuation">)</span>, <span class="number">1000</span><span class="punctuation">)</span>;
<span class="punctuation">})</span>;

subscription <span class="operator">=</span> source.<span class="function-name">pipe(</span><span class="function-name">retryWhen(</span>err$ <span class="operator">=></span> obs<span class="punctuation">))</span>
  .<span class="function-name">subscribe(</span> val <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'next:'</span>, val<span class="punctuation">))</span>;</code></pre>
            <p>
                В примере выше, когда происходит ошибка, оператор
                <code>retryWhen</code> возвращает новый <code>Observable</code>,
                в данном случае это <code>obs</code>. Спустя 1 секунду
                <code>obs</code>
                возвращает какие-то данные и в этот момент оператор
                <code>retryWhen</code> вновь обратится к своему источнику, чтобы
                попытаться получить данные.
            </p>
            <p>Результат выполнения кода из примера выше:</p>
            <pre><code><span class="comment">// имитация обращения к серверу</span>
<span class="comment">// подожди секундочку</span>
<span class="comment">// имитация обращения к серверу</span>
<span class="comment">// next: успешный ответ сервера</span></code></pre>
            <i class="subtitle">Оператор onErrorResumeNext</i>
            <p>
                Суть данного оператора заключается в том, что
                <span class="attention"
                    >когда происходит какая-то ошибка, он переключается на
                    другой <code>Observable</code></span
                >
                (своего рода запасной/страхующий поток).
            </p>
            <pre><code>source <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">(</span>subscriber <span class="operator">=></span> <span class="punctuation">{</span>
	console.<span class="function-name">log(</span><span class="string">'попытка подключения'</span><span class="punctuation">)</span>;
	subscriber.<span class="function-name">error(</span><span class="string">'ошибка!'</span><span class="punctuation">)</span>;
<span class="punctuation">})</span>;

planB <span class="operator">=</span> <span class="function-name">of(</span><span class="string">'План "Б" на случай ошибки'</span><span class="punctuation">)</span>;

subscription <span class="operator">=</span> source.<span class="function-name">pipe(</span><span class="function-name">onErrorResumeNext(</span>planB<span class="punctuation">))</span>
	.<span class="function-name">subscribe(</span>
		val <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'next:'</span>, val<span class="punctuation">)</span>,
		err <span class="operator">=></span> console.<span class="function-name">error(</span><span class="string">'error:'</span>, err<span class="punctuation">)</span>,
		<span class="punctuation">()</span> <span class="operator">=></span> console.<span class="function-name">log(</span><span class="string">'completed: поток завершен'</span><span class="punctuation">)</span>
	<span class="punctuation">)</span>;</code></pre>
            <p>Результат выполнения кода из примера выше:</p>
            <pre><code><span class="comment">// попытка подключения</span>
<span class="comment">// ошибка!</span>
<span class="comment">// completed: поток завершен</span></code></pre>`,
        selected: false,
    },
    {
        title: 'Что такое холодные и горячие Observable, в чем между ними разница и можно ли подогреть или остудить Observable?',
        body: `            <p>
                Холодные и горячие <code>Observable</code> - это потоки
                (стримы), имеющие лишь 1 принципиальное отличие:
                <span class="attention"
                    >Холодные <code>Observable</code> создают независимые потоки
                    под каждую подписку, а горячие разделяют поток друг с
                    другом.</span
                >
            </p>
            <p>
                Давайте рассмотрим более наглядно на примерах и попутно создамим
                свой собственный оператор для RxJs.
            </p>
            <p>Начнем с холодного <code>Observable</code>:</p>
            <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">AppComponent</span> <span class="keyword">implements</span> <span class="interface-name">OnInit</span> <span class="punctuation">{</span>
    <span class="function-name">ngOnInit()</span>: <span class="type">void</span> <span class="punctuation">{</span>
        <span class="keyword">const</span> <span class="variable">obs$</span> <span class="operator">=</span> <span class="function-name">fromTimestamp()</span>;
        <span class="variable">obs$</span>.<span class="function-name">subscribe(</span>console.<span class="function-name">log</span><span class="punctuation">)</span>;
        <span class="function-name">setTimeout(()</span> <span class="operator">=></span> <span class="punctuation">{</span>
            <span class="variable">obs$</span>.<span class="function-name">subscribe(</span>console.<span class="function-name">log</span><span class="punctuation">)</span>;
        <span class="punctuation">}</span>, <span class="number">2000</span><span class="punctuation">)</span>;
    <span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="comment">// имитация собственного оператора RxJs</span>
<span class="keyword">const</span> <span class="function-name">fromTimestamp</span> <span class="operator">=</span> <span class="punctuation">()</span>: <span class="type">Observable<</span><span class="type">number></span> <span class="operator">=></span> <span class="punctuation">{</span>
    <span class="keyword">return</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">((</span>subscriber<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
        <span class="keyword">const</span> <span class="variable">timestamp</span> <span class="operator">=</span> <span class="class-name">Date</span>.<span class="function-name">now()</span>; <span class="comment">// timestamp создается внутри Observable</span>
        subscriber.<span class="function-name">next(</span><span class="variable">timestamp</span><span class="punctuation">)</span>;
    <span class="punctuation">})</span>;
<span class="punctuation">}</span>;</code></pre>
            <p>В результате в консоли мы увидим следующее:</p>
            <pre><code><span class="comment">// 1685375651548</span>
<span class="comment">// 1685375651561</span></code></pre>
            <p>Как видите, для каждого потока свое значение.</p>
            <p>
                А теперь пример того, как сделать горячий
                <code>Observable</code>:
            </p>
            <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">AppComponent</span> <span class="keyword">implements</span> <span class="interface-name">OnInit</span> <span class="punctuation">{</span>
    <span class="function-name">ngOnInit()</span>: <span class="type">void</span> <span class="punctuation">{</span>
        <span class="keyword">const</span> <span class="variable">obs$</span> <span class="operator">=</span> <span class="function-name">fromTimestamp()</span>;
        <span class="variable">obs$</span>.<span class="function-name">subscribe(</span>console.<span class="function-name">log</span><span class="punctuation">)</span>;
        <span class="function-name">setTimeout(()</span> <span class="operator">=></span> <span class="punctuation">{</span>
            <span class="variable">obs$</span>.<span class="function-name">subscribe(</span>console.<span class="function-name">log</span><span class="punctuation">)</span>;
        <span class="punctuation">}</span>, <span class="number">2000</span><span class="punctuation">)</span>;
    <span class="punctuation">}</span>
<span class="punctuation">}</span>

<span class="comment">// имитация собственного оператора RxJs</span>
<span class="keyword">const</span> <span class="function-name">fromTimestamp</span> <span class="operator">=</span> <span class="punctuation">()</span>: <span class="type">Observable<</span><span class="type">number></span> <span class="operator">=></span> <span class="punctuation">{</span>
	<span class="keyword">const</span> <span class="variable">timestamp</span> <span class="operator">=</span> <span class="class-name">Date</span>.<span class="function-name">now()</span>; <span class="comment">// timestamp создается снаружи Observable</span>
    <span class="keyword">return</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">((</span>subscriber<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
        subscriber.<span class="function-name">next(</span><span class="variable">timestamp</span><span class="punctuation">)</span>;
    <span class="punctuation">})</span>;
<span class="punctuation">}</span>;</code></pre>
            <p>В результате в консоли мы увидим следующее:</p>
            <pre><code><span class="comment">// 1685375651588</span>
<span class="comment">// 1685375651588</span></code></pre>
            <p>В консоли получаем одинаковое значение, даже не смотря на то, что вторая подписка вызывается через 2 секунды. Это происходит потому, что мы ссылаемся на данные, которые находятся снаружи <code>Observable</code> и в момент инициализации <code>Observable</code> не создаются заново.</p>
			<i class="subtitle">Как подогреть холодный Observable?</i>
			<p>Забегая вперед сразу хочется отметить, что перести поток из холодного в горячий можно, а из горячего в холодный - нельзя. Почему - мы разобрали в примерах выше.</p>
			<p>Теперь давайте разберемся как подогреть поток. Для этого в RxJs есть различные механизмы:
				<ul>
					<li>Использовать <code>Subject</code> (или его разновидности) вместо <code>Observable</code>;</li>
					<li>Использовать оператор <code>shareReplay</code> из библиотеки RxJs (он под капотом использует <code>ReplaySubject</code>);</li>
					<li>Использовать оператор <code>share</code> или <code>publish</code> из библиотеки RxJs (они под капотом используют <code>Subject</code>);</li>
					<li>и т.д.</li>
				</ul>
			</p>
			<pre><code><span class="comment">// пример использования оператора shareReplay</span>
<span class="function-name">ngOnInit()</span>: <span class="type">void</span> <span class="punctuation">{</span>
	<span class="object">this</span>.data$ = <span class="object">this</span>.http.<span class="function-name">get</span><span class="type"><</span><span class="type">any[]></span><span class="punctuation">(</span><span class="string">'https://...'</span><span class="punctuation">)</span>
	.<span class="function-name">pipe(shareReplay())</span>
	.<span class="function-name">subscribe()</span>
<span class="punctuation">}</span></code></pre>
<p>И теперь, если у вас где-то в разметке есть пайпы <code>async</code>, которые берут <code>data$</code>, то к серверу будет уходить всего лишь 1 запрос и, соответственно, при ответе сервера данные будут отдаваться всем подписчикам от одной и той же подписки.</p>`,
        selected: false,
    },
    {
        title: 'Как объединить несколько потоков в 1 и получить общий результат?',
        body: `<p>
                В RxJs существуют различные операторы, позволяющие
                объединять/комбинировать потоки и получать из них данные.
                Давайте разберем их на примерах.
            </p>
            <i class="subtitle">Оператор concat</i>
            <p>
                Принцип работы данного оператора схож с его тёской из нативного
                JavaScript, он просто соединит потоки. Но тут есть тоже свои
                нюансы:
            </p>
            <img
                src="assets/img/angular/rxjs/concat.png"
                alt="оператор concat"
            />
            <p>
                Как видно на картинке, события второго потока добавляются после
                событий первого потока. Причем неважно, что второй поток
                завершается раньше, оператор <code>concat</code> будет ждать
                пока завершиться первый поток и только тогда перейдет к
                следующему. И
                <span class="attention">
                    после того, как оператор
                    <code>concat</code> получает все потоки, он их объединяет в
                    порядке передачи внутрь оператора и завершается.
                </span>
            </p>
            <p>Теперь как это будет выглядеть в коде:</p>
            <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">SomeComponent</span> <span class="punctuation">{</span>
    first <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">((</span>subscriber<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
        <span class="function-name">setTimeout(()</span> <span class="operator">=></span> <span class="punctuation">{</span>
            subscriber.<span class="function-name">next(</span><span class="string">'500ms'</span><span class="punctuation">)</span>;
            subscriber.<span class="function-name">complete()</span>;
        <span class="punctuation">}</span>, <span class="number">500</span><span class="punctuation">)</span>;
    <span class="punctuation">})</span>;

    second <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">((</span>subscriber<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
        <span class="function-name">setTimeout(()</span> <span class="operator">=></span> <span class="punctuation">{</span>
            subscriber.<span class="function-name">next(</span><span class="string">'200ms'</span><span class="punctuation">)</span>;
            subscriber.<span class="function-name">complete()</span>;
        <span class="punctuation">}</span>, <span class="number">200</span><span class="punctuation">)</span>;
    <span class="punctuation">})</span>;

    result <span class="operator">=</span> <span class="function-name">concat(</span><span class="object">this</span>.first, <span class="object">this</span>.second<span class="punctuation">)</span>.<span class="function-name">subscribe((</span>val<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
        console.<span class="function-name">log(</span><span class="string">'next:'</span>, val<span class="punctuation">)</span>;
    <span class="punctuation">})</span>;
<span class="punctuation">}</span></code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code><span class="comment">// next: 500ms</span>
<span class="comment">// next: 200ms</span></code></pre>
            <i class="subtitle">Оператор merge</i>
            <p>
                <span class="attention">
                    Данный оператор соединяет события получаемых потоков
                    параллельно, поэтому тут уже не важна последовательность
                    передаваемых потоков внутрь оператора.
                </span>
            </p>
            <img
                src="assets/img/angular/rxjs/merge.png"
                alt="оператор concat"
            />
            <p>Как это будет выглядеть в коде:</p>
            <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">SomeComponent</span> <span class="punctuation">{</span>
    first <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">((</span>subscriber<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
        <span class="function-name">setTimeout(()</span> <span class="operator">=></span> <span class="punctuation">{</span>
            subscriber.<span class="function-name">next(</span><span class="string">'500ms'</span><span class="punctuation">)</span>;
            subscriber.<span class="function-name">complete()</span>;
        <span class="punctuation">}</span>, <span class="number">500</span><span class="punctuation">)</span>;
    <span class="punctuation">})</span>;

    second <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">((</span>subscriber<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
        <span class="function-name">setTimeout(()</span> <span class="operator">=></span> <span class="punctuation">{</span>
            subscriber.<span class="function-name">next(</span><span class="string">'200ms'</span><span class="punctuation">)</span>;
            subscriber.<span class="function-name">complete()</span>;
        <span class="punctuation">}</span>, <span class="number">200</span><span class="punctuation">)</span>;
    <span class="punctuation">})</span>;

    result <span class="operator">=</span> <span class="function-name">merge(</span><span class="object">this</span>.first, <span class="object">this</span>.second<span class="punctuation">)</span>.<span class="function-name">subscribe((</span>val<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
        console.<span class="function-name">log(</span><span class="string">'next:'</span>, val<span class="punctuation">)</span>;
    <span class="punctuation">})</span>;
<span class="punctuation">}</span></code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code><span class="comment">// next: 200ms</span>
<span class="comment">// next: 500ms</span></code></pre>
            <p>
                И как видите, теперь учитывается время события, когда оно
                происходит.
            </p>
            <i class="subtitle">Оператор zip</i>
            <p>
                <span class="attention"
                    >Данный оператор объединяет потоки, если в каждом из
                    переданных потоков есть доступные для создания пары
                    события.</span
                >
            </p>
            <img src="assets/img/angular/rxjs/zip.png" alt="оператор zip" />
            <p>
                На картинке выше есть 2 потока. В первом потоке происходит
                событие "1", но оно не попадет в объединенный поток, пока в
                другом потоке не произойдет событие "А", то есть, пока не
                создаться пара.
            </p>
            <p>Как это будет выглядеть в коде:</p>
            <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">SomeComponent</span> <span class="punctuation">{</span>
    <span class="function-name">nextFunction(</span>label: <span class="type">string</span>, count: <span class="type">number</span>, interval: <span class="type">number</span><span class="punctuation">) {</span>
        <span class="keyword">return</span> <span class="punctuation">(</span>subscriber: <span class="type">Subscriber<</span><span class="type">unknown></span><span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
            <span class="keyword">let</span> i <span class="operator">=</span> <span class="number">0</span>;
            <span class="function-name">setInterval(()</span> <span class="operator">=></span> <span class="punctuation">{</span>
                <span class="keyword">if</span> <span class="punctuation">(</span>i <span class="operator"><</span> count<span class="punctuation">) {</span>
                    subscriber.<span class="function-name">next(</span>label <span class="operator">+</span> <span class="string">':'</span> <span class="operator">+</span> i<span class="punctuation">)</span>;
                    i<span class="operator">++</span>;
                <span class="punctuation">}</span> <span class="keyword">else</span> <span class="punctuation">{</span>
                    subscriber.<span class="function-name">complete()</span>;
                <span class="punctuation">}</span>
            <span class="punctuation">}</span>, interval<span class="punctuation">)</span>;
        <span class="punctuation">}</span>;
    <span class="punctuation">}</span>

    first <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">(</span><span class="object">this</span>.<span class="function-name">nextFunction(</span><span class="string">'A'</span>, <span class="number">3</span>, <span class="number">500</span><span class="punctuation">))</span>;
    second <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">(</span><span class="object">this</span>.<span class="function-name">nextFunction(</span><span class="string">'B'</span>, <span class="number">4</span>, <span class="number">200</span><span class="punctuation">))</span>;

    result <span class="operator">=</span> <span class="function-name">zip(</span><span class="object">this</span>.first, <span class="object">this</span>.second<span class="punctuation">)</span>.<span class="function-name">subscribe((</span>val<span class="punctuation">)</span> <span class="operator">=></span>
        console.<span class="function-name">log(</span><span class="string">'next:'</span>, val<span class="punctuation">)</span>
    <span class="punctuation">)</span>;
<span class="punctuation">}</span></code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code><span class="comment">// next: ['[A]:0', '[B]:0']</span>
<span class="comment">// next: ['[A]:1', '[B]:1']</span>
<span class="comment">// next: ['[A]:2', '[B]:2']</span></code></pre>
            <p>
                В переменной <code>first</code> мы генерируем 3 события, а в
                <code>second</code> 4, но в объединенный поток попало в итоге
                лишь 3 пары, т.к. четвертому событию переменной
                <code>second</code> не нашлось пары из переменной
                <code>first</code>.
            </p>
            <i class="subtitle">Оператор combineLatest</i>
            <p>
                Оператор <code>combineLatest</code> похож по своему функционалу
                на оператор <code>zip</code>, но
                <span class="attention"
                    >в объединенном потоке он создает пару из последних (свежих)
                    событий, переданных в него потоков, перезатирая старые
                    события.</span
                >
            </p>
            <img
                src="assets/img/angular/rxjs/combineLatest.png"
                alt="оператор combineLatest"
            />
            <p>
                На картинке выше в первом потоке появляется событие "1", затем
                во втором потоке событие "А", в результате образуется пара "1А",
                но затем в первом потоке вновь происходит событие и старое
                событие "1" перезатирается новым событием "2". В результате мы
                получаем пару "2А" и т.д.
            </p>
            <p>Как это будет выглядеть в коде:</p>
            <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">SomeComponent</span> <span class="punctuation">{</span>
    <span class="function-name">nextFunction(</span>label: <span class="type">string</span>, count: <span class="type">number</span>, interval: <span class="type">number</span><span class="punctuation">) {</span>
        <span class="keyword">return</span> <span class="punctuation">(</span>subscriber: <span class="type">Subscriber<</span><span class="type">unknown></span><span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
            <span class="keyword">let</span> i <span class="operator">=</span> <span class="number">0</span>;
            <span class="function-name">setInterval(()</span> <span class="operator">=></span> <span class="punctuation">{</span>
                <span class="keyword">if</span> <span class="punctuation">(</span>i <span class="operator"><</span> count<span class="punctuation">) {</span>
                    subscriber.<span class="function-name">next(</span>label <span class="operator">+</span> <span class="string">':'</span> <span class="operator">+</span> i<span class="punctuation">)</span>;
                    i<span class="operator">++</span>;
                <span class="punctuation">}</span> <span class="keyword">else</span> <span class="punctuation">{</span>
                    subscriber.<span class="function-name">complete()</span>;
                <span class="punctuation">}</span>
            <span class="punctuation">}</span>, interval<span class="punctuation">)</span>;
        <span class="punctuation">}</span>;
    <span class="punctuation">}</span>

    first <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">(</span><span class="object">this</span>.<span class="function-name">nextFunction(</span><span class="string">'A'</span>, <span class="number">3</span>, <span class="number">500</span><span class="punctuation">))</span>;
    second <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">(</span><span class="object">this</span>.<span class="function-name">nextFunction(</span><span class="string">'B'</span>, <span class="number">4</span>, <span class="number">200</span><span class="punctuation">))</span>;

    result <span class="operator">=</span> <span class="function-name">combineLatest(</span><span class="object">this</span>.first, <span class="object">this</span>.second<span class="punctuation">)</span>.<span class="function-name">subscribe((</span>val<span class="punctuation">)</span> <span class="operator">=></span>
        console.<span class="function-name">log(</span><span class="string">'next:'</span>, val<span class="punctuation">)</span>
    <span class="punctuation">)</span>;
<span class="punctuation">}</span></code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code><span class="comment">// next: ['[A]:0', '[B]:1']</span>
<span class="comment">// next: ['[A]:0', '[B]:2']</span>
<span class="comment">// next: ['[A]:0', '[B]:3']</span>
<span class="comment">// next: ['[A]:1', '[B]:3']</span>
<span class="comment">// next: ['[A]:2', '[B]:3']</span></code></pre>
            <i class="subtitle">Оператор forkJoin</i>
            <p>
                Данный оператор объединяет потоки и комбинирует их последние
                значения. Но у него есть ключевая особенность - он срабатывает
                лишь в момент, когда переданные внутрь него потоки завершены.
            </p>
            <img
                src="assets/img/angular/rxjs/forkJoin.png"
                alt="оператор forkJoin"
            />
            <p>Как это будет выглядеть в коде:</p>
            <pre><code><span class="export">export</span> <span class="keyword">class</span> <span class="class-name">SomeComponent</span> <span class="punctuation">{</span>
    <span class="function-name">nextFunction(</span>label: <span class="type">string</span>, count: <span class="type">number</span>, interval: <span class="type">number</span><span class="punctuation">) {</span>
        <span class="keyword">return</span> <span class="punctuation">(</span>subscriber: <span class="type">Subscriber<</span><span class="type">unknown></span><span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
            <span class="keyword">let</span> i <span class="operator">=</span> <span class="number">0</span>;
            <span class="function-name">setInterval(()</span> <span class="operator">=></span> <span class="punctuation">{</span>
                <span class="keyword">if</span> <span class="punctuation">(</span>i <span class="operator"><</span> count<span class="punctuation">) {</span>
                    subscriber.<span class="function-name">next(</span>label <span class="operator">+</span> <span class="string">':'</span> <span class="operator">+</span> i<span class="punctuation">)</span>;
                    i<span class="operator">++</span>;
                <span class="punctuation">}</span> <span class="keyword">else</span> <span class="punctuation">{</span>
                    subscriber.<span class="function-name">complete()</span>;
                <span class="punctuation">}</span>
            <span class="punctuation">}</span>, interval<span class="punctuation">)</span>;
        <span class="punctuation">}</span>;
    <span class="punctuation">}</span>

    first <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">(</span><span class="object">this</span>.<span class="function-name">nextFunction(</span><span class="string">'A'</span>, <span class="number">3</span>, <span class="number">500</span><span class="punctuation">))</span>;
    second <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Observable</span><span class="punctuation">(</span><span class="object">this</span>.<span class="function-name">nextFunction(</span><span class="string">'B'</span>, <span class="number">4</span>, <span class="number">200</span><span class="punctuation">))</span>;

    result <span class="operator">=</span> <span class="function-name">forkJoin(</span><span class="object">this</span>.first, <span class="object">this</span>.second<span class="punctuation">)</span>.<span class="function-name">subscribe((</span>val<span class="punctuation">)</span> <span class="operator">=></span>
        console.<span class="function-name">log(</span><span class="string">'next:'</span>, val<span class="punctuation">)</span>
    <span class="punctuation">)</span>;
<span class="punctuation">}</span></code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code><span class="comment">// next: ['[A]:2', '[B]:3']</span></code></pre>`,
        selected: false,
    },
];
