import { IInfo } from 'src/app/shared/interfaces';

export const FORK_JOIN: IInfo = {
    id: 'forkJoin',
    title: '<span class="variable">forkJoin</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>forkJoin</code> используется для выполнения нескольких наблюдаемых потоков данных
                    параллельно и возвращает результаты этих потоков в виде массива</span
                >. Он <span class="attention">ожидает завершения всех потоков перед тем, как вернуть результаты</span>.
                Если какой-то поток завершается с ошибкой, то <code>forkJoin</code> также завершится с ошибкой, и все
                последующие потоки будут отменены.
            </p>
            <img src="assets/img/angular/rxjs/forkJoin.png" alt="оператор forkJoin" />
            <p>
                Данный оператор полезен в случаях, когда нужно дождаться завершения всех потоков, которые могут
                содержать, например, асинхронные запросы к серверу, перед выполнением дальнейшей логики.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        forkJoin({
            first: of(1, 2, 3).pipe(delay(3000)),
            second: of(1, 2, 3).pipe(delay(5000)),
        }).subscribe(console.log);
    }
}</code></pre>
            <p>В консоли спустя 5 секунд мы увидим следующее:</p>
            <pre><code class="language-typescript">{ first:3, second: 3 }</code></pre>
            <p>Другой пример:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
	constructor(private http: HttpClient) {}
	
    ngOnInit() {
        forkJoin({
            posts: this.http.get('https://jsonplaceholder.typicode.com/posts'),
            comments: this.http.get('https://jsonplaceholder.typicode.com/comments'),
        }).subscribe(console.log);
    }
}</code></pre>
            <p>
                В консоли мы увидим результат, содержащий посты и комменты, когда придут ответ от сервера на оба
                запроса:
            </p>
            <pre><code class="language-typescript">{posts: Array(100), comments: Array(500)}</code></pre>
            <p><span class="attention">Данный оператор при срабатывании завершает поток самостоятельно</span>.</p>`,
    selected: false,
    lastUpdate: '24.07.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Анимация работы оператора',
            path: 'https://rxjstutorial.com/docs/join-creation-operators/forkJoin/',
        },
    ],
};
