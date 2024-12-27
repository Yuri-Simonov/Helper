import { IInfo } from 'src/app/shared/interfaces';

export const CALCULATOR_OBJECT: IInfo = {
    title: 'Создание объекта-калькулятора',
    body: `<p>Реализуйте создание объекта-калькулятора со следующими требованиями:</p>
            <ul>
                <li>Приведенные примеры использования должны работать, в соответствии с комментариями ниже;</li>
                <li>Метод деления (<code>div</code>) должен выбрасывать ошибку <i style="margin-right: 2px">"На ноль делить нельзя"</i> при делении на ноль.</li>
            </ul>
            <p>Примеры использования:</p>
            <pre><code class="language-javascript">const calculator = createCalculator();
console.log(calculator.value); // 0

calculator.add(5);
console.log(calculator.value); // 5

calculator.add(7);
calculator.div(2);
console.log(calculator.value); // 6</code></pre>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">function createCalculator() {
	return {
		// Начальное значение калькулятора
		value: 0,

		// Метод для добавления числа
		add(num) {
			this.value += num;
		},

		// Метод для деления числа
		div(num) {
			if (num === 0) {
				throw new Error("На ноль делить нельзя");
			}
			this.value /= num;
		},

		// При необходимости можно добавить другие методы (умножение, вычитание и т.д.)
  };
}</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '14.09.2024',
};
