import { IInfo } from 'src/app/shared/interfaces';

export const SHARE_REPLAY: IInfo = {
    title: '<span class="variable">shareReplay</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>shareReplay</code> создаёт общий <code>hot observable</code></span
                >, который:
            </p>
            <ul>
                <li>делит одну подписку между всеми подписчиками;</li>
                <li>кеширует последние значения. Их количество задается в свойстве <code>bufferSize</code>;</li>
                <li>отдаёт кеш новым подписчикам.</li>
            </ul>
            <p>Пример:</p>
            <pre><code class="language-typescript">const user$ = this.http.get('/api/user').pipe(
	tap(() => console.log('HTTP request')),
	shareReplay(1) // bufferSize = 1
);

user$.subscribe(); // HTTP request
user$.subscribe(); // кеш, без запроса
user$.subscribe(); // кеш, без запроса
</code></pre>
            <p>
                В примере выше поток <code>user$</code> не будет отписан, даже если количество его подписчиков станет
                равным нулю. Кеш <code>shareReplay</code> продолжит жить, а исходный
                <code>observable</code> (<code>user$</code>) останется активным. Это может привести к утечкам памяти и
                удержанию ресурсов,
                <span class="attention">если поток не является глобальным состоянием приложения</span>.
            </p>
            <p>
                Чтобы источник автоматически отписывался, когда последний подписчик уходит, необходимо использовать
                <code>shareReplay</code> с опцией <code>refCount: true</code>, которая привязывает жизненный цикл
                источника и кеша к количеству активных подписчиков:
            </p>
            <pre><code class="language-typescript">this.user$ = this.http.get('/api/user').pipe(
  	shareReplay({ bufferSize: 1, refCount: true })
);</code></pre>
            <p>
                По умолчанию <code>refCount</code> имеет значение <code>false</code>, поэтому в этом случае используется
                сокращенная запись:
            </p>
            <pre><code class="language-typescript">this.user$ = this.http.get('/api/user').pipe(
	// Равносильно shareReplay({ bufferSize: 1, refCount: false })
  	shareReplay(1)
);</code></pre>`,
    selected: false,
    lastUpdate: '05.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/shareReplay',
        },
    ],
};
