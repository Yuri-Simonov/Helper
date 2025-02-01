import { IInfo } from 'src/app/shared/interfaces';

export const SERVICES_TREE_SHAKING: IInfo = {
    title: '<span class="variable">Tree-shaking</span> сервисов',
    body: `<p>
                <code>Tree-shaking</code> -
                <span class="attention"
                    >это процесс удаление неиспользуемого экспортируемого кода из бандла во время сборки
                    приложения</span
                >. Что в свою очередь приводит к уменьшению итоговых размеров наших приложений.
            </p>
            <p>
                Допустим у нас есть произвольный сервис <code>DataService</code>, который самостоятельно регистрируется
                в корневом инжекторе благодаря параметру <code>providedIn</code> со значением <code>'root'</code>:
            </p>
            <pre><code class="language-typescript">@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {
        console.log('DataService');
    }
}</code></pre>
            <p>
                Также внутри конструктора данного сервиса добавлен <code>console.log('DataService')</code>, по которому
                можно отследить попал ли данный сервис в итоговую сборку или нет.
            </p>
            <i class="subtitle">1-ый сценарий</i>
            <p>
                Первый сценарий будет, когда мы просто создали сервис, он самостоятельно зарегистрировался в корневом
                инжекторе и нигде не используется.
            </p>
            <p>
                Если попробовать собрать приложение с помощью команды <code>ng build</code>, то в итоговом бандле будет
                отсутствовать сервис <code>DataService</code> (поиск в файле по совпадению со словом, которое мы
                добавляли в логирование внутри конструктора сервиса <code>DataService</code>). Следовательно,
                <span class="attention"
                    ><code>tree-shaking</code> убрал сервис <code>DataService</code>, который нигде не использовался,
                    даже несмотря на то, что он был зарегистрирован в корневом инжекторе</span
                >.
            </p>
            <i class="subtitle">2-ой сценарий</i>
            <p>
                Но ситуация изменится, если зарегистрировать новый экземпляр данного сервиса через поле
                <code>providers</code> в произвольном месте, например в каком-нибудь компоненте:
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-some',
    template: '',
	// регистрируем новый экземпляр сервиса
    providers: [DataService],
})
export class SomeComponent {}</code></pre>
            <p>
                При таком сценарии сервис <code>DataService</code> уже не будет убран в процессе
                <code>tree-shaking'а</code> и попадет в итоговую сборку.
            </p>
            <p>
                Т.е.,
                <span class="attention"
                    >при явной регистрации зависимости в поле <code>providers</code> она всегда остается в коде, даже
                    если не используется</span
                >. Это может привести к неоптимальному росту бандла, особенно в крупных проектах. Поэтому тут уже нужно
                следить за тем, что регистрируется через поле <code>providers</code>.
            </p>
            <i class="subtitle">3-ий сценарий</i>
            <p>Аналогичная ситуация будет, если внедрить данный сервис как зависимость:</p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-some',
    template: '',
})
export class SomeComponent {
	// внедряем зависимость на сервис DataService
    constructor(private dataService: DataService) {}
}</code></pre>
            <p>
                Поэтому
                <span class="attention"
                    >здесь также нужно следить за тем, используются ли внедряемые зависимости или нет</span
                >.
            </p>`,
    selected: false,
    lastUpdate: '01.02.2025',
    footerLinks: [
        {
            path: 'https://youtu.be/kVYPhHMrAwA',
        },
    ],
};
