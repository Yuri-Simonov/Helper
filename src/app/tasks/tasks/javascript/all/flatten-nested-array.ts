import { IInfo } from 'src/app/shared/interfaces';

export const FLATTEN_NESTED_ARRAY: IInfo = {
    title: 'Разворачивание вложенного массива',
    body: `<p>Реализуйте функцию <code>foo</code>, которая на вход в качестве единственного аргумента принимает массив и возвращает массив без вложенностей.</p>
			<p>Примеры использования:</p>
			<pre><code class="language-javascript">console.log(foo(['a', ['b', ['c', 'd']], [[['e']]]])) // [ 'a', 'b', 'c', 'd', 'e' ]</code></pre>`,
    tasks: [
        {
            title: 'Первый вариант решения',
            body: `<p>
                Ниже показано решение через рекурсию. Данное решение можно использовать, <span class="attention">
					если важна поддержка старых
					версий JavaScript</span>.
            </p>
            <pre><code class="language-javascript">function foo(arr) {
  let result = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      result.push(...foo(item));  // Рекурсивно разворачиваем вложенные массивы
    } else {
      result.push(item);  // Добавляем элемент в результат
    }
  });

  return result;
}

console.log(foo(['a', ['b', ['c', 'd']], [[['e']]]])); // [ 'a', 'b', 'c', 'd', 'e' ]</code></pre>
            <p>Как это работает:</p>
            <ul>
                <li>Мы итерируемся по массиву;</li>
                <li>
                    Если элемент — массив, вызываем <code>foo</code> рекурсивно и добавляем результат в
                    <code>result</code>;
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
            <pre><code class="language-javascript">function foo(arr) {
    return arr.flat(Infinity); // Infinity разворачивает массив на любом уровне вложенности
}

console.log(foo(['a', ['b', ['c', 'd']], [[['e']]]])); // [ 'a', 'b', 'c', 'd', 'e' ]</code></pre>
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
            <pre><code class="language-javascript">function foo(arr) {
	return arr.reduce((acc, val) => {
		return acc.concat(Array.isArray(val) ? foo(val) : val);
	}, []);
}

console.log(foo(['a', ['b', ['c', 'd']], [[['e']]]])); // [ 'a', 'b', 'c', 'd', 'e' ]</code></pre>
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
    lastUpdate: '27.12.2024',
};
