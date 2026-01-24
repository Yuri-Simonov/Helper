import { IInfo } from 'src/app/shared/interfaces';

export const TAKE_WHILE: IInfo = {
    title: '<span class="variable">takeWhile</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>takeWhile</code> пропускает пропускает первые <code>n</code> пропускает значения,
                    пока функция-<code>predicate</code> возвращает <code>true</code></span
                >.
            </p>
            <pre><code class="language-typescript">takeWhile&lt;T>(predicate: (value: T, index: number) => boolean, inclusive: boolean = false): MonoTypeOperatorFunction&lt;T></code></pre>
            <img src="assets/img/angular/rxjs/takeWhile.png" alt="оператор takeWhile" />
            <p>Пример:</p>
            <pre><code class="language-typescript">interval(1000).pipe(
  	takeWhile(x => x < 3)
).subscribe(console.log);</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">0
1
2</code></pre>
            <p>
                <span class="attention">Поток завершается, когда функция-<code>predicate</code> возвращает</span>
                <code>false</code>.
            </p>
            <p>
                Первое значение, которое в функции-<code>predicate</code> возвращает <code>false</code>, тоже можно
                отправить в итоговый поток. Для этого значение <code>inclusive</code> нужно установить в значение
                <code>true</code>:
            </p>
            <pre><code class="language-typescript">interval(1000).pipe(
  	takeWhile(x => x < 3, true)
).subscribe(console.log);</code></pre>
            <p>В консоли увидим следующее:</p>
            <pre><code class="language-javascript">0
1
2
3 // теперь значение попало в итоговый поток</code></pre>`,
    selected: false,
    lastUpdate: '24.01.2026',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#takeWhile',
        },
        {
            title: 'Оф. документация',
            path: 'https://rxjs.dev/api/operators/takeWhile',
        },
    ],
};
