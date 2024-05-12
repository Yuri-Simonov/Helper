import { IInfo } from '@types';

export const COMPONENTS_IN_ANGULAR: IInfo = {
    title: 'Компоненты в Angular',
    body: `<p>
                <span class="attention">Angular компонент</span> - это часть
                интерфейса приложения с собственными шаблоном, логикой и
                стилями.
            </p>
            <p>Все компоненты в совокупности и есть приложение Angular.</p>
            <p>
                За создание компонента отвечает декоратор
                <code>@Component()</code>.
            </p>
	<pre><code class="language-typescript">@Component({
	selector: 'app-root', // название компонента
	templateUrl: './app.component.html', // путь к HTML-файлу. Является обязательным свойством
	styleUrls: ['./app.component.scss'], // массив путей к SCSS-файлам
	providers: [SomeService], // если добавляются непосредственно в компонент какие-то зависимости
	changeDetection: ChangeDetectionStrategy.OnPush, // явное определение стратегии ChangeDetection
})

export class AppComponent {} // класс, к которому привязывается декоратор @Component()</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
