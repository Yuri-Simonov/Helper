import { IInfo } from 'src/app/shared/interfaces';

export const FILTER: IInfo = {
    title: '<span class="variable">filter</span>',
    body: `<p>
                <span class="attention">
                    Оператор <code>filter</code> пропускает дальше в итоговый поток только те значения, для которых
                    функция-предикат вернула
                </span>
                <code>true</code>.
            </p>
            <img src="assets/img/angular/rxjs/filter.png" alt="оператор filter" />
            <p>Пример:</p>
            <pre><code class="language-typescript">of(1, 2, 3, 4, 5).pipe(
	filter(x => x > 3)
).subscribe(console.log);</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">4
5</code></pre>`,
    selected: false,
    lastUpdate: '04.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#filter',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/filter',
        },
    ],
};
