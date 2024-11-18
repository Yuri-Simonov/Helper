import { IInfo } from 'src/app/shared/interfaces';

export const FOR: IInfo = {
    title: 'Структурная директива <span class="variable">*ngFor</span>',
    body: `<p>
                <span class="attention"
                    >Структурная директива *ngFor позволяет создавать разметку в
                    шаблоне для каждого элемента переданного в нее
                    массива.</span
                >
            </p>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;div *ngFor="let item of arr">
    &lt;span>{{ item }}&lt;/span>
&lt;/div></code></pre>
<pre><code class="language-typescript">// класс компонента
arr: number[] = [1, 2, 3];</code></pre>
            <p>
                В примере выше на <code>div</code> добавляется структурная
                директива <code>*ngFor</code>, которая имеет следующий
                синтаксис: сначала пишем ключевое слово <code>let</code>, тем
                самым объявляя локальную переменную внутри данного блока
                разметки, на который вешается данная директива. Название может
                быть любое. Затем пишем ключевое слово <code>of</code> и после
                него указываем переменную, из которой мы будем брать данные.
            </p>
            <p>
                Переменная, используемая в качестве поставщика данных,
                <span class="attention">
                    должна быть массивом каких-либо данных, либо
                    <code>null</code>, либо <code>undefined</code></span
                >. В противном же случае будет ошибка типизации.
            </p>
            <p>
                При использовании данной директивы также доступен различный
                вспомогательный функционал:
            </p>
            <ul>
                <li>
                    <span class="attention">index</span>:
                    <span class="type">number</span> - текущий индекс элемента в
                    итерации;
                </li>
                <li>
                    <span class="attention">count</span>:
                    <span class="type">number</span> - количество итераций;
                </li>
                <li>
                    <span class="attention">first</span>:
                    <span class="type">boolean</span> - первый элементы в
                    итерации;
                </li>
                <li>
                    <span class="attention">last</span>:
                    <span class="type">boolean</span> - последний элементы в
                    итерации;
                </li>
                <li>
                    <span class="attention">even</span>:
                    <span class="type">boolean</span> - четные элементы в
                    итерации;
                </li>
                <li>
                    <span class="attention">odd</span>:
                    <span class="type">boolean</span> - нечетные элементы в
                    итерации.
                </li>
            </ul>
            <p>
                Пример использования четности итерации и текущий индекс элемента
                в итерации:
            </p>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;div *ngFor="let item of arr; let currentIndex = index; let evenItem = even">
	&lt;span *ngIf="evenItem"> {{ item }}&lt;/span>
	&lt;span> {{ currentIndex }}&lt;/span>
&lt;/div></code></pre>
<pre><code class="language-typescript">// класс компонента
arr: number[] = [1, 2, 3];
</code></pre>`,
    selected: false,
    lastUpdate: '07.02.2024',
    footerLinks: [
        {
            title: 'старый синтаксис',
            path: 'https://youtu.be/vLlO-FDSyts?t=487',
        },
        {
            title: 'особенности использования',
            path: 'https://www.youtube.com/watch?v=Ag4bCejYr-U',
        },
    ],
};
