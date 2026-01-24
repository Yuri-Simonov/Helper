import { IInfo } from 'src/app/shared/interfaces';

export const SKIP: IInfo = {
    title: '<span class="variable">skip</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>skip</code> пропускает пропускает первые <code>n</code> значений из потока и
                    начинает эмитить только начиная с <code>(n + 1)</code>-го</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/skip.png" alt="оператор skip" />
            <p>Пример:</p>
            <pre><code class="language-typescript">of(10, 20, 30, 40).pipe(
  	skip(2)
).subscribe(console.log);</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">30
40</code></pre>`,
    selected: false,
    lastUpdate: '24.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#skip',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/skip',
        },
    ],
};
