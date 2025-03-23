import { IInfo } from 'src/app/shared/interfaces';

export const FORM_FIELD_STATES: IInfo = {
    title: 'Состояния формы и ее полей',
    body: `<p>
                У шаблонных и реактивных форм как для полей форм, так и для формы в целом можно отслеживать различные
                состояния:
            </p>
            <ul>
                <li>
                    <span class="attention">было ли поле хоть раз в фокусе</span> (<code>touched</code> /
                    <code>untouched</code>);
                </li>
                <li>
                    <span class="attention">было ли изменено начальное значение поля</span> (<code>pristine</code> /
                    <code>dirty</code>);
                </li>
                <li>
                    <span class="attention">валидно ли значение поля</span> (<code>valid</code> / <code>invalid</code>).
                </li>
            </ul>
            <p>Но для формы в целом есть ещё одно состояние:</p>
            <ul>
                <li><span class="attention">отправлена ли форма</span> (<code>submitted</code>).</li>
            </ul>
            <p>
                И в зависимости от этих состояний можно делать различные действия. Более того, эти состояния можно
                отслеживать непосредственно в разметке, т.к. в зависимости от того, правдиво условие для состояния или
                нет, ему добавляется тот или иной CSS-класс, которому просто добавляется префикс <code>ng-</code>:
            </p>
            <pre><code class="language-typescript">&lt;input class="some-css-class ng-untouched ng-pristine ng-valid">;</code></pre>
            <p>В примере выше инпут имеет следующие состояния:</p>
            <ul>
                <li>он еще не был в фокусе (<code>ng-untouched</code>);</li>
                <li>его значение еще не было изменено (<code>ng-pristine</code>);</li>
                <li>его текущее значение валидно (<code>ng-valid</code>).</li>
            </ul>
            <p>
                Также обратите внимание на CSS-класс <code>some-css-class</code>. Это произвольный пользовательский
                CSS-класс. Классы состояний добавляются уже после имеющихся CSS-классов на элементе разметки.
            </p>
            <p>
                С состоянием <code>submitted</code> дела обстоят немного по-другому.
                <span class="attention">
                    Пока форма не отправлена, данное состояние не добавляет никакой CSS-класс на тег
                    <code>form</code></span
                >. Но как только форма будет хотя бы раз отправлена, ей добавится CSS-класс <code>ng-submitted</code>.
            </p>`,
    selected: false,
    lastUpdate: '23.03.2025',
};
