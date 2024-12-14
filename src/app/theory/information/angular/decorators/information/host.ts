import { IInfo } from 'src/app/shared/interfaces';

export const HOST: IInfo = {
    title: 'Декоратор <span class="variable">@Host()</span>',
    body: `<p>
                <span class="attention"
                    >Декоратор <code>@Host()</code> сообщает Angular, что не нужно искать регистрацию зависимости выше
                    представления родительского компонента.</span
                >
            </p>
            <p>
                Работу данного декоратора стоит рассматривать на примере с директивами, т.к. компоненты и так являются
                сами себе родителями. А вот директивы нет.
            </p>
            <p>Допустим у нас есть следующий компонент:</p>
            <pre><code class="language-typescript">// класс компонента
@Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    imports: [ChildDirective, ParentDirective],
	/**
	 * Регистрация запрашиваемой зависимости.
	 * В данном случае произвольный сервис
	*/
    providers: [SomeService],
})
export class SomeComponent {}</code></pre>
            <pre><code class="language-html">&lt;!-- шаблон компонента --&gt;
&lt;section appParent>
    &lt;article appChild>&lt;/article>
&lt;/section></code></pre>
            <p>В шаблоне компонента указаны директивы <code>appParent</code> и <code>appChild</code>.</p>
            <p>Код директивы <code>appParent</code>:</p>
            <pre><code class="language-typescript">@Directive({
    selector: '[appParent]',
})
export class ParentDirective {
    constructor(@Host() @Optional() private someService: SomeService) {
        console.log('ParentDirective', this.someService);
    }
}</code></pre>
            <p>Код директивы <code>appChild</code>:</p>
            <pre><code class="language-typescript">@Directive({
    selector: '[appChild]',
})
export class ChildDirective {
    constructor(@Host() @Optional() private someService: SomeService) {
        console.log('ChildDirective', this.someService);
    }
}</code></pre>
            <p>
                Из кода видно, что в обеих директивах свойство с запрашиваемой зависимостью выводится в консоль. А так
                же в классе компонента <code>SomeComponent</code> регистрируется сервис <code>someService</code>. Но
                если запустить данный код и открыть консоль, то у обоих свойств выводится <code>null</code>.
            </p>
            <p>
                Еще раз напомню, что
                <span class="attention"
                    >указание декоратора <code>@Host()</code> у внедряемой зависимости сообщает Angular, что не нужно
                    искать ее регистрацию выше представления родительского компонента</span
                >. Также напомню, что представление компонента - это его шаблон, с учетом всех шаблоном дочерних
                компонентов, если таковые имеются.
            </p>
            <p>
                Иначе говоря, в нашем случае представление - это шаблон текущего компонента. Теперь, надеюсь, стало
                понятно почему директивы не видят регистрацию зависимости в классе компонента.
            </p>
            <p>
                Есть 2 способа как сделать так, чтобы директивы получили доступ к запрашиваемой ими зависимости.
                Добавить в родительскую директиву регистрацию запрашиваемой зависимости, либо с помощью свойства
                <code class="dialog" dialog_id="viewProviders">viewProviders</code>, доступное декоратору
                <code>@Component()</code>.
            </p>
            <p>
                Здесь разберем первый способ. Его недостаток заключается в том, что регистрация запрашиваемой
                зависимости переносится из компонента в директиву:
            </p>
            <pre><code class="language-typescript">@Directive({
    selector: '[appParent]',
	// регистрация запрашиваемой зависимости
	providers: [SomeService],
})
export class ParentDirective {
    constructor(@Host() @Optional() private someService: SomeService) {
        console.log('ParentDirective', this.someService);
    }
}</code></pre>
            <p>
                Теперь директивы <code>appParent</code> и <code>appChild</code> имеют доступ к запрашиваемой ими
                зависимости.
            </p>`,
    selected: false,
    lastUpdate: '14.12.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/y9kMzhq2ERM?t=264',
        },
    ],
};
