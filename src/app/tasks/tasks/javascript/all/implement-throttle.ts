import { IInfo } from 'src/app/shared/interfaces';

export const IMPLEMENT_THROTTLE: IInfo = {
    title: 'Реализация <span class="variable">throttle</span>',
    body: `<pre><code class="language-javascript">// Условие:
// Напиши функцию throttle(fn, delay), которая возвращает обёртку для fn.
// Эта обёртка вызывает fn не чаще одного раза в указанный промежуток времени (delay).

// Примеры использования:
// const log = (msg) => console.log('Функция вызвана:', msg, Date.now());
// const throttledLog = throttle(log, 2000);

// throttledLog('первый'); // вызовется сразу
// throttledLog('второй'); // проигнорируется, т.к. прошло меньше 2с
// throttledLog('третий'); // проигнорируется, т.к. прошло меньше 2с
// через 2с следующий вызов сработает

function throttle(fn, delay) {
  	// Твоё решение здесь
}

// Мини-тест
const log = (msg) => console.log('Функция вызвана:', msg, Date.now());
const throttledLog = throttle(log, 2000);

throttledLog('первый вызов');
setTimeout(() => throttledLog('второй вызов'), 500);
setTimeout(() => throttledLog('третий вызов'), 1000);
setTimeout(() => throttledLog('четвёртый вызов'), 2500);</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function throttle(fn, delay) {
	let lastCall;

	return function (msg) {
		if (!lastCall || Date.now() > lastCall + delay) {
			fn(msg);
			lastCall = Date.now();
		}
	};
}</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '26.09.2025',
};
