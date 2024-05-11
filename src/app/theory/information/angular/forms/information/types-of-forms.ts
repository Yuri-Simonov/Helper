import { IInfo } from '@types';

export const TYPES_OF_FORMS: IInfo = {
    title: 'Виды форм в Angular и разница между ними',
    body: `<p>
            В Angular различают 2 вида групп:
            <span class="attention">стандартные</span> (или шаблонные) и
            <span class="attention">реактивные</span>.
        </p>
        <i class="subtitle">Стандартные формы</i>
        <p>
            Тут все банально просто. Создаем в компоненте объект формы и
            подвязываемся к нему с помощью директивы <code>[(NgModel)]</code>,
            которую указываем в полях формы в HTML-шаблоне:
        </p>
<pre><code class="language-typescript">// класс компонента
loginForm: any = {
	login: '',
	password: '',
}</code></pre>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;input type="text" [(ngModel)]="login" />
&lt;input type="password" [(ngModel)]="password" /></code></pre>
        <i class="subtitle">Реактивные формы</i>
        <p>
            Реактивные формы построены на основе механизма, использующего
            реактивный подход к программированию.
        </p>
        <p>
            Реактивные формы создаются с помощью определенных объектов, таких
            как <code>FormGroup</code> и <code>FormControl</code>, где
            <code>FormGroup</code> - группа полей реактивной формы, а
            <code>FormControl</code> - само поле.
        </p>
<pre><code class="language-typescript">// класс компонента
export class ReactiveFormExampleComponent {
	someForm: FormGroup;
	
	this.someForm = new FormGroup({
		login: new FormControl(''),
		password: new FormControl('', Validators.required),
    })
}</code></pre>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;form [formGroup]="someForm">
	&lt;input type="text" [formControlName]="login" />
	&lt;input type="password" [formControlName]="password" />
&lt;/form></code></pre>
        <p>
            В шаблоне главная группа обозначается директивой
            <code>formGroup</code>, которой передается переменная одноименного
            типа, содержащая описание модели формы. Вложенные группы
            обозначаются директивой <code>formGroupName</code>, а поля группы —
            директивой <code>formControlName</code>.
        </p>
        <p>
            Альтернативный способ использования реактивных форм -
            <code>FormBuilder</code>.
        </p>
<pre><code class="language-typescript">// класс компонента
export class ReactiveFormExampleComponent {
	someForm: FormGroup;
	
	constructor(private fb: FormBuilder) {}
	
	this.someForm = this.fb.group({
		login: '',
		password: ['', Validators.required], // Если настроек валидации больше чем 1, то их нужно располагать в массиве
    })
}</code></pre>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;form [formGroup]="someForm">
	&lt;input type="text" [formControlName]="login" />
	&lt;input type="password" [formControlName]="password" />
&lt;/form></code></pre>
        <i class="subtitle">
            Так в чем же разница между шаблонными и реактивными формами
        </i>
        <p>
            Шаблонные формы используют модуль — <code>FormsModule</code>, а
            реактивные — <code>ReactiveFormsModule</code>.
        </p>
        <p>
            Шаблонные формы — <span class="attention">асинхронные</span>, в то
            время как реактивные — <span class="attention">синхронные</span>.
        </p>
        <p>
            Большая часть логики шаблонных форм написана в шаблоне, в то время,
            как логика реактивных форм прописана в компоненте.
        </p>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
