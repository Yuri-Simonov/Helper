import { IInfo } from 'src/app/shared/interfaces';

export const HOST_ATTRIBUTE_TOKEN: IInfo = {
    title: 'Класс <span class="variable">HostAttributeToken</span>',
    body: `<p>
                В спойлере "<i>Декоратор <code>@Attribute</code></i
                >" показано, как можно передавать статические данные в дочерний компонент через его конструктор класса:
            </p>
            <pre><code class="language-typescript">export class ChildComponent {
    constructor(@Attribute('name') public name: string) {}
}</code></pre>
            <p>
                Но есть и
                <span class="attention">
                    альтернативный подход - с помощью функции <code>inject</code> и класса
                    <code>HostAttributeToken</code></span
                >:
            </p>
            <pre><code class="language-typescript">export class ChildComponent {
	name: string = inject(new HostAttributeToken('name'));
}</code></pre>
            <p>Также можно установить опциональность для передаваемого значения:</p>
            <pre><code class="language-typescript">export class ChildComponent {
	name: string | null = inject(new HostAttributeToken('name'), {
		optional: true,
	})
}</code></pre>
            <p>
                Если не установить опциональность и забыть передать значение в дочерний компонент, то Angular выдаст
                ошибку.
            </p>`,
    selected: false,
    lastUpdate: '19.01.2025',
    footerLinks: [
        {
            path: 'https://youtu.be/GpRz_8EZvZY?t=130',
        },
    ],
};
