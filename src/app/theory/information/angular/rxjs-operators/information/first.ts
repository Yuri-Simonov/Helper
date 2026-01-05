import { IInfo } from 'src/app/shared/interfaces';

export const FIRST: IInfo = {
    title: '<span class="variable">first</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>first</code> берёт первое значение из потока, которое либо просто проходит либо
                    удовлетворяет заданному внутри данного оператора условию</span
                >. И после этого <span class="attention">завершает поток</span>.
            </p>
            <img src="assets/img/angular/rxjs/first.png" alt="оператор first" />
            <p>Пример без условия внутри:</p>
            <pre><code class="language-typescript">of(5, 10, 20).pipe(
  	first()
).subscribe(console.log);</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">5</code></pre>
            <p>Пример с условием внутри:</p>
            <pre><code class="language-typescript">of(5, 10, 20).pipe(
  	first(x => x > 7)
).subscribe(console.log);</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">10</code></pre>`,
    selected: false,
    lastUpdate: '05.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#first',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/first',
        },
    ],
};
