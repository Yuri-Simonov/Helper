import { IInfo } from 'src/app/shared/interfaces';

export const ANAGRAM_CHECK: IInfo = {
    title: 'Проверка на анаграмму',
    body: `<p>Анаграмма — это <span class="attention">слово или строка, составленная из тех же букв, что и другая, только в другом порядке</span>.</p>
			<p>Реализуйте функцию <code>isAnagram</code>, которая проверяет, что переданные в нее 2 значения являются анаграммами.</p>
			<pre><code class="language-javascript">// Условие:
// Даны две строки s и t. Вернуть true, если t — это анаграмма s, иначе false.
// Учитываем все символы и регистр.

function isAnagram(s, t) {
  // Твоё решение здесь
}

// Примеры для проверки
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("triangle", "integral")); // true
console.log(isAnagram("apple", "papel")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("aabbcc", "abccba")); // true
console.log(isAnagram("Aa", "aa")); // false
console.log(isAnagram("ab", "a b")); // false</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function isAnagram(s, t) {
	// Быстрый выход — если длины разные, дальше проверять смысла нет
	if (s.length !== t.length) return false;
	// идентичные строки — тривиальная анаграмма
	if (s === t) return true;

	const sortedS = s.split("").sort().join("");
	const sortedT = t.split("").sort().join("");

	return sortedS === sortedT;
}

// Примеры для проверки
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("triangle", "integral")); // true
console.log(isAnagram("apple", "papel")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("aabbcc", "abccba")); // true
console.log(isAnagram("Aa", "aa")); // false
console.log(isAnagram("ab", "a b")); // false</code></pre>
			<p>Нейронка предлагает вместо оператора split использовать spread-operator:</p>
			<pre><code class="language-javascript">function isAnagram_vChatGPT(s, t) {
  // Быстрые выходы
  if (s.length !== t.length) return false;
  if (s === t) return true; // идентичные строки — тривиальная анаграмма

  // Используем итерацию по юникод-кодпоинтам (оператор spread), это надёжнее, чем split("") для суррогатных пар (смайлики, иероглифы и тд.)
  const sortedS = [...s].sort().join("");
  const sortedT = [...t].sort().join("");
  return sortedS === sortedT;
}</code></pre>
			<p>Пояснение про отличие <code>split("")</code> vs <code>[...str]</code>:</p>
			<ul>
                <li><code>split("")</code> разбивает строку по UTF-16 код-юнитам. Это значит, что символы, которые кодируются двумя код-юнитами
(например, эмодзи 👍 или иероглифы вне базовой плоскости), будут разорваны</code>;</li>
                <li>
                    <code>[...str]</code> использует итератор строк в JS, который итерирует по кодпоинтам Unicode. Это значит, что 👍 будет считаться одним символом</code>.
                </li>
            </ul>
			<pre><code class="language-javascript">Примеры:
console.log("👍".split("")); // ['�','�'] → два непонятных символа (суррогатная пара)
console.log([..."👍"]);      // ['👍'] → один корректный символ

console.log("á".split("")); // ['a','́'] (латинская a + отдельный знак ударения)
console.log([..."á"]);      // ['a','́'] — тут тоже два, потому что это не суррогатная пара, а составной символ.</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '22.09.2025',
};
