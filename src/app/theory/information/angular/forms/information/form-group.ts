import { IInfo } from 'src/app/shared/interfaces';

export const FORM_GROUP: IInfo = {
    title: 'Класс <span class="variable">FormGroup</span>',
    body: `<p>Класс <code>FormGroup</code> <span class="attention">используется для группировки полей формы</span>.</p>
            <p>
                Первым параметром он принимает объект, в котором в качестве ключей указываются названия полей. Они
                необходимы для связывания с полями формы в шаблоне компонента. И в качестве значений для данных ключей
                указывается новый экземпляр класса <code>FormControl</code>:
            </p>
            <pre><code class="language-typescript">export class AppComponent {
	exampleForm = new FormGroup({
		name: new FormControl('Вася'), // поле для ввода имени
		age: new FormControl(20), // поле для ввода возраста
	});
}</code></pre>
            <p>Теперь в шаблоне необходимо создать форму с двумя инпутами:</p>
            <pre><code class="language-html">&lt;form [formGroup]="exampleForm">
	&lt;h2>Личные данные:&lt;/h2>
	&lt;label for="name">Имя:&lt;/label>
	&lt;input id="name" type="text" formControlName="name" />
	&lt;label for="age">Возраст:&lt;/label>
	&lt;input id="age" type="text" formControlName="age" />
&lt;/form></code></pre>
            <p>В примере с разметкой выше есть 2 директивы:</p>
            <ul>
                <li>
                    Директива <code>formGroup</code>
                    <span class="attention">
                        используется для связывания HTML-формы с экземпляром <code>FormGroup</code> из класса
                        компонента</span
                    >. Это позволяет управлять формой из класса компонента;
                </li>
                <li>
                    Директива <code>formControlName</code>
                    <span class="attention">
                        применяется для привязки конкретных полей формы к соответствующим экземплярам
                        <code>FormControl</code></span
                    >, которые находятся внутри объекта <code>FormGroup</code>.
                </li>
            </ul>
            <p>
                В нашем случае, в шаблоне компонента в качестве значения для директивы <code>formGroup</code> мы
                указываем свойство <code>exampleForm</code>, т.к. оно является экземпляром класса
                <code>FormGroup</code>. А для директив <code>formControlName</code> указываем соответствующие ключи из
                объекта данного свойства.
            </p>
            <i class="subtitle">Обновление значений FormGroup</i>
            <p>
                В реактивных формах можно изменять значения как всей формы целиком, так и отдельных её полей. Для этого
                используются различные методы:
            </p>
            <ul>
                <li>
                    <code>setValue</code> - устанавливает новое значение. Требует указания значений для всех полей
                    формы. Если пропустить хотя бы одно поле, Angular выбросит ошибку;
                </li>
                <li>
                    <code>patchValue</code> - позволяет изменять значения в конкретных полях формы, игнорируя остальные;
                </li>
                <li><code>reset</code> - сбрасывает значение, состояния и ошибки поля или формы.</li>
            </ul>
            <p>Это лишь некоторые из часто используемых методов. Пример их использования:</p>
            <pre><code class="language-html">&lt;form [formGroup]="exampleForm">
	&lt;h2>Личные данные:&lt;/h2>
	&lt;label for="name">Имя: &lt;/label>
	&lt;input id="name" type="text" formControlName="name" />
	&lt;label for="age">Возраст: &lt;/label>
	&lt;input id="age" type="text" formControlName="age" />
&lt;/form>

&lt;button (click)="exampleForm.setValue({ name: 'Вася', age: 25 })">
	Метод setValue
&lt;/button>
&lt;button (click)="exampleForm.patchValue({ name: 'Олег' })">
	Метод patchValue
&lt;/button>
&lt;button (click)="exampleForm.reset()">
	Метод reset
&lt;/button></code></pre>
            <p>
                Если требуется изменить значение лишь в одном конкретном поле, можно воспользоваться альтернативным
                подходом. Сначала с помощью метода <code>get</code> обратиться к нужному полю, а затем вызвать у него
                метод <code>setValue</code> для установки нового значения:
            </p>
            <pre><code class="language-html">&lt;button (click)="exampleForm.get('name')?.setValue('Вася')">
	Метод setValue для конкретного поля
&lt;/button></code></pre>`,
    selected: false,
    lastUpdate: '19.06.2025',
    footerLinks: [
        {
            path: 'https://youtu.be/CAfqkH9ACXk?t=549',
        },
    ],
};
