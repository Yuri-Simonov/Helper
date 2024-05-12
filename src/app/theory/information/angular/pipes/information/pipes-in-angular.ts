import { IInfo } from '@types';

export const PIPES_IN_ANGULAR: IInfo = {
    title: 'Пайпы в Angular',
    body: `<p>
                <span class="attention">Angular pipe</span> - это класс, который
                предваряется декоратором <code>@Pipe()</code> и реализует
                интерфейс <code>PipeTransform</code> с одним единственным
                методом <code>transform()</code>. <span class="attention">Они используются для преобразования
                данных прямо в HTML-шаблоне</span>. Их также называют "фильтрами".
            </p>
            <p>
                Простой пример использования пайпы, в котором текст приводится в
                нижний регистр:
            </p>
            <pre><code class="language-html">&lt;p>{{ "ПРИМЕР" | lowercase }}&lt;/p></code></pre>
            <p>
                Как видно из примера, наименование пайпы указывается после
                символа "<code>|</code>", следующим за значением, которое
                необходимо преобразовать.
            </p>
            <p>
                Некоторые пайпы, такие как <code>date</code>, принимают
                параметры, передаваемые после имени фильтра, которые разделяются
                символом "<code>:</code>". В примере ниже после "<code>:</code>"
                передается формат отображения даты.
            </p>
            <pre><code class="language-html">&lt;p>{{ "какая-то дата" | date: 'dd.MM.yyyy' }}&lt;/p> &lt;!-- например, 15.04.2023 --></code></pre> 
            <p>
                К одному и тому же значению допустимо применять сразу
                несколько пайп, причем конечный результат будет зависеть от
                последовательности их применения:
            </p>
			<pre><code class="language-html">&lt;p>{{ "Какие-то данные" | pipe1 | pipe2 | pipe3 }}&lt;/p></code></pre>`,
    selected: false,
    lastUpdate: '05.11.2023',
    footerLinks: [
        {
            path: 'https://youtu.be/uH8GFf68n3Y',
        },
    ],
};
