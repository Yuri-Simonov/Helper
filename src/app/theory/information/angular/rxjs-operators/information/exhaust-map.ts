import { IInfo } from '@types';

export const EXHAUST_MAP: IInfo = {
    title: '<span class="variable">exhaustMap</span>',
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
            </p>
			<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>
			<p>В примере выше поток самостоятельно завершится благодаря оператору <code>of</code>, т.к. он сам завершает поток, когда кончаются в нем элементы.</p>`,
    selected: false,
    lastUpdate: '14.04.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Анимация работы оператора',
            path: 'https://rxjstutorial.com/docs/transformation-operators/exhaustMap/',
        },
    ],
};
