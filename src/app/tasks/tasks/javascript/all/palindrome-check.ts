import { IInfo } from 'src/app/shared/interfaces';

export const PALINDROME_CHECK: IInfo = {
    title: 'Проверка на палиндром',
    body: `<p>
				Палиндром — это слово, цифра, фраза или другая последовательность символов, 
которая читается одинаково как в обратном, так и в прямом направлении.
			</p>
			<p>Реализуйте функцию <code>isPalindrome</code>, которая проверяет, что переданный текст является палиндромом.</p>
			<p>Примеры использования:</p>
			<pre><code class="language-javascript">console.log(isPalindrome("топот")); // true
console.log(isPalindrome("Анна")); // true
console.log(isPalindrome("101")); // true
console.log(isPalindrome("сатурн")); // false
console.log(isPalindrome("Тропа налево повела, на порт.")); // true
console.log(isPalindrome("A man, a plan, a canal. Panama")); // true</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function isPalindrome(text) {
    const cleanText = text
        .toLowerCase() // Приводим к нижнему регистру
        .replace(/[^a-zа-яё0-9]/gi, ""); // Убираем все не буквы и не цифры

    return cleanText === cleanText.split("").reverse().join(""); // Сравниваем с перевёрнутой строкой
}

console.log(isPalindrome("топот")); // true
console.log(isPalindrome("Анна")); // true
console.log(isPalindrome("101")); // true
console.log(isPalindrome("сатурн")); // false
console.log(isPalindrome("Тропа налево повела, на порт.")); // true
console.log(isPalindrome("A man, a plan, a canal. Panama")); // true</code></pre>
			<p>Как это работает:</p>
			<ul>
                <li>Приводим текст к нижнему регистру с помощью метода toLowerCase и удаляем все символы, кроме букв и цифр, с помощью регулярного выражения <code>(replace(/[^a-zа-яё0-9]/gi, ''))</code>;</li>
                <li>
                    Сравниваем очищенную строку с её перевёрнутым вариантом <code>(split('').reverse().join(''))</code>;
                </li>
                <li>Если строки совпадают — это палиндром, иначе — нет.</li>
            </ul>
			<p>
                <i
                    >Удаление пробелов, знаков препинания и регистронезависимая проверка делают решение универсальным. К
                    тому же, поддерживаются как английские, так и русские фразы и цифры.</i
                >
            </p>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '28.12.2024',
};
