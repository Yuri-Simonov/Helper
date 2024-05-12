import { IInfo } from '@types';

export const CONCAT_MAP: IInfo = {
    title: '<span class="variable">concatMap</span>',
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
</code></pre>
<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>
<p>В примере выше поток самостоятельно завершится благодаря оператору <code>of</code>, т.к. он сам завершает поток, когда кончаются в нем элементы.</p>`,
    selected: false,
    lastUpdate: '14.04.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#concatMap',
        },
        {
            title: 'Анимация работы оператора',
            path: 'https://rxjstutorial.com/docs/transformation-operators/concatMap/',
        },
    ],
};
