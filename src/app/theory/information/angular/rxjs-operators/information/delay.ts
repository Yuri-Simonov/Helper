import { IInfo } from 'src/app/shared/interfaces';

export const DELAY: IInfo = {
    title: '<span class="variable">delay</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>delay</code> задерживает каждое значение из потока на заданное количество
                    миллисекунд перед тем, как передать его дальше</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/delay.png" alt="оператор delay" />
            <p>Пример:</p>
            <pre><code class="language-typescript">of('A', 'B', 'C').pipe(
  	delay(1000)
).subscribe(console.log);</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">A // спустя 1 секунду
B // спустя 2 секунды
C // спустя 3 секунды</code></pre>`,
    selected: false,
    lastUpdate: '05.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#delay',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/delay',
        },
    ],
};
