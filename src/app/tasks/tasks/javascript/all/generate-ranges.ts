import { IInfo } from 'src/app/shared/interfaces';

export const GENERATE_RANGES: IInfo = {
    title: 'Формирование диапазонов из массива чисел (range)',
    body: `<pre><code class="language-javascript">// Условие:
// Реализуйте функцию range, которая преобразует массив чисел в строку, объединяя соседние числа в диапазоны.
// Примеры использования:
// console.log(range([1, 4, 5, 2, 3, 9, 8, 11, 0])); // '0-5,8-9,11'
// console.log(range([1, 4, 3, 2])); // '1-4'

function range(array) {
	// Ваше решение здесь
}

// Мини-тесты
console.log(range([1, 4, 5, 2, 3, 9, 8, 11, 0])); // '0-5,8-9,11'
console.log(range([1, 4, 3, 2])); // '1-4'
console.log(range([])); // ''
console.log(range([5])); // '5'
console.log(range([1, 3, 5, 7])); // '1,3,5,7'</code></pre>`,
    tasks: [
        {
            title: 'Первый вариант решения',
            body: `<pre><code class="language-javascript">function range(arr) {
	// Сортируем массив и удаляем дубликаты
	arr = Array.from(new Set(arr.sort((a, b) => a - b)));
	
	let result = [];
	let start = arr[0];
	let end = arr[0];

	for (let i = 1; i <= arr.length; i++) {
		if (arr[i] === end + 1) {
			end = arr[i];  // Увеличиваем конец диапазона
		} else {
			if (start === end) {
				// Если диапазон состоит из одного числа
				result.push(&#96;&#36;{start}&#96;);
			} else {
				// Если диапазон состоит из нескольких чисел
				result.push(&#96;&#36;{start}-&#36;{end}&#96;);
			}
			// Начинаем новый диапазон
			start = arr[i];
			end = arr[i];
		}
	}

	return result.join(',');
}

console.log(range([1, 4, 5, 2, 3, 9, 8, 11, 0]));	// '0-5,8-9,11'
console.log(range([1, 4, 3, 2]));	// '1-4'</code></pre>
<p>Как это работает:</p>
            <ul>
                <li>Сначала сортируем массив чисел и убираем дубликаты с помощью <code>Set</code> и <code>sort</code>;</li>
                <li>Переменные <code>start</code> и <code>end</code> фиксируют начало и конец текущего диапазона;</li>
                <li>Когда числа идут подряд (<code>arr[i] === end + 1</code>), увеличиваем <code>end</code>;</li>
                <li>Если последовательность прерывается, записываем диапазон (<code>start</code>-<code>end</code>) или одно число (<code>start</code>) в результат и начинаем новый диапазон;</li>
                <li>Собираем диапазоны в строку через запятую с помощью метода <code>join</code>.</li>
            </ul>`,
            selected: false,
        },
        {
            title: 'Второй вариант решения',
            body: `<pre><code class="language-javascript">function range(array) {
	let start = null;
	let end = null;

	if (!array.length) return "";

	// Убираем дубликаты и сортируем копию входящего массива
	const sortedArray = [...new Set(array)].sort((a, b) => a - b);
	const newArray = [];

	for (let i = 0; i < sortedArray.length; i++) {
		if (sortedArray[i] !== undefined && start === null) {
			newArray.push([sortedArray[i]]);
			start = sortedArray[i];

			continue;
		}

		if (sortedArray[i] - sortedArray[i - 1] === 1) {
			end = sortedArray[i];

			if (i === sortedArray.length - 1) {
				newArray[newArray.length - 1].push(end);
				end = null;
			}
		}

		if (sortedArray[i] - sortedArray[i - 1] > 1) {
			if (end !== null) {
				newArray[newArray.length - 1].push(end);
				end = null;
			}
			newArray.push([sortedArray[i]]);
			start = sortedArray[i];
		}
	}

	return newArray.map((item) => item.join("-")).join(",");
}</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '22.10.2025',
};
