import { IInfo } from 'src/app/shared/interfaces';

export const REBASE_AND_MERGE_DIFFERENCE: IInfo = {
    title: 'Разница между <span class="variable">merge</span> и <span class="variable">rebase</span>',
    body: `<p>Если отвечать коротко:</p>
            <ul>
                <li>
                    <code>merge</code> - <span class="attention">объединяет ветки, создавая merge commit</span> (если не
                    fast-forward). История остаётся "разветвлённой";
                </li>
                <li>
                    <code>rebase</code> -
                    <span class="attention">
                        переписывает историю, перенося коммиты одной ветки "поверх" другой, создавая новые коммиты с
                        новыми хэшами</span
                    >.
                </li>
            </ul>
            <i class="subtitle">Выполнение команд по шагам</i>
            <p>При выполнении <code>merge</code> происходит следующее:</p>
            <ul>
                <li>Создаётся новый коммит;</li>
                <li>Хэши старых коммитов не меняются;</li>
                <li>История сохраняется.</li>
            </ul>
            <p>При выполнении <code>rebase</code> происходит следующее:</p>
            <ol>
                <li>Определяется общий предок;</li>
                <li>Вычисляются различия каждого коммита;</li>
                <li>
                    Эти различия применяются заново <i>(поверх имеющихся коммитов ветки)</i>. При этом
                    <span class="attention"> каждый присоединенный коммит получает новый хэш</span>.
                </li>
            </ol>
            <i class="subtitle">Как это выглядит на графах</i>
            <p>Допустим у нас есть следующий сценарий:</p>
            <pre><code class="language-html">A---B---C  (main / master)
     &#92;
      D---E  (feature)</code></pre>
            <p>При использовании <code>merge</code> Git создаст новый merge-коммит (<code>M</code>):</p>
            <pre><code class="language-html">A---B-----C  (main / master)
     &#92;     &#92;
      D--E--M  (feature)</code></pre>
            <p>
                Вся история сохраняется. Видно, что была отдельная ветка и в какой момент ее изменения "слились" с
                основной.
            </p>
            <p>Тот же самый изначальный сценарий с <code>rebase</code> будет выглядеть по-другому:</p>
            <pre><code class="language-html">A---B---C---D'---E'  (feature)</code></pre>
            <p>
                Здесь уже старые коммиты <code>D</code> и <code>E</code> больше не участвуют в истории ветки. Они
                заменились на новые коммиты <code>D'</code> и <code>E'</code>. И история осталась линейной.
            </p>
            <i class="subtitle">Прочее</i>
            <p>
                В командах с большим числом разработчиков для feature-веток часто предварительно делают
                <code>rebase</code> на актуальный master или main, что позволяет интегрировать изменения через
                fast-forward и поддерживать линейную историю основной ветки, не создавая лишних промежуточных коммитов
                (merge commit).
            </p>`,
    selected: false,
    lastUpdate: '27.01.2026',
};
