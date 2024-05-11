import { IInfo } from '@types';

export const OBJECTS_THROUGH_INPUT: IInfo = {
    title: 'Передача объектов через декоратор <span class="variable">@Input()</span>',
    body: `<p>
            <span class="attention"
                >В JavaScript объекты передаются по ссылке</span
            >. Поэтому, если сначала передать объект через декоратор
            <code>@Input()</code> в дочерний компонент, а потом поменять в этом
            объекте какое-то значение и попытаться вновь передать тот же объект
            с измененным значением в дочерний компонент, то в дочернем
            компоненте вы не увидите никаких изменений.
        </p>
        <p>
            Чтобы решить данную проблему, необходимо каждый раз передавать в
            дочерний компонент новый объект. Ниже приведен один из вариантов
            решения через <code>spread-оператор</code>.
        </p>
        <pre><code class="language-typescript">this.someObject = { ...this.someObject, name: 'новое имя' }</code></pre>`,
    selected: false,
    lastUpdate: '14.09.2023',
};
