import { IInfo } from '@types';

export const RETRY_WHEN: IInfo = {
    id: 'retryWhen',
    title: '<span class="variable">retryWhen</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>retryWhen</code> позволяет повторно выполнять поток при возникновении ошибок</span
                >. Он принимает функцию, которая получает поток ошибок и возвращает поток операций для их обработки.
            </p>
            <img src="assets/img/angular/rxjs/retryWhen.png" alt="оператор retryWhen" />
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        // создаем поток
        const source = interval(1000);
        // выполняем в нем различные действия
        const result = source.pipe(
            map((value) => {
                if (value > 2) {
                    /**
                     * если значение больше 2, генерируем исключение,
                     * которое подхватит оператор retryWhen
                     */
                    throw value;
                }
                return value;
            }),
            retryWhen((errors) =>
                errors.pipe(
                    // выводим сообщение об ошибке в консоль
                    tap((value) => console.log('Значение ' + value + ' выше заданного условия!')),
                    // Создаем искусственную задержку в 2 секунды
                    delayWhen((value) => timer(value * 1000)),
                ),
            ),
        );

        result.subscribe((value) => console.log(value));
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">0
1
2
Значение 3 выше заданного условия!
0
1
2
Значение 3 выше заданного условия!
// и так далее...</code></pre>
            <p>
                Из примера выше видно, что внутри оператора <code>retryWhen</code> просто задается логика для обработки
                возможных ошибок.
                <span class="attention"
                    >Если ошибок во время работы потока не возникает, то его значения в этот оператор он попадать не
                    будут</span
                >.
            </p>`,
    selected: false,
    lastUpdate: '14.05.2024',
};
