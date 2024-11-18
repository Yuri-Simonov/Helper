import { IInfo } from 'src/app/shared/interfaces';

export const TYPES_OF_SUBJECT: IInfo = {
    title: 'Разновидности типа <span class="variable">Subject</span> и их различия',
    body: `<p>В библиотеке RxJS имеется несколько разновидностей класса <code>Subject</code>:</p>
        <ul>
            <li><span class="attention">Subject</span> (наследуется от <code>Observable</code>);</li>
            <li><span class="attention">BehaviorSubject</span> (наследуется от <code>Subject</code>);</li>
            <li><span class="attention">ReplaySubject</span> (наследуется от <code>Subject</code>);</li>
            <li><span class="attention">AsyncSubject</span> (наследуется от <code>Subject</code>).</li>
        </ul>
        <i class="subtitle">Subject</i>
        <p>
            Особенностью класса <code>Subject</code> (и его разновидностей из списка выше) в том, что
            <span class="attention">
				он может отправлять данные одновременно нескольким подписчикам (наблюдателям),
				которые могут регистрироваться уже в процессе работы
			</span>
            <code>Subject</code>, в то время как работа стандартного
            <code>Observable</code> осуществляется уникально для каждого его
            вызова.
        </p>
        <pre><code class="language-typescript">const subject$ = new Subject();

subject$.subscribe((value) => console.log('Первая подписка:', value));
subject$.next(1);
subject$.subscribe((value) => console.log('Вторая подписка:', value));
subject$.next(2);</code></pre>
<p>В консоли мы увидим следующее:</p>
<pre><code class="language-typescript">Первая подписка: 1
Первая подписка: 2
Вторая подписка: 2</code></pre>
        <i class="subtitle">BehaviorSubject</i>
        <p>
            <code>BehaviorSubject</code> —
            <span class="attention">
				создается с начальным значением, которое будет сразу доступно подписчику (наблюдателю) при подписке. Если подписка какого-либо подписчика на <code>BehaviorSubject</code> происходит после вызова метода <code>next</code>, то такой подписчик получает последнее значение, которое было отправлено в поток.</span
            >.
        </p>
        <pre><code class="language-typescript">const behaviorSubject$ = new BehaviorSubject(1);

        behaviorSubject$.subscribe((value) => console.log('Первая подписка:', value));
        behaviorSubject$.subscribe((value) => console.log('Вторая подписка:', value));
        behaviorSubject$.next(2);
        behaviorSubject$.subscribe((value) => console.log('Третья подписка:', value));
        behaviorSubject$.next(3);</code></pre>
<p>В консоли мы увидим следующее:</p>
<pre><code class="language-typescript">Первая подписка: 1
Вторая подписка: 1
Первая подписка: 2
Вторая подписка: 2
Третья подписка: 2
Первая подписка: 3
Вторая подписка: 3
Третья подписка: 3</code></pre>
        <i class="subtitle">ReplaySubject</i>
        <p>
            <code>ReplaySubject</code> —
            <span class="attention">
                сохраняет в буфер определенное количество последних отправленных в поток значений, которое задается первым параметром при создании <code>ReplaySubject</code>, и передает их новым подписчикам</span
            >. Вторым параметром можно задать время, спустя которое запоминаемые значения будут удаляться из буфера.
        </p>
        <pre><code class="language-typescript">const replaySubject$ = new ReplaySubject(2);

replaySubject$.next(3);
replaySubject$.next(6);
replaySubject$.next(9);

replaySubject$.subscribe((value) => console.log('Результат: ', value));</code></pre>
<p>В консоли мы увидим следующее:</p>
<pre><code class="language-typescript">Результат: 6
Результат: 9</code></pre>
        <i class="subtitle">AsyncSubject</i>
        <p>
            <code>AsyncSubject</code> —
            <span class="attention">
                передает новому подписчику последнее значение, но только после
                того, как будет вызван метод
            </span>
            <code>complete</code>. Он полезен в ситуациях, когда нужно дождаться завершения какого-то процесса и получить его результат.
        </p>
       <pre><code class="language-typescript">const asyncSubject$ = new AsyncSubject();

asyncSubject$.subscribe((value) => console.log('Результат: ', value));

asyncSubject$.next(3);
asyncSubject$.next(6);
asyncSubject$.next(9);

asyncSubject$.complete();</code></pre>
<p>В консоли мы увидим следующее:</p>
<pre><code class="language-typescript">Результат: 9</code></pre>`,
    selected: false,
    lastUpdate: '21.07.2024',
};
