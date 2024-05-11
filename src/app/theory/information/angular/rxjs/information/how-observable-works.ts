import { IInfo } from '@types';

export const HOW_OBSERVABLE_WORKS: IInfo = {
    title: 'Принцип работы <span class="variable">Observable</span> в <span class="variable">RxJs</span>',
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
<pre><code class="language-typescript">const newObs$ = new Observable((observer) => {
	console.log('какой-то наш код внутри Observable');
});
	
newObs$.subscribe(); // здесь мы подписались на Observable и получили сообщение в консоли</code></pre>
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
<pre><code class="language-typescript">const newObs$ = new Observable((observer) => {
	observer.next('тут передаем данные'); переданные данные попадут в data
	observer.error('тут передаем ошибки'); переданные данные попадут в error
	observer.complete(); // данный метод не принимает параметры
})
	
newObs$.subscribe(
	(data) => {
		console.log('тут обрабатываем данные')
	},
	(error) => {
		console.log('тут обрабатываем ошибки')
	},
	() => {
		console.log('тут обрабатываем завершение работы Observable')
	},
);</code></pre>
        <p>Альтернативная запись для подписки через объект с методами:</p>
<pre><code class="language-typescript">newObs$.subscribe({
	next: (data) => {
		console.log('тут обрабатываем данные')
	},
	error: (error) => {
		console.log('тут обрабатываем ошибки')
	},
	complete: () => {
		console.log('тут обрабатываем завершение работы Observable')
	},
});</code></pre>
        <p>
            Если <code>Observable</code> не имеет метода <code>complete</code> и
            нет его обработки в методе <code>subscribe</code>, то не забывайте
            самостоятельно отписываться от таких подписок.
        </p>
		<pre><code class="language-typescript">newObs$.unsubscribe(); // не забываем отписаться</code></pre>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
