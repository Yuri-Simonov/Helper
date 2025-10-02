import { IInfo } from 'src/app/shared/interfaces';

export const FIND_VOWELS_LENGTH: IInfo = {
    title: 'Подсчёт количества гласных в строке',
    body: `<pre><code class="language-javascript">// Условие:
// Реализуй функцию findVowelsLength(str), которая возвращает количество гласных в строке.
// Гласные: a, e, i, o, u, y (в нижнем и верхнем регистре).
//
// Примеры использования:
// console.log(findVowelsLength('akksja')); // 2
// console.log(findVowelsLength('HELLO')); // 2 (E, O)

function findVowelsLength(str) {
  // Твоё решение здесь
}

// Мини-тесты
console.log(findVowelsLength('akksja')); // 2
console.log(findVowelsLength('HELLO')); // 2
console.log(findVowelsLength('rhythm')); // 1
console.log(findVowelsLength("sKY")); // 1</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function findVowelsLength(str) {
	const vowels = ["a", "e", "i", "o", "u", "y"];

	return [...str].reduce((acc, elem) => {
		return vowels.includes(elem.toLowerCase()) ? acc + 1 : acc;
	}, 0);
}</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '02.10.2025',
};
