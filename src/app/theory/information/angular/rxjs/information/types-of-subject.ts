import { IInfo } from '@types';

export const TYPES_OF_SUBJECT: IInfo = {
    title: 'Разновидности типа <span class="variable">Subject</span> и их различия',
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
        <pre><code class="language-typescript">const subject$ = new Subject();

subject$.subscribe((value) => console.log('Первая подписка:', value));
subject$.next(3);
subject$.subscribe((value) => console.log('Вторая подписка:', value));
subject$.next(9);</code></pre>
<p>В консоли мы увидим следующее:</p>
<pre><code class="language-typescript">Первая подписка: 3
Первая подписка: 9
Вторая подписка: 9</code></pre>
        <i class="subtitle">BehaviorSubject</i>
        <p>
            <code>BehaviorSubject</code> —
            <span class="attention">
                передает новому подписчику последнее значение и в качестве
                аргумента принимает начальное значение </span
            >.
        </p>
        <pre><code class="language-typescript">const behaviorSubject$ = new BehaviorSubject(5);

behaviorSubject$.subscribe((value) => console.log('Первая подписка:', value));
behaviorSubject$.subscribe((value) => console.log('Вторая подписка:', value));
behaviorSubject$.next(9);</code></pre>
<p>В консоли мы увидим следующее:</p>
<pre><code class="language-typescript">Первая подписка: 5
Вторая подписка: 5
Первая подписка: 9
Вторая подписка: 9</code></pre>
        <i class="subtitle">ReplaySubject</i>
        <p>
            <code>ReplaySubject</code> —
            <span class="attention">
                передает новому подписчику все предыдущие значения, принимаемый
                параметр — количество предыдущих значений </span
            >.
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
            <code>complete</code>.
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
    lastUpdate: '09.02.2024',
};
