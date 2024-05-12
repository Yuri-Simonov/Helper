import { IInfo } from '@types';

export const GETTER_AND_SETTER: IInfo = {
    title: 'Использование <span class="variable">Getter</span> и <span class="variable">Setter</span> внутри компонента',
    body: `<p>
            Геттерами (Getter) и сеттерами (Setter) называются методы Angular-компонента, которые
            <span class="attention"
                >используются для получения и модификации значений его
                свойств</span
            >.
        </p>
        <p>
            <code>Getter</code> вызывается в момент обращения к свойству (в
            шаблоне или в других методах классах), <code>Setter</code> - в
            момент присвоения ему значения (обычно это свойства с декоратором
            <code>@Input()</code>).
        </p>
        <p>
            Для создания геттера и сеттера используются соответствующие ключевые
            слова - <code>get</code> и <code>set</code>:
        </p>
<pre><code class="language-typescript">// класс компонента
export class SomeComponent {
	_name: string = null; // приватная переменная

	@Input() set name(value: string) {
		this._name = value + '*';
	}

	get name(): string {
		return this._name || 'Аноним';
	}
}</code></pre>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;p>{{name}}&lt;/p></code></pre>

        <p>
            В классах JavaScript мы также можем создавать приватные переменные,
            к которым можно получить доступ с помощью геттеров и сеттеров (их
            еще называют методами доступа к переменной). В примере выше это
            переменная <code>_name</code>.
        </p>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
