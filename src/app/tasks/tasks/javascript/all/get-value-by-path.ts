import { IInfo } from 'src/app/shared/interfaces';

export const GET_VALUE_BY_PATH: IInfo = {
    title: 'Получение значения по пути в объекте (get)',
    body: `<pre><code class="language-javascript">// Условие:
// Реализуй функцию get(obj, path), которая принимает объект и строку-путь до значения.
// Возвращает само значение или undefined, если значение по пути не найдено.

// Пример:
// const obj = { value: { bar: 100 } };
// console.log(get(obj, 'value.bar')); // 100
// console.log(get(obj, 'value.baz')); // undefined
// console.log(get(obj, 'value.bar.test')); // undefined

function get(obj, path) {
	// Ваше решение здесь
}

// Мини-тесты 1
const obj = {
	value: {
		bar: 100,
	},
};

console.log(get(obj, "value.bar")); // 100
console.log(get(obj, "value.baz")); // undefined
console.log(get(obj, "value.bar.test")); // undefined

// Мини-тесты 2
const o = { a: { b: 0, c: false, d: "", e: null } };

console.log(get(o, "a.b")); // 0
console.log(get(o, "a.c")); // false
console.log(get(o, "a.d")); // ''
console.log(get(o, "a.e")); // null
console.log(get(o, "a.x")); // undefined</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function get(obj, path) {
	if (!path) return obj;

	const splittedPath = path.split(".");

	return splittedPath.reduce((acc, elem) => {
		return acc === undefined ? undefined : acc[elem];
	}, obj);
}</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '02.10.2025',
};
