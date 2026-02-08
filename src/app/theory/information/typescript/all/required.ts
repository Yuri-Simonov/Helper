import { IInfo } from 'src/app/shared/interfaces';

export const REQUIRED: IInfo = {
    title: '<span class="variable">Required</span>',
    body: `<p>
                Утилита <code>Required</code>
                <span class="attention">делает все свойства указанного типа обязательными</span>.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">interface User {
    id?: number;
    name?: string;
    email?: string;
}

type RequiredUser = Required&lt;User>;</code></pre>
            <p>Результат:</p>
            <pre><code class="language-typescript">{
    id: number;
    name: string;
    email: string;
}</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2026',
};
