import { IInfo } from 'src/app/shared/interfaces';

export const UNTRACKED: IInfo = {
    title: '<span class="variable">untracked</span>',
    body: `<p>
                Такие сигналы, как <code>computed</code> и <code>effect</code>, автоматически обнаруживают и
                подписываются на сигналы, которые они читают. Но иногда такое поведение нежелательно. Бывают ситуации,
                когда нам нужно прочитать значение сигнала, не создавая при этом реактивную зависимость.
            </p>
            <p>
                Именно для этого и существует утилита <code>untracked</code>. Она
                <span class="attention"
                    >позволяет выполнить функцию в не-реактивном контексте, временно "отключив" механизм
                    отслеживания</span
                >.
            </p>
            <p>
                Самый частый сценарий - логирование или отладка внутри <code>effect</code>. Например, мы хотим, чтобы
                эффект срабатывал только при изменении <code>userName</code>, а значение <code>counter</code> просто
                считывалось "попутно":
            </p>
            <pre><code class="language-typescript">const userName = signal('Алексей');
const counter = signal(0);

effect(() => {
	// Мы создаем зависимость только от userName.
	const currentUser = userName(); 
	
	// А значение counter читаем внутри untracked,
	// чтобы избежать создания зависимости от него.
	const currentCount = untracked(() => counter());

	console.log(&#96;Пользователь &#36;{currentUser} нажал на счетчик &#36;{currentCount} раз.&#96;);
});

userName.set('Вася'); 
// -> Пользователь Вася нажал на счетчик 0 раз.

// Теперь это изменение НЕ вызовет эффект.
counter.set(1);
// (в консоли ничего не появится)</code></pre>`,
    selected: false,
    lastUpdate: '16.11.2025',
};
