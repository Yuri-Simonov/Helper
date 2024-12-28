import { IInfo } from 'src/app/shared/interfaces';

export const IMPLEMENT_DELAY_FUNCTION: IInfo = {
    title: 'Реализация функции задержки',
    body: `<p>
                Создайте функцию <code>foo</code>, которая реализует задержку и в соответствии с примером использования
                выведет сообщение в консоль через 3 секунды.
            </p>
            <p>Примеры использования:</p>
            <pre><code class="language-javascript">foo(3).then(() => {
	console.log('done')
})</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function foo(seconds) {
	return new Promise(resolve => {
		setTimeout(resolve, seconds * 1000);  // Умножаем секунды на 1000 для перевода в миллисекунды
	});
}

foo(3).then(() => {
  	console.log('done');
});</code></pre>
			<p>Как это работает:</p>
            <ul>
                <li>Функция <code>foo</code> возвращает новый <code>Promise</code>;</li>
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
