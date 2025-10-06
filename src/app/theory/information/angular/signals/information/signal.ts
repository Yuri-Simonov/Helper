import { IInfo } from 'src/app/shared/interfaces';

export const SIGNAL: IInfo = {
    title: '<span class="variable">signal</span>',
    body: `<p>
                Изменяемые сигналы (writable signals) — это
                <span class="attention">сигналы, в которые можно записывать новые значения вручную</span>. Angular
                предоставляет тип <code>WritableSignal</code>, который указывает, что сигнал можно изменять.
            </p>
            <p>К этому типу сигналов относится <code>signal</code>:</p>
            <pre><code class="language-typescript">export class AppComponent {
	// создаем сигнал и записываем в него значение 0
    counter = signal(0);
}</code></pre>
            <p>Чтобы получить текущее значение сигнала в шаблоне, его просто вызывают как функцию:</p>

		// доработать пример. Вызывать можно и в классе компонента

            <pre><code class="language-html">&lt;p>Счетчик: {{ counter() }}&lt;/p></code></pre>
            <p>Чтобы изменить значение <code>signal</code>, нужно воспользоваться методом <code>set</code>:</p>
            <pre><code class="language-typescript">export class AppComponent {
    counter = signal(0);

    ngOnInit() {
		setTimeout(() => {
			// значение сигнала изменится с 0 на 5
			this.counter.set(5);
        }, 3000);
    }
}</code></pre>
            <p>Если нужно изменить значение на основе текущего, это делается с помощью метода <code>update</code>:</p>
            <pre><code class="language-typescript">export class AppComponent {
    counter = signal(0);

    ngOnInit() {
        setInterval(() => {
			// значение сигнала будет увеличиваться на 1 каждую секунду
            this.counter.update(value => value + 1);
        }, 1000);
    }
}</code></pre>`,
    selected: false,
    lastUpdate: '05.10.2025',
};
