import { IInfo } from 'src/app/shared/interfaces';

export const PROVIDERS_METHODS: IInfo = {
    title: 'Способы регистраций зависимостей в поле <span class="variable">providers</span>',
    body: `<p>
                В спойлере "<i>Самостоятельная регистрация зависимостей (<code>providedIn</code>)</i>" был разобран один
                из двух вариантов регистраций зависимостей.
            </p>
            <p>
                В данном же спойлере будет рассмотрен второй вариант - регистрации зависимостей через поле
                <code>providers</code>.
            </p>
            <p>
                <span class="attention">
                    В поле <code>providers</code> зависимость можно зарегистрировать через как через полную запись, так
                    и через сокращенную</span
                >. В данном спойлере мы рассмотрим лишь вариант с сокращенной записью, т.к. варианты полной записи имеют
                4 вариации использования (смотри спойлеры <code>useClass</code>, <code>useFactory</code>,
                <code>useValue</code> и <code>useExisting</code>) и довольно-таки обширны в плане информации, чтобы их
                пытаться запихнуть в один спойлер.
            </p>
            <p>
                Чтобы воспользоваться свойством <code>providers</code> и, в частности, сокращенной записью, необходимо
                декоратор сервиса <code>@Injectable</code> оставить пустым:
            </p>
            <pre><code class="language-typescript">@Injectable()
export class DataService {}</code></pre>
            <p>
                <span class="attention">
                    Т.к. декоратор <code>@Injectable</code> пустой, следовательно, зависимость не зарегистрирована
                    самостоятельно </span
                >. Поэтому сделать это нужно вручную. В случае с компонентом, делается это в поле
                <code>providers</code>:
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	/**
	 * Регистрируем зависимость в компоненте
	 * с помощью сокращенной записи
	*/
	providers: [DataService],
})</code></pre>
            <p>
                Как видите, при использовании сокращенной записи достаточно лишь перечислить классы сущностей, которые
                предполагаются использоваться в компоненте в качестве зависимостей, как элементы массива. В примере выше
                это класс <code>DataService</code>.
            </p>
            <p>
                И теперь можно использовать сервис <code>DataService</code> в компоненте
                <code>AppComponent</code> внедрив на него зависимость в конструкторе класса:
            </p>
            <pre><code class="language-typescript">export class AppComponent {
	// Внедряем зависимость
    constructor(private dataService: DataService) {
        console.log(this.dataService);
    }
}</code></pre>
            <p>
                Сокращенная запись покрывает большинство случаев, но у нее
                <span class="attention">
                    есть один большой недостаток - она позволяет использовать лишь экземпляры классов в качестве
                    зависимостей</span
                >.
            </p>
            <p>
                Но Angular позволяет внедрять в качестве зависимостей не только классы. Можно также внедрять как
                зависимость, например, различные примитивные типы данных или какие-то свои пользовательские объекты и
                т.д.
            </p>
            <p>
                И чтобы покрывать все возможные случаи, в Angular существуют различные способы регистраций зависимостей
                в поле
                <code>providers</code>, а именно: <code>useClass</code>, <code>useValue</code>,
                <code>useFactory</code> и <code>useExisting</code>. Более подробно о них рассказано в соответствующих
                спойлерах.
            </p>`,
    selected: false,
    lastUpdate: '04.12.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/imUcdrYFTxs',
        },
    ],
};
