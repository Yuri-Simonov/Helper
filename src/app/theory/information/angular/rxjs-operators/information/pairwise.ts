import { IInfo } from 'src/app/shared/interfaces';

export const PAIRWISE: IInfo = {
    title: '<span class="variable">pairwise</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>pairwise</code> объединяет пары последовательных значений и эмитит их в конечный
                    поток в виде массива из двух значений</span
                >. Часто используют в связке с оператором <code>startWith</code> для добавления начального значения в
                массив, т.к. оператор <code>pairwise</code>
                <span class="attention">начинает эмитить только со второго значения</span>.
            </p>
            <img src="assets/img/angular/rxjs/pairwise.png" alt="оператор pairwise" />
            <p>Пример:</p>
            <pre><code class="language-typescript">of(10, 15, 13, 20).pipe(
	startWith(0), // подложили "предыдущее" значение
	pairwise(), // теперь пары будут: [0,10], [10,15], [15,13], [13,20]
	map(([prev, curr]) => ({
		prev,
		curr,
		delta: curr - prev
	}))
).subscribe(console.log);</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">{ prev: 0, curr: 10, delta: 10 }
{ prev: 10, curr: 15, delta: 5 }
{ prev: 15, curr: 13, delta: -2 }
{ prev: 13, curr: 20, delta: 7 }</code></pre>`,
    selected: false,
    lastUpdate: '05.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#pairwise',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/pairwise',
        },
    ],
};
