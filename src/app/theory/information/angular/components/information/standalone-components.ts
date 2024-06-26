import { IInfo } from '@types';

export const STANDALONE_COMPONENTS: IInfo = {
    title: '<span class="variable">Standalone</span> компоненты',
    body: `<p>
                В 14-ой версии Angular были добавлены standalone сущности, в частности standalone компоненты, которые
                <span class="attention">могут существовать сами по себе, без декларирования их в модуле</span>.
            </p>
            <p>
                Сами по себе standalone компоненты - это что-то среднее между обычным компонентом и модулем. Т.е.
                <span class="attention">
                    он может быть независим как модуль и иметь свой шаблон, логику и стили как обычный компонент</span
                >.
            </p>
            <p>
                Потребность в standalone компонентах появилась из-за того, что модули порой служили лишь ненужной
                прослойкой в импортах. Такая картина часто случается в shared модулях, где все, что декларируется в
                модуле, отдается так же на экспорт:
            </p>
            <pre><code class="language-typescript">&#64;NgModule({
    declarations: [BlueComponent, RedComponent, GreenComponent],
    imports: [CommonModule],
    exports: [BlueComponent, RedComponent, GreenComponent],
})
export class SomeSharedModule {}</code></pre>
            <p>
                Чтобы сделать обычный компонент standalone компонентом, нужно в его декораторе указать свойство
                <code>standalone</code> со значением <code>true</code>:
            </p>
            <pre><code class="language-typescript">&#64;Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    styleUrl: './some.component.scss',
    standalone: true,
})
export class SomeComponent {}</code></pre>
            <p>
                Т.к. standalone компоненты являются самостоятельными, то все необходимые для их работы зависимости нужно
                так же в ним импортировать. Делается это в свойстве <code>exports</code> конфигурационного объекта
                декоратора <code>@Components&#40;&#41;</code>:
            </p>
            <pre><code class="language-typescript">&#64;Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    styleUrl: './some.component.scss',
    standalone: true,
	imports: [CommonModule],
})
export class SomeComponent {}</code></pre>
            <p>
                В примере выше импортируется модуль <code>CommonModule</code>. Такой импорт не является оптимальным для
                standalone компонентов, т.к. внутри модуля <code>CommonModule</code> содержится различный функционал,
                который вряд ли будет использоваться в компонентах в полном объеме. Вместо такого импорта лучше
                импортировать конкретный функционал:
            </p>
            <pre><code class="language-typescript">&#64;Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    styleUrl: './some.component.scss',
    standalone: true,
	imports: [NgClass], // изменили импорт
})
export class SomeComponent {}</code></pre>
            <p>
                В примере выше, в качестве примера импортируется атрибутивная директива <code>NgClass</code>, которую
                теперь можно использовать в шаблоне:
            </p>
            <pre><code class="language-html">&lt;p [ngClass]="{'some-css-class': true}">Текст&lt;/p></code></pre>`,
    selected: false,
    lastUpdate: '24.03.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/mDdCB2oR9IE',
        },
    ],
};
