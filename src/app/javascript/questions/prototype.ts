import { IQuestion } from '@types';

export const prototypeQuestions: IQuestion[] = [
    {
        title: 'Что такое прототип?',
        body: `<p>
            <span class="attention">Прототип</span> (prototype) - Это
            объект-шаблон, который присутствует у любого объекта в JavaScript и
            от которого объекты наследуют свойства и методы.
        </p>`,
        selected: false,
    },
    {
        title: 'Как добавить свой метод или свойство в прототип?',
        body: `<p>
            Чтобы добавить свое свойство / метод в глобальный прототип для
            объекта, используется следующая запись:
        </p>

        <pre>
<code><span class="object">Object</span>.prototype.<span class="function-name">sayHello</span> = <span class="keyword">function</span><span class="punctuation">()</span><span class="punctuation">{</span>...<span class="punctuation">}</span>
</code>
</pre>
        <p>
            В коде выше представлен
            <span class="attention">
                пример для глобального объекта Object
            </span>
            .
        </p>`,
        selected: false,
    },
    {
        title: 'Как работает цепочка прототипов в JavaScript?',
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
    },
    {
        title: 'Чем заканчивается цепочка прототипов?',
        body: `<p>
            Цепочка заканчивается, если
            <span class="attention">прототип становится равным <code>null</code></span>.
        </p>`,
        selected: false,
    },
    {
        title: 'Как сделать объект "а" прототипом объекта "b"?',
        body: `<p>
            <i>В разработке...</i>
        </p>`,
        selected: false,
    },
];
