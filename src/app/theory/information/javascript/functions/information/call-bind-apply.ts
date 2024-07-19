import { IInfo } from '@types';

export const CALL_BIND_APPLY: IInfo = {
    title: 'Методы <span class="variable">call</span>, <span class="variable">bind</span> и <span class="variable">apply</span>',
    body: `<p>
                <span class="attention">
                    Методы <code>call</code>, <code>apply</code> и <code>bind</code> позволяют задавать контекст
                    выполнения функции
                </span>
                (<code>this</code>).
            </p>
            <i class="subtitle">Метод <code>call</code></i>
            <p>
                <span class="attention">
                    Метод <code>call</code> вызывает функцию с указанным значением <code>this</code> и аргументами,
                    переданными по отдельности </span
                >.
            </p>
            <pre><code class="language-javascript">func.call(thisArg, arg1, arg2, ...);</code></pre>
            <p>Пример:</p>
            <pre><code class="language-javascript">function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const user = {
    name: 'Алиса'
};

greet.call(user, 'Привет', '!');</code></pre>
            <p>
                В этом примере <code>this</code> внутри функции <code>greet</code> будет ссылаться на объект
                <code>user</code>, и консоль выведет:
            </p>
            <pre><code class="language-javascript">Привет, Алиса!</code></pre>
            <p>Данный метод удобен, когда точно известно количество передаваемых аргументов.</p>
            <i class="subtitle">Метод <code>apply</code></i>
            <p>
                <span class="attention"
                    >Метод <code>apply</code> аналогичен методу <code>call</code>, но принимает аргументы в виде
                    массива</span
                >.
            </p>
            <pre><code class="language-javascript">func.apply(thisArg, [argsArray]);</code></pre>
            <p>Пример:</p>
            <pre><code class="language-javascript">function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

const user = {
    name: "Алиса",
};

greet.apply(user, ["Привет", "!"]);</code></pre>
            <p>
                В этом примере <code>this</code> внутри функции <code>greet</code> также будет ссылаться на объект
                <code>user</code>, и консоль выведет:
            </p>
            <pre><code class="language-javascript">Привет, Алиса!</code></pre>
            <p>Данный метод удобен, когда неизвестно точное количество передаваемых аргументов.</p>
            <i class="subtitle">Метод <code>bind</code></i>
            <p>
                <span class="attention">
                    Метод <code>bind</code> создает новую функцию, которая при вызове имеет установленное значение
                    <code>this</code> и заданные начальные аргументы</span
                >.
            </p>
            <pre><code class="language-javascript">let boundFunc = func.bind(thisArg, arg1, arg2, ...);</code></pre>
            <p>Пример:</p>
            <pre><code class="language-javascript">function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

const user = {
    name: "Алиса",
};

const greetAlice = greet.bind(user, "Привет");
greetAlice("!");</code></pre>
            <p>
                В этом примере создается новая функция <code>greetAlice</code>, которая привязывает значение
                <code>this</code> к объекту <code>user</code> и передает первый аргумент <code>greeting</code> как
                <code>"Привет"</code>. В результате консоль выведет:
            </p>
            <pre><code class="language-javascript">Привет, Алиса!</code></pre>
            <p>
                Метод <code>bind</code> может быть полезен для создания функций с предварительно установленными
                аргументами:
            </p>
            <pre><code class="language-javascript">function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // 10
</code></pre>
            <p>В этом примере создается функция <code>double</code>, которая всегда умножает число на 2.</p>
            <i class="subtitle">Сравнение методов</i>
            <ul>
                <li>
                    <span class="attention">Методы <code>call</code> и <code>apply</code> вызывают функцию немедленно;</span>
                </li>
                <li>
                    <span class="attention"
                        >Метод <code>bind</code> возвращает новую функцию, которая может быть вызвана позже.</span
                    >
                </li>
            </ul>`,
    selected: false,
    lastUpdate: '19.07.2024',
};
