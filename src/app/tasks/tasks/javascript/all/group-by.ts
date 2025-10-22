import { IInfo } from 'src/app/shared/interfaces';

export const GROUP_BY: IInfo = {
    title: 'Группировка элементов массива (groupBy)',
    body: `<pre><code class="language-javascript">// Условие:
// Реализуй функцию groupBy(array, keyOrFn), которая группирует элементы массива по ключу или функции.
// Требования:
// - Если keyOrFn — это строка, то группировка идёт по значению этого свойства.
// - Если keyOrFn — это функция, то группировка идёт по значению, которое возвращает эта функция.
// - Возвращается объект, где ключи — это группы, а значения — массивы элементов.

function groupBy(array, keyOrFn) {
	// Твоё решение здесь
}

// Мини-тесты
const data = [
	{ name: "Alice", age: 21 },
	{ name: "Bob", age: 25 },
	{ name: "Charlie", age: 21 },
	{ name: "David", age: 25 },
];

console.log(groupBy(data, "age"));
// {
//   21: [ { name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 } ],
//   25: [ { name: 'Bob', age: 25 }, { name: 'David', age: 25 } ]
// }
console.log(groupBy(data, (item) => item.name[0]));
// {
//   A: [ { name: 'Alice', age: 21 } ],
//   B: [ { name: 'Bob', age: 25 } ],
//   C: [ { name: 'Charlie', age: 21 } ],
//   D: [ { name: 'David', age: 25 } ]
// }</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function groupBy(array, keyOrFn) {
	const groups = array.reduce((acc, elem) => {
		// Определяем ключ для текущего элемента:
		// - если keyOrFn — функция, вызываем её на elem
		// - если keyOrFn — строка, берём соответствующее свойство из elem
		const groupKey = typeof keyOrFn === "function" ? keyOrFn(elem) : elem[keyOrFn];

		// Если ключ уже есть в аккумуляторе — добавляем в существующую группу,
		// иначе создаём новую группу с текущим элементом
		if (acc[groupKey]) {
			acc[groupKey].push(elem);
		} else {
			acc[groupKey] = [elem];
		}

		return acc; // обязательно возвращаем аккумулятор
	}, {});

	return groups;
}</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '02.10.2025',
};
