import { IInfo } from '@types';

export const STATIC_CONTENT_CHILD: IInfo = {
    title: 'Параметр <span class="variable">static</span> декоратора <span class="variable">@ContentChild()</span>',
    body: `<p>
                У декоратора <code>@ContentChild&#40;&#41;</code> есть также и дополнительные параметры. Одним из них
                является булевый параметр <code>static</code>. По умолчанию он имеет значение <code>false</code>. Это
                означает, что доступ к содержимому компонента декоратор <code>@ContentChild&#40;&#41;</code> получает
                после того, как оно было проинициализировано. Поэтому данные и появляются начиная с метода
                <code>ngAfterContentInit</code>.
            </p>
            <pre><code class="language-typescript">// Обе записи равносильны
&#64;ContentChild('paragraph') paragraph: ElementRef&lt;HTMLParagraphElement>;
&#64;ContentChild('paragraph', { static: false }) paragraph: ElementRef&lt;HTMLParagraphElement>;</code></pre>
            <p>
                Это сценарий работы директивы <code>@ContentChild&#40;&#41;</code> по умолчанию. Но его можно изменить,
                установив значение параметра <code>static</code> в значение <code>true</code>.
            </p>
            <pre><code class="language-typescript">&#64;ContentChild('paragraph', { static: true }) paragraph: ElementRef&lt;HTMLParagraphElement>;</code></pre>
            <p>
                В этом случае декоратор <code>@ContentChild&#40;&#41;</code> получает доступ к содержимому компонента
                еще до того, как оно прошло все проверки и было полностью инициализирован. Такой вариант использования
                декоратора может быть полезно в случаях, когда нужно получить доступ к содержимому до того, как оно будет полностью инициализирован.
            </p>
            <p>
                Тут также важно, чтобы на таком элементе не висела структурная директива
                <code>@if</code> (<code>*if</code>) и не изменялось в дальнейшем содержимое этого элемента. Декоратор
                <code>@ContentChild&#40;&#41;</code> не увидит изменения. Тут нужны уже различные дополнительные решения
                для такого сценария работы приложения.
            </p>
            <p>
                То есть, иначе говоря, когда параметр <code>static</code> имеет значение <code>true</code>, это влияет
                на то, в какой момент жизненного цикла мы получаем данные в свойство, которое использует декоратор
                <code>@ContentChild&#40;&#41;</code> с этим параметром. При этом значении данные будут доступны уже в
                методе <code>ngOnInit</code>.
            </p>
            <p>
                Но это не является хорошей практикой. Все же
                <span class="attention"
                    >рекомендуется позволять Angular самому управлять жизненными циклами всех компонентов</span
                >
                и получать доступ к их информации в соответствующие этапы жизненного цикла. Использование параметра
                <code>static</code> со значением <code>true</code> следует рассматривать как обходное решение для
                конкретных проблем, а не как общую практику.
            </p>`,
    selected: false,
    lastUpdate: '10.02.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/zKvPvfkbHrw?t=305',
        },
    ],
};
