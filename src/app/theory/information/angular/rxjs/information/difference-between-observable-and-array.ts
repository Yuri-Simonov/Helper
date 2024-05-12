import { IInfo } from '@types';

export const DIFFERENCE_BETWEEN_OBSERVABLE_AND_ARRAY: IInfo = {
    title: 'Разница между <span class="variable">Observable</span> и <span class="variable">Array</span>',
    body: `<p>
                У объектов <code>Observable</code> (конечно же, имеется ввиду
                операторы метода <code>pipe</code>) и <code>Array</code> (методы массивов) есть
                схожий по названию функционал:
                <code>map, filter, reduce</code> и т.д. Кроме того,
                перечисленный функционал этих объектов работает одинаково под
                капотом. Но все же есть одно но: <span class="attention">разный порядок выполнения кода.</span>
            </p>
            <p>
                Чтобы было более понятно о чем идет речь, ниже представлены
                примеры работы цепочки методов массива и цепочки операторов
                метода <code>pipe</code>.
            </p>
            <i class="subtitle">Array</i>
            <p>Для начала разберемся как ведут себя методы у массивов:</p>
			<pre><code class="language-typescript">someArray = [10, 20, 30, 40];

result = someArray
	.map(item => {
		console.log('[MAP]', item);
		return item + 5;
	})
	.filter(item => {
		console.log('[FILTER]', item);
		return item > 30;
	})
	.reduce((acc, item) => acc + item);

console.log('Результат:', result);</code></pre>
            <p>Результат выполнения кода в консоли:</p>
<pre><code class="language-typescript">// [MAP] 10
// [MAP]: 20
// [MAP]: 30
// [MAP]: 40
// [FILTER]: 15
// [FILTER]: 25
// [FILTER]: 35
// [FILTER]: 45
// Результат: 80</code></pre>
            <p>
                Как видите, сначала массив <code>someArray</code> полностью
                прошел через метод <code>map</code> и только потом он попал в
                метод <code>filter</code> и аналогично затем в метод
                <code>reduce</code>.
            </p>
            <i class="subtitle">Observable</i>
            <p>
                А теперь проделаем все то же самое, но уже для
                <code>Observable</code> с тем же массивом данных:
            </p>
<pre><code class="language-typescript">someArray = [10, 20, 30, 40];

from(someArray).pipe(
	map(item => {
		console.log('[MAP]', item);
		return item + 5;
	})
	.filter(item => {
		console.log('[FILTER]', item);
		return item > 30;
	})
	.reduce((acc, item) => acc + item)
)
.subscribe(val => console.log('next:', val));</code></pre>
            <p>Результат выполнения кода в консоли:</p>
<pre><code class="language-typescript">// [MAP] 10
// [FILTER]: 15
// [MAP]: 20
// [FILTER]: 25
// [MAP]: 30
// [FILTER]: 35
// [MAP]: 40
// [FILTER]: 45
// Результат: 80</code></pre>
            <p>
                Как видите, результат выполнения кода отличается. Теперь каждый
                элемент массива <code>someArray</code> полностью проходит
                цепочку операторов, за исключением оператора
                <code>reduce</code>, т.к. он отрабатывает по завершению потока.
            </p>
            <p>
                Если вам нужен результат после каждого элемента, успешно
                прошедшего операторы <code>map</code> и <code>filter</code>,
                воспользуйтесь оператором <code>scan</code>:
            </p>
<pre><code class="language-typescript">someArray = [10, 20, 30, 40];

from(someArray).pipe(
	map(item => {
		console.log('[MAP]', item);
		return item + 5;
	})
	.filter(item => {
		console.log('[FILTER]', item);
		return item > 30;
	})
	.scan((acc, item) => acc + item)
)
.subscribe(val => console.log('next:', val));</code></pre>
            <p>Результат выполнения кода в консоли:</p>
<pre><code class="language-typescript">// [MAP] 10
// [FILTER]: 15
// [MAP]: 20
// [FILTER]: 25
// [MAP]: 30
// [FILTER]: 35
// Результат: 35
// [MAP]: 40
// [FILTER]: 45
// Результат: 80</code></pre>
            <p>Итог всего вышесказанного:</p>
            <ul>
                <li>
                    <span class="attention">
                        Объект типа <code>Array</code> обрабатывает все свои
                        элементы в одном методе и только после этого переходит к
                        другому методу</span
                    >;
                </li>
                <li>
                    <span class="attention">
                        Объект типа <code>Observable</code> поочередно прогоняет
                        свои элементы через операторы, указанные в методе
                        <code>pipe</code>.
                    </span>
                </li>
            </ul>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
