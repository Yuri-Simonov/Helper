import { IInfo } from 'src/app/shared/interfaces';

export const DISTINCT_UNTIL_CHANGED: IInfo = {
    title: '<span class="variable">distinctUntilChanged</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>distinctUntilChanged</code> пропускает значение только если оно отличается от
                    предыдущего</span
                >.
            </p>
            <img src="assets/img/angular/rxjs/distinctUntilChanged.png" alt="оператор distinctUntilChanged" />
            <p>Пример:</p>
            <pre><code class="language-typescript">of(1, 1, 2, 2, 2, 3, 1)
	.pipe(distinctUntilChanged())
	.subscribe(console.log);
</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">1
2
3
1</code></pre>
            <p>
                При работе со ссылочными типами данных (<code>object</code>, <code>array</code>) оператор
                <code>distinctUntilChanged</code> <span class="attention">по умолчанию сравнивает ссылки</span>, а не
                содержимое. Поэтому почти всегда нужно передавать кастомный компаратор и сравнивать не сами объекты, а
                их ключи — чаще всего <code>id</code> предыдущего и текущего объекта:
            </p>
            <pre><code class="language-typescript">of(
	{ id: 1, name: 'Вася' },
	{ id: 1, name: 'Вася' },
	{ id: 2, name: 'Петя' },
	{ id: 2, name: 'Петя' },
	{ id: 3, name: 'Аня' }
).pipe(
  	distinctUntilChanged((prev, curr) => prev.id === curr.id)
).subscribe(user => {
  	console.log(user);
});</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">{ id: 1, name: 'Вася' }
{ id: 2, name: 'Петя' }
{ id: 3, name: 'Аня' }</code></pre>`,
    selected: false,
    lastUpdate: '04.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#distinctUntilChanged',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/distinctUntilChanged',
        },
    ],
};
