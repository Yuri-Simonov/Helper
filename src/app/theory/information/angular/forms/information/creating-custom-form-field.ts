import { IInfo } from 'src/app/shared/interfaces';

export const CREATING_CUSTOM_FORM_FIELD: IInfo = {
    title: 'Создание кастомных элементов формы',
    body: `<p>Предположим, у нас есть реактивная форма с двумя одинаковыми инпутами:</p>
            <pre><code class="language-typescript">export class AppComponent {
	private formBuilder = inject(FormBuilder);

	reactiveForm = this.formBuilder.group({
		firstInput: ['Первый инпут'],
		secondInput: ['Второй инпут'],
	});

	onSubmit(value?: any) {
		console.log('value', value);
	}
}</code></pre>
            <pre><code class="language-html">&lt;form (ngSubmit)="onSubmit(reactiveForm.value)">
	&lt;h2>Реактивная форма&lt;/h2>
	&lt;input type="text" />
	&lt;app-custom-input>&lt;/app-custom-input>

	&lt;button>Отправить&lt;/button>
&lt;/form></code></pre>
            <p>Дочерний компонент <code>app-custom-input</code> имеет следующий код:</p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-custom-input',
    template: '&lt;input type="text" />',
})
export class CustomInputComponent {}</code></pre>
            <p>
                В примере выше инпут,
                <span class="attention">подключаемый как дочерний компонент — это и есть кастомный элемент формы</span>.
                Его можно переиспользовать не только в этой форме, но и в других. При этом внутрь него можно
                пробрасывать различные значения, от которых он будет зависеть. Это делает такой компонент гибким и
                масштабируемым, в отличие от инпута, полностью прописанного в разметке текущего компонента.
            </p>
            <p>
                Начнём разбираться на примере реактивных форм. А в конце посмотрим еще и на примере с шаблонной формой.
            </p>
            <p>
                Чтобы использовать оба элемента формы как поля реактивной формы, необходимо их связать со свойством
                <code>reactiveForm</code> из класса компонента <code>AppComponent</code> с помощью директив
                <code>formGroup</code> и <code>formControlName</code>:
            </p>
            <pre><code class="language-typescript">&lt;form [formGroup]="reactiveForm" (ngSubmit)="onSubmit(reactiveForm.value)">
	&lt;h2>Реактивная форма&lt;/h2>
	&lt;input type="text" formControlName="firstInput" />
	&lt;app-custom-input formControlName="secondInput">&lt;/app-custom-input>

	&lt;button>Отправить&lt;/button>
&lt;/form></code></pre>
            <p>
                Добавление директив будет достаточно для первого инпута, который прописан прямо в разметке компонента
                <code>AppComponent</code>.
                <span class="attention">Для кастомного элемента формы этого будет недостаточно</span>.
            </p>
            <p>
                Чтобы Angular мог работать с нашим компонентом как с полноценным элементом формы, нужно сделать две
                вещи. Сперва <span class="attention">нужно зарегистрировать в нем токен</span>
                <code>NG_VALUE_ACCESSOR</code>. Это сообщит Angular, что компонент может управлять значением в полях
                формы, если используется с директивами <code>formControl</code>, <code>formControlName</code> или
                <code>ngModel</code>. Выбор директивы зависит от типа формы, с которой работает компонент: реактивные
                формы или шаблонные.
            </p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-custom-input',
	template: '&lt;input type="text" />',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: CustomInputComponent,
			multi: true,
		},
	],
})
export class CustomInputComponent {}</code></pre>
            <p>
                И второе, что нужно сделать - это <span class="attention">связать наше кастомное поле с формой</span>.
                Для этого в Angular есть специальный интерфейс <code>ControlValueAccessor</code>, который необходимо
                реализовать в компоненте. Это позволит Angular управлять значением поля, отслеживать его изменения и
                обновлять состояния.
            </p>
            <p>Данный интерфейс включает четыре метода, один из которых является опциональным:</p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-custom-input',
    template: '&lt;input type="text" />',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: CustomInputComponent,
            multi: true,
        },
    ],
})
export class CustomInputComponent implements ControlValueAccessor {
    writeValue(obj: any): void {}
    registerOnChange(fn: any): void {}
    registerOnTouched(fn: any): void {}
    setDisabledState?(isDisabled: boolean): void {}
}</code></pre>
            <i class="subtitle">writeValue</i>
            <p>
                Метод <code>writeValue</code>
                <span class="attention">
                    вызывается, когда компонент связывается с формой, а также при обновлении значения поля формы</span
                >. Обновлённое значение поступает в этот метод первым параметром.
            </p>
            <p>
                Например, если в родительском компоненте задано начальное значение для поля формы, Angular воспользуется
                методом <code>writeValue</code>, чтобы передать это значение в наш инпут.
            </p>
            <p>
                Внутри данного метода необходимо реализовать логику отображения переданного значения. В нашем случае —
                просто сохраняем его в свойство класса и передаём это значение в шаблон:
            </p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-custom-input',
	template: '&lt;input type="text" [value]="inputValue"/>',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: CustomInputComponent,
			multi: true,
		},
	],
})
export class CustomInputComponent implements ControlValueAccessor {
	inputValue: string = '';

	writeValue(value: string): void {
		this.inputValue = value;
	}
	
	registerOnChange(fn: any): void {}
	registerOnTouched(fn: any): void {}
	setDisabledState?(isDisabled: boolean): void {}
}</code></pre>
            <p>
                После реализации метода <code>writeValue</code>, значение из свойства
                <code>reactiveForm.secondInput</code> будет отображаться в кастомном элементе формы. Но если ввести
                что-то новое в этот инпут и отправить форму, — отправится не введённое значение, а прежнее. Почему так
                происходит — сейчас разберёмся.
            </p>
            <i class="subtitle">registerOnChange</i>
            <p>
                Чтобы устранить эту проблему, нужно реализовать логику внутри метода <code>registerOnChange</code>. Этот
                метод <span class="attention">вызывается один раз, когда компонент связывается с формой</span>.
            </p>
            <p>
                На вход он получает функцию <code>fn</code>, которую необходимо сохранить во внутреннее свойство
                компонента <code>onChange</code>. Позже мы будем вызывать её каждый раз, когда значение поля будет
                изменяться.
            </p>
            <pre><code class="language-typescript">export class CustomInputComponent implements ControlValueAccessor {
	inputValue: string = '';

	onChange: (value: string) => void;

	writeValue(value: string): void {
		this.inputValue = value;
	}
	
	registerOnChange(fn: any): void {
		// Сохраняем функцию в свойство компонента
        this.onChange = fn;
    }
	
	registerOnTouched(fn: any): void {}
	setDisabledState?(isDisabled: boolean): void {}
}</code></pre>
            <p>
                Теперь, чтобы сообщить родительской форме об изменении значения в кастомном поле, мы будем вызывать
                функцию, которая хранится в свойстве <code>onChange</code>.
            </p>
            <p>
                В шаблоне у нас обычный инпут, поэтому мы можем повесить на него обработчик события <code>input</code> и
                по его срабатыванию вызывать метод из класса компонента, содержащий внутри функцию
                <code>onChange</code>:
            </p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-custom-input',
	template: '&lt;input type="text" [value]="inputValue" (input)="onInput($event)"/>',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: CustomInputComponent,
			multi: true,
		},
	],
})
export class CustomInputComponent implements ControlValueAccessor {
	inputValue: string = '';

	onChange: (value: string) => void;

	writeValue(value: string): void {
		this.inputValue = value;
	}
	
	registerOnChange(fn: any): void {
        this.onChange = fn;
    }

	registerOnTouched(fn: any): void {}
	setDisabledState?(isDisabled: boolean): void {}

	onInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.inputValue = input.value;
        this.onChange(this.inputValue);
    }
}</code></pre>
            <p>Теперь при изменении данных в кастомном инпуте, они будут отправятся корректно.</p>
            <i class="subtitle">registerOnTouched</i>
            <p>
                Метод <code>registerOnTouched</code> очень похож на метод <code>registerOnChange</code>. Он также
                <span class="attention">вызывается один раз, когда компонент связывается с формой</span>, и также
                получает на вход функцию <code>fn</code>. Но в данном случае эта функция будет вызвана, когда кастомное
                поле формы теряет фокус.
            </p>
            <p>
                На практике это выглядит следующим образом. Когда мы кликаем на поле форме, он получает фокус. Затем,
                если кликаем вне границ элемента формы, он теряет фокус и его состояние
                <code>ng-untouched</code> изменяется на <code>ng-touched</code>.
            </p>
            <p>
                Чтобы это работало и для кастомного поля формы, нужно настроить логику, связанную с методом
                <code>registerOnTouched</code>.
            </p>
            <p>
                Принцип тот же. Сначала сохраняем переданную функцию в свойство компонента. Затем в шаблоне вешаем на
                инпут событие <code>blur</code> и при его срабатывании вызываем сохранённую функцию
                <code>onTouched</code>:
            </p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-custom-input',
	template: '&lt;input type="text" [value]="inputValue" (input)="onInput($event)" (blur)="onTouched()"/>',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: CustomInputComponent,
			multi: true,
		},
	],
})
export class CustomInputComponent implements ControlValueAccessor {
	inputValue: string = '';

	onChange: (value: string) => void;
	onTouched: () => void;

	writeValue(value: string): void {
		this.inputValue = value;
	}
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		// Сохраняем функцию в свойство компонента
		this.onTouched = fn;
	}

	setDisabledState?(isDisabled: boolean): void {
	}

	onInput(event: Event): void {
		const input = event.target as HTMLInputElement;
		this.inputValue = input.value;
		this.onChange(this.inputValue);
	}
}</code></pre>
            <p>Теперь кастомное поле корректно будет обновлять состояние при потере фокуса.</p>
            <i class="subtitle">setDisabledState</i>
            <p>
                Метод <code>setDisabledState</code>
                <span class="attention"
                    >вызывается, когда компонент связывается с формой, а также в тот момент, когда поле становится
                    недоступным для взаимодействия</span
                >
                — то есть, когда на него устанавливается атрибут <code>disabled</code>.
            </p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-custom-input',
	template: '&lt;input type="text" [value]="inputValue" (input)="onInput($event)" (blur)="onTouched()" [disabled]="isDisabled"/>',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: CustomInputComponent,
			multi: true,
		},
	],
})
export class CustomInputComponent implements ControlValueAccessor {
	inputValue: string = '';
	isDisabled: boolean;

	onChange: (value: string) => void;
	onTouched: () => void;

	writeValue(value: string): void {
		this.inputValue = value;
	}
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	setDisabledState?(isDisabled: boolean): void {
		this.isDisabled = isDisabled;
	}

	onInput(event: Event): void {
		const input = event.target as HTMLInputElement;
		this.inputValue = input.value;
		this.onChange(this.inputValue);
	}
}</code></pre>
            <p>
                Чтобы продемонстрировать, как работает этот метод, в примере выше добавляется булевое свойство
                <code>isDisabled</code> в классе компонента. Далее внутри <code>setDisabledState</code> значение этого
                свойства меняется в зависимости от переданного параметра. И в конце в шаблоне на инпут добавляется
                атрибут <code>disabled</code>, чтобы он реагировал на это состояние.
            </p>
            <p>Такого кода уже достаточно, чтобы отслеживать доступно ли кастомное поле для редактирования или нет.</p>
            <p>
                В родительском компоненте можно добавить кнопку, которая будет переключать состояние
                <code>disabled</code>:
            </p>
            <pre><code class="language-html">@let secondInput = reactiveForm.get("secondInput");

&lt;form [formGroup]="reactiveForm" (ngSubmit)="onSubmit(reactiveForm.value)">
	&lt;h2>Реактивная форма&lt;/h2>
	&lt;input type="text" formControlName="firstInput" />
	&lt;app-custom-input formControlName="secondInput">&lt;/app-custom-input>

	&lt;button>Отправить&lt;/button>
	&lt;!-- переключатель disabled --&gt;
	&lt;button type="button" (click)="secondInput?.disabled ? secondInput?.enable() : secondInput?.disable()">
		Переключить disabled
	&lt;/button>
&lt;/form></code></pre>
            <i class="subtitle">Валидация кастомных полей формы</i>
            <p>Если поле используется в реактивной форме, валидация делается как обычно:</p>
            <pre><code class="language-typescript">reactiveForm = this.formBuilder.group({
	firstInput: ['Первый инпут'],
	secondInput: ['Второй инпут', Validators.minLength(3)],
});</code></pre>
            <i class="subtitle">Использование в шаблонной форме</i>
            <p>Если кастомное поле используется в шаблонной форме, то код будет немного отличаться.</p>
            <p>Класс родительского компонента:</p>
            <pre><code class="language-typescript">export class AppComponent {
	// Свойство, описывающее состав полей шаблонной формы
    templateForm = {
        firstInput: 'Первый инпут',
        secondInput: 'Второй инпут',
    };

    onSubmit(value?: any) {
        console.log('value', value);
    }
}</code></pre>
            <p>Шаблон родительского компонента:</p>
            <pre><code class="language-html">&lt;form #form="ngForm" (ngSubmit)="onSubmit(form.value)">
	&lt;h2>Шаблонная форма&lt;/h2>
	&lt;input type="text" [(ngModel)]="templateForm.firstInput" name="firstInput" />
	&lt;app-custom-input [(ngModel)]="templateForm.secondInput" name="secondInput" minlength="5">&lt;/app-custom-input>

	&lt;button>Отправить&lt;/button>
&lt;/form></code></pre>
            <p>
                Как видно из кода выше, чтобы использовать кастомное поле в шаблонной форме, на нее необходимо повесить
                директиву <code>ngModel</code> с соответствующим значением и атрибут <code>name</code>.
            </p>
            <p>
                Также валидация делается непосредственно в разметке. В примере выше задается минимальная длина символов,
                равная 5, с помощью атрибута <code>minlength</code>.
            </p>`,
    selected: false,
    lastUpdate: '07.07.2025',
    footerLinks: [
        {
            path: 'https://youtu.be/d1c0_gUu68g',
        },
    ],
};
