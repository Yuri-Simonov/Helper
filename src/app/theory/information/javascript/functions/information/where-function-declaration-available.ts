import { IInfo } from '@types';

export const WHERE_FUNCTION_DECLARATION_AVAILABLE: IInfo = {
    title: 'Объяснение, почему функции, объявленные через <span class="variable">Function Declaration</span> можно вызывать перед их определением в коде',
    body: `<p>
            Функции, объявленные через <code>Function Declaration</code>, в
            отличие от переменных, объявленных с помощью <code>let</code> и
            <code>const</code> (сюда же входит и
            <code>Function Expression</code>),
            <span class="attention">
                инициализируются, когда создаётся их лексическое окружение,
            </span>
            а не когда происходит их вызов в коде.
        </p>
        <p>
            Лексическое окружение верхнеуровневых функций, объявленных через
            <code>Function Declaration</code>,
            <span class="attention">
                создается сразу после начала считывания кода интерпретатором.
            </span>
        </p>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
