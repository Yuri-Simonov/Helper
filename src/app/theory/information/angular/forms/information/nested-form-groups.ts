import { IInfo } from 'src/app/shared/interfaces';

export const NESTED_FORM_GROUPS: IInfo = {
    title: 'Вложенные группы форм',
    body: `<p>
                В реактивных формах удобно использовать вложенные группы — особенно когда форму можно разбить на
                логические блоки: например, личная информация, адрес, платёжные данные и т.д.
            </p>
            <p>
                Каждый такой блок можно валидировать, сбрасывать и обрабатывать независимо от других. Это делает форму
                более гибкой и масштабируемой.
            </p>
            <pre><code class="language-typescript">export class AppComponent {
	exampleForm = new FormGroup({
		name: new FormControl('Вася'),
		age: new FormControl(20),
		address: new FormGroup({
			street: new FormControl('Улица Ленина'),
			city: new FormControl('Москва'),
		}),
	});
}</code></pre>
            <p>
                В примере выше вложенной группой является новый экземпляр класса <code>FormGroup</code> по ключу
                <code>address</code>.
            </p>
            <p>В разметке это будет выглядеть следующим образом:</p>
            <pre><code class="language-html">&lt;form [formGroup]="exampleForm">
	&lt;h2>Личные данные:&lt;/h2>
	&lt;label for="name">Имя: &lt;/label>
	&lt;input id="name" type="text" formControlName="name" />
	&lt;label for="age">Возраст: &lt;/label>
	&lt;input id="age" type="text" formControlName="age" />

	&lt;div formGroupName="address">
		&lt;h2>Адрес:&lt;/h2>
		&lt;label for="street">Улица: &lt;/label>
		&lt;input id="street" type="text" formControlName="street" />
		&lt;label for="city">Город: &lt;/label>
		&lt;input id="city" type="text" formControlName="city" />
	&lt;/div>
&lt;/form></code></pre>
            <p>
                Чтобы Angular понял, что часть формы вложенная, ей добавляется директива <code>formGroupName</code>. В
                качестве ее значения указываем ключ вложенного объекта — в нашем случае это <code>address</code>.
            </p>
            <p>В примере выше можно и личные данные сделать вложенной группой при желании.</p>`,
    selected: false,
    lastUpdate: '19.06.2025',
    footerLinks: [
        {
            path: 'https://youtu.be/CAfqkH9ACXk?t=778',
        },
    ],
};
