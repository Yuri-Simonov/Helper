import { IInfo } from 'src/app/shared/interfaces';

export const IMPLEMENT_DEBOUNCE: IInfo = {
    title: 'Реализация debounce',
    body: `<pre><code class="language-javascript">// Условие:
// Напиши функцию debounce(fn, delay), которая возвращает обёртку для fn.
// Эта обёртка откладывает вызов fn на указанное количество миллисекунд (delay).
// Если в течение этого времени обёртка вызывается снова, таймер сбрасывается.

function debounce(fn, delay) {
	// Ваше решение здесь
}
	
// Примеры использования:
const log = () => console.log('Функция вызвана');
const debouncedLog = debounce(log, 1000);

debouncedLog(); // вызов откладывается на 1с
debouncedLog(); // предыдущий сбрасывается, снова 1с
debouncedLog(); // и так далее</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function debounce(fn, delay) {
	let timerId;

	return () => {
		if (timerId) {
			clearTimeout(timerId);
		}

		timerId = setTimeout(() => {
			fn();
		}, delay);
	};
}</code></pre>
			<p>Если на собеседовании попросят сделать так, чтобы не терялся контекст вызова (<code>this</code>) и можно было еще пробрасывать аргументы при вызове обёртки:</p>
			<pre><code class="language-javascript">function debounce(fn, delay) {
	let timerId;

	return function (...args) {
		const context = this;

		if (timerId) {
			clearTimeout(timerId);
		}

		timerId = setTimeout(() => {
			fn.apply(context, args);
		}, delay);
	};
}</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '24.09.2025',
};
