import { IInfo } from 'src/app/shared/interfaces';

export const COMPUTED: IInfo = {
    title: '<span class="variable">computed</span>',
    body: `<p>
                Данный вид сигнала
                <span class="attention"
                    >используется для создания реактивных вычисляемых значений, которые автоматически пересчитываются
                    при изменении зависимостей</span
                >. Иными словами, <code>computed</code>
                <span class="attention"
                    >позволяет создать сигнал, значение которого вычисляется на основе других сигналов</span
                >. Когда любая из зависимостей изменяется, то <code>computed</code> автоматически пересчитывается.
            </p>
            <p>Пример:</p>
            <pre><code class="language-html">&lt;p>Count: {{ count() }} &lt;/p>
&lt;p>Double: {{ doubleCount() }} &lt;/p>
&lt;button (click)="increment()">Increment &lt;/button></code></pre>
            <pre><code class="language-typescript">@Component({
	selector: 'app-counter',
	templateUrl: 'app.component.html'
})
export class CounterComponent {
	count = signal(0);

	// computed автоматически пересчитывается, когда count меняется
	doubleCount = computed(() => this.count() * 2);

	increment() {
		this.count.update(value => value + 1);
	}
}</code></pre>
            <p>У данного вида сигналов есть следующие особенности:</p>
            <ul>
                <li>
                    <span class="attention">Автоматическое обновление</span>. <code>computed</code> отслеживает сигналы,
                    вызванные внутри своей функции, и подписывается на них.
                </li>
                <li>
                    <span class="attention">Кеширование</span>. Значение вычисляется только при изменении зависимостей,
                    а не при каждом вызове.
                </li>
                <li>
                    <span class="attention">Только для чтения</span>. <code>computed</code> нельзя изменить напрямую -
                    это всегда производное значение.
                </li>
                <li>
                    <span class="attention">Поддерживает вложенные сигналы</span>. Если внутри
                    <code>computed</code> вызываются другие <code>computed</code> или сигналы - Angular корректно
                    построит граф зависимостей.
                </li>
            </ul>`,
    selected: false,
    lastUpdate: '04.11.2025',
};
