import { IInfo } from 'src/app/shared/interfaces';

export const IMPLEMENT_DELAY_FUNCTION: IInfo = {
    title: 'Реализация функции задержки (delay)',
    body: `<pre><code class="language-javascript">// Условие:
// Создайте функцию delay, которая реализует задержку и в соответствии с примером
// использования выведет сообщение в консоль через указанное количество секунд.

function delay(seconds) {
	// Ваше решение здесь
}

// Пример использования:
delay(3).then(() => {
	console.log("done"); // Выведет "done" через 3 секунды
});</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function delay(seconds) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, seconds * 1000);
	});
}

delay(3).then(() => {
  	console.log('done');
});</code></pre>
			<p>Как это работает:</p>
            <ul>
                <li>Функция <code>delay</code> возвращает новый <code>Promise</code>;</li>
                <li>
                    Внутри <code>Promise</code> вызывается <code>setTimeout</code>, который через указанное количество
                    секунд вызывает <code>resolve</code>;
                </li>
                <li>После завершения задержки <code>then</code> выполняет <code>console.log('done')</code>.</li>
            </ul>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '28.12.2024',
};
