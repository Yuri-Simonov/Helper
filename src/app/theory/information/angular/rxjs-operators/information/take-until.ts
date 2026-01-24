import { IInfo } from 'src/app/shared/interfaces';

export const TAKE_UNTIL: IInfo = {
    title: '<span class="variable">takeUntil</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>takeUntil</code> принимает значения из основного <code>observable</code> до первого
                    эмита указанного <code>notifier</code>-observable, после чего немедленно завершает поток</span
                >.
            </p>
            <pre><code class="language-typescript">takeUntil&lt;T>(notifier: ObservableInput&lt;any>): MonoTypeOperatorFunction&lt;T></code></pre>
            <img src="assets/img/angular/rxjs/takeUntil.png" alt="оператор takeUntil" />
            <p>Пример из Angular:</p>
            <pre><code class="language-typescript">private destroy$ = new Subject&lt;void>();

ngOnInit() {
	this.data$
		.pipe(takeUntil(this.destroy$))
		.subscribe(...);
}

ngOnDestroy() {
	this.destroy$.next();
	this.destroy$.complete();
}
</code></pre>`,
    selected: false,
    lastUpdate: '04.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#takeUntil',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/takeUntil',
        },
    ],
};
