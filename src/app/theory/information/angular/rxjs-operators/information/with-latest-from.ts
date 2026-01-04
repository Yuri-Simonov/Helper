import { IInfo } from 'src/app/shared/interfaces';

export const WITH_LATEST_FROM: IInfo = {
    title: '<span class="variable">withLatestFrom</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>withLatestFrom</code> берёт последние значения из вторичных
                    <code>observable</code>-потоков в момент, когда основной (<code>source</code>) поток эмитит новое
                    значение, и объединяет их в один единый поток</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/withLatestFrom.png" alt="оператор withLatestFrom" />
            <p>
                Из диаграммы выше видно, что триггером выступает только основной поток (<code>source</code>). Вторичные
                потоки не приводят к появлению новых значений в итоговом потоке.
            </p>
            <p>
                Если внимательно посмотреть на диаграмму, то можно заметить, что нет значения "а1" в итоговом потоке.
                Тут подвох в том, что
                <span class="attention"
                    >оператор <code>withLatestFrom</code> начинает работать только после того, как все вторичные
                    <code>observable</code> дали хотя бы одно значение</span
                >. Если это условие не выполнено, то значения из основного потока не будут эмититься в конечный
                <code>observable</code>.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">import { fromEvent, interval, withLatestFrom } from 'rxjs';

const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const result = clicks.pipe(withLatestFrom(timer));
result.subscribe(x => console.log(x));</code></pre>`,
    selected: false,
    lastUpdate: '04.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#withLatestFrom',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/withLatestFrom',
        },
    ],
};
