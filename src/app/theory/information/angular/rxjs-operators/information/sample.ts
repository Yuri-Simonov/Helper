import { IInfo } from 'src/app/shared/interfaces';

export const SAMPLE: IInfo = {
    title: '<span class="variable">sample</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>sample</code> эмитит последнее значение исходного потока каждый раз, когда
                    <code>notifier</code> эмитит</span
                >. Но здесь так же стоит учитывать, что с момента предыдущего <code>sample</code>-триггера основной
                поток успел сделать эмит хотя бы одного нового значения
                <i>
                    (на картинке ниже это третий "х". После него нет эмита дальше, т.к. в основном потоке не появилось
                    новое значение) </i
                >.
            </p>
            <pre><code class="language-typescript">sample&lt;T>(notifier: ObservableInput&lt;any>): MonoTypeOperatorFunction&lt;T></code></pre>
            <img src="assets/img/angular/rxjs/sample.png" alt="оператор sample" />
            <p>Пример:</p>
            <pre><code class="language-typescript">const source$ = interval(300).pipe(
	map(i => i + 1), // 1,2,3...
	tap(v => console.log('source:', v))
);

const ticker$ = interval(1000).pipe(
  	tap(v => console.log('ticker:', v))
);

source$.pipe(
  	sample(ticker$)
).subscribe(v => console.log('sample:', v));</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">source: 1
source: 2
source: 3
ticker: 0
sample: 3
source: 4
source: 5
source: 6
ticker: 1
sample: 6
source: 7
source: 8
source: 9
ticker: 2
sample: 9
...</code></pre>`,
    selected: false,
    lastUpdate: '06.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#sample',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/sample',
        },
    ],
};
