import { IInfo } from 'src/app/shared/interfaces';

export const BROWSER_EVENT_HANDLING: IInfo = {
    title: 'Обработка событий браузером',
    body: `<p>
                Когда в браузере происходит событие (например, клик по кнопке, ввод текста, скроллинг), оно проходит
                несколько этапов обработки. Этот процесс основан на системе событийной модели браузера, которая
                включает:
            </p>
            <ol>
                <li><span class="attention">Генерацию события</span>;</li>
                <li><span class="attention">Определение цели события</span> (Event Target);</li>
                <li><span class="attention">Фазы распространения события</span> (Event Propagation);</li>
            </ol>
            <i class="subtitle">1. Генерация события</i>
            <p>
                Любое действие пользователя (клик, нажатие клавиши, перемещение мыши) или системное событие (загрузка
                страницы, завершение запроса) инициирует событие (например, <code>click</code>, <code>keydown</code>,
                <code>scroll</code> или что-то ещё).
            </p>
            <p>
                Браузер создаёт объект события <code>Event</code>, содержащий информацию о типе события, целевом
                элементе, координатах (если мышь), клавише (если клавиатура) и других данных.
            </p>
            <i class="subtitle">2. Определение цели события (Event Target)</i>
            <p>
                Каждое событие связано с определённым элементом DOM-дерева, который его вызвал. Этот элемент называется
                "<span class="attention">целью события</span>" (<code>event.target</code>).
            </p>
            <p>Пример:</p>
            <pre><code class="language-html">&lt;!-- html --&gt;
&lt;button id="myButton">Нажми меня&lt;/button></code></pre>
            <pre><code class="language-javascript">document.getElementById("myButton").addEventListener("click", function (event) {
  console.log("Цель события:", event.target); // &lt;button id="myButton">Нажми меня&lt;/button>
});</code></pre>
            <i class="subtitle">3. Фазы распространения события (Event Propagation)</i>
            <p>Когда событие происходит, оно распространяется по DOM-дереву в три фазы:</p>
            <ol>
                <li>
                    <span class="attention">Фаза захвата</span> (Capturing Phase) или "<span class="attention"
                        >фаза погружения</span
                    >". Событие идёт сверху вниз от <code>window</code> к целевому элементу. Это позволяет родительским
                    элементам "перехватывать" событие до того, как оно достигнет цели;
                </li>
                <li>
                    <span class="attention">Целевая фаза</span> (Target Phase). Событие достигает целевого элемента
                    (<code>event.target</code>). Здесь вызываются обработчики, привязанные к этому элементу;
                </li>
                <li>
                    <span class="attention">Фаза всплытия</span> (Bubbling Phase). Событие начинает "подниматься" снизу
                    вверх к <code>document</code> и <code>window</code>. Обработчики событий на родительских элементах
                    могут "поймать" событие после того, как оно отработало в цели.
                </li>
            </ol>`,
    selected: false,
    lastUpdate: '09.03.2025',
};
