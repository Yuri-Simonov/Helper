import { IInfo } from '@types';

export const RETRY: IInfo = {
    title: '<span class="variable">retry</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>retry</code> используется для повторной отправки запросов в случае возникновения
                    ошибок</span
                >. Он позволяет перезапускать поток данных после того, как произошла ошибка. Количество повторных
                запросов задается первым параметром.
            </p>
            <img src="assets/img/angular/rxjs/retry.png" alt="оператор retry" />
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        const source = interval(1000);
        const result = source.pipe(
            mergeMap((try) => (try > 2 ? throwError(() => 'Ошибка') : of(try))),
            retry(2), // Повторяем попытку при возникновении ошибки 2 раза
        );

        result.subscribe({
            next: (try) => console.log(try),
            error: (error) =>
                console.log("После третьей ошибки поток завершился с ошибкой!"),
        });
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">// работа потока по умолчанию
0
1
2
// первая попытка перезапустить поток
0
1
2
// вторая попытка перезапустить поток
0
1
2
// Попытки закончились
После третьей ошибки поток завершился с ошибкой!</code></pre>
            <p>
                Тут также стоит иметь ввиду, что
                <span class="attention">оператор <code>retry</code> делает попытки одну за другой</span>. Т.е., если в
                нашем примере мы задаем ему два раза запустить поток в случае возникновения ошибки, то он сначала
                сделает первую попытку. Если она будет успешной, то поток пойдет дальше по указанной после данного
                оператора логике. Если она будет неудачной, то оператор <code>retry</code> уже воспользуется второй
                доступной ему попыткой. И так далее, пока не исчерпает все доступные ему попытки.
                <span class="attention"
                    >Если за указанное в нем количество попыток ошибка не ушла, тогда поток завершается с ошибкой</span
                >.
            </p>`,
    selected: false,
    lastUpdate: '14.05.2024',
};
