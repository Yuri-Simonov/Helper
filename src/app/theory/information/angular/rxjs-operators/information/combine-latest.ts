import { IInfo } from '@types';

export const COMBINE_LATEST: IInfo = {
    id: 'combineLatest',
    title: '<span class="variable">combineLatest</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>combineLatest</code> используется для создания нового <code>Observable</code>,
                    который будет содержать последние элементы из нескольких других <code>Observable</code>s, которые
                    указаны в качестве его аргументов</span
                >. Этот оператор возвращает <code>Observable</code>, который начинается только тогда, когда все
                указанные в его аргументах потоки предоставили хотя бы по одному значению.
            </p>
            <img src="assets/img/angular/rxjs/combineLatest.png" alt="оператор combineLatest" />
            <p>
                На картинке выше в первом потоке появляется событие "<code>a</code>", затем во втором потоке событие
                "<code>1</code>", в результате образуется пара "<code>a1</code>". Затем в первом потоке вновь происходит
                событие и старое событие "<code>a</code>" перезатирается новым событием "<code>b</code>". В результате
                мы получаем пару "<code>b1</code>" и т.д.
            </p>
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
            b: of(5).pipe(delay(5000), startWith(0)),
            c: of(10).pipe(delay(10000), startWith(0)),
        };
        const combined = combineLatest(observables);
        combined.subscribe(console.log);
    }
}
</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">{ a: 0, b: 0, c: 0 } // сразу
{ a: 1, b: 0, c: 0 } // через 1 секунду
{ a: 1, b: 5, c: 0 } // через 5 секунд
{ a: 1, b: 5, c: 10 } // через 10 секунд</code></pre>
            <p>
                <span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не
                забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой
                другой необходимой логики.
            </p>`,
    selected: false,
    lastUpdate: '01.05.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#combineLatest',
        },
        {
            title: 'Анимация работы оператора',
            path: 'https://rxjstutorial.com/docs/join-creation-operators/combineLatest/',
        },
    ],
};
