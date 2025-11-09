import { IInfo } from 'src/app/shared/interfaces';

export const EFFECT: IInfo = {
    title: '<span class="variable">effect</span>',
    body: `<p>
                Если <code>signal</code> - это источник, а <code>computed</code> - это преобразование, то
                <code>effect</code> - это пункт назначения. Это конечная точка любой реактивной цепочки, ее
                <span class="attention"
                    >главная задача - произвести побочный эффект, то есть синхронизировать состояние наших сигналов с
                    чем-то во внешнем мире</span
                >.
            </p>
            <p>
                В отличие от computed, effect никогда не производит значения. Он просто выполняется. Его используют для:
            </p>
            <ul>
                <li>Манипуляций с DOM, которые не вписываются в шаблоны Angular;</li>
                <li>Логирования изменений;</li>
                <li>Сохранения данных в localStorage или отправки на сервер;</li>
                <li>Интеграции со сторонними, не-сигнальными библиотеками.</li>
            </ul>
            <p>
                В терминах графа, effect - это чистый Консьюмер.
                <span class="attention">Он слушает Продюсеров, но сам ничего не производит</span>.
            </p>
            <p>
                <code>effect</code> запускается как минимум один раз при создании, а затем перезапускается каждый раз,
                когда меняется любой из сигналов, прочитанных внутри него.
            </p>
            <pre><code class="language-typescript">const counter = signal(0);

// 1. Создаем эффект, который зависит от counter.
// Он немедленно выполнится.
effect(() => {
  	console.log('Счетчик теперь равен: ', counter());
});
// -> Счетчик теперь равен: 0

// 2. Изменяем сигнал. Эффект автоматически перезапустится.
counter.set(1);
// -> Счетчик теперь равен: 1</code></pre>
            <i class="subtitle">onCleanup</i>
            <p>
                Часто побочные эффекты требуют очистки (например, отписка от событий, отмена таймера).
                <code>effect</code> предоставляет для этого специальную функцию <code>onCleanup</code>:
            </p>
            <pre><code class="language-typescript">const isActive = signal(true);

effect((onCleanup) => {
	if (isActive()) {
		console.log('Эффект активен, запускаем таймер...');
		const timerId = setInterval(() => console.log('Тик-так'), 1000);

		// 3. Регистрируем функцию очистки.
		// Она будет вызвана ПЕРЕД следующим запуском эффекта
		// или когда эффект будет уничтожен.
		onCleanup(() => {
			console.log('Очистка: останавливаем таймер.');
			clearInterval(timerId);
		});
	} else {
		console.log('Эффект неактивен.');
	}
});

// ...
isActive.set(false); // Это вызовет перезапуск эффекта.
// -> Очистка: останавливаем таймер.
// -> Эффект неактивен.</code></pre>
            <i class="subtitle">effect.destroy()</i>
            <p><code>effect</code> также можно полностью отключить с помощью его метода <code>destroy</code>:</p>
            <pre><code class="language-html">&lt;p>Count: {{ count() }}&lt;/p>
&lt;button (click)="increment()">Increment&lt;/button>
&lt;button (click)="stop()">Stop effect&lt;/button></code></pre>
            <pre><code class="language-typescript">@Component({
  selector: 'app-demo',
  templateUrl: 'app.component.html',
})
export class DemoComponent {
	count = signal(0);
	private effectRef = effect(() => {
		console.log('Count changed:', this.count());
	});

	increment() {
		this.count.update(v => v + 1);
	}

	stop() {
		this.effectRef.destroy();
		console.log('Effect destroyed!');
	}
}</code></pre>
            <p>
                В примере выше пока эффект жив - при каждом изменении <code>count()</code> в консоль будет выводиться
                лог с соответствующим сообщением. После вызова <code>this.effectRef.destroy()</code> - Angular перестаёт
                отслеживать сигнал, и эффект больше не вызывается.
            </p>`,
    selected: false,
    lastUpdate: '09.11.2025',
};
