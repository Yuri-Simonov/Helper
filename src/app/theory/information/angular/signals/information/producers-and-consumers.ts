import { IInfo } from 'src/app/shared/interfaces';

export const PRODUCERS_AND_CONSUMERS: IInfo = {
    title: '<span class="variable">producers</span> и <span class="variable">consumers</span>',
    body: `<p>Реактивные системы, к которым относятся сигналы, строятся на системе графов.</p>
            <p>
                Каждый узел в графе - это <code>ReactiveNode</code>. У него есть список тех, кого он слушает (<span
                    class="attention"
                    >producers</span
                >), и список тех, кто слушает его (<span class="attention">consumers</span>).
            </p>
            <ul>
                <li>Продюсер (Producer): Это узел, который содержит значение. Он - источник истины.</li>
                <li>Консьюмер (Consumer): Это узел, который реагирует на изменение значения у Продюсера.</li>
            </ul>
            <p>
                Некоторые <span class="attention">узлы могут быть и Продюсерами, и Консьюмерами одновременно</span>. Они
                потребляют значения от одних узлов (producers), чтобы произвести новое значение для других (consumers).
            </p>
            <p>Основные инструменты, на которых строится вся система сигналов:</p>
            <ul>
                <li><span class="attention">signal</span> - Источник истины (Чистый Продюсер)</li>
                <li><span class="attention">computed</span> - Производное состояние (Продюсер + Консьюемер)</li>
                <li><span class="attention">effect</span> - Побочный эффект (Чистый Консьюмер)</li>
            </ul>
            <p>Помимо этой троицы, существует важная утилита, которая позволяет нам управлять построением графа:</p>
            <ul>
                <li><span class="attention">untracked</span> - Вне графа</li>
            </ul>
            <p>
                Более подробно о графах, Консьюмерах и Продюсерах можно
                <a href="https://habr.com/ru/articles/951486/" target="_blank">почитать в данной статье</a>. Очень
                рекомендую.
            </p>`,
    selected: false,
    lastUpdate: '04.11.2025',
};
