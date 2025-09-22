import { IInfo } from 'src/app/shared/interfaces';

export const DIFFERENCE_BETWEEN_NULLISH_COALESCING_AND_OR_OPERATORS: IInfo = {
    title: 'Разница между операторами «<span class="variable">??</span>» и «<span class="variable">||</span>»',
    body: `<p>
                Тут стоит понимать, что <code>||</code>
                <span class="attention">возвращает первое правдивое значение или последнее ложное</span>
                (<code>false</code>, <code>0</code>, <code>''</code>, <code>NaN</code>, <code>null</code>,
                <code>undefined</code>)<span class="attention">, если в цепочке все значения ложные</span>. А <code>??</code>
                <span class="attention">
                    проверяет только, что выражение слева не <code>null</code> и не <code>undefined</code></span>.
					Остальные "ложные" значения (<code>false</code>, <code>0</code> и <code>''</code>) он сохраняет, что
                делает его более полезным инструментом для выбора значений в определенных ситуациях.
            </p>
            <i class="subtitle">Примеры использования «||»</i>
            <pre><code class="language-typescript">console.log(false || "default"); // "default"
console.log(0 || "default"); // "default"
console.log("" || "default"); // "default"
console.log(null || "default"); // "default"
console.log(undefined || "default"); // "default"
console.log(NaN || "default"); // "default"
</code></pre>
            <i class="subtitle">Примеры использования «??»</i>
            <pre><code class="language-typescript">console.log(false ?? "default"); // false
console.log(0 ?? "default"); // 0
console.log("" ?? "default"); // ""
console.log(null ?? "default"); // "default"
console.log(undefined ?? "default"); // "default"
console.log(NaN ?? "default"); // NaN
</code></pre>`,
    selected: false,
    lastUpdate: '25.02.2025',
};
