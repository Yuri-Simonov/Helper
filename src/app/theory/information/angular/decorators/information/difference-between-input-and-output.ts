import { IInfo } from '@types';

export const DIFFERENCE_BETWEEN_INPUT_AND_OUTPUT: IInfo = {
    title: 'Разница между декораторами <span class="variable">@Input()</span> и <span class="variable">@Output()</span>',
    body: `<p>
            Дочерние компоненты Angular могут как принимать данные от родителя, так и
            отдавать их. За это как раз и отвечают декораторы
            <code>@Input()</code> и <code>@Output()</code>, где:
        </p>
        <ul>
            <li>
                <code>@Input() </code> -
                <span class="attention"> принимает входящие данные </span>
                (пропсы) от родительского компонента;
				<pre><code class="language-typescript">export class ChildComponent {
  	&#64;Input() name: string;
}</code></pre>
            </li>
            <li>
                <code> @Output() </code> -
                <span class="attention">
                    отправляет родителю данные при срабатывании какого-то пользовательского события
                </span> (с помощью экземпляра класса <code>EventEmitter</code> и его метода <code>emit</code>).
				<pre><code class="language-typescript">export class ChildComponent {
  	&#64;Output() nameChange = new EventEmitter();

	changeName() {
		this.nameChange.emit();
	}
}</code></pre>
            </li>
        </ul>`,
    selected: false,
    lastUpdate: '27.02.2024',
};
