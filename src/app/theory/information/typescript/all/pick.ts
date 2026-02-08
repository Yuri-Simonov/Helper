import { IInfo } from 'src/app/shared/interfaces';

export const PICK: IInfo = {
    title: '<span class="variable">Pick</span>',
    body: `<p>Утилита <code>Pick</code> <span class="attention">берёт из типа только указанные ключи</span>.</p>
            <p>Пример:</p>
            <pre><code class="language-typescript">interface User {
    id: number;
    name: string;
    email: string;
}

type UserPreview = Pick&lt;User, 'id' | 'name'>;</code></pre>
            <p>Результат:</p>
            <pre><code class="language-typescript">{
    id: number;
    name: string;
}</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2026',
};
