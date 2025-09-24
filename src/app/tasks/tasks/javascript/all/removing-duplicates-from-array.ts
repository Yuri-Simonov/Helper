import { IInfo } from 'src/app/shared/interfaces';

export const REMOVING_DUPLICATES_FROM_ARRAY: IInfo = {
    title: 'Удаление дубликатов из массива объектов по ключу',
    body: `<pre><code class="language-javascript">// Условие:
// Реализуйте функцию uniqueBy(arr, key), которая удаляет дубликаты из массива объектов
// на основании значения указанного ключа.

// Примеры использования:
const users = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 1, name: "Charlie" },
	{ id: 3, name: "Alice" },
];

function uniqueBy(arr, key) {
	// Твоё решение здесь
}

console.log(uniqueBy(users, 'id'));
// Ожидаемый результат: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Alice' }]

console.log(uniqueBy(users, 'name'));
// Ожидаемый результат: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 1, name: 'Charlie' }]</code></pre>`,
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
