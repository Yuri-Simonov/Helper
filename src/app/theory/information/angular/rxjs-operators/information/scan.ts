import { IInfo } from 'src/app/shared/interfaces';

export const SCAN: IInfo = {
    title: '<span class="variable">scan</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>scan</code> применяет функцию-аккумулятор к каждому значению и эмитит промежуточный
                    результат</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/scan.png" alt="оператор scan" />
            <p>Пример:</p>
            <pre><code class="language-typescript">of(1, 2, 3).pipe(
  	scan((sum, x) => sum + x, 0)
).subscribe(console.log);</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">1
3
6</code></pre>
            <p>
                Работа оператора <code>scan</code> похожа на метод <code>reduce</code> из нативного JavaScript. Разница
                в том, что <code>reduce</code> вычисляет одно итоговое значение и возвращает его после завершения
                коллекции, а <code>scan</code> накапливает состояние и эмитит его на каждом шаге потока.
            </p>`,
    selected: false,
    lastUpdate: '06.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#scan',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/scan',
        },
    ],
};
