import { IInfo } from '@types';

export const FROM: IInfo = {
    title: '<span class="variable">from</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>from</code> создает <code>Observables</code> из любого типа данных, который может
                    быть в конечном итоге проитерирован как массив</span
                >.
            </p>
            <p>
                В целом он похож на оператор <code>of</code>, только работает с итерируемыми типами данных. Каждый
                итерируемый элемент друг за другом отправляется в созданный данным оператором поток.
            </p>
            <img src="assets/img/angular/rxjs/from.png" alt="оператор from" />
            <p>Пример с массивом:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        const numbers = [1, 2, 3];
        const observableNumbers = from(numbers);
        observableNumbers.subscribe(console.log);
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">1
2
3</code></pre>
            <p>Пример со строкой:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        const string = 'Привет';
        const observableString = from(string);
        observableString.subscribe(console.log);
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">П
р
и
в
е
т</code></pre>
            <p>Пример создания <code>Observable</code> из метода:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        const observableFromFunction = from(this.generateNumbers());
        observableFromFunction.subscribe(console.log);
    }

    generateNumbers() {
        return [1, 2, 3];
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">1
2
3</code></pre>
            <p>Пример с промисом:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        const observablePromise = from(new Promise((resolve) => resolve('Привет')));
        observablePromise.subscribe((val) => console.log(val));
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">Привет</code></pre>
            <p>Пример с коллекцией:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        const map = new Map();
        map.set(1, 'Привет');
        map.set(2, 'Пока');

        const mapSource = from(map);
        mapSource.subscribe(console.log);
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">[1, 'Привет']
[2, 'Пока']</code></pre>
            <p><span class="attention">Данный оператор завершает поток, когда заканчиваются элементы</span>:</p>
            <pre><code class='language-typescript'>export class ForExamplesComponent {
    ngOnInit() {
        const numbers = [1, 2, 3];
        const observableNumbers = from(numbers);
        observableNumbers.subscribe({
            next: (value) => console.log('Текущее значение: ', value),
            error: (error) => console.log('Ошибка: ', error),
            complete: () => console.log('Поток завершен'),
        });
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">Текущее значение: 1
Текущее значение: 2
Текущее значение: 3
Поток завершен!</code></pre>`,
    selected: false,
    lastUpdate: '01.05.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/A-3UoqDqkyU?t=154',
        },
    ],
};
