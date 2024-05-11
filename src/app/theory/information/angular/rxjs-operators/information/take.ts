import { IInfo } from '@types';

export const TAKE: IInfo = {
    title: '<span class="variable">take</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>take</code> используется для ограничения количества элементов, которые будут
                    обработаны наблюдаемым потоком</span
                >
                (<code>Observable</code>). Этот оператор принимает один аргумент — количество элементов, которое должно
                быть обработано.
                <span class="attention">Как только это количество будет достигнуто, поток будет завершён</span>.
            </p>
            <img src="assets/img/angular/rxjs/take.png" alt="оператор take" />
            <p>Пример:</p>
            <pre><code class='language-typescript'>export class ForExamplesComponent {
    ngOnInit() {
        fromEvent(document, 'click')
            .pipe(take(2))
            .subscribe({
                next: () => console.log('Сделан клик'),
                error: () => console.log('Ошибка'),
                complete: () => console.log('Поток завершен'),
            });
    }
}</code></pre>
            <p>Если сделать 2 клика по странице в браузере, то в консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">Сделан клик
Сделан клик
Поток завершен</code></pre>
            <p>
                При использовании данного оператора
                <span class="attention"> нужно быть уверенными, что нужное количество событий будет выполнено</span>. В
                противном случае просто произойдет подписка на <code>Observable</code> без дальнейшего завершения
                потока. И если злоупотреблять незавершенными потоками в приложении, то это чревато утечками памяти.
            </p>`,
    selected: false,
    lastUpdate: '01.05.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#take',
        },
        {
            title: 'Анимация работы оператора',
            path: 'https://rxjstutorial.com/docs/filtering-operators/take/',
        },
    ],
};
