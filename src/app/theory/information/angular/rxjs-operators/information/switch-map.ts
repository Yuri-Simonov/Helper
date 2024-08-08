import { IInfo } from '@types';

export const SWITCH_MAP: IInfo = {
    title: '<span class="variable">switchMap</span>',
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
            </p>
			<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>
			<p>В примере выше поток самостоятельно завершится благодаря оператору <code>of</code>, т.к. он сам завершает поток, когда кончаются в нем элементы.</p>`,
    selected: false,
    lastUpdate: '13.04.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#switchMap',
        },
    ],
};