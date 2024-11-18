import { IInfo } from 'src/app/shared/interfaces';

export const CREATING_CUSTOM_PIPES: IInfo = {
    title: 'Создание пользовательских пайп',
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
};
