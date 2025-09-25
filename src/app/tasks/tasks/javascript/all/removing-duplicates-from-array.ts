import { IInfo } from 'src/app/shared/interfaces';

export const REMOVING_DUPLICATES_FROM_ARRAY: IInfo = {
    title: 'Удаление дубликатов из массива объектов по ключу',
    body: `<pre><code class="language-javascript">// Условие:
// Реализуйте функцию uniqueBy(arr, key), которая удаляет дубликаты из массива объектов
// на основании значения указанного ключа.

// Данные для тестирования:
const users = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 1, name: "Charlie" },
	{ id: 3, name: "Alice" },
];

function uniqueBy(arr, key) {
	// Ваше решение здесь
}

// Примеры использования:
console.log(uniqueBy(users, 'id'));
// [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Alice' }]

console.log(uniqueBy(users, 'name'));
// [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 1, name: 'Charlie' }]</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function uniqueBy(arr, key) {
	const keyValues = new Set();
	const newArr = [];

	arr.forEach((element) => {
		if (!keyValues.has(element[key])) {
			keyValues.add(element[key]);
			newArr.push(element);
		}
	});

	return newArr;
}</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '24.09.2025',
};
