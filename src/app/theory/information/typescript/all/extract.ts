import { IInfo } from 'src/app/shared/interfaces';

export const EXTRACT: IInfo = {
    title: '<span class="variable">Extract</span>',
    body: `<p>
                Утилита <code>Extract</code>
                <span class="attention">берет из <code>union</code>-типа только указанные пересечения</span>.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">type Status = 'success' | 'error' | 'loading' | 'unknown';

type WithoutLoading = Extract&lt;Status, 'loading' | 'unknown'>;</code></pre>
            <p>Результат:</p>
            <pre><code class="language-typescript">'loading' | 'unknown'</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2026',
};
