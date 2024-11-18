import { IInfo } from 'src/app/shared/interfaces';

export const CATCH_ERROR: IInfo = {
    id: 'catchError',
    title: '<span class="variable">catchError</span>',
    body: `<p>
                <span class="attention">
                    Оператор <code>catchError</code> используется для перехвата ошибок в потоке данных и выполнения
                    определённого кода при их возникновении</span
                >. Он позволяет обработать ошибку и вернуть новый поток данных, который может содержать исправленные
                данные или информацию об ошибке.
            </p>
            <p>
                На картинке ниже указан оператор <code>catch</code>, это старое название для оператора
                <code>catchError</code>.
            </p>
            <img src="assets/img/angular/rxjs/catch.png" alt="оператор catch" />
            <p>Пример:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    source = throwError(() => new Error('какая-то ошибка')); // имитируем ошибку

    ngOnInit() {
        this.source
            .pipe(
                catchError((error) => {
                    console.log('отловлена ошибка:', error);
                    // здесь можно и нужно как-то обработать возникшую ошибку
                    return of('данные после оператора catchError');
                }),
            )
            .subscribe({
                next: (value) => console.log('next:', value),
                error: (error) => console.log('error:', error),
                complete: () => console.log('completed:', 'поток завершен'),
            });
    }
}</code></pre>
            <p>В результате выполнения данного кода в консоли мы увидим следующее:</p>
            <pre><code class="language-typescript">отловлена ошибка: Error: какая-то ошибка {...}
next: данные после оператора catchError
completed: поток завершен</code></pre>`,
    selected: false,
    lastUpdate: '14.05.2024',
};
