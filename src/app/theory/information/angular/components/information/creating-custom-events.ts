import { IInfo } from '@types';

export const CREATING_CUSTOM_EVENTS: IInfo = {
    title: 'Создание пользовательских событий',
    body: `            <p>
                Пользовательские события создаются, когда нужно передать данные на 1 уровень вложенности наверх при
                срабатывании определенного события в дочернем компоненте или директиве.
            </p>
            <p>
                Ниже будет разобран код на примере дочернего компонента, но в самом низу также будут ссылки на
                видеообъяснения, где разобраны оба варианта.
            </p>
            <p>
                <span class="attention">
                    Создание пользовательских событий осуществляется за счет специального Angular-класса
                    <code>EventEmitter</code>, а передача данных наверх происходит за счет декоратора
                    <code>@Output&#40;&#41;</code></span
                >:
            </p>
            <pre><code class="language-typescript">// класс дочернего компонента
&#64;Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  	&#64;Output() nameChange = new EventEmitter();
}</code></pre>
            <p>
                В примере выше пользовательское событие будет хранится в свойстве <code>nameChange</code>. Благодаря
                декоратору <code>@Output&#40;&#41;</code> данному свойству будет доступен метод <code>emit</code>,
                который и отправляет данные на 1 уровень вложенности наверх.
            </p>
            <p>
                Но данный метод нужно теперь как-то вызвать. В качестве примера создадим кнопку в дочернем компоненте,
                по клику на которую будет вызываться метод <code>changeName</code> в классе дочернего компонента, внутри
                которого присутствует вызов метода <code>emit</code>:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон дочернего компонента -->
&lt;button (click)="changeName()">Создать событие&lt;/button></code></pre>
            <pre><code class="language-typescript">// класс дочернего компонента
@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
	&#64;Output() nameChange = new EventEmitter&lt;string>();

	changeName() {
		this.nameChange.emit();
	}
}</code></pre>
            <p>
                При текущем коде наверх родителю никакие данные не уйдут. Это удобно, когда нужно просто уведомить
                родителя о срабатывании события в дочернем компоненте, а дальше он уже будет выполнять какую-то свою
                логику. Но если нужно передать данные, то они указываются первым аргументом в методе <code>emit</code>:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон дочернего компонента -->
&lt;button (click)="changeName()">Создать событие&lt;/button></code></pre>
            <pre><code class="language-typescript">// класс дочернего компонента
@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
	&#64;Input() name!: string; // допустим имя приходит от родителя

	// можно также указать тип отправляемых наверх данных
	&#64;Output() nameChange = new EventEmitter&lt;string>();

	changeName() {
		this.nameChange.emit('Имя, заданное в дочернем компоненте');
	}
}</code></pre>
            <p>
                Теперь нужно научить родительский компонент обрабатывать созданное нами пользовательское событие выше.
                Делается это точно так же, как и с обычными событиями:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон родительского компонента -->
&lt;app-child [name]="childName" (nameChange)="setNewName($event)">&lt;/app-child></code></pre>
            <p>
                Т.е., в качестве названия события указывается имя свойства, в котором хранится пользовательское событие
                (экземпляр класса <code>EventEmitter</code>), и после знака равно указывается метод из класса
                родительского компонента, который вызовется при его срабатывании. Если в пользовательском событии
                передаются какие-то данные, то они будут храниться в специальном объекте <code>$event</code>.
            </p>
            <p>
                И теперь остается создать метод в классе родительского компонента, который будет вызываться при
                срабатывании пользовательского события:
            </p>
            <pre><code class="language-typescript">// класс родительского компонента
&#64;Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	childName: string = 'Имя дочернего компонента';

	setNewName(newName: string) {
		this.childName = newName;
	}
}</code></pre>
            <p>
                Внутри метода <code>setNewName</code> может быть любая логика. Выше в качестве примера изменяется свойство
                <code>childName</code>.
            </p>`,
    selected: false,
    lastUpdate: '24.02.2024',
    footerLinks: [
        { title: 'Пример с дочерним компонентом', path: 'https://youtu.be/VUgOLgnBPcs?t=402' },
        { title: 'Пример с директивой', path: 'https://youtu.be/qHfHV5Ej4pg?t=903' },
    ],
};
