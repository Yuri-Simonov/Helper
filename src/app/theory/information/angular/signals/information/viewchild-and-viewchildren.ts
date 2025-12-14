import { IInfo } from 'src/app/shared/interfaces';

export const VIEW_CHILD_AND_VIEW_CHILDREN: IInfo = {
    title: '<span class="variable">viewChild</span> and <span class="variable">viewChildren</span>',
    body: `<p>
                В старом API, чтобы получить доступ к элементу шаблона или дочернему компоненту, мы использовали
                декораторы <code>ViewChild</code> или <code>ViewChildren</code>. Главной проблемой этого подхода было
                то, что результат запроса был доступен только внутри хука <code>ngAfterViewInit</code>. Попытка
                обратиться к нему в <code>ngOnInit</code> или конструкторе приводила к ошибке.
            </p>
            <p>
                Новые сигналы <code>viewChild</code> и <code>viewChildren</code> решают эту проблему.
                <span class="attention"
                    >Этот сигнал изначально пуст (<code>undefined</code>), и Angular автоматически обновляет его
                    значение, как только запрашиваемый элемент появляется в DOM</span
                >.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">@Component({
	template: &#96;
		&lt;input #nameInput placeholder="Имя">
		&lt;app-item *ngFor="let i of items" />
	&#96;
})
export class MyFormComponent {
	// Ищем один элемент по шаблонной переменной.
	// Тип - Signal&lt;ElementRef | undefined>
	nameInput = viewChild&lt;ElementRef>('nameInput');

	// Ищем все дочерние компоненты ItemComponent.
	// Тип - Signal&lt;ReadonlyArray&lt;ItemComponent>>
	items = viewChildren(ItemComponent);

	constructor() {
		// Теперь мы можем реагировать на появление элемента с помощью effect!
		// Больше не нужен ngAfterViewInit.
		effect(() => {
			const inputEl = this.nameInput();
			if (inputEl) {
				// Элемент доступен, можно с ним работать.
				inputEl.nativeElement.focus();
			}
		});
	}
}</code></pre>
            <p>
                Как и <code>input</code>, <code>viewChild</code> имеет <code>required</code> версию, которая выдаст
                ошибку, если элемент не будет найден.
            </p>`,
    selected: false,
    lastUpdate: '14.12.2025',
};
