import { IInfo } from 'src/app/shared/interfaces';

export const OMIT: IInfo = {
    title: '<span class="variable">Omit</span>',
    body: `<p>Утилита <code>Omit</code> <span class="attention">удаляет из типа указанные ключи</span>.</p>
            <p>Пример:</p>
            <pre><code class="language-typescript">interface User {
    id: number;
    name: string;
    email: string;
    phone: number;
}

type SimpleUser = Omit&lt;User, 'email' | 'phone'>;</code></pre>
            <p>Результат:</p>
            <pre><code class="language-typescript">{
    id: number;
    name: string;
}</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2026',
};
