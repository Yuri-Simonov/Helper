import { IInfo } from '@types';

export const DIFFERENCE_BETWEEN_OBSERVABLE_AND_PROMISE: IInfo = {
    title: 'Разница между <span class="variable">Observable</span> и <span class="variable">Promise</span>',
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
<pre><code class="language-typescript">promise = new Promise(resolve => {
	console.log('Promise создан');
	resolve('результат Promise')
});

source = new Observable(subscriber => {
	console.log('Observable создан');
	subscriber.next('результат Observable');
});</code></pre>
            <p>Результат в консоли:</p>
			<pre><code class="language-typescript">// Promise создан</code></pre>
            <i class="subtitle">1 подписчик у Observable</i>
<pre><code class="language-typescript">promise = new Promise(resolve => {
	console.log('Promise создан');
	resolve('результат Promise')
});

source = new Observable(subscriber => {
	console.log('Observable создан');
	subscriber.next('результат Observable');
});

promise.then(data => console.log('полученные данные:', data));
source.subscribe(val => console.log('полученные данные:', val));</code></pre>
            <p>Результат в консоли:</p>
<pre><code class="language-typescript">// Promise создан
// Observable создан
// результат Observable
// результат Promise</code></pre>
            <i class="subtitle">2 подписчика у Observable</i>
<pre><code class="language-typescript">promise = new Promise(resolve => {
	console.log('Promise создан');
	resolve('результат Promise')
});

source = new Observable(subscriber => {
	console.log('Observable создан');
	subscriber.next('результат Observable');
});

promise.then(data => console.log('полученные данные:', data));
source.subscribe(val => console.log('полученные данные:', val));

promise.then(data => console.log('полученные данные:', data));
source.subscribe(val => console.log('полученные данные:', val));</code></pre>
            <p>Результат в консоли:</p>
<pre><code class="language-typescript">// Promise создан
// Observable создан
// результат Observable
// Observable создан
// результат Observable
// результат Promise
// результат Promise</code></pre>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
