import { IInfo } from '@types';

export const EXPORT_AS: IInfo = {
    title: 'Свойство <span class="variable">exportAs</span> декоратора <span class="variable">@Directive()</span>',
    body: `<p>
                Свойство <code>exportAs</code> декоратора <code>@Directive&#40;&#41;</code>
                <span class="attention">
                    позволяет задавать имя, которое можно использовать в шаблоне компонента для присвоения заданной
                    директивы (или компонента) шаблонной переменной.
                </span>
            </p>
            <pre><code class="language-typescript">// класс директивы
&#64;Directive({
	selector: '[appCustomDirective]',
	exportAs: 'custom'
})
class CustomDirective {
	getMessage() {
        console.log('Меня вызвали!')
    }
}
</code></pre>
            <pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;p appCustomDirective #example="custom">&lt;/p>
&lt;button (click)="example.getMessage()">&lt;/button>
</code></pre>
            <p>
                В примере выше у кнопки есть слушатель события клика, который при срабатывании будет вызывать метод
                <code>getMessage</code> из директивы <code>appCustomDirective</code>, даже не смотря на то, что на
                кнопке она не висит. Связь осуществляется за счет свойства <code>exportAs</code> и шаблонной переменной
                <code>example</code>.
            </p>
            <p>
                Выше был рассмотрен пример, когда через шаблонную переменную передается директива.
                <span class="attention">
                    С декоратором
                    <code>@Component&#40;&#41;</code> свойство <code>exportAs</code> работает точно так же</span
                >.
            </p>
            <i class="subtitle">Когда может пригодится свойство exportAs?</i>
            <p>
                Например, когда в директиве или компоненте заложен какой-то функционал, и в зависимости от него
                необходимо в шаблоне делать какие-то визуальные изменения или менять структуру DOM-дерева.
            </p>
            <p>
                Также свойство <code>exportAs</code> может быть использовано для получения доступа к директивам или
                компонентам в шаблоне, где нет большой необходимости использовать декоратор
                <code>@ViewChild&#40;&#41;</code>.
            </p>`,
    selected: false,
    lastUpdate: '25.02.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/7W-EMTHV8dQ',
        },
    ],
};
