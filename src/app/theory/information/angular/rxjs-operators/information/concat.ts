import { IInfo } from 'src/app/shared/interfaces';

export const CONCAT: IInfo = {
    id: 'concat',
    title: '<span class="variable">concat</span>',
    body: `<p>
                Оператор <code>concat</code>
                <span class="attention"
                    >используется для последовательного объединения двух или более <code>Observable</code> в один</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/concat.png" alt="оператор concat" />
            <p>
                Как видно на картинке, события второго потока добавляются после событий первого потока. Причем неважно,
                что второй поток завершается раньше, оператор <code>concat</code>
                <span class="attention">
                    будет ждать когда завершится первый поток и только после этого перейдет к следующему</span
                >, и т.д. И после того, как оператор <code>concat</code> получает все потоки,
                <span class="attention">он их объединяет в порядке передачи внутрь оператора и завершается</span>.
            </p>
            <p>
                Оператор <code>concat</code> следует использовать, когда нужно сначала обработать события от одного
                источника, а затем от другого, и порядок событий важен. Это может быть полезно, например, при выполнении
                последовательных запросов к серверу или при выполнении асинхронных операций в определенном порядке.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">export class SomeComponent {
    first = new Observable((subscriber) => {
        setTimeout(() => {
            subscriber.next('Событие из первого потока');
            subscriber.complete();
        }, 500);
    });

    second = new Observable((subscriber) => {
        setTimeout(() => {
            subscriber.next('Событие из второго потока');
            subscriber.complete();
        }, 200);
    });

    result = concat(this.first, this.second).subscribe(console.log);
}</code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code class="language-typescript">Событие из первого потока
Событие из второго потока</code></pre>
            <p>
                Как видите, время, когда происходят события не учитывается, т.к. в консоли событие из первого потока
                появляется раньше, несмотря на то, что во втором потоке задержка в функции <code>setTimeout</code> имеет
                меньшую величину, чем в первом.
            </p>`,
    selected: false,
    lastUpdate: '16.04.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#concat',
        },
        {
            title: 'Анимация работы оператора',
            path: 'https://rxjstutorial.com/docs/join-creation-operators/concat/',
        },
    ],
};
