import { IInfo } from 'src/app/shared/interfaces';

export const DIFFERENCE_AND_SIMILARITY_BETWEEN_NULL_AND_UNDEFINED: IInfo = {
    title: 'Разница и схожесть между <span class="variable">null</span> и <span class="variable">undefined</span>',
    body: `<i class="subtitle">Различия</i>
            <p>Определение:</p>
            <ul>
                <li>
                    <code>undefined</code> — это
                    <span class="attention"
                        >значение по умолчанию для необъявленных или неинициализированных переменных</span
                    >;
                </li>
                <li>
                    <code>null</code> — это
                    <span class="attention">намеренное отсутствие значения, которое присваивается явно</span>.
                </li>
            </ul>
            <p>Тип данных (<code>typeof</code>):</p>
            <ul>
                <li><code>undefined</code> — это "undefined";</li>
                <li><code>null</code> — это "object" (из-за бага в JS).</li>
            </ul>
            <p>Места, где встречается:</p>
            <ul>
                <li>
                    <code>undefined</code> — переменная объявлена, но не инициализирована; у объекта отсутствует
                    свойство; функция без <code>return</code> возвращает <code>undefined</code>;
                </li>
                <li><code>null</code> — присваивается намеренно для указания отсутствующего значения.</li>
            </ul>
            <i class="subtitle">Сходства</i>
            <ul>
                <li>
                    Оба приводятся к <code>false</code> в логическом контексте (<code>if (!undefined)</code>,
                    <code>if (!null)</code>);
                </li>
                <li>Оба обозначают "отсутствие значения".</li>
            </ul>
            <i class="subtitle">Шпаргалка</i>
            <p>
                Ниже представлены различные кейсы с приведением <code>null</code> и <code>undefined</code> к логическому
                контексту:
            </p>
            <pre><code class="language-typescript">console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(null == null); // true
console.log(null === null); // true

console.log(undefined == undefined); // true
console.log(undefined === undefined); // true

console.log(null == false); // false
console.log(undefined == false); // false

console.log(null == 0); // false
console.log(undefined == 0); // false

console.log(null >= 0);  // true  (🤯 странный случай)
console.log(null > 0);  // false
console.log(null <= 0);  // true
console.log(null < 0);  // false

console.log(undefined >= 0); // false
console.log(undefined > 0); // false
console.log(undefined <= 0); // false
console.log(undefined < 0); // false

console.log(null + 1); // 1 (null приводится к 0)
console.log(undefined + 1); // NaN (undefined при арифметике становится NaN)

console.log(null || "fallback"); // "fallback" (null приводится к false)
console.log(undefined || "fallback"); // "fallback" (undefined приводится к false)

console.log(null && "value"); // null (null приводится к false, поэтому возвращается сам null)
console.log(undefined && "value"); // undefined (аналогично)
</code></pre>`,
    selected: false,
    lastUpdate: '21.02.2025',
};
