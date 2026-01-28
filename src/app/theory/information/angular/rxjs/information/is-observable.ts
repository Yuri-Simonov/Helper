import { IInfo } from 'src/app/shared/interfaces';

export const IS_OBSERVABLE: IInfo = {
    title: 'Проверка на <span class="variable">Observable</span> (<span class="variable">isObservable</span>)',
    body: `<p>
                <code>isObservable</code> — это утилитарная функция RxJS, которая
                <span class="attention">позволяет проверить, является ли значение</span> <code>Observable</code>. Если
                является, то возвращает <code>true</code>, иначе <code>false</code>.
            </p>
            <p>Важно: <span class="attention">это не один из операторов RxJS, а обычная функция</span>.</p>
            <p>Пример:</p>
            <pre><code class="language-typescript">const obs$ = of(1, 2, 3);
const num = 42;

console.log(isObservable(obs$)); // true
console.log(isObservable(num));  // false</code></pre>
            <p>Более практичный пример использования данной функции:</p>
            <pre><code class="language-typescript">function normalizeToObservable&lt;T>(input: T | Promise&lt;T> | Observable&lt;T>) {
	if (isObservable(input)) {
		return input;
	}

	if (input instanceof Promise) {
		return from(input);
	}

  	return of(input);
}</code></pre>`,
    selected: false,
    lastUpdate: '28.01.2026',
};
