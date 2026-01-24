import { IInfo } from 'src/app/shared/interfaces';

export const SKIP_UNTIL: IInfo = {
    title: '<span class="variable">skipUntil</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>skipUntil</code> отбрасывает значения из основного <code>observable</code> до
                    первого эмита указанного <code>notifier</code>-observable</span
                >.
            </p>
            <p>Или если говорить простыми словами:</p>
            <q>молчи, пока не придёт сигнал</q>
            <img src="assets/img/angular/rxjs/skipUntil.png" alt="оператор skipUntil" />
            <p>Пример:</p>
            <pre><code class="language-typescript">const source$ = interval(1000); // 0,1,2,3,...
const open$ = timer(3500); // подаст сигнал через 3.5 секунды

source$.pipe(
  	skipUntil(open$)
).subscribe(console.log);</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">3
4
5
// и т.д.</code></pre>`,
    selected: false,
    lastUpdate: '24.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#skipUntil',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/skipUntil',
        },
    ],
};
