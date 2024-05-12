import { IInfo } from '@types';

export const MERGE_MAP: IInfo = {
    title: '<span class="variable">mergeMap</span> / <span class="variable">flatMap</span>',
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
            </p>
			<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>
			<p>В примере выше поток самостоятельно завершится благодаря оператору <code>of</code>, т.к. он сам завершает поток, когда кончаются в нем элементы.</p>`,
    selected: false,
    lastUpdate: '14.04.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#mergeMap',
        },
        {
            title: 'Анимация работы оператора',
            path: 'https://rxjstutorial.com/docs/transformation-operators/mergeMap/',
        },
    ],
};
