import { IInfo } from 'src/app/shared/interfaces';

export const SERVICE_IMPLEMENTATION: IInfo = {
    title: 'Внедрение сервиса',
    body: `<p>
                <span class="attention"
                    >Чтобы получить данные из сервиса в каком-либо компоненте, его необходимо внедрить как
                    зависимость</span
                >. Делается это с помощью паттерна <code>dependency injection</code> (или сокращенно <code>DI</code>),
                который и переводится как "внедрение зависимости".
            </p>
            <p>
                Суть паттерна <code>Dependency Injection</code> (<code>DI</code>) заключается в избежании прямых
                зависимостей между классами. Осуществляется это за счет автоматической поставки необходимых зависимостей
                в конструкторы классов, когда им нужны свойства или методы других классов. И раз мы разбираем Angular,
                стоит уточнить, что речь идет про конструкторы классов различных сущностей: компонентов, директив,
                сервисов и т.д.
            </p>
            <p>
                В Angular за реализацию паттерна <code>DI</code> отвечает встроенный класс, который называется
                <code>Injector</code>.
            </p>
            <p>
                Самый распространенный случай использования паттерна <code>DI</code>, это когда в компоненты внедряются
                сервисы и используется их функционал.
            </p>
            <p>
                Допустим, у нас есть произвольный сервис <code>DataService</code>, который может предоставить нам
                какие-то данные:
            </p>
            <pre><code class="language-typescript">@Injectable({
    providedIn: 'root',
})
export class DataService {
    private _data: string[] = ['One', 'Two', 'Three'];

    getData() {
        return this._data;
    }
}</code></pre>
            <p>Внедрить данный сервис как зависимость можно разными способами:</p>
            <i class="subtitle">Использование конструктора (расширенный вариант)</i>
            <pre><code class="language-typescript">export class AppComponent {
    private _dataService: DataService;

    constructor(dataService: DataService) {
        this._dataService = dataService;
		// вывод данных из сервиса в консоль
        console.log(this._dataService.getData()); // ['One', 'Two', 'Three']
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
    constructor(private dataService: DataService) {
		// вывод данных из сервиса в консоль
        console.log(this.dataService.getData()); // ['One', 'Two', 'Three']
	}
}</code></pre>
            <p>
                В конструкторе сразу указывается модификатор доступа и название свойства (<code>dataService</code>).
                Далее Angular сам под капотом создаст и присвоит в данное свойство экземпляр класса, который указан у
                него как тип данных (<code>DataService</code>).
            </p>`,
    selected: false,
    lastUpdate: '25.10.2024',
    footerLinks: [
        {
            title: 'Внедрение зависимостей по шагам',
            path: 'https://youtu.be/oOrI3qm7tK8?t=123',
        },
        {
            title: 'Теория DI',
            path: 'https://youtu.be/mFem0yjCkn4?t=16',
        },
    ],
};
