import { IInfo } from 'src/app/shared/interfaces';

export const AWAITED: IInfo = {
    title: '<span class="variable">Awaited</span>',
    body: `<p>
                Утилита <code>Awaited</code>
                <span class="attention"
                    >возвращает тип значения, которым завершится <code>Promise</code> при успешном выполнении</span
                >.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">type Result = Awaited&lt;Promise&lt;string>>;</code></pre>
            <p>Результат:</p>
            <pre><code class="language-typescript">string</code></pre>
            <p>Данная утилита умеет разворачивать и вложенные <code>Promise</code>:</p>
            <pre><code class="language-typescript">type Nested = Awaited&lt;Promise&lt;Promise&lt;string>>>;</code></pre>
            <p>Результат:</p>
            <pre><code class="language-typescript">string</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2026',
};
