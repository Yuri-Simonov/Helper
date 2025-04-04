import { IInfo } from 'src/app/shared/interfaces';

export const DATA_BINDING_MECHANISMS: IInfo = {
    title: 'Механизмы привязки данных',
    body: `<p>В Angular существует 4 способа привязки данных:</p>
        <ul>
            <li>
                <span class="attention">интерполяция</span> - данные берутся из
                компонента;
            </li>
            <li>
                <span class="attention">одностороннее связывание</span>
                - данные берутся из компонента;
            </li>
            <li>
                <span class="attention">обработка событий</span> - данные после
                определенного события возвращаются в компонент;
            </li>
            <li>
                <span class="attention">двустороннее связывание</span> - данные
                берутся из компонента и после определенного события ему же
                возвращаются.
            </li>
        </ul>
        <i class="subtitle">Интерполяция</i>
        <p>Примеры интерполяции:</p>
<pre><code class="language-html">&lt;p>Hello, {{name}}&lt;/p> &lt;!-- (1) Основной способ использования интерполяции -->
&lt;input type="text" name={{name}}> &lt;!-- (2) Так тоже будет работать, но такая запись редко встречается --></code></pre>
        <p>
            При использовании интерполяции данные для переменной
            <code>name</code> берутся из того же самого компонента, к которому
            привязан шаблон с текущей разметкой. Данный способ привязки данных
            обычно используется, чтобы вывести в содержимом разметки какие-то
            данные.
        </p>
        <i class="subtitle">Одностороннее связывание</i>
        <p>
            Если необходимо изменять данные атрибутов элементов разметки, то
            интерполяцию тоже можно использовать (см. выше пример (2)), но в
            основном это делают через
            <span class="attention">одностороннее связывание</span>. Но суть та
            же:
        </p>
<pre><code class="language-html">&lt;input type="text" [name]="name"> &lt;!-- (2*) запись второго примера из интерполяции через одностороннее связывание -->
&lt;input type="text" bind-name="name"> &lt;!-- (2**) Альтернативная запись. Встречается реже --></code></pre>
        <i class="subtitle">Обработка событий</i>
        <p>
            Что касается событий, то в Angular
            <span class="attention">
                все события можно отследить и обработать </span
            >, привязав к ним вызов метода класса. Делается это следующим
            образом:
        </p>
<pre><code class="language-html">&lt;button (click)="showItems()">Я кнопка&lt;/button>
&lt;button on-click="showItems()">Я кнопка-близнец&lt;/button> &lt;!-- альтернативный вариант записи --></code></pre>
        <p>
            В данных примерах при клике на кнопку будет вызвана функция
            <code>showItems()</code>. Названия событий всегда должны быть
            заключены в круглые скобки или предваряться префиксом
            <code>on-</code>.
        </p>
        <p>
            Если необходимо получить подробную информацию о событии, то она
            хранится в объекте <code>$event</code>, который передается в функцию
            в качестве аргумента.
        </p>
<pre><code class="language-html">&lt;button (click)="showItems($event)">Я кнопка&lt;/button></code></pre>
        <p>
            Помимо встроенных событий можно создавать также и свои -
            <span class="attention">пользовательские события</span>. За этот
            функционал отвечает класс <code>EventEmitter</code>.
        </p>
        <i class="subtitle">Двустороннее связывание</i>
        <p>
            Механизм двустороннего связывания (two way binding) используется,
            когда
            <span class="attention"
                >необходимо отобразить свойство в шаблоне</span
            >
            (одностороннее связывание)
            <span class="attention">и обновить его при изменении значения</span>
            (обработка события)
            <span class="attention">без перезагрузки страницы</span>.
        </p>
        <p>
            Синтаксис двустороннего связывания представляет собой слияние
            одностороннего связывания ("<code>[]</code>") и привязки события
            ("<code>()</code>").
        </p>
		<pre><code class="language-html">&lt;some-item [(name)]="myName">&lt;/some-item></code></pre>
        <p>
            Запись <code>[(name)]="myName"</code> означает, что при изменении
            <code>name</code> в дочернем компоненте (откуда оно будет получено в
            измененном виде), измененное значение будет присвоено свойству
            <code>myName</code> компонента <code>some-item</code>.
        </p>`,
    selected: false,
    lastUpdate: '08.02.2024',
    footerLinks: [
        {
            title: 'интерполяция',
            path: 'https://youtu.be/YJEnopFp8Ak?t=67',
        },
        {
            title: 'одностороннее связывание',
            path: 'https://youtu.be/YJEnopFp8Ak?t=179',
        },
        {
            title: 'обработка событий',
            path: 'https://www.youtube.com/watch?v=hQ5hIFalxJE',
        },
        {
            title: 'двустороннее связывание',
            path: 'https://youtu.be/VUgOLgnBPcs?t=570',
        },
    ],
};
