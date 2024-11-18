import { IInfo } from 'src/app/shared/interfaces';

export const HIGHER_ORDER_OBSERVABLES: IInfo = {
    title: 'Потоки высшего порядка (<span class="variable">Higher-order Observables</span>)',
    body: `<p>
                Обычно <code>Observables</code> чаще всего выдают обычные значения, такие как строки и числа, но бывают случаи, когда приходится обрабатывать <code>Observables</code> внутри
                <code>Observables</code>. В этом случае внешний <code>Observable</code> будет <code>Observable</code> более высокого порядка.
            </p>
            <p>
                Например, представьте, что у вас есть <code>Observable</code>, выдающий строки, которые представляют
                собой URL-адреса файлов, которые вы хотите посмотреть:
            </p>
            <pre><code class="language-typescript">const fileObservable = urlObservable.pipe(map((url) => http.get(url)));</code></pre>
            <p>
                <code>http.get()</code> возвращает <code>Observable</code> (возможно, строку или массив строк) для
                каждого отдельного URL-адреса. Теперь у вас есть <code>Observables</code> внутри <code>Observable</code>, т.е. внешний <code>Observable</code> - это
                <code>Observable</code> более высокого порядка.
            </p>
            <p>
                Чтобы работать с такими данными, обычно <span class="attention">прибегают к выравниванию или упрощению, путем преобразования
                <code>Observable</code> более высокого порядка в обычный <code>Observable</code></span>. В библиотеке RxJS тоже
                есть для этого соответствующие операторы:
            </p>
            <pre><code class="language-typescript">const fileObservable = urlObservable.pipe(
  	map((url) => http.get(url)),
	concatAll()
);</code></pre>
            <p>
                В примере выше оператор <code>concatAll</code> подписывается на каждый «внутренний»
                <code>Observable</code>, который выходит из «внешнего» <code>Observable</code>, и копирует все
                выдаваемые значения до тех пор, пока этот <code>Observable</code> не завершится, и перейдет к
                следующему. Таким образом, все значения объединяются и в итоге мы получает просто <code>Observable</code></span> с привычными типами данных внутри (примитивы, объекты или массивы).
            </p>`,
    selected: false,
    lastUpdate: '25.04.2024',
};
