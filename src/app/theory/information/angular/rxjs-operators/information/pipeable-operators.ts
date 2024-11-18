import { IInfo } from 'src/app/shared/interfaces';

export const PIPEABLE_OPERATORS: IInfo = {
    title: 'Операторы потока (<span class="variable">Pipeable Operators</span>)',
    body: `<p>
                Операторы потока
                <span class="attention">
                    вызываются для уже существующих <code>Observable</code> и не меняют его, а возвращают новый
                    <code>Observable</code> с методом подписки, основанным на исходном <code>Observable</code></span
                >. Операторы данного типа по сути являются чистыми функциями, т.к. в качестве входных данных принимается
                один <code>Observable</code> и на выходе создается уже другой <code>Observable</code>.
            </p>
            <p>
                Этот тип операторов можно передать в поток <code>Observables</code>, с помощью метода <code>pipe</code>:
            </p>
            <pre><code class="language-typescript">someObservable.pipe(operator())</code></pre>
            <p>Пример:</p>
            <pre><code class="language-typescript">export class ForExamplesComponent {
    ngOnInit() {
        of(1, 2, 3)
            .pipe(map((x) => x * x))
            .subscribe((v) => console.log("Текущее значение: ", v));
    }
}</code></pre>
            <p>В итоге в консоли мы получим следующие данные:</p>
            <pre><code class="language-typescript">Текущее значение: 1
Текущее значение: 4
Текущее значение: 9</code></pre>
            <p>
                В примере выше оператором потока является оператор <code>map</code>, который изменяет входящий параметр
                заданным образом. В данном случае умножает элемент сам на себя и отдает этот результат далее в поток.
            </p>`,
    selected: false,
    lastUpdate: '25.04.2024',
};
