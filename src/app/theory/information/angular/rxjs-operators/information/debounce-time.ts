import { IInfo } from 'src/app/shared/interfaces';

export const DEBOUNCE_TIME: IInfo = {
    title: '<span class="variable">debounceTime</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>debounceTime </code> пропускает значение из основного потока только если после него
                    не было других значений в течение заданного количества миллисекунд</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/debounceTime.png" alt="оператор debounceTime" />
            <p>Пример:</p>
            <pre><code class="language-typescript">import { fromEvent, debounceTime } from 'rxjs';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(debounceTime(1000));
result.subscribe(x => console.log(x));</code></pre>`,
    selected: false,
    lastUpdate: '04.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#debounceTime',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/debounceTime',
        },
    ],
};
