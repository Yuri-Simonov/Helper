import { IInfo } from '@types';

export const MAP: IInfo = {
    title: '<span class="variable">map</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>map</code> используется для преобразования элементов <code>Observable</code></span
                >. Он принимает функцию, которая определяет, как каждый элемент потока будет преобразован перед тем, как
                он будет передан дальше по цепочке операторов или в итоговый <code>Observable</code>.
            </p>
            <img src="assets/img/angular/rxjs/map.png" alt="оператор map" />
            <p>Пример:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of(1, 2, 3)
            .pipe(map((x) => x * x))
            .subscribe((v) => console.log("Текущее значение: ", v));
    }
}</code></pre>
            <p>В итоге в консоли мы получим следующие данные:</p>
            <pre><code class="language-typescript">Текущее значение: 1
Текущее значение: 4
Текущее значение: 9</code></pre>
            <p>
                В примере выше оператор <code>map</code> умножает входящее значение само на себя и отдает результат
                далее в итоговый поток.
            </p>
            <p>
                Данный оператор <span class="attention">не завершает поток</span>, а просто изменяет заданным образом
                входящие значения.
            </p>
			<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>
			<p>В примере выше поток самостоятельно завершится благодаря оператору <code>of</code>, т.к. он сам завершает поток, когда кончаются в нем элементы.</p>`,
    selected: false,
    lastUpdate: '29.04.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#map',
        },
        {
            title: 'Анимация работы оператора',
            path: 'https://rxjstutorial.com/docs/transformation-operators/map/',
        },
    ],
};
