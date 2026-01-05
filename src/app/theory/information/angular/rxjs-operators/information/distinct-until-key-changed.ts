import { IInfo } from 'src/app/shared/interfaces';

export const DISTINCT_UNTIL_KEY_CHANGED: IInfo = {
    title: '<span class="variable">distinctUntilKeyChanged</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>distinctUntilKeyChanged</code> пропускает объект только если значение указанного
                    свойства изменилось по сравнению с предыдущим</span
                >.
            </p>
            <pre><code class="language-typescript">distinctUntilKeyChanged(key: keyof T): MonoTypeOperatorFunction&lt;!T></code></pre>
            <p>Пример:</p>
            <pre><code class="language-typescript">of(
	{ id: 1, name: 'Катя' },
	{ id: 1, name: 'Катя' },
	{ id: 2, name: 'Лиза' },
	{ id: 2, name: 'Лиза' },
	{ id: 3, name: 'Вера' }
).pipe(
  	distinctUntilKeyChanged('id')
).subscribe(console.log);</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">{ id: 1, name: 'Катя' }
{ id: 2, name: 'Лиза' }
{ id: 3, name: 'Вера' }</code></pre>`,
    selected: false,
    lastUpdate: '05.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/distinctUntilKeyChanged',
        },
    ],
};
