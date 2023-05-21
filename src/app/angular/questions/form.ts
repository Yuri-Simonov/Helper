import { IQuestion } from 'src/app/shared/types/question.interface';

export const formQuestions: IQuestion[] = [
    {
        title: 'Как создать пользователький компонент формы (input, textarea и др)?',
        body: `<p>
            Компоненты, содержащие пользователькие поля формы (Custom Controls),
            создаются с помощью встроенной директивы
            <code>ControlValueAccessor</code>, которая отвечает за отслеживание
            значения поля формы в дочернем компоненте и передачу его обратно в
            родительскую форму.
        </p>
        <p>Для демонстрации необходимо 2 компонента: родитель и ребенок.</p>
        <p>Родительский компонент:</p>
        <pre><code><span class="keyword">@Component</span><span class="punctuation">({</span>
	<span class="key">selector</span>: <span class="string">'parent-component'</span>,
	<span class="key">template</span>: <span class="string">'<span><</span>counter-control><span><</span>/counter-control>'</span>
<span class="punctuation">})</span>

<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">ParentComponent</span> <span class="punctuation">{}</span></code></pre>
        <p>Дочерний компонент:</p>
        <pre><code><span class="keyword">@Component</span><span class="punctuation">({</span>
	<span class="key">selector</span>: <span class="string">'counter-component'</span>,
	<span class="key">template</span>: <span class="string">'
		<span><</span>button (click)="down()">Down<span><</span>/button>
			{{counter}}
		<span><</span>button (click)="up()">Up<span><</span>/button>
		'</span>
<span class="punctuation">})</span>

<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">CounterControlComponent</span> <span class="punctuation">{</span>
	<span class="keyword">@Input</span><span class="punctuation">(</span><span class="string">'counter'</span><span class="punctuation">)</span> counterProps <span class="operator">=</span> <span class="number">0</span>;
 
	<span class="method">up()</span> <span class="punctuation">{</span>
		<span class="object">this</span>.counterProps<span class="operator">++</span>;
 	<span class="punctuation">}</span>
 
	<span class="method">down()</span> <span class="punctuation">{</span>
 		<span class="object">this</span>.counterProps<span class="operator">--</span>;
	<span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>
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
        <pre><code><span class="keyword">@Component</span><span class="punctuation">({</span>
	<span class="key">selector</span>: <span class="string">'counter-component'</span>,
	<span class="key">template</span>: <span class="string">'
		<span><</span>button (click)="down()">Down<span><</span>/button>
			{{counter}}
		<span><</span>button (click)="up()">Up<span><</span>/button>
		'</span>,
	<span class="key">providers</span>: <span class="punctuation">[{</span>
		<span class="key">provide</span>: NG_VALUE_ACCESSOR, <span class="comment">// Токен</span>
		<span class="key">useExisting</span>: <span class="method">forwardRef</span><span class="punctuation">(()</span> <span class="operator">=></span> <span class="class-name">CounterControlComponent</span><span class="punctuation">)</span>, <span class="comment">// Экземпляр используемого компонента</span>
		<span class="key">multi</span>: <span class="boolean">true</span> <span class="comment">// зависимостей с таким токеном может быть больше 1</span>
 	<span class="punctuation">}]</span>
<span class="punctuation">})</span>

<span class="comment">// Реализовываем интерфейс ControlValueAccessor</span>
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">CounterControlComponent</span> <span class="keyword">implements</span> <span class="interface-name">ControlValueAccessor</span> <span class="punctuation">{</span>
	<span class="keyword">@Input</span><span class="punctuation">(</span><span class="string">'counter'</span><span class="punctuation">)</span> counterProps <span class="operator">=</span> <span class="number">0</span>;
 
	<span class="method">onChange</span><span class="punctuation">(</span>_: <span class="type">any</span><span class="punctuation">)</span> <span class="punctuation">{}</span>
	<span class="method">onTouch</span><span class="punctuation">(</span>_: <span class="type">any</span><span class="punctuation">)</span> <span class="punctuation">{}</span>
	disabled: <span class="type">boolean</span>;

	<span class="method">up()</span> <span class="punctuation">{</span>
		<span class="object">this</span>.counterProps<span class="operator">++</span>;
		<span class="object">this</span>.<span class="method">onChange</span><span class="punctuation">(</span><span class="object">this</span>.counterProps<span class="punctuation">)</span>;
 	<span class="punctuation">}</span>
 
	<span class="method">down()</span> <span class="punctuation">{</span>
 		<span class="object">this</span>.counterProps<span class="operator">--</span>;
		<span class="object">this</span>.<span class="method">onChange</span><span class="punctuation">(</span><span class="object">this</span>.counterProps<span class="punctuation">)</span>;
	<span class="punctuation">}</span>

	<span class="method">writeValue</span><span class="punctuation">(</span>counter: <span class="type">number</span><span class="punctuation">)</span> <span class="punctuation">{</span>
		<span class="object">this</span>.counterProps <span class="operator">=</span> counter;
	<span class="punctuation">}</span>

	<span class="method">registerOnChange</span><span class="punctuation">(</span>onChange: <span class="type">any</span><span class="punctuation">)</span> <span class="punctuation">{</span>
		<span class="object">this</span>.<span class="method">onChange</span> <span class="operator">=</span> onChange;
	<span class="punctuation">}</span>

	<span class="method">registerOnTouched</span><span class="punctuation">(</span>onTouched: <span class="type">any</span><span class="punctuation">)</span> <span class="punctuation">{</span>
		<span class="object">this</span>.<span class="method">onTouched</span> <span class="operator">=</span> onTouched;
	<span class="punctuation">}</span>

	<span class="method">setDisabledState</span><span class="operator">?</span><span class="punctuation">(</span>disabled: <span class="type">boolean</span><span class="punctuation">)</span> <span class="punctuation">{</span>
		<span class="object">this</span>.disabled <span class="operator">=</span> disabled;
	<span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>
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
        <pre><code><span class="keyword">@Component</span><span class="punctuation">({</span>
	<span class="key">selector</span>: <span class="string">'parent-component'</span>,
	<span class="key">template</span>: <span class="string">'
		<span><</span>form [formGroup]="form">
   			<span><</span>counter-control formControlName="counter"><span><</span>/counter-control>
  		<span><</span>/form>
		'</span>
<span class="punctuation">})</span>

<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">ParentComponent</span> <span class="keyword">implements</span> <span class="interface-name">OnInit</span> <span class="punctuation">{</span>
	form: <span class="type">FormGroup</span>;

	<span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">private</span> fb: <span class="type">FormBuilder</span><span class="punctuation">) {}</span>

	<span class="method">ngOnInit()</span> <span class="punctuation">{</span>
		<span class="object">this</span>.form <span class="operator">=</span> <span class="object">this</span>.fb.group<span class="punctuation">({</span> counter: <span class="number">5</span> <span class="punctuation">})</span>
	<span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>
        <p>
            Выше пример для реактивной формы. Для шаблонной формы родитель
            выглядел бы следующим образом:
        </p>
        <pre><code><span class="keyword">@Component</span><span class="punctuation">({</span>
	<span class="key">selector</span>: <span class="string">'parent-component'</span>,
	<span class="key">template</span>: <span class="string">'<span><</span>counter-control [(ngModel)]="controlValue"><span><</span>/counter-control>'</span>
<span class="punctuation">})</span>

<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">ParentComponent</span> <span class="punctuation">{</span>
	controlValue <span class="operator">=</span> <span class="number">10</span>;
<span class="punctuation">}</span></code></pre>`,
        selected: false,
    },
    {
        title: 'От каких классов наследуются шаблонные и реактивные формы?',
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
        title: 'Какие существуют виды форм в Angular и какая между ними разница?',
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
        <pre><code><span class="comment">// компонент</span>
loginForm: <span class="type">any</span> <span class="operator">=</span> <span class="punctuation">{</span>
	<span class="key">login</span>: <span class="string">''</span>,
	<span class="key">password</span>: <span class="string">''</span>,
<span class="punctuation">}</span>
<span class=""></span>
<span class="comment">// шаблон</span>
<span class="tag"><</span><span class="tag">input</span> <span class="keyword">type</span><span class="operator">=</span><span class="punctuation">"</span><span class="string">text</span><span class="punctuation">"</span> <span class="punctuation">[(</span><span class="keyword">ngModel</span><span class="punctuation">)]</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">login</span><span class="punctuation">"</span><span class="tag"> /></span>
<span class="tag"><</span><span class="tag">input</span> <span class="keyword">type</span><span class="operator">=</span><span class="punctuation">"</span><span class="string">password</span><span class="punctuation">"</span> <span class="punctuation">[(</span><span class="keyword">ngModel</span><span class="punctuation">)]</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">password</span><span class="punctuation">"</span><span class="tag"> /></span>
</code></pre>
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
        <pre><code><span class="comment">// компонент</span>
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">ReactiveFormExampleComponent</span> <span class=""><span class="punctuation">{</span></span>
	someForm: <span class="interface-name">FormGroup</span>;
	
	<span class="object">this</span>.someForm <span class="operator">=</span> <span class="keyword">new</span> <span class="interface-name">FormGroup</span><span class="punctuation">({</span>
		<span class="key">login</span>: <span class="keyword">new</span> <span class="interface-name">FormControl</span><span class="punctuation">('')</span>,
		<span class="key">password</span>: <span class="keyword">new</span> <span class="interface-name">FormControl</span><span class="punctuation">(</span><span class="punctuation">''</span>, Validators.required<span class="punctuation">)</span>,
    <span class="punctuation">})</span>
<span class="punctuation">}</span>

<span class="comment">// шаблон</span>
<span class="tag"><</span><span class="tag">form</span> <span class="punctuation">[</span><span class="keyword">formGroup</span><span class="punctuation">]</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">someForm</span><span class="punctuation">"</span><span class="tag">></span>
	<span class="tag"><</span><span class="tag">input</span> <span class="keyword">type</span><span class="operator">=</span><span class="punctuation">"</span><span class="string">text</span><span class="punctuation">"</span> <span class="punctuation">[</span><span class="keyword">formControlName</span><span class="punctuation">]</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">login</span><span class="punctuation">"</span><span class="tag"> /></span>
	<span class="tag"><</span><span class="tag">input</span> <span class="keyword">type</span><span class="operator">=</span><span class="punctuation">"</span><span class="string">password</span><span class="punctuation">"</span> <span class="punctuation">[</span><span class="keyword">formControlName</span><span class="punctuation">]</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">password</span><span class="punctuation">"</span><span class="tag"> /></span>
<span class="tag"><</span><span class="tag">/form></span>
</code></pre>
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
        <pre><code><span class="comment">// компонент (остается тем же)</span>
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">ReactiveFormExampleComponent</span> <span class=""><span class="punctuation">{</span></span>
	someForm: <span class="interface-name">FormGroup</span>;
	
	<span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">private</span> fb: <span class="interface-name">FormBuilder</span><span class="punctuation">)</span> <span class="punctuation">{}</span>
	
	<span class="object">this</span>.someForm <span class="operator">=</span> <span class="object">this</span>.fb.group<span class="punctuation">({</span>
		<span class="key">login</span>: <span class="punctuation">''</span>,
		<span class="key">password</span>: <span class="punctuation">[</span><span class="punctuation">''</span>, Validators.required<span class="punctuation">]</span>, <span class="comment">// Если настроек валидации больше чем 1, то их нужно располагать в массиве</span>
    <span class="punctuation">})</span>
<span class="punctuation">}</span>

<span class="comment">// шаблон</span>
<span class="tag"><</span><span class="tag">form</span> <span class="punctuation">[</span><span class="keyword">formGroup</span><span class="punctuation">]</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">someForm</span><span class="punctuation">"</span><span class="tag">></span>
	<span class="tag"><</span><span class="tag">input</span> <span class="keyword">type</span><span class="operator">=</span><span class="punctuation">"</span><span class="string">text</span><span class="punctuation">"</span> <span class="punctuation">[</span><span class="keyword">formControlName</span><span class="punctuation">]</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">login</span><span class="punctuation">"</span><span class="tag"> /></span>
	<span class="tag"><</span><span class="tag">input</span> <span class="keyword">type</span><span class="operator">=</span><span class="punctuation">"</span><span class="string">password</span><span class="punctuation">"</span> <span class="punctuation">[</span><span class="keyword">formControlName</span><span class="punctuation">]</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">password</span><span class="punctuation">"</span><span class="tag"> /></span>
<span class="tag"><</span><span class="tag">/form></span>
</code></pre>
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
    },
    {
        title: 'Как реализовывается двустороннее связывание в полях формы?',
        body: `<i class="subtitle">Шаблонные формы</i>
        <p>
            Отличительной особенностью полей форм в механизме двухстороннего
            связывания является использование директивы
            <code>NgModel</code>, которая
            <span class="attention"
                >может использоваться только с элементами формы.</span
            >
        </p>
        <pre><code><span class="tag"><</span><span class="tag">input</span> <span class="keyword">type</span><span class="operator">=</span><span class="string">"text"</span> <span class="punctuation">[(</span><span class="keyword">ngModel</span><span class="punctuation">)]</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">value</span><span class="punctuation">"</span><span class="tag"> /></span></code></pre>
        <p>
            При изменении значения в инпуте, оно записывается в свойство
            <code>value</code>. Аналогично и наоборот, если значение придет из
            компонента, то оно так же подставится в инпут.
        </p>
        <i class="subtitle">Реактивные формы</i>
        <p><i>В разработке...</i></p>`,
        selected: false,
    },
    {
        title: 'Как отследить изменения в реактивной форме?',
        body: `<p>
            Отслеживание изменений формы осуществляется через подписку на
            <code>valueChanges</code>. Функция обработчик принимает параметром
            значение формы.
        </p>
        <pre><code><span class="object">this</span>.someForm.valueChanges.<span class="method">subscribe</span><span class="punctuation">((</span>value<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
  console.<span class="method">log</span><span class="punctuation">(</span>value<span class="punctuation">)</span>
<span class="punctuation">})</span></code></pre>
        <p>Использовать valueChanges можно применительно к отдельному полю:</p>
        <pre><code><span class="object">this</span>.someForm.<span class="method">get</span><span class="punctuation">(</span><span class="string">'login'</span><span class="punctuation">)</span>.valueChanges.<span class="method">subscribe</span><span class="punctuation">((</span>value<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
  console.<span class="method">log</span><span class="punctuation">(</span>value<span class="punctuation">)</span>
<span class="punctuation">})</span></code></pre>
        <p>
            Если необходимо отследить изменение статуса формы, то нужно
            подписаться на <code>statusChanges</code>:
        </p>
        <pre><code><span class="object">this</span>.someForm.statusChanges.<span class="method">subscribe</span><span class="punctuation">((</span>status<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
  console.<span class="method">log</span><span class="punctuation">(</span>status<span class="punctuation">)</span>
<span class="punctuation">})</span></code></pre>
        <p>Аналогично и для конкретного поля формы:</p>
        <pre><code><span class="object">this</span>.someForm.<span class="method">get</span><span class="punctuation">(</span><span class="string">'login'</span><span class="punctuation">)</span>.statusChanges.<span class="method">subscribe</span><span class="punctuation">((</span>status<span class="punctuation">)</span> <span class="operator">=></span> <span class="punctuation">{</span>
  console.<span class="method">log</span><span class="punctuation">(</span>status<span class="punctuation">)</span>
<span class="punctuation">})</span></code></pre>`,
        selected: false,
    },
];
