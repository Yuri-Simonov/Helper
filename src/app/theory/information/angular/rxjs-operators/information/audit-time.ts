import { IInfo } from 'src/app/shared/interfaces';

export const AUDIT_TIME: IInfo = {
    title: '<span class="variable">auditTime</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>auditTime</code> пропускает последнее значение за интервал времени, но начинает
                    отсчёт с момента первого события</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/auditTime.png" alt="оператор auditTime" />
            <p>Пример:</p>
            <pre><code class="language-typescript">interval(300).pipe(
	take(10),
	auditTime(1000)
).subscribe(console.log);</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">3
6
9</code></pre>
            <p>Потому что:</p>
            <ul>
                <li>значения 0–3 попали в первое окно → вышел 3</li>
                <li>4–6 → вышел 6</li>
                <li>7–9 → вышел 9</li>
            </ul>
            <p>
                Оператор <code>auditTime</code> хорошо подходит, когда нужно обновлять UI не чаще чем раз в
                <code>N</code> миллисекунд, но использовать актуальные данные.
            </p>`,
    selected: false,
    lastUpdate: '24.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/auditTime',
        },
    ],
};
