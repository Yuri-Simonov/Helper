import { IInfo } from '@types';

export const SERVICE_IMPLEMENTATION: IInfo = {
    title: 'Внедрение сервиса',
    body: `<p>
                <span class="attention"
                    >Чтобы получить данные из сервиса в каком-либо компоненте, его необходимо внедрить как
                    зависимость</span
                >. Делается это с помощью паттерна <code>dependency injection</code>, который и переводится как
                "внедрение зависимости".
            </p>
            <p>Внедрить сервис как зависимость можно разными способами:</p>
            <i class="subtitle">Использование конструктора (расширенныq вариант)</i>
            <pre><code class="language-typescript">export class AppComponent {
    private _dataService: DataService;

    constructor(dataService: DataService) {
        this._dataService = dataService;
    }
}</code></pre>
            <p>Если делать по шагам, то:</p>
            <ol>
                <li>Создаем приватную переменную в классе компонента, например <code>_dataService</code>;</li>
                <li>
                    Далее в конструкторе указываем, что при создании текущего класса мы ожидаем получить еще и класс
                    <code>DataService</code>, логика и данные которого будут доступны через свойство
                    <code>dataService</code>;
                </li>
                <li>
                    Затем внутри конструктора свойство <code>dataService</code> присваивается уже приватному свойству
                    <code>_dataService</code>.
                </li>
            </ol>
            <p>
                Текущий вариант подключения сервиса является расширенным.
                <span class="attention">На рабочих проектах им никто не пользуется</span>, т.к. есть более удобный и
                короткий вариант записи. Расширенная запись показана, чтобы вы понимали как происходит внедрение
                зависимости по шагам.
            </p>
            <i class="subtitle">Использование конструктора (короткий вариант)</i>
            <p>Короткая запись будет выглядеть следующим образом:</p>
            <pre><code class="language-typescript">export class AppComponent {
    constructor(private dataService: DataService) {}
}</code></pre>
            <p>
                В конструкторе сразу указывается модификатор доступа и название свойства (<code>dataService</code>).
                Далее Angular сам под капотом создаст и присвоит в данное свойство экземпляр класса, который указан у
                него как тип данных (<code>DataService</code>).
            </p>`,
    selected: false,
    lastUpdate: '04.10.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/oOrI3qm7tK8?t=123',
        },
    ],
};
