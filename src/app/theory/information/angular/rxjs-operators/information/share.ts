import { IInfo } from 'src/app/shared/interfaces';

export const SHARE: IInfo = {
    title: '<span class="variable">share</span>',
    body: `<p>
                <span class="attention">Оператор <code>share</code> создаёт общий <code>hot observable</code></span
                >, который:
            </p>
            <ul>
                <li>делит одну подписку между всеми подписчиками;</li>
                <li>
                    <span class="attention">не кеширует прошлые значения</span> (как это делает оператор
                    <code>shareReplay</code>)
                </li>
            </ul>
            <p>Пример:</p>
            <pre><code class="language-typescript">const shared$ = interval(1000).pipe(
	tap(v => console.log('source tick:', v)),
	share()
);

// Подписчик A сразу
const subA = shared$.subscribe(v => console.log('A:', v));

// Подписчик B подключается позже
setTimeout(() => {
  	const subB = shared$.subscribe(v => console.log('B:', v));
}, 2500);</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">source tick: 0
A: 0
source tick: 1
A: 1
source tick: 2
A: 2
B: 2
source tick: 3
A: 3
B: 3
...</code></pre>`,
    selected: false,
    lastUpdate: '24.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/share',
        },
    ],
};
