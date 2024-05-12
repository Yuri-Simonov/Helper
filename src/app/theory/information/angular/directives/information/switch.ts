import { IInfo } from '@types';

export const SWITCH: IInfo = {
    title: 'Структурная директива <span class="variable">*ngSwitchCase</span>',
    body: `<p>
                <span class="attention"
                    >Структурная директива <code>*ngSwitchCase</code> позволяет
                    выводить разметку в шаблоне компонента через конструкцию
                    <code>switch/case</code>, где в зависимости от ее результата
                    будет показываться соответствующий элемент разметки.</span
                >
            </p>
<pre><code class="language-html">&lt;div [ngSwitch]="Какие-то данные, передаваемые внутрь конструкции">
   &lt;span *ngSwitchCase="значение_1">Первый элемент&lt;/span>
   &lt;span *ngSwitchCase="значение_2">Второй элемент&lt;/span>
	...
   &lt;span *ngSwitchDefault>Элемент по умолчанию&lt;/span>
&lt;/div></code></pre>

            <p>
                С помощью атрибутивной директивы <code>ngSwitch</code> внутрь
                родительского элемента <code>div</code> передаются какие-либо
                данные, которые проверяются на совпадения в структурных
                директивах <code>*ngSwitchCase</code>. Если происходит полное
                совпадение, значит условие выполняется и элемент попадает в
                DOM-дерево.
            </p>
            <p>
                Если не находится ни одного совпадения со значениями, указанными
                в структурных директивах <code>*ngSwitchCase</code>, тогда
                отображаются данные, на которых указана другая структурная
                директива <code>*ngSwitchDefault</code>, если она указана в
                конструкции. Эти данные еще называют "данными по умолчанию".
            </p>
            <p>
                Пример использования структурной директивы
                <code>*ngSwitchCase</code> внутри структурной директивы
                <code>*ngFor</code>:
            </p>
            <pre><code class="language-typescript">// класс компонента
arr: number[] = [1, 2, 3];</code></pre>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;div *ngFor="let item of arr" [ngSwitch]=item>
   &lt;span *ngSwitchCase="1">Появлюсь, если item будет равен 1&lt;/span>
   &lt;span *ngSwitchCase="2">Появлюсь, если item будет равен 2&lt;/span>
   &lt;span *ngSwitchDefault>Появлюсь, если не найдутся совпадения в *ngSwitchCase&lt;/span>
&lt;/div></code></pre>
`,
    selected: false,
    lastUpdate: '07.02.2024',
    footerLinks: [
        {
            title: 'старый синтаксис',
            path: 'https://youtu.be/vLlO-FDSyts?t=690',
        },
        {
            title: 'особенности использования',
            path: 'https://www.youtube.com/watch?v=Ag4bCejYr-U',
        },
    ],
};
