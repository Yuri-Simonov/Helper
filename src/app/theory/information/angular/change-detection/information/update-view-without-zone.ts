import { IInfo } from 'src/app/shared/interfaces';

export const UPDATE_VIEW_WITHOUT_ZONE: IInfo = {
    title: 'Обновление <span class="variable">view</span> при изменении данных за пределами зоны (<span class="variable">NgZone</span>)',
    body: `<p>
                Если данные изменяются за пределами зоны Angular, нужно явно обновить <code>View</code>, используя
                <code>NgZone.run()</code> или класс <code>ChangeDetectorRef</code>.
            </p>
            <i class="subtitle">NgZone.run()</i>
            <p>Пример:</p>
            <pre><code class="language-typescript">import { Component, NgZone } from '@angular/core';

@Component({
	selector: 'app-example',
	template: &#96;&lt;p>Счетчик: {{ counter }}&lt;/p>
			   &lt;button (click)="start()">Старт&lt;/button>&#96;,
})
export class ExampleComponent {
	counter = 0;

	constructor(private ngZone: NgZone) {}

	start() {
		this.ngZone.runOutsideAngular(() => {
			setInterval(() => {
				this.counter++; // Изменяется за пределами зоны
				this.ngZone.run(() => {}); // Принудительное обновление UI
			}, 1000);
		});
	}
}</code></pre>
            <p>
                В примере выше применяется метод <code>runOutsideAngular</code>, позволяющий выполнить код вне зоны
                Angular. Это позволяет предотвратить лишние вызовы механизма <code>Change Detection</code>, что в свою
                очередь повышает оптимизацию.
            </p>
            <p>
                Далее, внутри метода <code>runOutsideAngular</code>, вызывается уже метод <code>run</code>, который
                возвращает выполнение кода в зону Angular, заставляя обновить <code>View</code>.
            </p>
            <i class="subtitle">ChangeDetectorRef</i>
            <p>
                Если не хочется использовать <code>NgZone</code>, можно вручную запустить механизм
                <code>Change Detection</code> с помощью класса <code>ChangeDetectorRef</code>. В зависимости от ситуации
                можно воспользоваться его методами <code>markForCheck</code> или <code>detectChanges</code>.
            </p>
            <p>Посмотрим на примере <code>detectChanges</code>:</p>
            <pre><code class="language-typescript">import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
	selector: 'app-example',
	template: &#96;&lt;p>Счетчик: {{ counter }}&lt;/p>
			   &lt;button (click)="start()">Старт&lt;/button>&#96;,
})
export class ExampleComponent {
	counter = 0;

	constructor(private cdRef: ChangeDetectorRef) {}

	start() {
		setInterval(() => {
			this.counter++; // Данные меняются, но Angular не видит
			this.cdRef.detectChanges(); // Принудительный Change Detection
		}, 1000);
	}
}</code></pre>
            <p>
                В примере выше вызов метода <code>detectChanges</code> вручную запустит механизм
                <code>Change Detection</code> и обновит <code>View</code>.
            </p>`,
    selected: false,
    lastUpdate: '27.02.2025',
};
