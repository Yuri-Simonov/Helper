import { IInfo } from 'src/app/shared/interfaces';

export const DYNAMIC_COMPONENTS: IInfo = {
    title: 'Динамические компоненты',
    body: `<i class="subtitle">Создание динамического компонента</i>
            <p>
                <span class="attention"
                    >Динамические компоненты - это компоненты, которые создаются в момент, когда приложение уже
                    работает</span
                >. Такие компоненты, начиная с 11-ой версии Angular больше не нужно каким-либо образом объявлять в
                конфигурационном объекте декоратора <code>&#64;NgModule()</code>.
            </p>
            <p>
                Для создания динамического компонента в классе компонента необходимо получить ссылку на контейнер, т.е.
                место в шаблоне компонента, где он будет добавляться. И далее, например, в методе жизненного цикла
                <code>ngOnInit</code> с помощью метода <code>createComponent</code>, который доступен свойству,
                содержащему контейнер, создается уже непосредственно сам динамический компонент:
            </p>
            <pre><code class="language-typescript">// класс обычного компонента
export class AppComponent {
	constructor(private viewContainer: ViewContainerRef) {}

	ngOnInit() {
		// DynamicComponent - компонент, который не указан в модуле
		this.viewContainer.createComponent(DynamicComponent);
	}
}</code></pre>
            <p>
                Тут также стоит обратить внимание на то, куда именно происходит добавление динамического компонента. Он
                добавляется в DOM-дерево сразу после контейнера, а не внутрь него. В этом нет никакой ошибки, просто
                когда мы получаем ссылку на контейнер через конструктор, то в роли самого контейнера выступает уже
                непосредственно текущий компонент, в данном случае это <code>AppComponent</code>. Поэтому после него и
                будет добавляться наш динамический компонент <code>DynamicComponent</code>.
            </p>
            <p>
                Если все же необходимо создавать динамический компонент внутри <code>AppComponent</code>, то в таком
                случае можно создать какой-нибудь элемент разметки в шаблоне корневого компонента и использовать его как
                контейнер, т.к.
                <span class="attention">в роли контейнера можно использовать любой элемент разметки в шаблоне</span>. И
                далее можно воспользоваться декоратором <code>&#64;ViewChild()</code>, чтобы получить к нему доступ в
                классе компонента:
            </p>
            <pre><code class="language-javascript">&lt;!-- шаблон компонента -->
&lt;div #example>&lt;/div></code></pre>
            <pre><code class="language-typescript">// класс обычного компонента
export class AppComponent {
	&#64;ViewChild('example', { read: ViewContainerRef }) container: ViewContainerRef;

	ngAfterViewInit() {
		this.viewContainer.createComponent(DynamicComponent);
	}
}</code></pre>
            <p>
                Тут также
                <span class="attention">важно не забывать указывать дополнительный параметр <code>read</code></span
                >, чтобы Angular понимал, что мы хотим получить на выходе именно контейнер. Без такого явного указания
                работать не будет.
            </p>
            <p>
                Но чтобы не засорять DOM-дерево лишними элементами разметки, обычно в таких случаях используют элемент
                <code>ng-container</code>.
            </p>
            <i class="subtitle">Передача данных в динамические компоненты</i>
            <p>Передавать данные в динамические компоненты можно двумя способами.</p>
            <pre><code class="language-typescript">// класс динамического компонента
export class DynamicComponent {
	&#64;Input() name: string;

	ngOnChanges() {
		console.log('ngOnChanges', this.name);
	}
}</code></pre>
            <p>Первый способ - с помощью свойства <code>instance</code>:</p>
            <pre><code class="language-typescript">// класс обычного компонента
export class AppComponent {
	&#64;ViewChild('example', { read: ViewContainerRef })
	container!: ViewContainerRef;

	ngAfterViewInit() {
		const newComponent = this.container.createComponent(DynamicComponent);
		newComponent.instance.name = 'new name'; // установили новое значение свойства name
	}
}</code></pre>
            <p>
                Данный способ плох тем, что
                <span class="attention">происходит скорее не передача данных, а их перезапись</span>. При данном способе
                никак не задействуется декоратор <code>&#64;Input()</code>, следовательно, жизненный цикл динамического
                компонента ничего не знает о произошедших изменениях.
            </p>
            <p>
                Второй способ более практичен, в нем передача данных осуществляется с помощью метода
                <code>setInput</code>, которому необходимо передать 2 обязательных параметра. Первый параметр - это
                название свойства, которое мы передаем внутрь, а второй параметр - это его значение:
            </p>
            <pre><code class="language-typescript">// класс обычного компонента
export class AppComponent {
	&#64;ViewChild('example', { read: ViewContainerRef })
	container!: ViewContainerRef;

	ngAfterViewInit() {
		const newComponent = this.container.createComponent(DynamicComponent);
		newComponent.setInput('name', 'new name'); // установили новое значение свойства name
	}
}</code></pre>
            <p>
                При данном способе передача данных уже использует декоратор <code>&#64;Input()</code>, поэтому жизненный
                цикл будет знать о произошедших изменениях.
            </p>
            <i class="subtitle">Получение данных из динамических компонентов</i>
            <p>
                C получением данных, на момент заполнения текущей информации, дела пока обстоят не очень, т.к. создание
                пользовательских событий и передача данных родителю через декоратор <code>&#64;Output()</code> пока что
                не работают. Но возможно в будущем этот момент поправят.
            </p>
            <p>
                Но если нужно просто получить данные из динамического компонента, без всяких произошедших в нем событий,
                то сделать это можно так же через свойство <code>instance</code>. С помощью него обращаемся к свойству
                или методу и получаем данные. Только у метода обязательно должно возвращаться какое-то значение, иначе
                вернется <code>undefined</code>:
            </p>
            <pre><code class="language-typescript">// класс динамического компонента
export class DynamicComponent {
	callName() {
	    return 'any name'; // не забываем возвращать что-то
  }
}</code></pre>
            <pre><code class="language-typescript">// класс обычного компонента
export class AppComponent {
	&#64;ViewChild('example', { read: ViewContainerRef })
	container!: ViewContainerRef;

	ngAfterViewInit() {
		const newComponent = this.container.createComponent(DynamicComponent);
		const someData = newComponent.instance.callName();
    	console.log('someData', someData);
	}
}</code></pre>
            <i class="subtitle">Асинхронная загрузка динамических компонентов</i>
            <p>
                Еще одним преимуществом динамических компонентов является возможность вынести их в отдельный бандл,
                т.е., подгружать их лишь в тот момент, когда они нам необходимы. Делается это с помощью асинхронного
                кода.
            </p>
            <pre><code class="language-typescript">// класс обычного компонента
export class AppComponent {
	constructor(private viewContainer: ViewContainerRef) {}

	async asyncShowComponent() {
		const { DynamicComponent } = await import(
			'./components/dynamic/dynamic.component'
		);
		this.viewContainer.createComponent(DynamicComponent);
	}
}</code></pre>
            <p>
                Таким способом можно повысить скорость загрузки приложения, если вынести тяжелый какой-то компонент в
                отдельный бандл и загружать лишь при необходимости, а не тянуть его сразу.
            </p>`,
    selected: false,
    lastUpdate: '17.03.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/GC6H9NF9w1o',
        },
    ],
};
