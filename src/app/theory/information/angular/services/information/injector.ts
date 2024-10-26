import { IInfo } from '@types';

export const INJECTOR: IInfo = {
    title: 'Класс <span class="variable">Injector</span>',
    body: `<p>
                В Angular за реализацию паттерна <code>Dependency injection</code> отвечает встроенный класс, который
                называется <code>Injector</code>. Он отвечает за создание и управление экземплярами зависимостей. Когда
                любой из сущностей, будь то компонент, сервис или что-либо еще, требуется какая-то зависимость, Angular
                создает её с помощью класса <code>Injector</code>.
            </p>
            <p>Например, у нас произвольный сервис <code>DataService</code>:</p>
            <pre><code class="language-typescript">@Injectable({
    providedIn: 'root',
})
export class DataService {
    private _data: string[] = ['One', 'Two', 'Three'];

    getData() {
        return this._data;
    }
}</code></pre>
            <p>И этот сервис внедряется как зависимость в произвольный компонент:</p>
            <pre><code class="language-typescript">export class AppComponent {
    constructor(private dataService: DataService) {}
}</code></pre>
            <p>В данном случае сервис <code>DataService</code> - это и есть экземпляр зависимости.</p>
            <p>В документации Angular есть картинка, описывающая в общих чертах класс <code>Injector</code>:</p>
            <img src="assets/img/angular/services/injector.png" alt="Класс Injector" />
            <p>
                Его можно представить как контейнер, в котором хранятся зависимости, которые попадают в него при
                компиляции приложении (зависимости регистрируются в инжекторе с помощью свойств
                <code>providers</code> или <code>providedIn</code>. Более подробно о них рассказано в других спойлерах). И есть какой-то компонент, который просит
                предоставить ему экземпляр сервиса в качестве зависимости.
            </p>
            <p>
                Когда Angular обнаруживает, что компонент зависит от сервиса, он сначала проверяет, есть ли у инжектора
                какие-либо существующие экземпляры этого сервиса. Если запрошенный экземпляр еще не существует, инжектор
                создает и добавляет его в контейнер.
            </p>
            <p>
                Если инжектор не может создать запрошенный экземпляр, т.е. он нигде не зарегистрирован, то инжектор
                выбрасывает ошибку.
            </p>
            <p>
                Когда все запрошенные зависимости успешно обработаны, Angular может вызвать конструктор компонента,
                передав все необходимые зависимости в качестве аргументов.
            </p>`,
    selected: false,
    lastUpdate: '26.10.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/mFem0yjCkn4?t=71',
        },
    ],
};
