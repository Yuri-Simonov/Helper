import { IInfo } from 'src/app/shared/interfaces';

export const FINALIZE: IInfo = {
    title: '<span class="variable">finalize</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>finalize</code> выполняет <code>callback</code> в момент завершения подписки —
                    независимо от того, завершился ли поток через <code>complete</code>, <code>error</code> или
                    <code>unsubscribe</code></span
                >.
            </p>
            <p>
                Оператор <code>finalize</code> это аналог <code>finally</code> в конструкции
                <code>try</code>/<code>catch</code>/<code>finally</code> из нативного JavaScript.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">this.api.loadUser().pipe(
	tap(() => this.loading = true),
	finalize(() => this.loading = false)
).subscribe();</code></pre>`,
    selected: false,
    lastUpdate: '05.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/finalize',
        },
    ],
};
