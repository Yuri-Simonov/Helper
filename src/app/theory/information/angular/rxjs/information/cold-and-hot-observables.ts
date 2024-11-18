import { IInfo } from 'src/app/shared/interfaces';

export const COLD_AND_HOT_OBSERVABLES: IInfo = {
    title: 'Холодные и горячие <span class="variable">Observables</span>. Разница между ними. Подогрев и остужение <span class="variable">Observable</span>',
    body: `            <p>
                Холодные и горячие <code>Observable</code> - это потоки
                (стримы), имеющие лишь 1 принципиальное отличие:
                <span class="attention"
                    >Холодные <code>Observable</code> создают независимые потоки
                    под каждую подписку, а горячие разделяют поток друг с
                    другом.</span
                >
            </p>
            <p>
                Давайте рассмотрим более наглядно на примерах и попутно создадим
                свой собственный оператор для RxJs.
            </p>
            <p>Начнем с холодного <code>Observable</code>:</p>
            <pre><code class="language-typescript">export class AppComponent implements OnInit {
    ngOnInit(): void {
        const obs$ = fromTimestamp();
        obs$.subscribe(console.log);
        setTimeout(() => {
            obs$.subscribe(console.log);
        }, 2000);
    }
}

// имитация собственного оператора RxJs
const fromTimestamp = (): Observable<number> => {
    return new Observable((subscriber) => {
        const timestamp = Date.now(); // timestamp создается внутри Observable
        subscriber.next(timestamp);
    });
};</code></pre>
            <p>В результате в консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">// 1685375651548
// 1685375651561</code></pre>
            <p>Как видите, для каждого потока свое значение.</p>
            <p>
                А теперь пример того, как сделать горячий
                <code>Observable</code>:
            </p>
            <pre><code class="language-typescript">export class AppComponent implements OnInit {
    ngOnInit(): void {
        const obs$ = fromTimestamp();
        obs$.subscribe(console.log);
        setTimeout(() => {
            obs$.subscribe(console.log);
        }, 2000);
    }
}

// имитация собственного оператора RxJs
const fromTimestamp = (): Observable<number> => {
	const timestamp = Date.now(); // timestamp создается снаружи Observable
    return new Observable((subscriber) => {
        subscriber.next(timestamp);
    });
};</code></pre>
            <p>В результате в консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">// 1685375651588
// 1685375651588</code></pre>
            <p>В консоли получаем одинаковое значение, даже не смотря на то, что вторая подписка вызывается через 2 секунды. Это происходит потому, что мы ссылаемся на данные, которые находятся снаружи <code>Observable</code> и в момент инициализации <code>Observable</code> не создаются заново.</p>
			<i class="subtitle">Как подогреть холодный Observable?</i>
			<p>Забегая вперед, сразу хочется отметить, что перевести поток из холодного в горячий можно, а из горячего в холодный - нельзя. Почему - мы разобрали в примерах выше.</p>
			<p>Теперь давайте разберемся как подогреть поток. Для этого в RxJs есть различные механизмы:
				<ul>
					<li>Использовать <code>Subject</code> (или его разновидности) вместо <code>Observable</code>;</li>
					<li>Использовать оператор <code>shareReplay</code> из библиотеки RxJs (он под капотом использует <code>ReplaySubject</code>);</li>
					<li>Использовать оператор <code>share</code> или <code>publish</code> из библиотеки RxJs (они под капотом используют <code>Subject</code>);</li>
					<li>и т.д.</li>
				</ul>
			</p>
			<pre><code class="language-typescript">// пример использования оператора shareReplay
ngOnInit(): void {
	this.data$ = this.http.get<any[]>('https://...')
	.pipe(shareReplay())
	.subscribe()
}</code></pre>
<p>И теперь, если у вас где-то в разметке есть пайпы <code>async</code>, которые берут <code>data$</code>, то к серверу будет уходить всего лишь 1 запрос и, соответственно, при ответе сервера данные будут отдаваться всем подписчикам от одной и той же подписки.</p>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
