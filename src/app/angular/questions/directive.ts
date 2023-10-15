import { IQuestion } from '@types';

export const directiveQuestions: IQuestion[] = [
    {
        title: 'Директивы в Angular',
        body: `<p>
            Директивы в Angular - это <span class="attention">классы, которые предназначены для задания дополнительных возможностей элементам DOM-дерева</span>.
        </p>
        <p>
            По своей реализации директивы очень похожи на компоненты,
            т.к. сами по себе
            <span class="attention">
                компоненты - это директивы со своим собственным шаблоном.
            </span>
        </p>
        <p>
            Директивы создаются с помощью декоратора
            <code>@Directive()</code> с конфигурационным объектом и
            подразделяются на 3 типа:
        </p>
        <ul>
            <li>
                <span class="attention">С собственным шаблоном</span> - это
                компоненты (компоненты являются директивами, см.выше);
            </li>
            <li>
                <span class="attention">Структурные</span> - изменяют структуру
                DOM-дерева (<code>*ngIf</code>, <code>*ngFor</code> и <code>*ngSwitch</code>);
            </li>
            <li>
                <span class="attention">Атрибуты</span> - изменяют внешний вид
                или поведение по умолчанию элемента DOM-дерева (<code>ngClass</code>, <code>ngStyle</code> и <code>пользовательские директивы</code>).
            </li>
        </ul>`,
        selected: false,
        lastUpdate: '24.09.2023',
    },
    {
        title: 'Создание пользовательских структурных директив',
        body: ``,
        selected: false,
        lastUpdate: '',
        disabled: true,
    },
    {
        title: 'Создание пользовательских атрибутивных директив',
        body: `<p>
           <span class="attention">Создание самой простой атрибутивной директивы ограничивается лишь классом, на который ссылается декоратор <code>@Directive()</code></span>. И если нам нужно как-то обратиться к ней в шаблоне компонента, то стоит задать ей поле <code>selector</code> в конфигурационном объекте.
        </p>
        <p>
            В примере ниже создается директива, изменяющая размер
            шрифта у элемента, у которого присутствует эта
            атрибутивная директива.
        </p>
        <pre><code><span class="comment comment_start">// шаблон</span>
<span class="tag"><</span><span class="tag">p</span> <span class="attribute">someAttr</span><span class="tag">></span>some text<span class="tag"><</span><span class="tag">/p></span>

<span class="comment comment_start">// директива</span>
<span class="function-name">@Directive</span><span class="punctuation">({</span>
	<span class="key">selector</span><span class="punctuation">: '</span><span class="attribute">[someAttr]</span><span class="punctuation">'</span>,
<span class="punctuation">})</span>
<span class="export">export</span> <span class="key">class</span> <span class="class-name">SomeDirective</span> <span class="punctuation">{</span>
  <span class="keyword">constructor </span><span class="punctuation">(</span><span class="keyword">private</span> element: <span class="type">ElementRef</span><span class="punctuation">)</span> <span class="punctuation">{</span>
    element.nativeElement.style.fontSize <span class="operator">=</span> <span class="string">'20px'</span>;
  <span class="punctuation">}</span>
<span class="punctuation">}</span>
</code></pre>
        <p>
            Для манипуляции элементом используется класс
            <code>ElementRef</code>. С помощью его свойства
            <code>nativeElement</code> мы можем получить
            <span class="attention"> доступ к элементу по ссылке, </span>
            у которого присутствует наш атрибут-директива.
        </p>
        <p>
            Выше рассмотрен вариант создания статической директивы атрибута. Но
            можно изменять поведение элемента и при срабатывании определенных
            событий, которые задаются с помощью декоратора
            <code>@HostListener()</code>.
        </p>
        <pre><code><span class="comment comment_start">// шаблон</span>
<span class="tag"><</span><span class="tag">p</span> <span class="attribute">someAttr</span><span class="tag">></span>some text<span class="tag"><</span><span class="tag">/p></span>

<span class="comment comment_start">// директива</span>
<span class="function-name">@Directive</span><span class="punctuation">({</span>
	<span class="key">selector</span><span class="punctuation">: '</span><span class="attribute">[someAttr]</span><span class="punctuation">'</span>,
<span class="punctuation">})</span>
<span class="export">export</span> <span class="key">class</span> <span class="class-name">SomeDirective</span> <span class="punctuation">{</span>
	<span class="keyword">constructor </span><span class="punctuation">(</span><span class="keyword">private</span> element: <span class="type">ElementRef</span><span class="punctuation">)</span> <span class="punctuation">{</span>
	
	<span class="function-name">@HostListener</span><span class="punctuation">(</span><span class="string">'mouseenter'</span><span class="punctuation">)</span> <span class="function-name">enterMouseEvent</span><span class="punctuation">()</span> <span class="punctuation">{</span>
    	<span class="object">this</span>.<span class="function-name">setNewFontSize</span><span class="punctuation">(</span><span class="number">20</span><span class="punctuation">)</span>; <span class="comment">// при наведении будет устанавливаться размер шрифта равный 20рх</span>
	<span class="punctuation">}</span>	
<span class="punctuation">}</span>

<span class="function-name">setNewFontSize</span><span class="punctuation">(</span>value<span class="punctuation">:</span> <span class="type">number</span> <span class="operator">|</span> <span class="type">string</span><span class="punctuation">):</span> <span class="type">void</span> <span class="punctuation">{</span>
    <span class="object">this</span>.element.nativeElement.style.fontSize <span class="operator">=</span> value <span class="operator">+</span> <span class="string">'px'</span>
<span class="punctuation">}</span>
</code></pre>
        <p>
            Если необходимо передавать в директуру данные из компонента, где она
            используется, то делается это с помощью другого декоратора -
            <code>@Input()</code>.
        </p>
        <pre><code><span class="comment comment_start">// шаблон</span>
<span class="tag"><</span><span class="tag">p</span> <span class="attribute">[someAttr]</span><span class="operator">=</span><span class="string">"20"</span><span class="tag">></span>some text<span class="tag"><</span><span class="tag">/p></span> <span class="comment">// вместо "20" может быть также какая-нибудь переменная из компонента</span>

<span class="comment comment_start">// директива</span>
<span class="function-name">@Directive</span><span class="punctuation">({</span>
	<span class="key">selector</span><span class="punctuation">: '</span><span class="attribute">[someAttr]</span><span class="punctuation">'</span>,
<span class="punctuation">})</span>
<span class="export">export</span> <span class="key">class</span> <span class="class-name">SomeDirective</span> <span class="punctuation">{</span>
	<span class="keyword">@Input</span><span class="punctuation">(</span><span class="string">'someAttr'</span><span class="punctuation">)</span> fontSize;
	
	<span class="keyword">constructor </span><span class="punctuation">(</span><span class="keyword">private</span> element: <span class="type">ElementRef</span><span class="punctuation">)</span> <span class="punctuation">{</span>
	
	<span class="function-name">@HostListener</span><span class="punctuation">(</span><span class="string">'mouseenter'</span><span class="punctuation">)</span> <span class="function-name">enterMouseEvent</span><span class="punctuation">()</span> <span class="punctuation">{</span>
    	<span class="object">this</span>.<span class="function-name">setNewFontSize</span><span class="punctuation">(</span><span class="object">this</span>.fontSize<span class="punctuation">)</span>; <span class="comment">// при наведении будет устанавливаться размер шрифта равный переданному значению из компонента</span>
	<span class="punctuation">}</span>	
<span class="punctuation">}</span>

<span class="function-name">setNewFontSize</span><span class="punctuation">(</span>value<span class="punctuation">:</span> <span class="type">number</span> <span class="operator">|</span> <span class="type">string</span><span class="punctuation">):</span> <span class="type">void</span> <span class="punctuation">{</span>
    <span class="object">this</span>.element.nativeElement.style.fontSize <span class="operator">=</span> value <span class="operator">+</span> <span class="string">'px'</span>
<span class="punctuation">}</span>
</code></pre>`,
        selected: false,
        lastUpdate: '24.09.2023',
    },
    {
        title: 'Разница между директивой и компонентом',
        body: `<p>
                Директивы - это классы, которые предназначены для задания
                дополнительных возможностей уже существующим в компонентах
                элементам DOM-дерева.
            </p>
            <p>
                По своей реализации директивы очень похожи на компоненты, т.к.
                компонент - это директива со своим собственным шаблоном.
            </p>
            <p>
                Иначе говоря, первое различие состоит в том, что
                <span class="attention"
                    >у компонента есть свой собственный шаблон, а у директивы -
                    нет</span
                >.
            </p>
            <p>
                Второе отличие состоит в том, что
                <span class="attention"
                    >директивы имеют декоратор <code>@Directive()</code>, а
                    компоненты - <code>@Component()</code></span
                > т.к. это разные сущности, причем интерфейс декоратора компонента наследуется от
                интерфейса декоратора директивы.
            </p>
            <pre><code><span class="comment comment_start">// из файла "@angular/core"</span>
<span class="export">export</span> <span class="keyword">declare</span> <span class="keyword">interface</span> <span class="interface-name">Component</span> <span class="keyword">extends</span> <span class="interface-name">Directive</span> <span class="punctuation">{}</span></code></pre>
            <p>
                Поэтому можно сказать, что
                <span class="attention">
                    компоненты - это те же директивы, но с дополнительными
                    возможностями</span
                >, ведь компоненты не привязываются к элементам DOM-дерева, а
                вместо этого создают свои собственные иерархии элементов в
                DOM-дереве и с ними работают.
            </p>
            <i class="subtitle"
                >Когда использовать директиву, а когда - компонент?</i
            >
            <p>
                Если нужно вставить большой кусок HTML-разметки со своей логикой
                и функциональностью, то нужно использовать компонент. Если нужно
                добавить только функциональность к уже существующим элементам,
                тогда директивы.
            </p>`,
        selected: false,
        lastUpdate: '07.10.2023',
    },
    {
        title: 'Различия между жизненными циклами компонента и директивы',
        body: `<p>
		Если заглянуть "под капот" интерфейса декоратора компонента, то можно
		увидеть, что он наследуются от интерфейса декоратора директивы:
	</p>
	<pre><code><span class="comment comment_start">// из файла "@angular/core"</span>
<span class="export">export</span> <span class="keyword">declare</span> <span class="keyword">interface</span> <span class="interface-name">Component</span> <span class="keyword">extends</span> <span class="interface-name">Directive</span> <span class="punctuation">{}</span></code></pre>
	<p>
		Следовательно, 
		<span class="attention">
			компоненты - это те же директивы, но с дополнительными
			возможностями</span
		>. Поэтому можно сделать вывод от том, что
		<span class="attention"
			>директивы имеют аналогичный жизненный цикл, что и
			компоненты</span>, т.е. <span class="attention">различий нет</span>.
	</p>`,
        selected: false,
        lastUpdate: '07.10.2023',
    },
    {
        title: 'Структурная директива *ngIf',
        body: `<p>
                <span class="attention"
                    >Структурная директива *ngIf позволяет скрывать или
                    отображать элемент в DOM-дереве в зависимости от переданного
                    в нее условия</span
                >.
            </p>
            <p>
                Данная директива довольно-таки проста в использовании, просто
                передаем в нее условие или выражение, которое в итоге
                <span class="attention"> будет приведено к булевому типу</span>,
                и всё.
            </p>
            <pre><code><span class="comment comment_start">// в шаблоне компонента</span>
toggler: <span class="type">boolean</span> <span class="operator">=</span> <span class="boolean">true</span>;

<span class="comment comment_start">// в классе компонента</span>
<span class="tag"><</span><span class="tag">div</span> <span class="keyword">*ngIf</span><span class="operator">=</span><span class="punctuation">"</span>toggler<span class="punctuation">"</span><span class="tag">></span><span class="string">Какой-то текст</span><span class="tag"><</><span class="tag">/div></span></code></pre>
            <p>
                Т.к. условие выше возвращает <code>true</code>, следовательно,
                параграф будет показан на странице в браузере.
            </p>
            <p>
                Чтобы сделать логическое отрицание в условии, достаточно перед
                условием добавить восклицательный знак (<code>!</code>):
            </p>
            <pre><code><span class="comment comment_start">// в шаблоне компонента</span>
<span class="tag"><</span><span class="tag">div</span> <span class="keyword">*ngIf</span><span class="operator">=</span><span class="punctuation">"</span><span class="operator">!</span>toggler<span class="punctuation">"</span><span class="tag">></span><span class="string">Какой-то текст</span><span class="tag"><</><span class="tag">/div></span></code></pre>
            <p>
                Выше представлены примеры с сокращенной записью директивы,
                которая осуществляется за счет указания звёздочки
                (<code>*</code>) перед названием директивы. Без звездочки самый
                первый пример выглядел бы следующим образом:
            </p>
            <pre><code><span class="comment comment_start">// в шаблоне компонента</span>
<span class="tag"><</span><span class="tag">ng-template</span> <span class="keyword">[ngIf]</span><span class="operator">=</span><span class="punctuation">"</span>toggler<span class="punctuation">"</span><span class="tag">></span>
	<span class="tag"><</span><span class="tag">div</span><span class="tag">></span><span class="string">Какой-то текст</span><span class="tag"><</><span class="tag">/div></span>
<span class="tag"><</><span class="tag">/ng-template></span></code></pre>
            <p>
                У данной директивы также присутствует условное ветвление
                <code>else</code>, в которое
                <span class="attention"
                    >можно передавать только шаблонные переменные из элементов
                    <code>ng-template</code></span
                >, иначе будет ошибка компиляции TypeScript:
            </p>
            <pre><code><span class="comment comment_start">// в шаблоне компонента</span>
<span class="tag"><</span><span class="tag">div</span> <span class="keyword">*ngIf</span><span class="operator">=</span><span class="punctuation">"</span>toggler<span class="punctuation">;</span> <span class="keyword">else</span> constFromNgTemplate<span class="punctuation">"</span><span class="tag">></span><span class="string">Какой-то текст</span><span class="tag"><</><span class="tag">/div></span>
<span class="tag"><</span><span class="tag">ng-template</span> <span class="keyword">#constFromNgTemplate</span><span class="operator">=</span><span class="punctuation">"</span>toggler<span class="punctuation">"</span><span class="tag">></span><span class="string">Текст из элемента ng-template</span><span class="tag"><</><span class="tag">/ng-template></span></code></pre>
            <p>
                В примере выше, если условие будет истинно, отобразится текст
                "<i>Какой-то текст</i>", в противном же случае, текст возьмется
                из элемента <code>ng-template</code>, то есть, "<i
                    >Текст из элемента ng-template</i
                >".
            </p>
            <p>
                Бывают также случаи, когда необходимо отобразить либо один, либо
                другой элемент <code>ng-template</code> в зависимости от условия
                в структурной директиве <code>*ngIf</code>. Делается это с
                помощью ключевого слова <code>then</code>, в которое так же, как
                и в <code>else</code>,
                <span class="attention"
                    >можно передавать только шаблонные переменные</span
                >:
            </p>
            <pre><code><span class="comment comment_start">// в шаблоне компонента</span>
<span class="tag"><</span><span class="tag">div</span> <span class="keyword">*ngIf</span><span class="operator">=</span><span class="punctuation">"</span>toggler<span class="punctuation">;</span> <span class="keyword">then</span> firstNgTemplate; <span class="keyword">else</span> secondNgTemplate<span class="punctuation">"</span><span class="tag">></span><span class="string">Этот текст будет удален</span><span class="tag"><</><span class="tag">/div></span>
<span class="tag"><</span><span class="tag">ng-template</span> <span class="keyword">#firstNgTemplate</span><span class="operator">=</span><span class="punctuation">"</span>toggler<span class="punctuation">"</span><span class="tag">></span><span class="string">Текст из firstNgTemplate</span><span class="tag"><</><span class="tag">/ng-template></span>
<span class="tag"><</span><span class="tag">ng-template</span> <span class="keyword">#secondNgTemplate</span><span class="operator">=</span><span class="punctuation">"</span>toggler<span class="punctuation">"</span><span class="tag">></span><span class="string">Текст из secondNgTemplate</span><span class="tag"><</><span class="tag">/ng-template></span></code></pre>
            <p>
                Соответственно, если условие истинно, отрисуется
                <code>firstNgTemplate</code>, иначе -
                <code>secondNgTemplate</code>.
            </p>`,
        selected: false,
        lastUpdate: '15.10.2023',
    },
    {
        title: 'Структурная директива *ngFor',
        body: `<p>
                <span class="attention"
                    >Структурная директива *ngFor позволяет создавать разметку в
                    шаблоне для каждого элемента переданного в нее
                    массива.</span
                >
            </p>
            <pre><code><span class="comment comment_start">// в классе компонента</span>
arr: <span class="type">number[]</span> <span class="operator">=</span> <span class="punctuation">[</span><span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span><span class="punctuation">]</span>;

<span class="comment comment_start">// в шаблоне компонента</span>
<span class='tag'>&lt;div></span> <span class="keyword">*ngFor</span><span class="operator">=</span><span class="punctuation">"</span><span class="keyword">let</span> <span class="variable">item</span> <span class="keyword">of</span> arr<span class="punctuation">"</span><span class='tag'>></span>
    <span class='tag'>&lt;span></span><span class="punctuation">&#123;&#123;</span> <span class="variable">item</span> <span class="punctuation">&#125;&#125;</span><span class='tag'>&lt;/span></span>
<span class='tag'>&lt;/div></span></code></pre>
            <p>
                В примере выше на <code>div</code> добавляется структурная
                директива <code>*ngFor</code>, которая имеет следующий
                синтаксис: сначала пишем ключевое слово <code>let</code>, тем
                самым объявляя локальную переменную внутри данного блока
                разметки, на который вешается данная директива. Название может
                быть любое. Затем пишем ключевое слово <code>of</code> и после
                него указываем переменную, из которой мы будем брать данные.
            </p>
            <p>
                Переменная, используемая в качестве поставщика данных,
                <span class="attention">
                    должна быть массивом каких-либо данных, либо
                    <code>null</code>, либо <code>undefined</code></span
                >. В противном же случае будет ошибка типизации.
            </p>
            <p>
                При использовании данной директивы также доступен различный
                вспомогательный функционал:
            </p>
            <ul>
                <li>
                    <span class="attention">index</span>:
                    <span class="type">number</span> - текущий индекс элемента в
                    итерации;
                </li>
                <li>
                    <span class="attention">count</span>:
                    <span class="type">number</span> - количество итераций;
                </li>
                <li>
                    <span class="attention">first</span>:
                    <span class="type">boolean</span> - первый элементы в
                    итерации;
                </li>
                <li>
                    <span class="attention">last</span>:
                    <span class="type">boolean</span> - последний элементы в
                    итерации;
                </li>
                <li>
                    <span class="attention">even</span>:
                    <span class="type">boolean</span> - четные элементы в
                    итерации;
                </li>
                <li>
                    <span class="attention">odd</span>:
                    <span class="type">boolean</span> - нечетные элементы в
                    итерации.
                </li>
            </ul>
            <p>
                Пример использования четности итерации и текущий индекс элемента
                в итерации:
            </p>
            <pre><code><span class="comment comment_start">// в классе компонента</span>
arr: <span class="type">number[]</span> <span class="operator">=</span> <span class="punctuation">[</span><span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span><span class="punctuation">]</span>;

<span class="comment comment_start">// в шаблоне компонента</span>
<span class='tag'>&lt;div></span> <span class="keyword">*ngFor</span><span class="operator">=</span><span class="punctuation">"</span><span class="keyword">let</span> <span class="variable">item</span> <span class="keyword">of</span> arr<span class="punctuation">;</span> <span class="keyword">let</span> <span class="variable">currentIndex</span> <span class="operator">=</span> index<span class="punctuation">;</span> <span class="keyword">let</span> <span class="variable">evenItem</span> <span class="operator">=</span> even<span class="punctuation">"</span><span class='tag'>></span>
	<span class='tag'>&lt;span</span> <span class="keyword">*ngIf</span><span class="operator">=</span><span class="punctuation">"</span><span class="variable">evenItem</span><span class="punctuation">"</span><span class='tag'>></span> <span class="punctuation">&#123;&#123;</span> <span class="variable">item</span> <span class="punctuation">&#125;&#125;</span><span class='tag'>&lt;/span></span>
	<span class='tag'>&lt;span></span> <span class="punctuation">&#123;&#123;</span> <span class="variable">currentIndex</span> <span class="punctuation">&#125;&#125;</span><span class='tag'>&lt;/span></span>
<span class='tag'>&lt;/div></span></code></pre>`,
        selected: false,
        lastUpdate: '15.10.2023',
    },
    {
        title: 'Оптимизация выполнение цикла "*ngFor"',
        body: `<p>
            <span class="attention">
                При изменении массива Angular перерисовывает DOM-дерево
                полностью</span
            >. Но если использовать функцию <code>trackBy</code>, то Angular
            будет понимать, какой именно элемент изменился, а затем
            <span class="attention">
                внесёт изменения в DOM-дереве только для этого конкретного
                элемента</span
            >.
        </p>
        <pre><code><span class="comment comment_start">// в шаблоне компонента (someItem.component.html)</span>
<span class="tag"><</span><span class="tag">li</span> <span class="keyword">*ngFor</span><span class="operator">=</span><span class="punctuation">"</span><span class="keyword">let</span> item <span class="keyword">of</span> items; <span class="keyword">trackBy</span>: <span class="function-name">trackByFunction</span><span class="punctuation">"</span><span class="tag">></span><span class="tag"><</span><span class="tag">/li></span>

<span class="comment comment_start">// в классе компонента (someItem.component.ts)</span>
<span class="function-name">trackByFunction</span><span class="punctuation">(</span>index, item<span class="punctuation">)</span> <span class="punctuation">{</span>
	<span class="keyword">return</span> item.id<span class="punctuation">;</span> <span class="comment">// уникальный идентификатор, соответствующий элементу</span>
<span class="punctuation">}</span></code></pre>`,
        selected: false,
        lastUpdate: '08.10.2023',
    },
    {
        title: 'Структурная директива *ngSwitch',
        body: `<p>
                <span class="attention"
                    >Структурная директива <code>*ngSwitchCase</code> позволяет
                    выводить разметку в шаблоне компонента через конструкцию
                    <code>switch/case</code>, где в зависимости от ее результата
                    будет показываться соответствующий элемент разметки.</span
                >
            </p>
            <pre><code><span class='tag'>&lt;div></span> <span class="keyword">[ngSwitch]</span><span class="operator">=</span><span class="string">"Какие-то данные, передаваемые внутрь конструкции"</span><span class="tag">></span>
   <span class='tag'>&lt;span</span> <span class="keyword">*ngSwitchCase</span><span class="operator">=</span><span class="punctuation">"</span>значение_1<span class="punctuation">"</span><span class="tag">></span><span class="string">Первый элемент</span><span class='tag'>&lt;/span></span>
   <span class='tag'>&lt;span</span> <span class="keyword">*ngSwitchCase</span><span class="operator">=</span><span class="punctuation">"</span>значение_2<span class="punctuation">"</span><span class="tag">></span><span class="string">Второй элемент</span><span class='tag'>&lt;/span></span>
	...
   <span class='tag'>&lt;span</span> <span class="keyword">*ngSwitchDefault</span><span class="tag">></span><span class="string">Элемент по умолчанию</span><span class='tag'>&lt;/span></span>
<span class='tag'>&lt;/div></span></code></pre>
            <p>
                С помощью атрибутивной директивы <code>ngSwitch</code> внутрь
                родительского элемента <code>div</code> передаются какие-либо
                данные, которые проверяются на совпадения в структурных
                директивах <code>*ngSwitchCase</code>. Если происходит полное
                совпадение, значит условие выполняется и элемент попадает в
                DOM-дерево.
            </p>
            <p>
                Если не находится ни одного совпадения со значениями, указанными
                в структурных директивах <code>*ngSwitchCase</code>, тогда
                отображаются данные, на которых указана другая структурная
                директива <code>*ngSwitchDefault</code>, если она указана в
                конструкции. Эти данные еще называют "данными по умолчанию".
            </p>
            <p>
                Пример использования структурной директивы
                <code>*ngSwitchCase</code> внутри структурной директивы
                <code>*ngFor</code>:
            </p>
            <pre><code><span class="comment comment_start">// в классе компонента</span>
arr: <span class="type">number[]</span> <span class="operator">=</span> <span class="punctuation">[</span><span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span><span class="punctuation">]</span>;

<span class="comment comment_start">// в шаблоне компонента</span>
<span class='tag'>&lt;div</span> <span class="keyword">*ngFor</span><span class="operator">=</span><span class="punctuation">"</span><span class="keyword">let</span> <span class="variable">item</span> <span class="keyword">of</span> arr<span class="punctuation">"</span> <span class="keyword">[ngSwitch]</span><span class="operator">=</span><span class="variable">item</span><span class="tag">></span>
   <span class='tag'>&lt;span</span> <span class="keyword">*ngSwitchCase</span><span class="operator">=</span><span class="punctuation">"</span>1<span class="punctuation">"</span><span class="tag">></span><span class="string">Появлюсь, если item будет равен 1</span><span class='tag'>&lt;/span></span>
   <span class='tag'>&lt;span</span> <span class="keyword">*ngSwitchCase</span><span class="operator">=</span><span class="punctuation">"</span>2<span class="punctuation">"</span><span class="tag">></span><span class="string">Появлюсь, если item будет равен 2</span><span class='tag'>&lt;/span></span>
   <span class='tag'>&lt;span</span> <span class="keyword">*ngSwitchDefault</span><span class="tag">></span><span class="string">Появлюсь, если не найдутся совпадения в *ngSwitchCase</span><span class='tag'>&lt;/span></span>
<span class='tag'>&lt;/div></span></code></pre>`,
        selected: false,
        lastUpdate: '15.10.2023',
    },
    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    //     lastUpdate: '',
    // },
];
