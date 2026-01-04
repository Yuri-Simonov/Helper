import { IInfo } from 'src/app/shared/interfaces';

export const CONTENT_CHILD_AND_CONTENT_CHILDREN: IInfo = {
    title: '<span class="variable">contentChild</span> и <span class="variable">contentChildren</span>',
    body: `<p>
                В старом API, чтобы получить доступ к проекции шаблона, мы использовали декораторы
                <code>ContentChild</code> или <code>ContentChildren</code>. Главной проблемой этого подхода было то, что
                результат запроса был доступен только внутри хука <code>ngAfterContentInit</code>. Попытка обратиться к
                нему в <code>ngOnInit</code> или конструкторе приводила к ошибке.
            </p>
            <p>
                Новые сигналы <code>contentChild</code> и <code>contentChildren</code> решают эту проблему.
                <span class="attention"
                    >Этот сигнал изначально пуст (<code>undefined</code>), и Angular автоматически обновляет его
                    значение, как только содержимое проекции становится доступно</span
                >.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">// В компоненте-обертке
@Component({
	selector: 'app-panel',
	template: &#96;
		&lt;div class="header">
			&lt;ng-content select="app-panel-header">&lt;/ng-content>
		&lt;/div>
		&lt;div class="body">...&lt;/div>
	&#96;
})
export class PanelComponent {
	// Ищем компонент, который был спроецирован в &lt;ng-content>.
	// Тип - Signal&lt;PanelHeaderComponent | undefined>
	header = contentChild(PanelHeaderComponent);
}</code></pre>`,
    selected: false,
    lastUpdate: '14.12.2025',
};
