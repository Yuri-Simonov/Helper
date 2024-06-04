import { IInfo } from '@types';

export const MERGE: IInfo = {
    id: 'merge',
    title: '<span class="variable">merge</span>',
    body: `<p>
                Оператор <code>merge</code>
                <span class="attention"
                    >используется для объединения двух или более <code>Observable</code> в один поток. Он объединяет
                    элементы всех источников в том порядке, в котором они были созданы</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/merge.png" alt="оператор concat" />
            <p>
                Оператор <code>merge</code> следует использовать, когда нужно обрабатывать события от нескольких
                источников данных одновременно, без ожидания завершения одного источника перед переходом к следующему.
                Это может быть полезно, например, при обработке нескольких запросов к серверу или при работе с
                несколькими компонентами, которые могут генерировать события независимо друг от друга.
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

    result = merge(this.first, this.second).subscribe(console.log);
}</code></pre>
            <p>Результат выполнения кода в консоли:</p>
            <pre><code class="language-typescript">Событие из второго потока
Событие из первого потока</code></pre>
            <p>
                Как видите, теперь учитывается время события, когда оно происходит, т.к. в консоли событие из второго
                потока появляется раньше.
            </p>
			<p><span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой другой необходимой логики.</p>`,
    selected: false,
    lastUpdate: '16.04.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#merge',
        },
        {
            title: 'Анимация работы оператора',
            path: 'https://rxjstutorial.com/docs/join-creation-operators/merge/',
        },
    ],
};
