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
        body: `<p><i>Как создаются - в разработке...</i></p>`,
        selected: false,
        lastUpdate: '24.09.2023',
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
        title: 'Разница между директивой и компонентом в Angular?',
        body: `<p>
            Директивы имеют декоратор <code>@Directive()</code> и обычно
            <span class="attention">директивы</span> — это маленькие куски кода,
            которые
            <span class="attention">
                добавляют функциональность к существующему элементу DOM.</span
            >
            Они очень похожи на компоненты, но только не обладают шаблоном.
            Директива должна иметь селектор, чтобы привязать свою
            функциональность к элементу на странице.
        </p>
        <p>
            Компоненты же в свою очередь имеют декоратор
            <code>@Component()</code>, причем интерфейс
            <code>Component</code> наследуется от интерфейса
            <code>Directive</code>.
        </p>
        <pre><code><span class="comment">// из файла "@angular/core"</span>
<span class="export">export</span> <span class="keyword">declare</span> <span class="keyword">interface</span> <span class="interface-name">Component</span> <span class="keyword">extends</span> <span class="interface-name">Directive</span> <span class="punctuation">{}</span></code></pre>
        <p>
            Поэтому можно сказать, что
            <span class="attention">
                компоненты - это те же директивы, но с дополнительными
                возможностями</span
            >. Компонент не привязывается к элементам DOM, а вместо этого
            создает свою собственную иерархию элементов и с ней работает.
        </p>
        <i class="subtitle"
            >Когда использовать директиву, а когда - компонент?</i
        >
        <p>
            Если нужно вставить большой кусок HTML со своей логикой и
            функциональностью нужно использовать компонент, если нужно добавить
            только функциональность к уже существующим элементам, то –
            директивы.
        </p>`,
        selected: false,
    },
    {
        title: 'В чем отличие жизненного цикла компонента от директивы?',
        body: `<p>
		Если заглянуть под капот интерфейса компонента, то можно
		увидеть, что он наследуются от интерфейса директивы:
	</p>
	<pre><code><span class="comment comment_start">// из файла "@angular/core"</span>
<span class="export">export</span> <span class="keyword">declare</span> <span class="keyword">interface</span> <span class="interface-name">Component</span> <span class="keyword">extends</span> <span class="interface-name">Directive</span> <span class="punctuation">{}</span></code></pre>
	<p>
		Поэтому можно сказать, что
		<span class="attention">
			компоненты - это те же директивы, но с дополнительными
			возможностями</span
		>. Исходя из этого можно сделать вывод от том, что
		<span class="attention"
			>директивы имеют аналогичный жизненный цикл, что и
			компоненты</span>.
	</p>`,
        selected: false,
        lastUpdate: '29.07.2023',
    },
    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    //     lastUpdate: '',
    // },
];
