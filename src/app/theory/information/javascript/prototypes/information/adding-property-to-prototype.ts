import { IInfo } from '@types';

export const ADDING_PROPERTY_TO_PROTOTYPE: IInfo = {
    title: 'Добавление собственного метода или свойства в прототип',
    body: `<p>
            Чтобы добавить свое свойство / метод в глобальный прототип для
            объекта, используется следующая запись:
        </p>
<pre><code class="language-javascript">Object.prototype.sayHello = function() {...}</code></pre>
        <p>
            В коде выше представлен
            <span class="attention">
                пример для глобального объекта Object
            </span>
            .
        </p>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
