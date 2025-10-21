import { IInfo } from 'src/app/shared/interfaces';

export const FLATTEN_NESTED_ARRAY: IInfo = {
    title: 'Преобразование многомерного массива в одномерный (flatten)',
    body: `<pre><code class="language-javascript">// Условие:
// Реализуй функцию flatten(array), которая разворачивает многомерный массив любой вложенности в одномерный.
// Пример:
// console.log(flatten([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
// console.log(flatten([[['a']], ['b'], 'c'])); // ['a', 'b', 'c']

function flatten(array) {
  // Ваше решение здесь
}

// Мини-тесты
console.log(flatten([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
console.log(flatten([[['a']], ['b'], 'c'])); // ['a', 'b', 'c']
console.log(flatten([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([])); // []</code></pre>`,
    tasks: [
        {
            title: 'Первый вариант решения',
            body: `<p>
                Ниже показано решение через рекурсию. Данное решение можно использовать, <span class="attention">
					если важна поддержка старых
					версий JavaScript</span>.
            </p>
            <pre><code class="language-javascript">function flatten(array) {
	if (!Array.isArray(array)) throw new Error("Невалидные входные данные");

	const newArray = [];

	array.forEach((elem) => {
		if (!Array.isArray(elem)) {
			return newArray.push(elem);
		}

		return newArray.push(...flatten(elem));
	});

	return newArray;
}</code></pre>
            <p>Как это работает:</p>
            <ul>
                <li>Мы итерируемся по массиву;</li>
                <li>
                    Если элемент — массив, вызываем <code>flatten</code> рекурсивно и добавляем результат в
                    <code>newArray</code>;
                </li>
                <li>Если элемент — не массив, добавляем его напрямую.</li>
            </ul>`,
            selected: false,
        },
        {
            title: 'Второй вариант решения',
            body: `<p>
                Ниже показано решение через метод <code>flat</code>. Данное решение можно использовать, <span class="attention">
					если важна
					производительность и читаемость</span>.
            </p>
            <pre><code class="language-javascript">function flatten(array) {
    return array.flat(Infinity); // Infinity разворачивает массив на любом уровне вложенности
}</code></pre>
            <p>Как это работает:</p>
            <ul>
                <li>
                    Метод <code>flat</code> с аргументом <code>Infinity</code> разворачивает все уровни вложенности
                    массива;
                </li>
                <li>Это наиболее лаконичное и эффективное решение для современных версий JavaScript (ES2019+).</li>
            </ul>`,
            selected: false,
        },
        {
            title: 'Третий вариант решения',
            body: `<p>
                Ниже показано решение через метод <code>reduce</code>. Данное решение можно использовать,
                <span class="attention"> если важна поддержка старых версий JavaScript</span>.
            </p>
            <pre><code class="language-javascript">function flatten(array) {
	return array.reduce((acc, val) => {
		return acc.concat(Array.isArray(val) ? flatten(val) : val);
	}, []);
}</code></pre>
            <p>Как это работает:</p>
            <ul>
                <li>Метод <code>reduce</code> создаёт аккумулятор, который накапливает элементы;</li>
                <li>Если текущий элемент — массив, разворачиваем его с помощью рекурсии;</li>
                <li>Если элемент — не массив, добавляем его в аккумулятор.</li>
            </ul>`,
            selected: false,
        },
    ],
    taskExplanation:
        'Если важна производительность и читаемость, предпочтителен второй вариант. Если требуется поддержка старых версий JavaScript, можно использовать первый или третий вариант.',
    selected: false,
    lastUpdate: '21.10.2025',
};
