import { IInfo } from 'src/app/shared/interfaces';

export const MODEL: IInfo = {
    title: '<span class="variable">model</span>',
    body: `<p>
                Двусторонняя привязка всегда была одной из ключевых фич Angular. Синтаксис <code>[(ngModel)]</code> или
                <code>[(value)]</code>
                <span class="attention">
                    позволял легко синхронизировать состояние между родительским и дочерним компонентами </span
                >. Но под капотом это всегда была лишь синтаксическая обертка над парой из <code>@Input</code> и
                <code>@Output</code>.
            </p>
            <p>
                <code>model</code> берет эту концепцию и превращает ее в первоклассный, единый примитив.
                <code>model</code> - это <code>writable signal</code> (записываемый сигнал), который одновременно
                является и входом (<code>input</code>), и выходом (<code>output</code>).
            </p>
            <p>
                Объявление <code>model</code> похоже на <code>input</code>, но возвращает
                <code>ModelSignal&lt;T></code>, который можно не только читать, но и изменять:
            </p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-custom-input',
	// ...
})
export class CustomInputComponent {
	// Объявляем model. Тип - ModelSignal&lt;string>.
	// По умолчанию это создаст input value и output valueChange.
	value = model(''); 
}</code></pre>
            <p>Внутри <code>CustomInputComponent</code> мы можем как читать, так и писать в этот сигнал:</p>
            <pre><code class="language-javascript">// Читаем значение
const currentValue = this.value();

// Обновляем значение. Это АВТОМАТИЧЕСКИ вызовет output!
this.value.set('новое значение');</code></pre>
            <p>Родительский компонент может использовать знакомый синтаксис двусторонней привязки:</p>
            <pre><code class="language-html">&lt;app-custom-input [(value)]="parentProperty">&lt;/app-custom-input></code></pre>
            <p>Как и <code>input</code>, <code>model</code> также имеет <code>required</code> версию:</p>
            <pre><code class="language-javascript">value = model.required('');</code></pre>`,
    selected: false,
    lastUpdate: '07.12.2025',
};
