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
];
// {
//     question: ``,
//     answers: [
//         { text: '', right: true },
//         { text: '', right: false },
//     ],
// },
