import { IInfo } from 'src/app/shared/interfaces';

export const PALINDROME_CHECK: IInfo = {
    title: 'Проверка на палиндром (isPalindrome)',
    body: `<p>
				Палиндром — это <span class="attention">
					слово, цифра, фраза или другая последовательность символов, 
					которая читается одинаково как в обратном, так и в прямом направлении</span>.
			</p>
			<p>Реализуйте функцию <code>isPalindrome</code>, которая проверяет, что переданный текст является палиндромом.</p>
			<pre><code class="language-javascript">// Условие:
// Дана строка s. Вернуть true, если строка является палиндромом, иначе false.
// В базовой версии учитываем все символы и регистр.

function isPalindrome(s) {
	// Ваше решение здесь
}

// Примеры для проверки
console.log(isPalindrome("топот")); // true
console.log(isPalindrome("101")); // true
console.log(isPalindrome("сатурн")); // false</code></pre>`,
    tasks: [
        {
            title: 'Простое решение задачи',
            body: `<pre><code class="language-javascript">function isPalindrome(s) {
	return s === s.split("").reverse().join("");
}</code></pre>
			<p>Это самое простое решение данной задачи, которое может подойти для маленьких строк. Если строка большая, то лучше использовать решение, которое показано в следующем спойлере.</p>`,
            selected: false,
        },
        {
            title: 'Оптимальное решение задачи',
            body: `<pre><code class="language-javascript">function isPalindrome(s) {
	// Два указателя + явные границы цикла
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		if (s[left] !== s[right]) {
			return false; // первая же несовпавшая пара — не палиндром
		}
		left++;
		right--;
	}

	return true; // дошли до середины без расхождений
}</code></pre>
			<p>Данное решение хоть и выглядит менее легким для восприятия, но зато здесь мы работаем прямо с исходной строкой, не создавая лишние её развернутые копии.</p>
			<p>Здесь суть решения заключается в том, что мы идем одновременно с двух концов навстречу друг другу и сразу сравниваем символы. Если где-то находится несовпадение, то завершаем проверку. В противном случае строка является палиндромом.</p>`,
            selected: false,
        },
        {
            title: 'Решение с учетом регистра и знаком препинания',
            body: `<pre><code class="language-javascript">function isPalindrome(s) {
	const cleanString = s
		.toLowerCase() // Приводим к нижнему регистру
		.replace(/[^a-zа-яё0-9]/gi, ""); // Убираем все не буквы и не цифры

	// Два указателя + явные границы цикла
	let left = 0;
	let right = cleanString.length - 1;

	while (left < right) {
		if (cleanString[left] !== cleanString[right]) {
			return false; // первая же несовпавшая пара — не палиндром
		}
		left++;
		right--;
	}

	return true; // дошли до середины без расхождений
}

// Примеры для проверки
console.log(isPalindrome("топот")); // true
console.log(isPalindrome("Анна")); // true
console.log(isPalindrome("101")); // true
console.log(isPalindrome("сатурн")); // false
console.log(isPalindrome("Тропа налево повела, на порт.")); // true
console.log(isPalindrome("A man, a plan, a canal. Panama")); // true</code></pre>
			<p>Здесь уже не важен регистр, в котором написан текст, а также не важны различные знаки препинания. Проверяем только буквы и цифры.</p>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '23.09.2025',
};
