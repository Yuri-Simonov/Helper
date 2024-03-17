import { IQuestion } from '@types';

export const changeDetectionQuestions: IQuestion[] = [
    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    // },
    {
        title: 'Принцип работы механизма <span class="variable">ChangeDetection</span>',
        body: `<p>
            Механизм <code>ChangeDetection</code> или как его еще называют
            "отслеживание изменений" - это
            <span class="attention">
                механизм в Angular, который отвечает за изменение выражений в
                шаблонах при их изменении в компоненте.
            </span>
        </p>
        <p>
            Данный механизм запускается каждый раз, когда происходит какое-то
            браузерное событие, пользовать что-то сделал в приложении или
            вызывается <code>setInterval()</code> и тд. Причем в случае
            браузерных событий, Angular расширяет стандартный метод
            <code>addEventListener()</code>, добавляя после вызова
            "оригинального" обработчика события запуск отслеживания изменений.
        </p>
        <p>
            В механизме <code>ChangeDetection</code> важную роль играет
            библиотека <code>zone.js</code>, которая лежит под капотом Angular и
            делит все приложение на секции. Где происходят изменения, там и
            запускается механизм <code>ChangeDetection</code>.
        </p>
        <p>
            Еще один важный момент:
            <span class="attention"
                >запуск механизма ChangeDetection в родительском компоненте
                автоматически инициирует запуск механизма во всех дочерних
                компонентах.</span
            >
        </p>
        <i class="subtitle">ChangeDetectionStrategy</i>
        <p>
            В Angular есть два варианта работы алгоритма отслеживания изменений:
        </p>
        <ul>
            <li><span class="attention">OnPush</span>;</li>
            <li>
                <span class="attention">Default</span> (используется по
                умолчанию).
            </li>
        </ul>
        <p>
            Алгоритм задается в свойстве <code>changeDetection</code> объекта
            конфигурации декоратора <code>@Component()</code> и указывается для
            каждого компонента отдельно.
        </p>
        <pre><code class="language-typescript">@Component({
	selector: 'app-root', // название компонента
	templateUrl: './app.component.html', // путь к HTML-файлу. Является обязательным свойством
	changeDetection: ChangeDetectionStrategy.OnPush, // явное определение стратегии ChangeDetection
})

export class AppComponent {} // класс, к которому привязывается декоратор @Component()</code></pre>
        <p>
            Итак, при варианте <code>Default</code> механизм отслеживания будет
            запускаться каждый раз при каком-либо изменении в приложении.
        </p>
        <p>
            Стратегия <code>OnPush</code> указывается для компонентов, которые
            предназначены для отображения каких-либо статических данных. Но на
            практике обычно <code>OnPush</code> используют во всех компонентах,
            т.к. такой подход повышает эффективности работы приложения за счет
            снижения количества вызовов механизма <code>ChangeDetection</code>.
        </p>
        <p>
            Стратегия <code>OnPush</code> будет запускаться только в 3 случаях:
        </p>
        <ul>
            <li>
                <span class="attention">Произошло событие в шаблоне</span> -
                например, произошел клик по кнопке и внутри компонента вызвалась
                какая-то функция, которая изменила текст в шаблоне. Такие
                события помечают текущий компонент как "измененный" и при
                последующей проверке механизм
                <code>ChangeDetectionStrategy</code> увидит эту "пометку" и
                проверит этот компонент, тем самым отобразив изменения;
            </li>
            <li>
                <span class="attention"
                    >Поступили новые данные от родителя</span
                >
                - здесь речь идет про этап жизненного цикла
                <code>OnChanges</code>, который запускается при инициализации
                компонента и при каждом дальнейшем изменении входных свойств
                текущего компонента, которые попадают в него с помощью
                декоратора <code>@Input()</code>. Тут следует помнить, что если
                вы передаете через <code>@Input()</code> объект или массив, то
                его надо каждый раз создавать заново, т.к. иначе
                <code>OnChanges</code> будет считать, что вы передаете все тот
                же объект или массив, т.к. ссылка не изменилась;
            </li>
            <li>
                <span class="attention">Использование пайпы</span>
                <code>async</code> - данный фильтр под капотом запускает метод
                <code>markForCheck</code> из встроенного сервиса
                <code>ChangeDetectorRef</code>.
            </li>
        </ul>`,
        selected: false,
        lastUpdate: '07.02.2024',
    },
    {
        title: 'Управление механизмом <span class="variable">ChangeDetection</span> с помощью сервиса <span class="variable">ChangeDetectorRef</span>',
        body: `<p>
            Сервис <code>ChangeDetectorRef</code> позволяет взять управление
            механизмом отслеживания изменений (<code>ChangeDetection</code>)
            полностью под свой контроль.
        </p>
        <p>Методы сервиса:</p>
        <ul>
            <li>
                <span class="attention">detach</span> - полностью отключает
                механизм <code>ChangeDetection</code>. Здесь также важно
                уточнить, что если мы отключаем у родителя проверку изменений,
                то и у его дочерних компонентов она будет отключена,
                соответственно, и DOM-дерево тоже не будет обновляться;
            </li>
            <li>
                <span class="attention">reattach</span> - используется после
                вызова <code>detach</code> для активации механизма
                <code>ChangeDetection</code>. Стоит добавить, что данный метод
                полезен только для компонентов верхнего уровня, где отключен
                механизм <code>ChangeDetection</code>, т.к. если у родителя он
                выключен, то на дочерние компоненты метод
                <code>reattach</code> не произведет никакого эффекта;
            </li>
            <li>
                <span class="attention">markForCheck</span> - помечает как
                "измененный" текущий компонент, где данный метод был вызван, а
                также все родительские компоненты, вплоть до корневого
                компонента. И при следующем запуске механизма
                <code>ChangeDetection</code> он пройдет по "помеченной" ветке и
                отрисует изменения, если они есть. Сработает только 1 раз;
            </li>
            <li>
                <span class="attention">detectChanges</span> - одноразово
                запускает механизм отслеживания изменений для текущего
                компонента и его потомков;
            </li>
            <li>
                <span class="attention">checkNoChanges</span> - данный метод
                гарантирует отсутствие изменений на текущем запуске
                <code>ChangeDetection</code>, выбрасывая исключение, если
                входящие свойства были изменены, либо есть необходимость
                обновить DOM.
            </li>
        </ul>
        <p>
            В примере ниже изначально отключается механизм отслеживания
            изменений в конструкторе. Затем в переменную
            <code>value</code> вносятся изменения, но они не отобразятся сразу
            на странице. Чтобы их отобразить, мы должны нажать на кнопку,
            которая представлена в шаблоне, т.к. к ней привязана функция,
            отвечающая за принудительный запуск механизма отслеживания.
        </p>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;button (click)="applyChanges()">Применить изменения&lt;button/></code></pre>
<pre><code class="language-typescript">// класс компонента
export class ManualDetectionComponent {
	value: string = 'Начальное значение'; 
	
	constructor(private changeDetectorRef: ChangeDetectorRef) {
		this.changeDetectionRef.detach(); // отключаем механизм ChangeDetection
		this.value = 'Какие-то изменения';
	}
	
	applyChanges(): void {
		this.changeDetectionRef.detectChanges(); // принудительно запускаем механизм ChangeDetection
	}
}</code></pre>
`,
        selected: false,
        lastUpdate: '07.02.2024',
    },
];
