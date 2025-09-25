import { IInfo } from 'src/app/shared/interfaces';

export const PARSING_QUERY_PARAMETERS: IInfo = {
    title: 'Парсинг query-параметров',
    body: `<pre><code class="language-javascript">// Условие:
// Реализуй две функции:
// 1) parseQuery(queryString) — преобразует строку вида "?a=1&b=2&c=hello"
// в объект { a: '1', b: '2', c: 'hello' }.
// 2) toQueryString(obj) — преобразует объект { a: '1', b: '2', c: 'hello' }
// обратно в строку "?a=1&b=2&c=hello".

function parseQuery(queryString) {
	// Ваше решение здесь
}

function toQueryString(obj) {
	// Ваше решение здесь
}

// Примеры использования:
const obj = parseQuery('?a=1&b=2&c=hello');
console.log(obj); // { a: '1', b: '2', c: 'hello' }

const str = toQueryString({ a: '1', b: '2', c: 'hello' });
console.log(str); // '?a=1&b=2&c=hello'</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function parseQuery(queryString) {
	return queryString
		.slice(1)
		.split("&")
		.reduce((params, item) => {
			// value = "" - значение по умолчанию, если query-параметр не задан
			const [key, value = ""] = item.split("=");
			params[key] = value;

			return params;
		}, {});
}

function toQueryString(obj) {
	const pairs = Object.entries(obj).map(([key, value]) => &#96;&#36;{key}=&#36;{value}&#96;);
	return &#96;?&#36;{pairs.join('&')}&#96;;
}</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '25.09.2025',
};
