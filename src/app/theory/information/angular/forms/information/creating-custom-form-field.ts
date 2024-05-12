import { IInfo } from '@types';

export const CREATING_CUSTOM_FORM_FIELD: IInfo = {
    title: 'Создание кастомного компонента формы',
    body: `<p>
            Компоненты, содержащие пользовательские поля формы (Custom Controls),
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
};
