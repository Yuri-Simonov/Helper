import { IInfo } from 'src/app/shared/interfaces';

export const START_WITH: IInfo = {
    title: '<span class="variable">startWith</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>startWith</code> сразу отправляет в поток указанное значение при подписке, а уже
                    потом — все реальные значения этого потока</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/startWith.png" alt="оператор startWith" />
            <p>Пример:</p>
            <pre><code class="language-typescript">interval(1000).pipe(
	startWith("Интервал запущен")
).subscribe(console.log);</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">Интервал запущен
0
1
2
// и так далее...</code></pre>`,
    selected: false,
    lastUpdate: '05.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#startWith',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/startWith',
        },
    ],
};
