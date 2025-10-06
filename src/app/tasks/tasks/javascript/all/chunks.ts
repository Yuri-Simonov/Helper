import { IInfo } from 'src/app/shared/interfaces';

export const CHUNKS: IInfo = {
    title: 'Разбиение массива на подмассивы (chunk)',
    body: `<pre><code class="language-javascript">// Условие:
// Реализуй функцию chunk(array, size), которая разбивает массив на подмассивы длиной size.
// Если элементов не хватает для полного подмассива — последний будет короче.

// Примеры использования:
// console.log(chunk([1,2,3,4,5], 2)); // [[1,2],[3,4],[5]]
// console.log(chunk([1,2,3,4,5], 3)); // [[1,2,3],[4,5]]

function chunk(array, size) {
	// Твоё решение здесь
}

// Мини-тесты
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
console.log(chunk([1, 2, 3, 4, 5], 3)); // [[1,2,3],[4,5]]
console.log(chunk([], 3)); // []
console.log(chunk([1, 2], 5)); // [[1,2]]</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function chunk(array, size) {
	if (size < 1) {
		throw new Error("Величина разбиения должна быть больше нуля!");
	}

	if (size === 1) {
		return array.map((item) => [item]);
	}

	const chunks = [];

	array.forEach((element, i) => {
		if (i % size === 0) {
			chunks.push([]);
		}
		chunks[chunks.length - 1].push(element);
	});

	return chunks;
}</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '06.10.2025',
};
