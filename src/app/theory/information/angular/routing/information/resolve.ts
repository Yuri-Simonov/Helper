import { IInfo } from 'src/app/shared/interfaces';

export const RESOLVE: IInfo = {
    title: '<span class="variable">Resolve</span>',
    body: `<p>
                <code>Resolve</code> — это механизм в <code>Angular Router</code>, который
                <span class="attention">позволяет загружать данные до активации маршрута</span>. Это полезно, когда
                необходимо предварительно загрузить данные перед тем, как компонент отобразится, чтобы избежать
                "пустого" состояния страницы во время ожидания данных.
            </p>
            <p>Пример резолвера:</p>
            <pre><code class="language-typescript">@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve&lt;any> {
	constructor(private http: HttpClient) {}

	resolve(): Observable&lt;any> {
		return this.http.get('https://jsonplaceholder.typicode.com/users/1');
	}
}</code></pre>
            <p>Далее необходимо сообщить <code>Angular Router</code> о наличии резолвера в маршруте:</p>
            <pre><code class="language-typescript">const routes: Routes = [
  	{ 
		path: 'user',
		component: UserComponent,
		resolve: { user: UserResolver }
	}
];</code></pre>
            <p>
                Также стоит помнить, что маршрут либо напрямую, либо через другие переменные должен попасть в конфиг
                приложения, чтобы <code>Angular Router</code> знал о его существовании:
            </p>
            <pre><code class="language-typescript">export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes)
    ],
};</code></pre>
            <p>И затем данные, которые возвращает резолвер, могут быть использованы в компоненте:</p>
            <pre><code class="language-typescript">export class UserComponent {
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ user }) => {
			console.log('user', user);
        });
    }
}</code></pre>`,
    selected: false,
    lastUpdate: '03.03.2025',
};
