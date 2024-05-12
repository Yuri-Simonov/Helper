import { IInfo } from '@types';

export const PIPE_FUNCTION: IInfo = {
    title: 'Функция <span class="variable">pipe</span>',
    body: `<p>
                Стоит также обратить внимание на функцию <code>pipe</code>. Она <span class="attention">может принимать внутрь себя сколько
                угодно операторов, которые перечисляются через запятую, причем они могут даже повторяться</span>. Тут также
                стоит учитывать, что операторы выполняются друг за другом в указанном в функции
                <code>pipe</code> порядке.
            </p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of(1, 2, 3)
            .pipe(
                map((x) => x * x), // на выходе получаем значения 1, 4, 9
                filter((x) => x > 5), // берем значения, которые больше 5
                map((x) => x * x), // на выходе получаем значение 81
            )
            .subscribe((v) => console.log("Текущее значение: ", v));
    }
}</code></pre>
            <p>В итоге в консоли мы получим следующие данные:</p>
            <pre><code class="language-typescript">Текущее значение: 81</code></pre>`,
    selected: false,
    lastUpdate: '25.04.2024',
};
