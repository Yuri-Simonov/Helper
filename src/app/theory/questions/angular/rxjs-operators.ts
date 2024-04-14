import { IQuestion } from '@types';

export const rxjsOperatorsQuestions: IQuestion[] = [
    {
        title: 'switchMap',
        body: `<p>
                <span class="attention"
                    >Оператор <code>switchMap</code> используется для переключения между потоками данных</span
                >
                (<code>Observable</code>).
                <span class="attention"
                    >Он отменяет предыдущий поток и начинает новый поток, когда возникает новое значение</span
                >. Это означает, что <code>switchMap</code> будет пропускать все старые значения и начинать новый поток
                <code>Observable</code> при каждом новом значении.
            </p>
			<img
                src="assets/img/angular/rxjs/switchMap.png"
                alt="оператор switchMap"
            />
            <p>
                Это
                <span class="attention">
                    позволяет управлять побочными эффектами и предотвращать накопление нежелательных значений</span
                >. Он идеально подходит для случаев, когда нужно выполнять асинхронные операции (например, HTTP-запросы)
                в ответ на события, но при этом нужно избежать выполнения нескольких одних и тех же операций
                одновременно, а выполнить в итоге только последнее из них.
            </p>
            <p>
                Данный оператор корректно смотреть на примере, где есть какая-то задержка в выполнении потока, т.е.,
                своего рода имитация ожидания ответа от сервера:
            </p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of('A', 'B', 'C')
            .pipe(
                switchMap((value) => {
                    return of(value).pipe(
                        delay(1000), // создаем искусственную задержку в 1 секунду
                        map((currentValue) => 'Текущее значение потока: ' + currentValue),
                    );
                }),
            )
            .subscribe(console.log);
    }
}</code></pre>
            <p>В консоли в итоге будет лишь одно значение:</p>
            <pre><code class="language-typescript">Текущее значение потока: C</code></pre>
            <p>
                Элементы "<code>A</code>", "<code>B</code>" и "<code>C</code>" поступают в поток друг за другом
                последовательно. Сначала поступает элемент "<code>A</code>" и из-за оператора
                <code>delay</code> задерживается на 1 секунду. В это время поступает в поток элемент "<code>B</code>",
                он видит, что уже есть поток с элементом "<code>A</code>", поэтому поток с элементом "<code>A</code>"
                закрывается и больше не учитывается, т.к. новое значение в потоке. И затем такой же сценарий происходит
                между элементами "<code>B</code>" и "<code>C</code>". Поэтому в конечном итоге мы и получаем в консоли
                элемент "<code>C</code>", т.к. новое значение после него не поступало больше, задержка в 1 секунду
                прошла и поток завершился.
            </p>
            <p>Теперь уберем задержку в 1 секунду:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of('A', 'B', 'C')
            .pipe(
                switchMap((value) => {
                    return of(value).pipe(
                        map((currentValue) => 'Текущее значение потока: ' + currentValue),
                    );
                }),
            )
            .subscribe(console.log);
    }
}</code></pre>
            <p>В итоге в консоли мы увидим следующий результат:</p>
            <pre><code class="language-typescript">Текущее значение потока: А
Текущее значение потока: В
Текущее значение потока: C
</code></pre>
            <p>
                Т.к. элементы "<code>A</code>", "<code>B</code>" и "<code>C</code>" поступают в поток друг за другом
                последовательно и их выполнение никто не задерживает, поэтому сначала элемент "<code>A</code>" полностью
                проходит через оба потока, а затем аналогично элементы "<code>B</code>" и "<code>C</code>". Поэтому в
                консоли и отобразилось 3 результата.
            </p>`,
        selected: false,
        lastUpdate: '13.04.2024',
    },
    {
        title: 'concatMap',
        body: `<p>
                <span class="attention">
                    Оператор <code>concatMap</code> используется преобразования элементов одного потока
                    <code>Observable</code> в другой таким образом, чтобы результаты были доставлены последовательно,
                    один за другим</span
                >. Это означает, что результаты второго <code>Observable</code> ("<code>B</code>") будут ожидать
                завершения первого ("<code>A</code>") перед тем, как начать обрабатывать следующий элемент.
            </p>
            <img src="assets/img/angular/rxjs/concatMap.png" alt="оператор concatMap" />
            <p>
                <span class="attention">Основная цель <code>concatMap</code> заключается в том, чтобы преобразовать поток данных, не теряя при
                этом их упорядоченность</span>. Это особенно полезно, когда идет работа с асинхронными операциями, такими как
                HTTP-запросы, где нужно дождаться завершения одной операции, прежде чем начинать другую.
            </p>
			<p>Пример использования <code>concatMap</code>:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of('A', 'B', 'C')
            .pipe(
                concatMap((value) => {
                    return of(value).pipe(
                        delay(1000), // создаем искусственную задержку в 1 секунду
                        map((currentValue) => 'Текущее значение потока: ' + currentValue),
                    );
                }),
            )
            .subscribe(console.log);
    }
}</code></pre>
            <p>В итоге в консоли мы увидим следующий результат:</p>
            <pre><code class="language-typescript">Текущее значение потока: А
Текущее значение потока: В // после выполнения потока А
Текущее значение потока: C // после выполнения потока В
</code></pre>`,
        selected: false,
        lastUpdate: '14.04.2024',
    },
    {
        title: 'mergeMap / flatMap',
        body: `<p>
                Оператор <code>mergeMap</code> (или <code>flatMap</code> в более старых версиях RxJS)
                <span class="attention">используется для разветвления потока данных в <code>Observables</code></span
                >. Он позволяет преобразовывать элементы одного <code>Observable</code> в несколько других
                <code>Observables</code> и объединять результаты этих преобразований в единый поток.
            </p>
            <img src="assets/img/angular/rxjs/mergeMap.png" alt="оператор mergeMap" />
            <p>
                Основная идея <code>mergeMap</code> заключается в том, чтобы взять каждый элемент исходного
                <code>Observable</code> и преобразовать его в новый <code>Observable</code>, который затем сливается
                обратно в основной поток. Это означает, что если исходный <code>Observable</code> генерирует много
                элементов, то <code>mergeMap</code>
                <span class="attention"> может обрабатывать их параллельно, что увеличивает производительность</span>.
            </p>
			<p>Пример использования <code>mergeMap</code>:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of('A', 'B', 'C')
            .pipe(
                mergeMap((value) => {
                    return of(value).pipe(
                        delay(1000), // создаем искусственную задержку в 1 секунду
                        map((currentValue) => 'Текущее значение потока: ' + currentValue),
                    );
                }),
            )
            .subscribe(console.log);
    }
}</code></pre>
            <p>В итоге в консоли мы увидим следующий результат:</p>
            <pre><code class="language-typescript">Текущее значение потока: А // спустя 1 секунду
Текущее значение потока: В // спустя 1 секунду
Текущее значение потока: C // спустя 1 секунду
</code></pre>
            <p>
                В примере выше элементы "<code>A</code>", "<code>B</code>" и "<code>C</code>"
                <span class="attention">
                    поступают в поток друг за другом и выполняются независимо (параллельно) друг от друга</span
                >. Поэтому спустя 1 секунду искусственной задержки мы и видим сразу 3 результата.
            </p>`,
        selected: false,
        lastUpdate: '14.04.2024',
    },
    {
        title: 'exhaustMap',
        body: `<p>
                Оператор <code>exhaustMap</code> используется для того, чтобы преобразовывать элементы одного
                <code>Observable</code> в другие <code>Observables</code>, но при этом
                <span class="attention">
                    он отличается от
                    <code>mergeMap</code> тем, что работает последовательно, а не параллельно</span
                >.
            </p>
            <p>
                <span class="attention">
                    Оператор <code>exhaustMap</code> будет ждать завершения предыдущего <code>Observable</code> перед
                    тем, как начать обрабатывать следующий</span
                >. Это означает, что
                <span class="attention">
                    если первый <code>Observable</code> завершается неудачей, второй <code>Observable</code> никогда не
                    будет запущен</span
                >. Если же первый <code>Observable</code> завершается успешно, то <code>exhaustMap</code> начинает
                обрабатывать второй <code>Observable</code>, игнорируя все последующие элементы из исходного
                <code>Observable</code>.
            </p>
            <img src="assets/img/angular/rxjs/exhaustMap.png" alt="оператор exhaustMap" />
            <p>
                Этот оператор полезен в случаях, когда нужно убедиться, что каждый <code>Observable</code> полностью
                завершился, прежде чем переходить к следующему. Например, если у вас есть серия операций, которые должны
                выполняться строго последовательно, и каждая операция зависит от результатов предыдущей.
            </p>
            <p>Пример использования <code>exhaustMap</code>:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of('A', 'B', 'C')
            .pipe(
                exhaustMap((value) => {
                    return of(value).pipe(
                        delay(1000), // создаем искусственную задержку в 1 секунду
                        map((currentValue) => 'Текущее значение потока: ' + currentValue),
                    );
                }),
            )
            .subscribe(console.log);
    }
}</code></pre>
            <p>В консоли в итоге будет лишь одно значение:</p>
            <pre><code class="language-typescript">Текущее значение потока: А</code></pre>
            <p>
                В примере выше первым в поток попадает элемент "<code>A</code>". Затем за ним следом поступает в поток
                элемент "<code>B</code>". Он видит, что еще есть незавершенный поток с элементом "<code>A</code>",
                поэтому поток с элементом "<code>B</code>" игнорируется. Аналогично и с элементом "<code>C</code>".
                Поэтому в конечном результате мы и видим только элемент "<code>A</code>".
            </p>`,
        selected: false,
        lastUpdate: '14.04.2024',
    },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
];
