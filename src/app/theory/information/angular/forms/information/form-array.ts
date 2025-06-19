import { IInfo } from 'src/app/shared/interfaces';

export const FORM_ARRAY: IInfo = {
    title: 'Класс <span class="variable">FormArray</span>',
    body: `<p>
                Динамическое изменение полей формы полезно, когда
                <span class="attention">количество полей заранее неизвестно</span>. Например, пользователь добавляет
                ингредиенты в рецепт или перечисляет домашних животных — и таких полей может быть сколько угодно.
            </p>
            <p>
                Для таких случаев в Angular есть специальный класс — <code>FormArray</code>. Это просто массив полей
                формы, который позволяет динамически добавлять, удалять или изменять их. Например, если пользователь
                хочет указать несколько домашних животных — каждое новое поле добавляется в этот массив:
            </p>
            <pre><code class="language-typescript">export class AppComponent {
	exampleForm = new FormGroup({
		name: new FormControl('Вася'),
		age: new FormControl(20),
		address: new FormGroup({
			street: new FormControl('Улица Ленина'),
			city: new FormControl('Москва'),
		}),
		// Массив полей
		pets: new FormArray([new FormControl('Мурзик'), new FormControl('Барсик')]),
	});

	get pets() {
		return this.exampleForm.get('pets') as FormArray;
	}

	addPet() {
		this.pets.push(new FormControl(''));
	}
}</code></pre>
            <p>
                В примере выше геттер <code>pets</code> используется для более удобного обращения к данным полям. А
                метод <code>addPet</code> будет использоваться для создания новых полей по клику на соответствующую
                кнопку:
            </p>
            <pre><code class="language-html">&lt;form [formGroup]="exampleForm">
    &lt;h2>Личные данные:&lt;/h2>
    &lt;label for="name">Имя: &lt;/label>
    &lt;input id="name" type="text" formControlName="name" />
    &lt;label for="age">Возраст: &lt;/label>
    &lt;input id="age" type="text" formControlName="age" />

    &lt;div formArrayName="pets">
        &lt;h2>Домашние животные&lt;/h2>

        @for (pet of pets.controls; track $index; let i = $index) {
            &lt;div>
                &lt;label for="pet-{{ i }}">Питомец:&lt;/label>
                &lt;input id="pet-{{ i }}" type="text" [formControlName]="i" />
            &lt;/div>
        }

        &lt;button type="button" (click)="addPet()">Добавить питомца&lt;/button>
    &lt;/div>
&lt;/form></code></pre>
            <p>
                В разметке выше, чтобы сообщить Angular, что в данном участке разметки мы будем использовать
                динамические поля, используется директива <code>formArrayName</code>. И в качестве ее значения
                указывается ключ, значением которого является массив полей.
            </p>
            <p>
                <span class="attention"
                    >Все значения динамически добавленных полей будут складываться в обычный массив, доступный через
                    свойство <code>value</code></span
                >. Его можно использовать для отправки формы, отображения в шаблоне и так далее.
            </p>`,
    selected: false,
    lastUpdate: '19.06.2025',
    footerLinks: [
        {
            path: 'https://youtu.be/CAfqkH9ACXk?t=1000',
        },
    ],
};
