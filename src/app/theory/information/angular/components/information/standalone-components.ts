import { IInfo } from 'src/app/shared/interfaces';

export const STANDALONE_COMPONENTS: IInfo = {
    title: '<span class="variable">Standalone</span> компоненты',
    body: `<p>
                В 14-ой версии Angular была добавлена возможность задавать автономность для компонентов, директив и пайп, т.е., делать их standalone сущностями, которые
                <span class="attention">могут существовать сами по себе, без декларирования их в модуле</span>.
            </p>
            <p>
                Сами по себе standalone компоненты - это что-то среднее между обычными компонентами и модулями. Т.е.
                <span class="attention">
                    они могут быть независимы как модули и иметь свои собственные шаблоны, логику и стили как обычные компоненты</span
                >.
            </p>
            <p>
                Потребность в standalone компонентах появилась из-за того, что модули порой служили лишь ненужной
                прослойкой в импортах. Такая картина часто случается в <code>shared</code> модулях, где все, что в нем декларируется,
                отдается так же на экспорт:
            </p>
            <pre><code class="language-typescript">&#64;NgModule({
	// что задекларировали
    declarations: [BlueComponent, RedComponent, GreenComponent],
    imports: [CommonModule],
	// то и экспортируем
    exports: [BlueComponent, RedComponent, GreenComponent],
})
export class SomeSharedModule {}</code></pre>
            <p>
                Начиная с 19-ой версии Angular standalone сущности стали использоваться по умолчанию. Это означает, что
                когда создается компонент через команду <code>Angular CLI</code> или вручную, то по умолчанию он
                является standalone компонентом и
                <span class="attention">
                    указывать в его декораторе свойство
                    <code>standalone: true</code> теперь не нужно</span
                >.
            </p>
            <pre><code class="language-typescript">&#64;Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    styleUrl: './some.component.scss',
})
export class SomeComponent {}</code></pre>
            <p>
                Теперь <span class="attention">
					указывать данное свойство есть смысл только в случаях, когда нужно наоборот отключить
					автономность</span>. Т.е., сделать так, как это было раньше, когда использовались модули и необходимо было в них
                декларировать компонент.
            </p>
            <pre><code class="language-typescript">&#64;Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    styleUrl: './some.component.scss',
	/**
	 * Отключаем автономность.
	 * Теперь данный компонент нужно задекларировать в модуле.
	*/
    standalone: false,
})
export class SomeComponent {}</code></pre>
            <pre><code class="language-typescript">&#64;NgModule({
	// задекларировали компонент
    declarations: [SomeComponent],
    imports: [CommonModule],
})
export class SomeSharedModule {}</code></pre>
            <p>
                Т.к. standalone компоненты являются самостоятельными, то все необходимые для их работы зависимости нужно
                также в них импортировать. Делается это в свойстве <code>imports</code>:
            </p>
            <pre><code class="language-typescript">&#64;Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    styleUrl: './some.component.scss',
	// импортируем нужные зависимости
	imports: [CommonModule],
})
export class SomeComponent {}</code></pre>
            <p>
                В примере выше импортируется модуль <code>CommonModule</code>. Такой импорт не является оптимальным для
                standalone компонентов, т.к. внутри модуля <code>CommonModule</code> содержится различный функционал,
                который вряд ли будет использоваться в компонентах в полном объеме, но весь его объем попадет в бандл. Вместо такого импорта лучше
                импортировать конкретный функционал:
            </p>
            <pre><code class="language-typescript">&#64;Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    styleUrl: './some.component.scss',
	// изменили импорт
	imports: [NgClass], 
})
export class SomeComponent {}</code></pre>
            <p>
                В примере выше из всего модуля <code>CommonModule</code> в компонент импортируется только атрибутивная директива <code>NgClass</code>. И также из всего модуля <code>CommonModule</code> в бандл попадет только она. Поэтому в standalone сущности важно импортировать лишь только то, что им необходимо для работы.
            </p>
			<p>После того, как зависимость была импортирована, ей можно воспользоваться в шаблоне:</p>
            <pre><code class="language-html">&lt;p [ngClass]="{'some-css-class': true}">Текст&lt;/p></code></pre>`,
    selected: false,
    lastUpdate: '24.11.2024',
    footerLinks: [
        {
            title: 'Standalone компоненты',
            path: 'https://youtu.be/mDdCB2oR9IE',
        },
        {
            title: 'Standalone по умолчанию',
            path: 'https://youtu.be/5p6IyZPEk1A?t=79',
        },
    ],
};
