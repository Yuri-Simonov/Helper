import { IInfo } from '@types';

export const IF: IInfo = {
    title: 'Структурная директива <span class="variable">@If</span> / <span class="variable">*ngIf</span>',
    body: `<p>
                Ниже будут представлены примеры с новым синтаксисом
                (<code>&#64;if</code>) и старым (<code>*ngIf</code>)
            </p>
			<p>
                <span class="attention"
                    >Структурная директива <code>&#64;if</code> /
                    <code>*ngIf</code> позволяет скрывать или отображать элемент
                    в DOM-дереве в зависимости от переданного в нее
                    условия</span
                >.
            </p>
            <p>
                Данная директива довольно-таки проста в использовании, просто
                передаем в нее условие или выражение, которое в итоге
                <span class="attention"> будет приведено к булевому типу</span>,
                и всё.
            </p>
            <pre><code class="language-html">&lt;!-- новый синтаксис -->
@if(true) {
	&lt;div>Какой-то текст&lt;/div>
}
				
&lt;!-- старый синтаксис -->
&lt;div *ngIf="true">Какой-то текст&lt;/div></code></pre>
            <p>
                Т.к. оба условия выше возвращают <code>true</code>,
                следовательно, оба параграфа будут показан на странице в
                браузере.
            </p>
            <p>
                Чтобы сделать логическое отрицание в условии, достаточно перед
                условием добавить восклицательный знак (<code>!</code>):
            </p>
<pre><code class="language-html">&lt;!-- новый синтаксис -->
@if(!true) {
	&lt;div>Какой-то текст&lt;/div>
}
				
&lt;!-- старый синтаксис -->
&lt;div *ngIf="!true">Какой-то текст&lt;/div></code></pre>
            <p>
                Выше в примерах со старым синтаксисом используется сокращенная
                запись директивы, которая осуществляется за счет указания
                звёздочки (<code>*</code>) перед названием директивы. Без
                звездочки самый первый пример со старым синтаксисом выглядел бы
                следующим образом:
            </p>
            <pre><code class="language-html">&lt;ng-template [ngIf]="toggler">
	&lt;div>Какой-то текст&lt;/div>
&lt;/ng-template></code></pre>
            <p>
                У данной директивы также присутствует условное ветвление
                <code>else</code>, в которое при использовании старого
                синтаксиса
                <span class="attention"
                    >можно передавать только шаблонные переменные из элементов
                    <code>ng-template</code></span
                >, иначе будет ошибка компиляции TypeScript:
            </p>            
<pre><code class="language-html">&lt;div *ngIf="toggler; else constFromNgTemplate">Какой-то текст&lt;/div>
&lt;ng-template #constFromNgTemplate="toggler">Текст из элемента ng-template&lt;/ng-template></code></pre>
            <p>
                В примере выше, если условие будет истинно, отобразится текст
                "<i>Какой-то текст</i>", в противном же случае, текст возьмется
                из элемента <code>ng-template</code>, то есть, "<i
                    >Текст из элемента ng-template</i
                >".
            </p>
            <p>
                Но в новом синтаксисе теперь в ветвление <code>else</code> можно
                передавать и просто разметку:
            </p>            
<pre><code class="language-html">@if(true) {
	&lt;p>Какой-то текст&lt;/p>
} @else {
	&lt;p>Другой текст&lt;/p>
}</code></pre>
            <p>
                Бывают также случаи, когда необходимо отобразить либо один, либо
                другой элемент <code>ng-template</code> в зависимости от условия
                в структурной директиве <code>*ngIf</code>. Делается это с
                помощью ключевого слова <code>then</code>, в которое так же, как
                и в <code>else</code>,
                <span class="attention"
                    >можно передавать только шаблонные переменные</span
                >:
            </p>
            <pre><code class="language-html">&lt;div *ngIf="toggler; then firstNgTemplate; else secondNgTemplate">Этот текст будет удален&lt;/div>
&lt;ng-template #firstNgTemplate="toggler">Текст из firstNgTemplate&lt;/ng-template>
&lt;ng-template #secondNgTemplate="toggler">Текст из secondNgTemplate&lt;/ng-template></code></pre>
            <p>
                Соответственно, если условие истинно, отрисуется
                <code>firstNgTemplate</code>, иначе -
                <code>secondNgTemplate</code>.
            </p>`,
    selected: false,
    lastUpdate: '07.02.2024',
    footerLinks: [
        {
            title: 'новый синтаксис',
            path: 'https://youtu.be/8Mv-kj9XWCs?t=54',
        },
        {
            title: 'старый синтаксис',
            path: 'https://youtu.be/vLlO-FDSyts?t=175',
        },
        {
            title: 'особенности использования',
            path: 'https://www.youtube.com/watch?v=Ag4bCejYr-U',
        },
    ],
};
