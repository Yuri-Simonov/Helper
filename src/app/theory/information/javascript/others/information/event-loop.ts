import { IInfo } from '@types';

export const EVENT_LOOP: IInfo = {
    title: '<span class="variable">Event loop</span>',
    body: `<p>
                <span class="attention"
                    >Язык JavaScript был спроектирован как однопоточный язык программирования. Это значит, что он может
                    выполнять только одну операцию одновременно</span
                >.
            </p>
            <p>
                В JavaScript есть такой механизм как <code>event loop</code> (цикл событий), который позволяет выполнять
                асинхронные операции. Но если вдаваться в детали, то JavaScript тоже выполняет их синхронно.
                Асинхронности в самом JavaScript как таковой нет.
            </p>
            <p>
                В JavaScript все синхронные операции выполняются как только интерпретатор доходит до них. Когда
                интерпретатор видит на своем пути асинхронный функционал, например функцию <code>setTimeout</code>, он
                отправляет её в <code>event loop</code>, после чего вновь продолжает выполнять синхронные операции.
            </p>
            <p>
                <span class="attention">Теперь самое неочевидное</span>: даже если время, указанное в
                <code>setTimeout</code> для задержки, уже прошло, а все синхронные операции еще не выполнились
                полностью, то в таком случае <code>event loop</code> будет задерживать выполнение функции
                <code>setTimeout</code> до тех пор, пока все синхронные операции не выполнятся. Только после того как
                все синхронные операции выполнились, <code>event loop</code> даст добро на выполнение функции
                <code>setTimeout</code>.
            </p>
            <p>На собеседованиях часто любят спрашивать что из кода в консоли появится раньше?</p>
            <pre><code class="language-javascript">setTimeout(() => {
	console.log(1);
}, 0);

console.log(2);</code></pre>
            <p>Как вы могли уже догадаться, в консоли мы увидим следующее:</p>
            <pre><code class="language-javascript">2 // сначала выполнится синхронная операция
1 // а затем асинхронная</code></pre>
            <p>
                Всё, что попадает в <code>event loop</code> является задачей для дальнейшего выполнения после того, как
                полностью выполнятся все синхронные операции.
            </p>
            <p>Все задачи делятся на 3 категории в порядке их приоритета выполнения:</p>
            <um>
                <li>
                    <span class="attention">микрозадачи</span> (микротаски): <code>MutationObserver</code> и методы
                    <code>Promise</code> (<code>then</code>, <code>catch</code> и <code>finally</code>);
                </li>
                <li>
                    <span class="attention">макрозадачи</span> (макротаски): функции <code>setTimeout</code>,
                    <code>setInterval</code>, события DOM-дерева и т.д.;
                </li>
                <li>
                    <span class="attention">задачи отрисовки</span>: задачи связанные с отрисовкой и обновлением
                    контента страницы.
                </li>
            </um>
            <p>Т.е., <code>event loop</code> работает по следующему сценарию:</p>
            <ol>
                <li>Сначала <code>event loop</code> проверяет выполнились ли все синхронные операции;</li>
                <li>Затем поочередно выполняются все микрозадачи;</li>
                <li>После выполнения всех микротасков берется одна макрозадача из списка и начинает выполняться;</li>
                <li>После выполнения идет проверка на то, нужно ли сделать перерисовку страницы;</li>
                <li>Если нужно перерисовать страницу, выполняется задача отрисовки страницы;</li>
                <li>Возвращаемся к первому пункту.</li>
            </ol>
            <i class="subtitle">Пример с двумя Promise</i>
            <p>
                Давайте на примере с двумя <code>Promise</code> посмотрим, в каком порядке будут попадать микрозадачи в
                <code>event loop</code>:
            </p>
            <pre><code class="language-javascript">// 1-ый Promise
Promise.resolve()
	.then(() => {
		console.log('1');
	})
	.then(() => {
		console.log(2);
	});

// 2-ой Promise
Promise.resolve()
	.then(() => {
		console.log(3);
	})
	.then(() => {
		console.log(4);
});</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-javascript">1
3
2
4</code></pre>
            <p>
                Дело в том, что интерпретатор JavaScript выполняет код шаг за шагом. Он увидел что у каждого
                <code>Promise</code> есть <code>then</code> и поместил их в очередь микрозадач. Когда имеющиеся
                микрозадачи отработали, интерпретатор увидел следующие <code>then</code> в цепочке у каждого
                <code>Promise</code> и опять поместил каждый из них в очередь микрозадач. Поэтому все <code>then</code>,
                которые были вторыми в цепочке, выполнились после того, как отработали стоящие перед ними
                <code>then</code>.
            </p>
            <i class="subtitle">Микрозадача, внутри которой другая микрозадача</i>
            <p>Давайте рассмотрим другой пример:</p>
            <pre><code class="language-javascript">setTimeout(() => {
	console.log(1);
}, 0);

Promise.resolve()
	.then(() => {
		console.log(2);

		setTimeout(() => {
			console.log(3);
		}, 0);
	})
	.finally(() => {
		console.log(4);
	});</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-javascript">2
4
1
3</code></pre>
            <p>
                Здесь сначала выполнится микрозадача <code>then</code>. Внутри метода <code>then</code> интерпретатор
                также увидит еще одну макрозадачу <code>setTimeout</code> и отправит ее к уже имеющейся макрозадаче,
                которая была отправлена в <code>event loop</code> перед <code>Promise</code>, а также увидит еще одну
                микрозадачу, связанную с методом <code>finally</code>. Поэтому сначала появляются сообщения
                <code>2</code> и <code>4</code>, а затем <code>1</code>, т.к. первый <code>setTimeout</code> раньше
                попал в <code>event loop</code>. И в самом конце появится <code>3</code> от
                <code>setTimeout</code> внутри метода <code>then</code>.
            </p>
            <i class="subtitle">Макрозадача, внутри которой микрозадача</i>
            <p>Давайте разберем еще один пример:</p>
            <pre><code class="language-javascript">setTimeout(() => {
	console.log(1);
}, 0);

setTimeout(() => {
	Promise.resolve().then(() => {
		console.log(2);

		setTimeout(() => {
			console.log(3);
		}, 0);
	});
}, 0);

setTimeout(() => {
	console.log(4);
}, 0);</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-javascript">1
2
4
3
			</code></pre>
            <p>
                В данном примере следует помнить о том, что перед тем, как выполнять каждую следующую макрозадачу,
                <code>event loop</code> проверяет по цепочке приоритетов нет ли в данный момент синхронного кода и
                микрозадач, которые нужно выполнить. Если нет, тогда он выполняет макрозадачу.
            </p>`,
    selected: false,
    lastUpdate: '18.07.2024',
};
