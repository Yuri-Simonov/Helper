import { IInfo } from '@types';

export const CONVERTING_PRIMITIVE_TO_OBSERVABLE: IInfo = {
    title: 'Преобразование примитивного типа данных в тип <span class="variable">Observable</span>',
    body: `<p>
            Для преобразования данных из примитивов в тип <code>Observable</code>,
            в RxJs существуют специальные для этого операторы. Например,
            <code>of</code> и <code>from</code>.
        </p>
        <p>
            Оператор <code>of</code> подходит для случаев, когда необходимо из
            массива данных создать <code>Observable</code> и при подписке на
            источник события получать тот же массив целиком. При этом, оператор
            <code>of</code> создает поток с одним или несколькими элементами,
            который завершается сразу после их отправки.
        </p>
<pre><code class="language-typescript">export class SomeComponent {
    numbers$: Observable = of([1, 2, 3]); // (*)

    ngOnInit() {
        this.numbers$.subscribe((data: number[]) => {
            console.log(data); // [1, 2, 3]
        });
    }
}</code></pre>
        <p>Строка под "<code>*</code>" равносильна следующей записи:</p>
<pre><code class="language-typescript">numbers$: Observable = new Observable((observer) => {
	observer.next([1, 2, 3]);
});</code></pre>
        <p>
            Если необходимо, чтобы обработчик вместо всего массива сразу получал
            каждый его элемент в отдельности, тогда используется оператор
            <code>from</code>.
        </p>
<pre><code class="language-typescript">export class SomeComponent {
    numbers$: Observable = from([1, 2, 3]);

    ngOnInit() {
        this.numbers$.subscribe((data: number) => {
            console.log(data); // 1, 2, 3
        });
    }
}</code></pre>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
