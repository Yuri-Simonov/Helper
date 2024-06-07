import { IInfo } from '@types';

export const FORK_JOIN: IInfo = {
    id: 'forkJoin',
    title: '<span class="variable">forkJoin</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>forkJoin</code> используется для выполнения нескольких наблюдаемых потоков данных
                    параллельно и возвращает результаты этих потоков в виде массива</span
                >. Он <span class="attention">ожидает завершения всех потоков перед тем, как вернуть результаты</span>.
                Если какой-то поток завершается с ошибкой, то <code>forkJoin</code> также завершится с ошибкой, и все
                последующие потоки будут отменены.
            </p>
            <img src="assets/img/angular/rxjs/forkJoin.png" alt="оператор forkJoin" />
            <p>
                Причем следует еще обратить внимание на то, что после того, как произошло событие "<code>a</code>" в
                первом потоке, оно не попадет в итоговый <code>Observable</code>, т.к. во втором потоке еще не было ни
                одного события.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        const observables = {
            a: of(1).pipe(delay(1000), startWith(0)),
            b: of(5).pipe(delay(3000), startWith(0)),
            c: of(10).pipe(delay(5000), startWith(0)),
        };
        const combined = combineLatest(observables);
        combined.subscribe(console.log);
    }
}
</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">{ a: 1, b: 5, c: 10 } // через 5 секунд</code></pre>
            <p><span class="attention">Данный оператор при срабатывании завершает поток самостоятельно</span>.</p>`,
    selected: false,
    lastUpdate: '01.05.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Анимация работы оператора',
            path: 'https://rxjstutorial.com/docs/join-creation-operators/forkJoin/',
        },
    ],
};
