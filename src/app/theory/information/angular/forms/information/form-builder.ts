import { IInfo } from 'src/app/shared/interfaces';

export const FORM_BUILDER: IInfo = {
    title: 'Класс <span class="variable">FormBuilder</span>',
    body: `<p>
                При работе с реактивными формами на каждое поле приходится создавать каждый раз новый экземпляр класса
                <code>FormControl</code>, <code>FormGroup</code> или <code>FormArray</code>. Это вполне рабочий способ,
                но при большом количестве полей он становится неудобным.
            </p>
            <p>
                В Angular есть встроенный сервис, который называется <code>FormBuilder</code>.
                <span class="attention">Он упрощает работу с реактивными формами</span>. Чтобы им воспользоваться, его
                нужно внедрить как зависимость в компонент. На практике этот сервис часто сокращают до двух букв —
                <code>fb</code>:
            </p>
            <pre><code class="language-typescript">export class AppComponent {
	private fb: FormBuilder = inject(FormBuilder);
}</code></pre>
            <p>Сервис <code>FormBuilder</code> предоставляет три основных метода:</p>
            <ul>
                <li><code>control</code> - для создания отдельного поля формы;</li>
                <li><code>group</code> - для создания группы полей или формы в целом;</li>
                <li><code>array</code> - для создания динамических полей формы.</li>
            </ul>
            <p>Как это выглядит в коде:</p>
            <pre><code class="language-typescript">export class AppComponent {
	private fb: FormBuilder = inject(FormBuilder);

    exampleFormFB = this.fb.group({
        name: ['Вася', Validators.required, asyncRequiredValidator],
        age: [20, { validators: [Validators.required, Validators.min(18)] }],
        address: this.fb.group({
            street: ['Улица Ленина'],
            city: ['Москва'],
        }),
        pets: this.fb.array(['Мурзик', this.fb.control('Барсик')]),
    });
}</code></pre>
            <p>
                В примере выше обратите внимание на метод <code>array</code>. В нем показаны 2 доступных варианта
                записи: полный (для Барсика) и сокращенный (для Мурзика).
                <span class="attention"
                    >Если для поля требуется только стартовое значение без валидаторов и дополнительных опций, то можно
                    воспользоваться сокращённой записью</span
                >
                — просто указать стартовое значение.
            </p>
            <p>Для сравнения ниже показана та же форма, но без использования сервиса <code>FormBuilder</code>:</p>
            <pre><code class="language-typescript">export class AppComponent {
	exampleForm = new FormGroup({
		name: new FormControl('Вася', Validators.required, asyncRequiredValidator),
		age: new FormControl(20, { validators: [Validators.required, Validators.min(18)] }),
		address: new FormGroup({
			street: new FormControl('Улица Ленина'),
			city: new FormControl('Москва'),
		}),
		pets: new FormArray([new FormControl('Мурзик'), new FormControl('Барсик')]),
	});
}</code></pre>
            <p>
                <span class="attention"
                    >Используете ли вы сервис <code>FormBuilder</code> или нет - на разметку в шаблоне компонента это
                    никак не влияет</span
                >.
            </p>`,
    selected: false,
    lastUpdate: '19.06.2025',
    footerLinks: [
        {
            path: 'https://youtu.be/CAfqkH9ACXk?t=880',
        },
    ],
};
