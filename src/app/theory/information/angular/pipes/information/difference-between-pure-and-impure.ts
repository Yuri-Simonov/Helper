import { IInfo } from '@types';

export const DIFFERENCE_BETWEEN_PURE_AND_IMPURE: IInfo = {
    title: 'Разница между <span class="variable">pure</span> и <span class="variable">impure</span> пайпами',
    body: `<p>
                <code>Pure</code> и <code>impure</code> пайпы
                <span class="attention"
                    >отличаются по принципу работы механизма отслеживания
                    изменений.</span
                >
            </p>
            <p>
                Первый тип используется по умолчанию и в конфигурационном
                объекте декоратора <code>@Pipe()</code> обычно не указывается.
            </p>
            <pre><code class="language-typescript">@Pipe({
	name: 'customPipe',
	pure: true // значение по умолчанию, его можно не указывать
})</code></pre>
            <p>
                Для пайп типа <code>pure</code>
                <span class="attention">
                    обновление значения происходит только при его прямом
                    изменении или смене ссылки</span
                >, если речь идет о массивах и объектах.
            </p>
            <p>
                Для пайп типа <code>impure</code>
                <span class="attention">
                    значение будет обновляться при любом изменении данных</span
                >, а также при любом событии, произошедшем в приложении, будь то
                клик мыши, клавиатуры и тд. Но в данном случае в
                конфигурационном объекте уже явно необходимо это указать:
            </p>
            <pre><code class="language-typescript">@Pipe({
	name: 'customPipe',
	pure: false // явное указание типа
})</code></pre>
            <p>
                Второй тип следует использовать с умом, т.к. частое обновление
                значения пайпы требует больших ресурсов.
            </p>`,
    selected: false,
    lastUpdate: '05.11.2023',
    footerLinks: [
        {
            path: 'https://youtu.be/QSxMaa9YCgI',
        },
    ],
};
