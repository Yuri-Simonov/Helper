import { IQuestion } from '@types';

export const formQuestions: IQuestion[] = [
    {
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
    },
    {
        title: 'Наследование форм',
        body: `<p>
            Как шаблонные, так и реактивные формы, наследуются от следующих
            базовых классов (они у них общие):
        </p>
        <ul>
            <li>
                <span class="attention">FormControl</span> — отслеживает
                значение каждого элемента формы отдельно;
            </li>
            <li>
                <span class="attention">FormGroup</span> — отслеживает целиком
                группу состоящую из контроллеров (FormControl);
            </li>
            <li>
                <span class="attention">FormArray</span> — FormArray отслеживает
                массив состоящий из групп контроллеров (<code>FormGroup</code>,
                <code>FormControl</code>);
            </li>
            <li>
                <span class="attention">ControlValueAccessor</span> — создает
                "мост" между <code>FormControl</code> и элементами DOM.
            </li>
        </ul>`,
        selected: false,
    },
    {
        title: 'Двустороннее связывание в полях формы',
        body: `<i class="subtitle">Шаблонные формы</i>
        <p>
            Отличительной особенностью полей форм в механизме двухстороннего
            связывания является использование директивы
            <code>NgModel</code>, которая
            <span class="attention"
                >может использоваться только с элементами формы.</span
            >
        </p>
        <pre><code class="language-html">&lt;input type="text" [(ngModel)]="value" /></code></pre>
        <p>
            При изменении значения в инпуте, оно записывается в свойство
            <code>value</code>. Аналогично и наоборот, если значение придет из
            компонента, то оно так же подставится в инпут.
        </p>
        <i class="subtitle">Реактивные формы</i>
        <p><i>В разработке...</i></p>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Отслеживание изменений в реактивных формах',
        body: `<p>
            Отслеживание изменений формы осуществляется через подписку на
            <code>valueChanges</code>. Функция обработчик принимает параметром
            значение формы.
        </p>
<pre><code class="language-typescript">this.someForm.valueChanges.subscribe((value) => {
  console.log(value)
})</code></pre>
        <p>Использовать valueChanges можно применительно к отдельному полю:</p>
<pre><code class="language-typescript">this.someForm.get('login').valueChanges.subscribe((value) => {
  console.log(value)
})</code></pre>
        <p>
            Если необходимо отследить изменение статуса формы, то нужно
            подписаться на <code>statusChanges</code>:
        </p>
<pre><code class="language-typescript">this.someForm.statusChanges.subscribe((status) => {
  console.log(status)
})</code></pre>
        <p>Аналогично и для конкретного поля формы:</p>
<pre><code class="language-typescript">this.someForm.get('login').statusChanges.subscribe((status) => {
  console.log(status)
})</code></pre>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Создание кастомного компонента формы',
        body: `<p>
            Компоненты, содержащие пользователькие поля формы (Custom Controls),
            создаются с помощью встроенной директивы
            <code>ControlValueAccessor</code>, которая отвечает за отслеживание
            значения поля формы в дочернем компоненте и передачу его обратно в
            родительскую форму.
        </p>
        <p>Для примера нам необходимо 2 компонента: родительский и дочерний.</p>
<pre><code class="language-typescript">// родительский компонент
@Component({
	selector: 'parent-component',
	template: '&lt;counter-component>&lt;/counter-component>'
})

export class ParentComponent {}</code></pre>
<pre><code class="language-typescript">// дочерний компонент
@Component({
	selector: 'counter-component',
	template: '&lt;button (click)="down()">Down&lt;/button>
					{{counter}}
				&lt;button (click)="up()">Up&lt;/button>'
})

export class CounterControlComponent {
	@Input('counter') counterProps = 0;
 
	up() {
		this.counterProps++;
 	}
 
	down() {
 		this.counterProps--;
	}
}</code></pre>
        <p>
            Суть примера будет следующая: у нас будет простой счетчик, где есть
            2 кнопки - для увеличения и уменьшения значения.
        </p>
        <p>
            В данный пример теперь необходимо внедрить
            <code>ControlValueAccessor</code> и методы, необходимые для его
            работы. Их всего 4:
        </p>
        <ul>
            <li>
                <span class="attention">writeValue</span> - устанавливает
                начальное значение в элемент формы;
            </li>
            <li>
                <span class="attention">registerOnChange</span> - сообщает
                родителю об изменении значения;
            </li>
            <li>
                <span class="attention">registerOnTouched</span> - сообщает
                родителю о том, что произошло взаимодействие пользователя с
                элементом формы;
            </li>
            <li>
                <span class="attention">setDisabledState</span> - управление
                видимостью элемента формы, т.е. сможем ли мы как-то изменять его
                или нет.
                <span class="attention">Является опциональным методом.</span>
            </li>
        </ul>
<pre><code class="language-typescript">// дочерний компонент
@Component({
	selector: 'counter-component',
	template: '&lt;button (click)="down()">Down&lt;/button>
					{{counter}}
				&lt;button (click)="up()">Up&lt;/button>',
	providers: [{
		provide: NG_VALUE_ACCESSOR, // Токен
		useExisting: forwardRef(() => CounterControlComponent), // Экземпляр используемого компонента
		multi: true // зависимостей с таким токеном может быть больше 1
 	}]
})

// Реализовываем интерфейс ControlValueAccessor в дочернем компоненте
export class CounterControlComponent implements ControlValueAccessor {
	@Input('counter') counterProps = 0;
 
	onChange(_: any) {}
	onTouch(_: any) {}
	disabled: boolean;

	up() {
		this.counterProps++;
		this.onChange(this.counterProps);
 	}
 
	down() {
 		this.counterProps--;
		this.onChange(this.counterProps);
	}

	writeValue(counter: number) {
		this.counterProps = counter;
	}

	registerOnChange(onChange: any) {
		this.onChange = onChange;
	}

	registerOnTouched(onTouched: any) {
		this.onTouched = onTouched;
	}

	setDisabledState?(disabled: boolean) {
		this.disabled = disabled;
	}
}</code></pre>
        <p>Теперь давайте разберемся в том, что написано выше.</p>
        <p>
            В самом начале мы сообщаем Angular, что реализовываем интерфейс
            <code>ControlValueAccessor</code>, и внедряем зависимость от него
            прямо в компонент в поле <code>providers</code>. Далее реализовываем
            все необходимые методы для данного интерфейса.
        </p>
        <p>
            И теперь осталось лишь немного добавить код родительскому
            компоненту, чтобы довести начатое до конца:
        </p>
<pre><code class="language-typescript">// родительский компонент
@Component({
	selector: 'parent-component',
	template: '&lt;form [formGroup]="form">
					&lt;counter-control formControlName="counter">&lt;/counter-control>
				&lt;/form>'
})

export class ParentComponent implements OnInit {
	form: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.form = this.fb.group({ counter: 5 })
	}
}</code></pre>
        <p>
            Выше пример для реактивной формы. Для шаблонной формы родитель
            выглядел бы следующим образом:
        </p>
<pre><code class="language-typescript">@Component({
	selector: 'parent-component',
	template: '&lt;counter-control [(ngModel)]="controlValue">&lt;/counter-control>'
})

export class ParentComponent {
	controlValue = 10;
}</code></pre>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
];
