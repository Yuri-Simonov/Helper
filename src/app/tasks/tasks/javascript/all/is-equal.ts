import { IInfo } from 'src/app/shared/interfaces';

export const IS_EQUAL: IInfo = {
    title: 'Глубокое сравнение объектов и массивов (isEqual)',
    body: `<pre><code class="language-javascript">// Условие:
// Реализуйте функцию isEqual(a, b), которая проверяет объекты и массивы на глубокое равенство.
// Требования:
// - Примитивы сравниваются оператором ===.
// - Массивы равны, если равны их длины и все элементы равны по isEqual.
// - Объекты равны, если равны множества ключей и значения по каждому ключу равны по isEqual.
// - Не нужно учитывать специальные типы (Date, Map, Set, Function).

function isEqual(a, b) {
  // Твоё решение здесь
}

// Мини-тесты
console.log(isEqual(1, 1)); // true
console.log(isEqual(1, "1")); // false
console.log(isEqual([1, 2], [1, 2])); // true
console.log(isEqual([1, 2], [2, 1])); // false
console.log(isEqual([1, [1, 2]], [1, [1, 2]])); // true
console.log(isEqual([1, [2, 2]], [2, [2, 1]])); // false
console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(isEqual({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } })); // true</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function isEqual(a, b) {
	// быстрые возвраты
	if (a === b) {
		return true;
	}
	if (typeof a !== typeof b || a === null || b === null) {
		return false;
	}

	// для массивов
	if (Array.isArray(a)) {
		return checkArrays(a, b);
	}

	// для объектов
	if (typeof a === "object" && a !== null && b !== null) {
		return checkObjects(a, b);
	}

	return false;
}

// Проверка массивов
function checkArrays(a, b) {
	if (a.length !== b.length) return false;

	return a.every((elem, i) => {
		if (typeof a[i] !== typeof b[i]) {
			return false;
		}

		if (Array.isArray(a[i])) {
			return checkArrays(a[i], b[i]);
		}

		if (typeof a[i] === "object") {
			return checkObjects(a[i], b[i]);
		}

		return a[i] === b[i];
	});
}

// Проверка объектов
function checkObjects(a, b) {
	const entriesA = Object.entries(a);
	const entriesB = Object.entries(b);

	if (entriesA.length !== entriesB.length) {
		return false;
	}

	return checkArrays(entriesA, entriesB);
}</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '30.09.2025',
};
