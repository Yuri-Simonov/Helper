import { IInfo } from '@types';

export const NG_CONTAINER: IInfo = {
    title: 'Элемент <span class="variable">ng-container</span>',
    body: `<p>
                Элемент <code>ng-container</code> - это
                <span class="attention">
                    специальный элемент, который может содержать структурные
                    директивы без добавления новых элементов в DOM-дерево</span
                >.
            </p>
            <p>
                Допустим, в редакторе кода у нас имеется следующий код,
                содержащий внутри себя 2 элемента <code>ng-container</code>, на
                каждом из которых весит структурная директива
                <code>*ngIf</code>:
            </p>
<pre><code class="language-html">&lt;div>
	&lt;ng-container *ngIf="true">
		&lt;p>Первый текст&lt;/p>
	&lt;/ng-container>
	&lt;ng-container *ngIf="false">
		&lt;p>Второй текст&lt;/p>
	&lt;/ng-container>
&lt;/div></code></pre>
            <p>
                В итоге, в браузере данный участок кода будет выглядеть
                следующим образом:
            </p>
<pre><code class="language-html">&lt;div>
	&lt;p>Первый текст&lt;/p>
&lt;/div></code></pre>
            <p>
                Как видно из примера, элемент <code>ng-container</code> не
                добавляет новые элементы в DOM-дерево.
            </p>`,
    selected: false,
    lastUpdate: '08.02.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/vMxJPxWS0aI?t=146',
        },
    ],
};
