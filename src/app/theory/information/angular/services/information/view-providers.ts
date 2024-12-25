import { IInfo } from 'src/app/shared/interfaces';

export const VIEW_PROVIDERS: IInfo = {
    title: 'Свойство <span class="variable">viewProviders</span>',
    body: `<p>
                <span class="attention"
                    >Свойство <code>viewProviders</code> используется для регистрации зависимостей</span
                >.
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	viewProviders: [DataService],
})
export class AppComponent {
    constructor(private dataService: DataService) {
        console.log(this.dataService);
    }
}</code></pre>
            <p>Оно очень похоже по функционалу на свойство <code>providers</code>, но имеет некоторые отличия.</p>
            <i class="subtitle">1-ое отличие</i>
            <p>
                Первое отличие состоит в том, что
                <span class="attention">свойство <code>viewProviders</code> доступно только компонентам</span>. В то
                время, как свойство <code>providers</code>, помимо компонентов, может быть еще использовано в сервисах,
                директивах и модулях.
            </p>
            <i class="subtitle">2-ое отличие</i>
            <p>
                Второе отличие заключается в области видимости регистрируемых зависимостей.
                <span class="attention">
                    Свойство
                    <code>viewProviders</code> предоставляет доступ не только своему классу и классам дочерних
                    компонентов, но а так же их представлениям</span
                >.
            </p>
            <p>
                Например у нас есть компонент внутри которого на одном из тегов висит директива <code>appParent</code>:
            </p>
            <pre><code class="language-html">&lt;!-- some.component.html --&gt;
&lt;div appParent>&lt;/div></code></pre>
            <p>В этой директиве внедряется зависимость на произвольный сервис <code>SomeService</code>:</p>
            <pre><code class="language-typescript">@Directive({
    selector: '[appParent]',
})
export class ParentDirective {
    constructor(@Host() @Optional() private someService: SomeService) {
        console.log('ParentDirective', this.someService);
    }
}</code></pre>
            <p>
                И допустим мы регистрируем нужную данной директиве зависимость в том компоненте, где она используется:
            </p>
            <pre><code class="language-typescript">// some.component.ts

@Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    imports: [ChildDirective, ParentDirective],
    providers: [SomeService],
})
export class SomeComponent {}</code></pre>
            <p>
                При данном коде директива <code>appParent</code> не будет иметь доступа к сервису
                <code>SomeService</code>, т.к. на ней висит декоратор <code>@Host()</code>, который сообщает Angular,
                что не нужно искать регистрацию зависимости выше представления родительского компонента.
            </p>
            <p>Но ситуация изменится, если свойство <code>providers</code> заменить на <code>viewProviders</code>:</p>
            <pre><code class="language-typescript">// some.component.ts

@Component({
    selector: 'app-some',
    templateUrl: './some.component.html',
    imports: [ChildDirective, ParentDirective],
	// заменили свойство providers на viewProviders
    viewProviders: [SomeService],
})
export class SomeComponent {}</code></pre>
            <p>
                Теперь директива <code>appParent</code> будет иметь доступ к сервису <code>SomeService</code>, т.к.
                регистрация зависимости распространяется и на представление компонента тоже.
            </p>
            <i class="subtitle">3-е отличие</i>
            <p>
                У свойства <code>viewProviders</code> есть еще одно отличие.
                <span class="attention"
                    >Функционал свойства <code>viewProviders</code> в отличие от свойства <code>providers</code> не
                    распространяется на содержимое, которое указывается между тегами компонента</span
                >.
            </p>
            <p>
                Для примера нам понадобится произвольный сервис <code>RandomService</code> с самостоятельной
                регистрацией в корневом инжекторе:
            </p>
            <pre><code class="language-typescript">@Injectable({
	// самостоятельная регистрация в корневом инжекторе
    providedIn: 'root',
})
export class RandomService {
    private _randomNumber: number;

    constructor() {
        this._randomNumber = Math.floor(Math.random() * 100);
    }
}</code></pre>
            <p>
                Также сразу создадим еще 2 произвольных компонента, например, <code>RedComponent</code> и
                <code>GreenComponent</code>. И в их классах внедрим зависимость на сервис <code>RandomService</code> и
                выведем его в консоль:
            </p>
            <pre><code class="language-typescript">// green.component.ts

@Component({
    selector: 'app-green',
    template: '',
})
export class GreenComponent {
    constructor(private randomService: RandomService) {
        console.log('GreenComponent', this.randomService);
    }
}</code></pre>
            <pre><code class="language-typescript">// red.component.ts

@Component({
    selector: 'app-red',
    template: '',
	// регистрируем новый экземпляр зависимости
	viewProviders: [RandomService],
})
export class RedComponent {
    constructor(private randomService: RandomService) {
        console.log('RedComponent', this.randomService);
    }
}</code></pre>
            <p>
                Также обратите внимание, что в красном компоненте с помощью свойства
                <code>viewProviders</code> регистрируется новый экземпляр зависимости, т.к. данная запись является
                сокращенной и под капотом использует способ <code>useClass</code>.
            </p>
            <p>
                И, например, как основу возьмем произвольный дочерний компонент, в котором также будет внедряться как
                зависимость сервис <code>RandomService</code>:
            </p>
            <pre><code class="language-typescript">// child.component.ts

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
	// импорты созданных компонентов
    imports: [RedComponent, GreenComponent],
})
export class ChildComponent {
    constructor(private randomService: RandomService) {
        console.log('ChildComponent', this.randomService);
    }
}</code></pre>
            <p>
                В данный компонент импортируем компоненты <code>RedComponent</code> и <code>GreenComponent</code>. И в
                шаблоне дочернего компонента используем их следующим образом:
            </p>
            <pre><code class="language-html">&lt;!-- child.component.html --&gt;

&lt;app-red>
    &lt;app-green>&lt;/app-green>
&lt;/app-red></code></pre>
            <p>Т.е., <code>GreenComponent</code> используется как содержимое для <code>RedComponent</code>.</p>
            <p>
                И после сохранений всех изменений в консоли браузера будет следующий результат (числа взяты
                произвольные):
            </p>
            <pre><code class="language-typescript">ChildComponent _RandomService {_randomNumber: 52}
RedComponent _RandomService {_randomNumber: 69}
GreenComponent _RandomService {_randomNumber: 52}</code></pre>
            <p>Как видите, результаты <code>ChildComponent</code> и <code>GreenComponent</code> совпадают.</p>
            <p>
                Как уже было сказано выше, функционал свойства <code>viewProviders</code> в отличие от свойства
                <code>providers</code> не распространяется на содержимое, которое указывается между тегами компонента.
            </p>
            <p>
                В нашем примере в качестве содержимого для <code>RedComponent</code> указан <code>GreenComponent</code>.
            </p>
            <p>
                <code>GreenComponent</code> определен в представлении <code>ChildComponent</code>. Поэтому
                <code>GreenComponent</code> сначала будет искать зависимость в своем инжекторе. Ее там нет, он пойдет в
                инжектор <code>RedComponent</code>. Там есть регистрация нужной ему зависимости, но она определена через
                свойство <code>viewProviders</code>, поэтому он ее не увидит, т.к. является содержимым для
                <code>RedComponent</code>.
            </p>
            <p>
                <code>GreenComponent</code> продолжит поиски в <code>ChildComponent</code>. Там тоже нет регистрации
                нужной ему зависимости, но есть в корневом инжекторе. И т.к. <code>ChildComponent</code> и
                <code>GreenComponent</code> берут экземпляр зависимости из корневого инжектора, поэтому их состояния и
                значения совпадают.
            </p>
            <p>
                В инжекторе <code>RedComponent</code> создается новая регистрация зависимости, поэтому он имеет другое
                состояние сервиса <code>RandomService</code> и, как следствие этого, другой результат.
            </p>
            <p>
                Если внутри красного компонента мы бы использовали свойство <code>providers</code>, то в таком случае
                результаты <code>RedComponent</code> и <code>GreenComponent</code> были бы одинаковые, и отличались бы
                от экземпляра зависимости <code>ChildComponent</code>:
            </p>
            <pre><code class="language-typescript">// red.component.ts

@Component({
    selector: 'app-red',
    template: '',
	// регистрация через свойство providers
	providers: [RandomService],
})
export class RedComponent {
    constructor(private randomService: RandomService) {
        console.log('RedComponent', this.randomService);
    }
}</code></pre>
            <p>Результат в консоли при замене свойства <code>viewProviders</code> на <code>providers</code>:</p>
            <pre><code class="language-typescript">ChildComponent _RandomService {_randomNumber: 16}
RedComponent _RandomService {_randomNumber: 77}
GreenComponent _RandomService {_randomNumber: 77}</code></pre>
            <p>
                Или если коротко:
                <span class="attention"
                    >содержимое будет брать тот же самый экземпляр зависимости, что и компонент, внутри которого он
                    определен</span
                >.
            </p>
            <i class="subtitle">Когда применять свойство viewProviders</i>
            <p>
                Свойство <code>viewProviders</code> может быть полезно, когда у директив используется декоратор
                <code>@Host</code> и нужно, чтобы директивы брали зависимость у компонентов, на которых они висят в
                шаблоне. Или в случаях, когда внутрь компонента пробрасываете какое-то содержимое и нужно
                инкапсулировать от него имеющуюся уже в компоненте логику. В остальных случаях проще использовать
                свойство <code>providers</code>, т.к. в нем нет различных нюансов, о которых нужно знать.
            </p>`,
    selected: false,
    lastUpdate: '25.12.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/yeda2TzFxwM',
        },
    ],
};
