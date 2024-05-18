import { IInfo } from '@types';

export const CLOSURES: IInfo = {
    title: 'Замыкания',
    body: `<p>
            Если отвечать очень примитивным языком, то замыкание - это
            <span class="attention">функция внутри другой функции</span>. Но при
            этом у внутренней функции создается уже
            <span class="attention">
                свое лексическое окружение, зависящее от того, где была
                инициализирована внешняя функция.
            </span>
        </p>
        <pre><code class="language-javascript">function outside(name) {
	const age = 26;
	function inside() {
		console.log('Меня зовут ' + name + 'и мне ' + age + ' лет'');
	}
	inside();
}
outside('Алекс'); // Меня зовут Алекс и мне 26 лет</code></pre>
        <p>
            Например, во внешнюю функцию <code>outside</code> были передан
            параметр <code>name</code> с определенным значением. Когда мы
            вызовем функцию <code>outside</code> и передадим в нее аргументом
            какое-то имя (в примере "Алекс"), то данная
            <span class="attention">переменная замыкается</span> или, иначе
            говоря, <span class="attention">запоминается</span> в лексическом
            окружении данной функции.
        </p>
        <p>
            И когда будет вызвана функция <code>inside</code>, она возьмет из
            своего внешнего лексического окружения переменные
            <code>name</code> (замкнута внутри функции <code>outside</code>) и
            <code>age</code> (определена внутри функции <code>outside</code>).
        </p>
        <p>
            Именно поэтому результатом вызова функции
            <code>outside</code> будет вывод в консоль строки "Меня зовут Алекс и
            мне 26 лет".
        </p>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
