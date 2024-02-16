import { IQuestion } from '@types';

export const pipeQuestions: IQuestion[] = [
    {
        title: 'Pipe в Angular',
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
                К одному и тому же значению допустимо примененять сразу
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
    },
    {
        title: 'Разница между <span class="variable">pure</span> и <span class="variable">impure</span> pipes',
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
    },
    {
        title: 'Создание пользовательских pipes',
        body: `<p>
                Рассмотрим пример создания пайпы, в которой текст, имеющий длину
                больше 200 символов, обрезается и ему в конец добавляется "...".
            </p>
            <pre><code class="language-typescript">@Pipe({ name: 'customPipe' })
export class CustomPipePipe implements PipeTransform {
    transform(value: string, maxLength: number = 200): string {
        if (value.length > maxLength)
            return value.substring(0, maxLength) + '...';
        else return value;
    }
}</code></pre>
            <p>
                У декоратора <code>@Pipe()</code> существует конфигурационный
                объект, в котором свойство <code>name</code> является
                обязательным.
                <span class="attention">
                    Значением данного свойства будет имя текущего
                    пользовательского пайпа, по которому он будет вызываться
                </span>
                в HTML-шаблоне или в компоненте.
            </p>
            <p>Пример использования в HTML-шаблоне:</p>
            <pre><code class="language-typescript">// класс компонента
someString: string = 'какая-то строка на 1000 символов';</code></pre>

            <pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;p>{{ someString | customPipe }}&lt;/p> &lt;!-- текст обрежется до 200 символов и к нему в конец добавится "..." --></code></pre>
            <p>
                При данном способе использования пайпы ее необходимо
                задекларировать в модуле в поле <code>declarations</code>.
            </p>
            <p>Пример использования в классе компонента:</p>
            <pre><code>export class CustomPipeComponent implements OnInit {
    text: string = 'какая-то строка на 1000 символов';

    constructor(private customPipe: CustomPipePipe) {}

    ngOnInit() {
        console.log('перед customPipe', this.text.length); // 1000
        this.text = this.customPipe.transform(this.text);
        console.log('после customPipe', this.text.length); // 203 (обрезанный до 200 символов текст + "...")
    }
}</code></pre>
            <p>
                При данном способе использования пайпы ее необходимо
                задекларировать в модуле в поле <code>providers</code>.
            </p>`,
        selected: false,
        lastUpdate: '05.02.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/aaBSCHwsYiw',
            },
        ],
    },
];
