import { IQuestion } from '@types';

export const prototypeQuestions: IQuestion[] = [
    {
        title: 'Прототип. Определение',
        body: `<p>
            <span class="attention">Прототип</span> (prototype) - Это
            объект-шаблон, который присутствует у любого объекта в JavaScript и
            от которого объекты наследуют свойства и методы.
        </p>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
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
    },
    {
        title: 'Принцип работы цепочки прототипов в <span class="variable">JavaScript</span>',
        body: `<p>
            Каждый объект в JavaScript имеет свой объект-прототип. Но при этом,
            объект-прототип может иметь свой прототип и наследовать его свойства
            и методы (и так далее).
        </p>
        <p>
            Иначе говоря, если в родительском объекте не находится нужное
            свойство или метод, то оно ищется в прототипе данного объекта. Если
            в прототипе объекта не было найдено искомое свойство или метод и у
            прототипа объекта есть свой собственный прототип, то свойство или
            метод будут уже искаться в нем. То есть,
            <span class="attention">
                поиск идет по цепочке прототипов сверху вниз
            </span>
            .
        </p>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Конец цепочки прототипов',
        body: `<p>
            Цепочка заканчивается, если
            <span class="attention">прототип становится равным <code>null</code></span>.
        </p>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Назначение объекта <span class="variable">a</span> прототипом объекта <span class="variable">b</span>',
        body: ``,
        selected: false,
        lastUpdate: '09.02.2024',
        disabled: true,
    },
];
