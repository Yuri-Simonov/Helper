import { IInfo } from 'src/app/shared/interfaces';

export const THROTTLE_TIME: IInfo = {
    title: '<span class="variable">throttleTime</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>throttleTime</code> пропускает в итоговый поток первое значение, а затем игнорирует все последующие в течение заданного количества миллисекунд</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/throttleTime.png" alt="оператор throttleTime" />
            <p>Пример:</p>
            <pre><code class="language-typescript">const clicks = fromEvent(document, 'click');
const result = clicks.pipe(throttleTime(1000));

result.subscribe(x => console.log(x));</code></pre>`,
    selected: false,
    lastUpdate: '05.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#throttleTime',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/throttleTime',
        },
    ],
};
