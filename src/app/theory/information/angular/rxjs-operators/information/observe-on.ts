import { IInfo } from 'src/app/shared/interfaces';

export const OBSERVE_ON: IInfo = {
    title: '<span class="variable">observeOn</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>observeOn</code> заставляет все значения из потока выполняться ниже по пайпу через
                    указанный <code>scheduler</code></span
                >. Данный оператор не меняет исходный поток. Он
                <span class="attention">меняет контекст доставки значений</span>.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">of(1, 2, 3).pipe(
	tap(() => console.log('До')),
	observeOn(asyncScheduler),
	tap(() => console.log('После'))
).subscribe();</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">До
До
До
После
После
После</code></pre>
            <p>
                Зачем это вообще нужно? <code>observeOn</code> полезен, когда требуется отложить обработку значений,
                которая может быть тяжёлой и блокировать UI, если выполняется синхронно.
            </p>
            <p>Отложение доставки значений можно сделать двумя способами, указав один из параметров:</p>
            <ul>
                <li><code>asapScheduler</code> - планирует доставку значений через очередь <span class="attention">микрозадач</span>;</li>
                <li><code>asyncScheduler</code> - планирует доставку значений через очередь <span class="attention">макрозадач</span>.</li>
            </ul>
            <p>
                На практике в основном используется <code>asyncScheduler</code>, т.к. <code>asapScheduler</code> не дает
                гарантии, что браузер успеет отрисовать все необходимое между поступающими значениями из исходного
                потока.
            </p>`,
    selected: false,
    lastUpdate: '05.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/observeOn',
        },
    ],
};
