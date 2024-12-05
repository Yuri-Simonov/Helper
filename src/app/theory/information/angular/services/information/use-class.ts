import { IInfo } from 'src/app/shared/interfaces';

export const USE_CLASS: IInfo = {
    title: '<span class="variable">useClass</span>',
    body: `<p>
                <span class="attention"
                    >Способ <code>useClass</code> позволяет регистрировать экземпляры классов в качестве
                    зависимостей</span
                >.
            </p>
            <p>
                Например, имеется сервис <code>DataService</code>, у которого декоратор <code>Injectable</code> пустой,
                т.е. сервис не регистрируется где-либо самостоятельно:
            </p>
            <pre><code class="language-typescript">@Injectable()
export class DataService {}</code></pre>
            <p>А также есть компонент <code>AppComponent</code>, в котором внедряется данный сервис как зависимость:</p>
            <pre><code class="language-typescript">export class AppComponent {
    constructor(private dataService: DataService) {
        console.log(this.dataService);
    }
}</code></pre>
            <p>
                Т.к. декоратор <code>Injectable</code> в сервисе <code>DataService</code> пустой, следовательно, внутри
                компонента нам необходимо вручную указать зависимость:
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
                В примере выше используется сокращенная запись. Т.к. под капотом она использует способ
                <code>useClass</code>, ее можно переписать на полный вариант записи:
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	/**
	 * Регистрируем зависимость в компоненте
	 * с помощью полной записи
	*/
	providers: [{ provide: DataService, useClass: DataService }]
})</code></pre>
            <p>Иначе говоря, обе эти записи делают одно и то же:</p>
            <pre><code class="language-typescript">// Сокращенная запись
providers: [DataService]
// Полная запись		
providers: [{ provide: DataService, useClass: DataService }]</code></pre>
            <p>
                Для регистрации зависимости необходимо указать ключ <code>provide</code>, по которому будет искаться
                зависимость в коллекции зависимостей в инжекторе, а также значение <code>useClass</code>, которое будет
                использоваться в качестве зависимости.
            </p>
            <p>
                И то, что находится внутри <code>useClass</code>, запишется в свойство <code>dataService</code>, которое
                указано в конструкторе компонента:
            </p>
            <pre><code class="language-typescript">export class AppComponent {
	/**
	 * Через свойство dataService будет доступен
	 * внедряемый сервис DataService
	*/
    constructor(private dataService: DataService) {
        console.log(this.dataService);
    }
}</code></pre>
            <p>
                <span class="attention">
                    Короткая запись была сделана для удобства, т.к. очень часты случаи, когда один и тот же класс
                    используется как ключ для регистрируемой зависимости, так и регистрируемое значение</span
                >.
            </p>
            <p>
                Также возможно по ключу, которое совпадает с одним классом, зарегистрировать экземпляр другого класса.
            </p>

            <p>
                Допустим, на проекте тестируется какой-то новый функционал и нас просят в тестовом режиме временно в
                текущем компоненте использовать новый сервис, который имеет тот же интерфейс, что и текущий сервис, но
                логика внутри нового сервиса отличается от текущего. Например, делается запрос на другой адрес или
                что-нибудь еще. И чтобы не трогать конструктор класса и не менять там внедряемый сервис, можно просто
                поменять значение в одном месте в поле <code>useClass</code>. И всё. А потом, когда он больше не будет
                нужен, вернуть все как было.
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	/**
	 * Регистрируем зависимость в компоненте
	 * с помощью полной записи
	*/
	providers: [{ provide: DataService, useClass: AnotherDataService }]
})</code></pre>`,
    selected: false,
    lastUpdate: '05.12.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/imUcdrYFTxs?t=51',
        },
    ],
};
