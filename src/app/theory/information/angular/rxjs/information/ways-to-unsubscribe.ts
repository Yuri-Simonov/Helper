import { IInfo } from '@types';

export const WAYS_TO_UNSUBSCRIBE: IInfo = {
    title: 'Способы отписаться от подписки <span class="variable">subscribe</span>',
    body: `<p>
            Небольшой вступительный пример того, как делаются отписки от
            какого-либо события в нативном JavaScript:
        </p>
        <pre><code class="language-typescript">// создаем функцию, которая будет делать подписку на setTimeout
function timer(cb, timeout) {
    const timeoutId = setTimeout(cb, timeout);
    return () => clearInterval(timeoutId);
}
// замыкаем в переменную disposeTimer функцию, которая отменит подписку
const disposeTimer = timer(someFunction, 1000);
// отменяем подписку
disposeTimer();</code></pre>
        <p>Перейдем теперь непосредственно к RxJs.</p>
        <i class="subtitle">Сохранить подписку в переменную</i>
        <p>
            Самый простой способ отписаться от подписки - сохранить подписку в
            переменную и вызвать у нее метод <code>unsubscribe</code>, когда
            подписка нам уже не нужна:
        </p>
        <pre><code class="language-typescript">const timerSub: Subscription = timer(1000).subscribe();
timerSub.unsubscribe();</code></pre>
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
        <pre><code class="language-typescript">onDestroy$: ReplaySubject = new ReplaySubject(1);

ngOnInit() {
	this.control.valueChanges
		.pipe(
			// switchMap отписывается от старого Observable и подписывается на новый, который приходит из сервиса
			// это, кстати, еще один способ отписаться от события
			switchMap((userId) => this.service.getUser(userId)),
			// берем данные пока компонент существует
			takeUntil(this.onDestroy$)
		)
		.subscribe();
}

ngOnDestroy() {
	// в момент уничтожения компонента избавляемся от подписок
	this.onDestroy$.next(null);
	this.onDestroy$.complete();
}</code></pre>
        <p>
            Вместо <code>ReplaySubject</code> можно использовать и просто
            <code>Subject</code>, но лучше все же использовать именно
            <code>ReplaySubject</code>, т.к. он сделает отправку последнего
            сообщения на случай, если подписка будет создана после уничтожения
            компонента.
        </p>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
