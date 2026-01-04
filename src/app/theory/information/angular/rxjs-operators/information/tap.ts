import { IInfo } from 'src/app/shared/interfaces';

export const TAP: IInfo = {
    title: '<span class="variable">tap</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>tap</code> позволяет выполнить побочный эффект (side effect) для каждого значения,
                    ошибки или завершения потока, не изменяя сам поток</span
                >. Часто используется для отладки или логирования.
            </p>
            <img src="assets/img/angular/rxjs/tap.png" alt="оператор tap" />
            <p>Пример:</p>
            <pre><code class="language-typescript">import { of, tap, map } from 'rxjs';

of(Math.random()).pipe(
	// Смотрим значение, которое попадает в поток
	tap(console.log),
	map(n => n > 0.5 ? 'big' : 'small')
).subscribe(console.log);</code></pre>`,
    selected: false,
    lastUpdate: '04.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/tap',
        },
    ],
};
