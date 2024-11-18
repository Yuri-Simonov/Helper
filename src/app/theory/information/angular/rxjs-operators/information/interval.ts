import { IInfo } from 'src/app/shared/interfaces';

export const INTERVAL: IInfo = {
    title: '<span class="variable">interval</span>',
    body: `<p>
                <span class="attention"
                    >Оператор <code>interval</code> создает <code>Observable</code>, в который отправляет
                    последовательность чисел с заданным интервалом времени</span
                >. Интервал времени задается первым аргументом и указывается в миллисекундах.
            </p>

            <img src="assets/img/angular/rxjs/interval.png" alt="оператор interval" />
            <p>Пример:</p>
            <pre><code class='language-typescript'>export class AppComponent {
    ngOnInit() {
        interval(1000).subscribe(console.log);
    }
}</code></pre>
            <p>В консоли мы увидим следующее:</p>
            <pre><code class='language-typescript'>0 // через 1 секунду
1 // через 2 секунды
2 // через 3 секунды
... // и так далее
</code></pre>
            <p>
                <span class="attention">Данный оператор самостоятельно не завершает поток</span>, поэтому необходимо не
                забывать завершать поток при уничтожении компонента, в котором он используется, или при выполнении любой
                другой необходимой логики.
            </p>`,
    selected: false,
    lastUpdate: '10.07.2024',
    footerText: ['Дополнительный материал', 'Дополнительные материалы'],
    footerLinks: [
        {
            title: 'Видеообъяснение',
            path: 'https://youtu.be/A-3UoqDqkyU?t=261',
        },
        {
            title: 'Анимация работы оператора',
            path: 'https://rxjstutorial.com/docs/creation-operators/interval/',
        },
        {
            title: 'Подвигать шарики',
            path: 'https://rxmarbles.com/#interval',
        },
    ],
};
