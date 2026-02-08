import { IInfo } from 'src/app/shared/interfaces';

export const EXCLUDE: IInfo = {
    title: '<span class="variable">Exclude</span>',
    body: `<p>
                Утилита <code>Exclude</code>
                <span class="attention">удаляет из <code>union</code>-типа указанные значения</span>.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">type Status = 'success' | 'error' | 'loading' | 'unknown';

type WithoutLoading = Exclude&lt;Status, 'loading' | 'unknown'>;</code></pre>
            <p>Результат:</p>
            <pre><code class="language-typescript">'success' | 'error'</code></pre>
            <p>Другой пример:</p>
            <pre><code class="language-typescript">type SomeUnionType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;</code></pre>
            <p>Результат:</p>
            <pre><code class="language-typescript">'c'</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2026',
};
