import { IInfo } from 'src/app/shared/interfaces';

export const NON_NULLABLE: IInfo = {
    title: '<span class="variable">NonNullable</span>',
    body: `<p>
                Утилита <code>NonNullable</code>
                <span class="attention"
                    >удаляет <code>null</code> и <code>undefined</code> из <code>union</code>-типа</span
                >.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">type MaybeString = string | null | undefined;

type SafeString = NonNullable&lt;MaybeString>;</code></pre>
            <p>Результат:</p>
            <pre><code class="language-typescript">string</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2026',
};
