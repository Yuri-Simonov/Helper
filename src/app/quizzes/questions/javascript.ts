import { IInfosAndAnswer } from '../../shared/types';

export const javascriptTestQuestions: IInfosAndAnswer[] = [
    {
        question: `Что является результатом выполнения метода fetch?`,
        answers: [
            { text: 'Promise', right: true },
            { text: 'Observable', right: false },
            { text: 'Object', right: false },
            { text: 'Array', right: false },
            { text: 'Boolean', right: false },
        ],
    },
    {
        question: `Что будет результатом вызова функции setTimeout или setInterval?`,
        answers: [
            {
                text: 'Они возвращают «идентификатор таймера» timerId, который можно использовать для отмены их дальнейшего выполнения',
                right: true,
            },
            { text: 'undefined', right: false },
            { text: 'null', right: false },
            { text: 'Ничего не будет', right: false },
            { text: 'timestamp', right: false },
            { text: 'Они возвращают время, которое потребовалось на их выполнение', right: false },
        ],
    },
    {
        question: `Что выполнится в быстрее, нулевой setTimeout или Promise, у которого сразу вызывается resolve?`,
        answers: [
            {
                text: 'Promise.resolve планирует микро-задачу, а setTimeout - макро-задачу. И т.к. у микро-задач приоритет выше, поэтому Promise выполнится быстрее',
                right: true,
            },
            {
                text: 'Promise.resolve планирует микро-задачу, а setTimeout - макро-задачу. И т.к. у макро-задач приоритет выше, поэтому setTimeout выполнится быстрее',
                right: false,
            },
            { text: 'Что идет выше по коду, то и выполнится первым', right: false },
            { text: 'Выполнятся одинаково', right: false },
        ],
    },
    {
        question: `Что такое instanceof?`,
        answers: [
            { text: 'Оператор instanceof проверяет, принадлежит ли объект к определённому классу', right: true },
            {
                text: 'Оператор instanceof присваивает указанный объект к определённому классу',
                right: false,
            },
            {
                text: 'Оператор instanceof проверяет, является ли текущий объект прототипом определённого объекта',
                right: false,
            },
            {
                text: 'Оператор instanceof проверяет, указан ли у объекта модификатор доступа',
                right: false,
            },
        ],
    },
    {
        question: `Что может быть ключом в коллекции Map?`,
        answers: [
            {
                text: 'Ключом может быть любое значение: объект, функция, примитивное значение, null, undefined или NaN',
                right: true,
            },
            { text: 'Числа, строки и символы', right: false },
            { text: 'Числа и строки', right: false },
            { text: 'Ключом может быть любое значение, кроме null, undefined и NaN', right: false },
        ],
    },
    {
        question: `Какой набор методов можно использовать для глубокого клонирования объекта? (lodash - это сторонняя библиотека)`,
        answers: [
            { text: 'structuredClone(obj), lodash.cloneDeep(obj), JSON.parse(JSON.stringify(obj))', right: true },
            { text: 'structuredClone(obj), lodash.cloneDeep(obj), Object.assign()', right: false },
            { text: 'spread-оператор, Object.create(), Object.assign()', right: false },
            { text: 'structuredClone(obj), Object.create(), JSON.parse(JSON.stringify(obj))', right: false },
        ],
    },
    {
        question: `Какой набор методов можно использовать для поверхностного клонирования объекта?`,
        answers: [
            { text: 'spread-оператор, Object.create(), Object.assign()', right: true },
            { text: 'structuredClone(obj), spread-оператор, JSON.parse(JSON.stringify(obj))', right: false },
            { text: 'structuredClone(obj), Object.create(), Object.assign()', right: false },
            { text: 'spread-оператор, Object.create(), JSON.parse(JSON.stringify(obj))', right: false },
        ],
    },
    {
        question: `Что такое замыкание (closure)?`,
        answers: [
            {
                text: 'Это функция, которая запоминает область видимости, в которой она была создана, и имеет доступ к своим внешним переменным даже после того, как внешняя функция завершила выполнение',
                right: true,
            },
            { text: 'Это способ управления памятью в JavaScript', right: false },
            { text: 'Это специальная функция для работы с объектами', right: false },
            { text: 'Это функция, которая возвращает другую функцию', right: false },
            { text: 'Это функция, которая выполняется немедленно после создания', right: false },
        ],
    },
    {
        question: `В чем разница между let, const и var?`,
        answers: [
            {
                text: 'var имеет функциональную область видимости, а let и const — блочную. const не позволяет изменять значение переменной',
                right: true,
            },
            { text: 'let и var имеют блочную область видимости, а const глобальную', right: false },
            { text: 'let и const используются только в строгом режиме, а var — в любом режиме', right: false },
        ],
    },
    {
        question: `Что такое всплытие (hoisting) в JavaScript?`,
        answers: [
            {
                text: 'Это процесс, при котором переменные и функции передвигаются в начало своей области видимости перед выполнением кода',
                right: true,
            },
            {
                text: 'Это механизм, который предотвращает конфликты между глобальными и локальными переменными',
                right: false,
            },
            { text: 'Это когда переменные могут использоваться до того, как они объявлены', right: false },
        ],
    },
    {
        question: `Как работает асинхронность в JavaScript?`,
        answers: [
            {
                text: 'Асинхронность достигается с помощью коллбеков, промисов и async/await, что позволяет выполнять другие задачи, пока ожидание завершения долгих операций продолжается',
                right: true,
            },
            { text: 'JavaScript выполняет код последовательно, строка за строкой, без пауз', right: false },
            {
                text: 'JavaScript не поддерживает асинхронные операции, это делается с помощью внешних библиотек',
                right: false,
            },
        ],
    },
    {
        question: `Что такое Event Loop?`,
        answers: [
            {
                text: 'Это механизм, который позволяет JavaScript быть однопоточным и при этом эффективно обрабатывать асинхронные операции',
                right: true,
            },
            { text: 'Это встроенный таймер, который отслеживает события в системе', right: false },
            { text: 'Это механизм, который позволяет работать с циклами внутри асинхронных функций', right: false },
            { text: 'Это механизм для обработки и выполнения нескольких событий в браузере', right: false },
            { text: 'Это бесконечный цикл для выполнения асинхронного кода', right: false },
        ],
    },
    {
        question: `Что такое строгий режим (strict mode) и зачем он используется?`,
        answers: [
            {
                text: 'Это режим, который вводит новые строгие правила работы с переменными и функциями, что помогает избегать ошибок',
                right: true,
            },
            {
                text: 'Это режим, который упрощает написание кода и предотвращает использование устаревших синтаксических конструкций',
                right: false,
            },
            { text: 'Это специальный режим для работы с асинхронными операциями', right: false },
        ],
    },
    {
        question: `Что такое this в JavaScript и как оно работает?`,
        answers: [
            { text: 'this указывает на объект, к которому принадлежит текущий код', right: true },
            { text: 'this всегда ссылается на глобальный объект', right: false },
            { text: 'this ссылается на объект, в котором была объявлена функция', right: false },
        ],
    },
    {
        question: `Какая разница между call, apply и bind?`,
        answers: [
            {
                text: 'call и apply вызывают функцию с контекстом, а bind возвращает новую функцию с фиксированным контекстом',
                right: true,
            },
            { text: 'call и bind одинаковы, но apply принимает массив в качестве аргументов', right: false },
            { text: 'Все три метода делают одно и то же, просто используют разные способы вызова', right: false },
        ],
    },
    {
        question: `<h2>Что выведет следующий код?</h2>
    	<pre><code class="language-javascript">console.log(1 + "2" + "2");</code></pre>`,
        answers: [
            { text: '122', right: true },
            { text: '5', right: false },
            { text: 'NaN', right: false },
            { text: '32', right: false },
            { text: '14', right: false },
        ],
    },
    {
        question: `В чём разница между == и ===?`,
        answers: [
            { text: '== сравнивает только значения, а === сравнивает значения и типы данных', right: true },
            { text: '=== используется для строгого сравнения, а == только для чисел', right: false },
            { text: '=== сравнивает только значения, а == сравнивает значения и типы данных', right: false },
            { text: 'Оба работают одинаково, но === медленнее', right: false },
        ],
    },
    {
        question: `Что такое "IIFE" (Immediately Invoked Function Expression)?`,
        answers: [
            { text: 'Это функция, которая создаётся и немедленно вызывается', right: true },
            { text: 'Это функция, которая вызывается после определённого события', right: false },
            { text: 'Это метод, используемый для выполнения отложенных действий', right: false },
        ],
    },
    {
        question: `Чем отличаются null и undefined?`,
        answers: [
            {
                text: 'null обозначает намеренное отсутствие значения в переменной, а undefined — что переменной ещё не присвоено значение',
                right: true,
            },
            { text: 'Оба значения одинаковы, они представляют отсутствие значения', right: false },
            {
                text: 'undefined обозначает намеренное отсутствие значения в переменной, а null — что переменной ещё не присвоено значение',
                right: false,
            },
        ],
    },
    {
        question: `Что такое Promise в JavaScript?`,
        answers: [
            {
                text: 'Это специальный объект, представляющий отложенное (асинхронное) выполнение, который может завершиться успешно с результатом (resolve) или с ошибкой (reject)',
                right: true,
            },
            { text: 'Это функция, которая исполняется через определённое время', right: false },
            { text: 'Это метод для обработки ошибок в асинхронном коде', right: false },
        ],
    },
    {
        question: `Что такое Map?`,
        answers: [
            {
                text: 'Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа',
                right: true,
            },
            { text: 'Это объект, в котором можно использовать методы массивов', right: false },
            {
                text: 'Map – это коллекция значений, в которых каждое значение может встречаться только один раз, т.е., оно уникально в коллекции',
                right: false,
            },
        ],
    },
    {
        question: `Что такое Set?`,
        answers: [
            {
                text: 'Set – это коллекция значений, в которых каждое значение может встречаться только один раз, т.е., оно уникально в коллекции',
                right: true,
            },
            {
                text: 'Set – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Set позволяет использовать ключи любого типа',
                right: false,
            },
            { text: 'Это объект, в котором можно использовать методы массивов', right: false },
        ],
    },
    {
        question: `Какая коллекция позволяет хранить уникальные значения в JavaScript?`,
        answers: [
            { text: 'Set', right: true },
            { text: 'Map', right: false },
            { text: 'Array', right: false },
            { text: 'Object', right: false },
            { text: 'Set и Map', right: false },
        ],
    },
    {
        question: `Что такое каррирование (currying)?`,
        answers: [
            {
                text: 'Это преобразование функции, которая принимает несколько аргументов, в функцию, которая последовательно принимает по одному аргументу',
                right: true,
            },
            { text: 'Это метод выполнения нескольких функций одновременно', right: false },
            { text: 'Это процесс, позволяющий игнорировать замыкание функции', right: false },
            { text: 'Это процесс клонирования функций для последующего использования', right: false },
        ],
    },
    {
        question: `<p>Что выведет следующий код?</p>
		<pre><code class="language-javascript">let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);</code></pre>`,
        answers: [
            { text: '[1, 2, 3, 4]', right: true },
            { text: '[1, 2, 3]', right: false },
            { text: 'Будет ошибка', right: false },
            { text: 'undefined', right: false },
        ],
    },
    {
        question: `Какая область видимости у переменных, объявленных через var?`,
        answers: [
            { text: 'Функциональная область видимости', right: true },
            { text: 'Блочная область видимости', right: false },
            { text: 'Глобальная область видимости', right: false },
            { text: 'У переменных, объявленных через var, нет области видимости', right: false },
        ],
    },
    {
        question: `<p>Что выведет следующий код?</p>
		<pre><code class="language-javascript">function test() {
	console.log(a);
	var a = 1;
}
test();</code></pre>`,
        answers: [
            { text: 'undefined', right: true },
            { text: 'Будет ошибка', right: false },
            { text: 'null', right: false },
            { text: '1', right: false },
        ],
    },
    {
        question: `Как изменить контекст выполнения функции?`,
        answers: [
            { text: 'Использовать методы call, apply или bind', right: true },
            { text: 'В JavaScript нельзя изменить контекст выполнения функции', right: false },
            { text: 'Использовать оператор this внутри функции', right: false },
        ],
    },
    {
        question: `<p>Что выведет следующий код?</p>
		<pre><code class="language-javascript">const obj = {
	name: 'John',
	getName: function() {
		return this.name;
	}
};

const getName = obj.getName;
console.log(getName());
</code></pre>`,
        answers: [
            { text: 'undefined', right: true },
            { text: 'Будет ошибка', right: false },
            { text: 'John', right: false },
            { text: '[object Object]', right: false },
        ],
    },
    {
        question: `<p>Потеряется ли контекст вызова функции в следующем коде?</p>
		<pre><code class="language-javascript">const obj = {
	name: 'John',
	getName: function() {
		return this.name;
	}
};

const getName = obj.getName;
console.log(getName());</code></pre>`,
        answers: [
            {
                text: 'Да, т.к. в JavaScript ключевое слово this ссылается на объект, который "владеет" функцией при её вызове. В данном примере this будет ссылаться на глобальный объект window',
                right: true,
            },
            {
                text: 'Нет, т.к. в переменную getName записан метод из объекта obj, в котором уже указано this на объект obj',
                right: false,
            },
        ],
    },
    {
        question: `<p>Что выведет следующий код?</p>
		<pre><code class="language-javascript">let x = 10;
function outer() {
  let x = 20;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();</code></pre>`,
        answers: [
            { text: '20', right: true },
            { text: '10', right: false },
            { text: 'Будет ошибка', right: false },
            { text: 'undefined', right: false },
        ],
    },
];
// {
//     question: ``,
//     answers: [
//         { text: '', right: true },
//         { text: '', right: false },
//     ],
// },
