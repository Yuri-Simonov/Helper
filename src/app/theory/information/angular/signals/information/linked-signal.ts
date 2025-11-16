import { IInfo } from 'src/app/shared/interfaces';

export const LINKED_SIGNAL: IInfo = {
    title: '<span class="variable">linkedSignal</span>',
    body: `<p>
                Сигнал <code>linkedSignal</code>
                <span class="attention">берет один или несколько сигналов и вычисляет на их основе новое значение</span
                >. Он похож на <code>computed</code>, но между ними есть отличия.
            </p>
            <p>
                <code>computed</code> - это чистая, stateless (без состояния) функция. Она получает на вход текущие
                значения зависимостей и возвращает результат.
                <span class="attention"
                    >Она ничего не знает о том, каким было ее предыдущее значение или какими были значения зависимостей
                    в прошлый раз</span
                >.
            </p>
            <p>
                <code>linkedSignal</code> решает именно эту проблему. Это версия <code>computed</code>, но имеющая
                состояния: предыдущее и текущее.
            </p>
            <p>Сигнатуры <code>computed</code> и <code>linkedSignal</code>:</p>
            <pre><code class="language-typescript">computed( () => T )

linkedSignal({ source: () => S, computation: (source: S, previous?: { source: S, value: D }) => D })
// предыдущее состояние доступно через параметр previous</code></pre>`,
    selected: false,
    lastUpdate: '16.11.2025',
};
