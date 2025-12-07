import { IInfo } from 'src/app/shared/interfaces';

export const OUTPUT: IInfo = {
    title: '<span class="variable">output</span>',
    body: `<p>
                Сигнал <code>output</code> пришел на смену декоратору <code>@Output</code> и классу
                <code>EventEmitter</code>, но суть осталась та же -
                <span class="attention">отправка данных родительскому компоненту</span>. Только теперь этот процесс стал
                реактивным.
            </p>
            <p>
                У данного сигнала, как и у класса <code>EventEmitter</code> также
                <span class="attention"
                    >доступны методы <code>emit</code> для отправки данных родителю и <code>subscribe</code> для
                    подписки на событие отправки этих данных</span
                >.
            </p>
            <p>
                Использование <code>output</code> интуитивно понятно и очень похоже на старый <code>EventEmitter</code>:
            </p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-user-actions',
	// ...
})
export class UserActionsComponent {
	// Объявляем output. Тип - OutputEmitterRef&lt;string>.
	userDeleted = output&lt;string>();

	// Объявляем output без данных. Тип - OutputEmitterRef&lt;void>.
	closed = output();

	onDeleteClick() {
		const userId = '123';
		// Отправляем событие с данными.
		this.userDeleted.emit(userId);
	}

	onCloseClick() {
		// Отправляем событие без данных.
		this.closed.emit();
	}
}</code></pre>
            <p>В родительском компоненте мы можем слушать эти события так же, как и раньше:</p>
            <pre><code class="language-html">&lt;app-user-actions 
	(userDeleted)="onUserDeleted($event)" 
	(closed)="onPanelClosed()">
&lt;/app-user-actions></code></pre>`,
    selected: false,
    lastUpdate: '07.12.2025',
};
