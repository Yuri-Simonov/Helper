import { IInfo } from 'src/app/shared/interfaces';

export const READONLY: IInfo = {
    title: '<span class="variable">Readonly</span>',
    body: `<p>
                Утилита <code>Readonly</code>
                <span class="attention">делает все свойства указанного типа доступными только для чтения</span>.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">interface User {
    id: number;
    name: string;
}

type ReadonlyUser = Readonly&lt;User>;</code></pre>
            <p>Фактически TypeScript превращает тип <code>ReadonlyUser</code> в:</p>
            <pre><code class="language-typescript">{
    readonly id: number;
    readonly name: string;
}</code></pre>
            <p>То есть добавляется модификатор <code>readonly</code> к свойствам типа.</p>
            <p>На практике это выглядит следующим образом:</p>
            <pre><code class="language-typescript">const user: ReadonlyUser = {
    id: 1,
    name: 'Вася'
};

// пытаемся изменить свойство
user.name = 'Катя'; // Здесь мы получим ошибку компиляции, т.к. свойство неизменяемое</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2026',
};
