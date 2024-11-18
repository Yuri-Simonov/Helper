import { IInfo } from 'src/app/shared/interfaces';

export const HOST: IInfo = {
    title: 'Декоратор <span class="variable">@Host()</span>',
    body: `<p>
		Декоратор <code>@Host</code> сообщает <code>DI</code>
		<span class="attention"
			>искать зависимость в любом инжекторе, пока он не достигнет
			хоста</span
		>. В большинстве случаев компонент и является хостом.
	</p>
	<p>
		Существует два распространенных случая, в которых хост-компонент
		отличается от текущего класса компонента:
	</p>
	<ul>
		<li>
			<span class="attention">Директива</span>. Директива будет
			искать зависимость в компоненте, в котором она находится.
		</li>
		<li>
			<span class="attention">Проекция</span>. Когда компонент
			находится внутри
			<code>ng-content</code>
			другого компонента. Внутренний компонент будет искать
			зависимости во внешнем компоненте.
		</li>
	</ul>
	<pre><code class="language-typescript">class OtherService {}

class HostService {}

@Directive({selector: 'child-directive'})

class ChildDirective {
	logs: string[] = [];

	constructor(@Optional() @Host() os: OtherService, @Optional() @Host() hs: HostService) {
		// os имеет значение null: true
		this.logs.push("os is null: " + (os === null));
		// hs - это экземпляр HostService: true
		this.logs.push("hs is an instance of HostService: " + (hs instanceof HostService));
	}
}

@Component({
	selector: 'parent-component',
	viewProviders: [HostService],
	template: '&lt;child-directive>&lt;/child-directive>',
})

class ParentComponent {}

@Component({
	selector: 'app',
	viewProviders: [OtherService],
	template: '&lt;parent-component>&lt;/parent-component>',
})

class App {}</code></pre>`,
    selected: false,
    lastUpdate: '23.09.2023',
};
