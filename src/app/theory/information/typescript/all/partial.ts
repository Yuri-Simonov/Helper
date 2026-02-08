import { IInfo } from 'src/app/shared/interfaces';

export const PARTIAL: IInfo = {
    title: '<span class="variable">Partial</span>',
    body: `<p>Утилита <code>Partial</code> <span class="attention">делает все свойства указанного типа опциональными</span>.</p>
            <p>Пример:</p>
            <pre><code class="language-typescript">interface User {
    id: number;
    name: string;
    email: string;
}

type PartialUser = Partial&lt;User>;</code></pre>
            <p>Результат:</p>
            <pre><code class="language-typescript">{
    id?: number;
    name?: string;
    email?: string;
}</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2026',
};
