import { IInfo } from '@types';

export const CREATION_OPERATORS: IInfo = {
    title: 'Операторы создания (<span class="variable">Creation Operators</span>)',
    body: `<p>
                Операторы создания
                <span class="attention">используются для создания новых <code>Observables</code></span
                >.
            </p>
            <p>
                Типичным примером данного типа операторов является оператор <code>interval</code>. Он принимает на входе
                временной интервал (а не <code>Observable</code>, в отличие от операторов потока) и в качестве выходного
                значения выдает уже <code>Observable</code>, который генерирует бесконечную последовательность
                возрастающих целых чисел с постоянным заданным интервалом времени:
            </p>
            <pre><code class="language-typescript">const observable = interval(1000);
// временной интервал задается в миллисекундах (1000 мс = 1 сек)</code></pre>
            <p>
                В данном примере генерация событий будет происходить каждую секунду, но, чтобы получать эти события,
                необходимо подписаться на данный <code>Observables</code>.
            </p>`,
    selected: false,
    lastUpdate: '25.04.2024',
};
