import { IInfo } from '@types';

export const OF: IInfo = {
    title: '<span class="variable">of</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>of</code> создает <code>Observables</code> из любого типа данных</span
                >, будь то строка, массив, объект или промис.
            </p>
            <img src="assets/img/angular/rxjs/of.png" alt="оператор of" />
            <p>Пример:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    someObservable: Observable&lt;any> = of(1, 'текст', ['123', 0]);

    ngOnInit() {
        this.someObservable.subscribe(console.log);
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class='language-typescript'>1
текст
['123', 0]</code></pre>
            <p>
                Из примера выше видно, что оператору <code>of</code> все равно с каким типом данных работать. Он каждый
                элемент, находящийся внутри его круглых скобок, отправляет в созданный им поток.
            </p>
            <p><span class="attention">Данный оператор завершает поток, когда заканчиваются элементы</span>:</p>
            <pre><code class='language-typescript'>export class ForExamplesComponent {
		someObservable: Observable&lt;any> = of(1, 'текст', ['123', 0]);
	
		ngOnInit() {
			this.someObservable.subscribe({
				next: (value) => console.log('Текущее значение: ', value),
				error: (error) => console.log('Ошибка: ', error),
				complete: () => console.log('Поток завершен'),
			});
		}
	}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">Текущее значение: 1
Текущее значение: текст
Текущее значение: ['123', 0]
Поток завершен!</code></pre>`,
    selected: false,
    lastUpdate: '29.04.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Видеообъяснение',
            path: 'https://youtu.be/A-3UoqDqkyU?t=76',
        },
        {
            title: 'Анимация работы оператора',
            path: 'https://rxjstutorial.com/docs/creation-operators/of/',
        },
    ],
};
