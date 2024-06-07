import { IInfo } from '@types';

export const ZIP: IInfo = {
    id: 'zip',
    title: '<span class="variable">zip</span>',
    body: `<p>
                Оператор <code>zip</code>
                <span class="attention"
                    >объединяет 2 или более потоков, если в каждом из переданных потоков есть доступные события для
                    создания пары</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/zip.png" alt="оператор zip" />
            <p>
                На картинке выше есть 2 потока. В первом потоке происходит событие "1", но оно не попадет в объединенный
                поток, пока в другом потоке не произойдет событие "А", то есть, пока не создастся пара.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">export class SomeComponent {
    first = of('A', 'B', 'C');
    second = of(1, 2, 3, 4);

    result = zip(this.first, this.second).subscribe(console.log);
}</code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code class="language-typescript">['A', 1]
['B', 2]
['C', 3]</code></pre>
            <p>
                В примере выше во втором потоке для элемента "<code>4</code>" не нашлось в итоге пары из первого потока,
                поэтому его значение и не вывелось в консоли.
            </p>
			<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>
			<p>В примере выше поток самостоятельно завершится благодаря оператору <code>of</code>, т.к. он сам завершает поток, когда кончаются в нем элементы.</p>`,
    selected: false,
    lastUpdate: '16.04.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#zip',
        },
        {
            title: 'Анимация работы оператора',
            path: 'https://rxjstutorial.com/docs/join-creation-operators/zip/',
        },
    ],
};
