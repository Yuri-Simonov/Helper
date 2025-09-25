import { IInfo } from 'src/app/shared/interfaces';

export const CALCULATOR_OBJECT: IInfo = {
    title: 'Создание объекта-калькулятора',
    body: `<pre><code class="language-javascript">// Условие:
// Реализовать функцию createCalculator, которая возвращает объект с:
// - свойством value (изначально 0);
// - методами add, sub, mul, div;
// - метод div должен выбрасывать ошибку "На ноль делить нельзя" при делении на 0.

function createCalculator() {
	// Ваше решение здесь
}

// Пример использования:
const calculator = createCalculator();
console.log(calculator.value); // 0

calculator.add(5);
console.log(calculator.value); // 5

calculator.add(7);
calculator.div(2);
console.log(calculator.value); // 6
calculator.div(0);</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function createCalculator() {
	return {
		value: 0,
		add(number) {
			this.value += number;
		},
		sub(number) {
			this.value -= number;
		},
		mul(number) {
			this.value *= number;
		},
		div(number) {
			if (number === 0) {
				throw new Error("На ноль делить нельзя");
			}
			this.value /= number;
		},
	};
}</code></pre>
<p>Если на собеседовании попросят инкапсулировать значение <code>value</code>, чтобы к нему нельзя было обратиться напрямую и как-то изменить:</p>
<pre><code class="language-javascript">calculator.value = 999;</code></pre>
<p>Тогда решение будет выглядеть следующим образом:</p>
<pre><code class="language-javascript">function createCalculator() {
	// Используем замыкание для хранения приватного значения
	let value = 0;

	return {
		get value() {
			return value; // доступ к текущему значению только через getter
		},
		add(number) {
			value += number;
		},
		sub(number) {
			value -= number;
		},
		mul(number) {
			value *= number;
		},
		div(number) {
			if (number === 0) {
				throw new Error("На ноль делить нельзя");
			}
			value /= number;
		},
	};
}</code></pre>
<p>Также на собеседовании могут попросить сделать "цепочку вызовов методов":</p>
<pre><code class="language-javascript">calculator.add(5).mul(2)</code></pre>
<p>Сделать это можно следующим способом:</p>
<pre><code class="language-javascript">function createCalculator() {
	// Используем замыкание для хранения приватного значения
	let value = 0;

	return {
		get value() {
			return value; // доступ к текущему значению только через getter
		},
		add(number) {
			value += number;
			return this; // возвращаем объект для чейнинга
		},
		sub(number) {
			value -= number;
			return this;
		},
		mul(number) {
			value *= number;
			return this;
		},
		div(number) {
			if (number === 0) {
				throw new Error("На ноль делить нельзя");
			}
			value /= number;
			return this;
		},
	};
}</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '23.09.2025',
};
