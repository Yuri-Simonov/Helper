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
        title: 'Структурная директива <span class="variable">@If</span> / <span class="variable">*ngIf</span>',
        body: `<p>
                Ниже будут представлены примеры с новым синтаксисом
                (<code>&#64;if</code>) и старым (<code>*ngIf</code>)
            </p>
			<p>
                <span class="attention"
                    >Структурная директива <code>&#64;if</code> /
                    <code>*ngIf</code> позволяет скрывать или отображать элемент
                    в DOM-дереве в зависимости от переданного в нее
                    условия</span
                >.
            </p>
            <p>
                Данная директива довольно-таки проста в использовании, просто
                передаем в нее условие или выражение, которое в итоге
                <span class="attention"> будет приведено к булевому типу</span>,
                и всё.
            </p>
            <pre><code class="language-html">&lt;!-- новый синтаксис -->
@if(true) {
	&lt;div>Какой-то текст&lt;/div>
}
				
&lt;!-- старый синтаксис -->
&lt;div *ngIf="true">Какой-то текст&lt;/div></code></pre>
            <p>
                Т.к. оба условия выше возвращают <code>true</code>,
                следовательно, оба параграфа будут показан на странице в
                браузере.
            </p>
            <p>
                Чтобы сделать логическое отрицание в условии, достаточно перед
                условием добавить восклицательный знак (<code>!</code>):
            </p>
<pre><code class="language-html">&lt;!-- новый синтаксис -->
@if(!true) {
	&lt;div>Какой-то текст&lt;/div>
}
				
&lt;!-- старый синтаксис -->
&lt;div *ngIf="!true">Какой-то текст&lt;/div></code></pre>
            <p>
                Выше в примерах со старым синтаксисом используется сокращенная
                запись директивы, которая осуществляется за счет указания
                звёздочки (<code>*</code>) перед названием директивы. Без
                звездочки самый первый пример со старым синтаксисом выглядел бы
                следующим образом:
            </p>
            <pre><code class="language-html">&lt;ng-template [ngIf]="toggler">
	&lt;div>Какой-то текст&lt;/div>
&lt;/ng-template></code></pre>
            <p>
                У данной директивы также присутствует условное ветвление
                <code>else</code>, в которое при использовании старого
                синтаксиса
                <span class="attention"
                    >можно передавать только шаблонные переменные из элементов
                    <code>ng-template</code></span
                >, иначе будет ошибка компиляции TypeScript:
            </p>            
<pre><code class="language-html">&lt;div *ngIf="toggler; else constFromNgTemplate">Какой-то текст&lt;/div>
&lt;ng-template #constFromNgTemplate="toggler">Текст из элемента ng-template&lt;/ng-template></code></pre>
            <p>
                В примере выше, если условие будет истинно, отобразится текст
                "<i>Какой-то текст</i>", в противном же случае, текст возьмется
                из элемента <code>ng-template</code>, то есть, "<i
                    >Текст из элемента ng-template</i
                >".
            </p>
            <p>
                Но в новом синтаксисе теперь в ветвление <code>else</code> можно
                передавать и просто разметку:
            </p>            
<pre><code class="language-html">@if(true) {
	&lt;p>Какой-то текст&lt;/p>
} @else {
	&lt;p>Другой текст&lt;/p>
}</code></pre>
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
            <pre><code class="language-html">&lt;div *ngIf="toggler; then firstNgTemplate; else secondNgTemplate">Этот текст будет удален&lt;/div>
&lt;ng-template #firstNgTemplate="toggler">Текст из firstNgTemplate&lt;/ng-template>
&lt;ng-template #secondNgTemplate="toggler">Текст из secondNgTemplate&lt;/ng-template></code></pre>
            <p>
                Соответственно, если условие истинно, отрисуется
                <code>firstNgTemplate</code>, иначе -
                <code>secondNgTemplate</code>.
            </p>`,
        selected: false,
        lastUpdate: '07.02.2024',
        footerLinks: [
            {
                title: 'новый синтаксис',
                path: 'https://youtu.be/8Mv-kj9XWCs?t=54',
            },
            {
                title: 'старый синтаксис',
                path: 'https://youtu.be/vLlO-FDSyts?t=175',
            },
            {
                title: 'особенности использования',
                path: 'https://www.youtube.com/watch?v=Ag4bCejYr-U',
            },
        ],
    },
    {
        title: 'Структурная директива <span class="variable">*ngFor</span>',
        body: `<p>
                <span class="attention"
                    >Структурная директива *ngFor позволяет создавать разметку в
                    шаблоне для каждого элемента переданного в нее
                    массива.</span
                >
            </p>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;div *ngFor="let item of arr">
    &lt;span>{{ item }}&lt;/span>
&lt;/div></code></pre>
<pre><code class="language-typescript">// класс компонента
arr: number[] = [1, 2, 3];</code></pre>
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
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;div *ngFor="let item of arr; let currentIndex = index; let evenItem = even">
	&lt;span *ngIf="evenItem"> {{ item }}&lt;/span>
	&lt;span> {{ currentIndex }}&lt;/span>
&lt;/div></code></pre>
<pre><code class="language-typescript">// класс компонента
arr: number[] = [1, 2, 3];
</code></pre>`,
        selected: false,
        lastUpdate: '07.02.2024',
        footerLinks: [
            {
                title: 'старый синтаксис',
                path: 'https://youtu.be/vLlO-FDSyts?t=487',
            },
            {
                title: 'особенности использования',
                path: 'https://www.youtube.com/watch?v=Ag4bCejYr-U',
            },
        ],
    },
    {
        title: 'Оптимизация структурной директивы <span class="variable">*ngFor</span>',
        body: `<p>
                Элементы DOM-дерева, отрисованные с помощью структурной
                директивы <code>*ngFor</code>, очень часто подвергаются
                изменениям, например, происходит их сортировка или фильтрация в
                зависимости от каких-либо условий. И на каждое подобного рода
                действие
                <span class="attention"
                    >Angular перерисовывает весь список этих элементов</span
                >, вместо того, чтобы делать это только для тех элементов,
                которые подверглись изменениям.
            </p>
            <p>
                Чтобы Angular мог понимать, какие элементы изменились, а какие
                нет, у структурной директивы <code>*ngFor</code> есть встроенный
                метод, который называется <code>trackBy</code>.
                <span class="attention"
                    >Суть его заключается в том, что он идентифицирует каждый
                    элемент цикла <code>for</code> по указанному нами ему
                    уникальному параметру</span
                >.
            </p>
            <p>
                И когда будет происходить какое-либо изменение списка, Angular
                быстрее выполнит эту операцию, т.к.
                <span class="attention">
                    будет знать какие элементы списка изменились и внесет
                    изменения только в них</span
                >, остальные пропустит, оставив без изменений.
            </p>
            <p>
                Если верить официальной документации, существенная оптимизация
                возникает при больших списках элементов.
            </p>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;li *ngFor="let item of items; trackBy: trackByFunction">{{item}}&lt;/li></code></pre>
<pre><code class="language-typescript">// класс компонента
arr: number[] = [1, 2, 3];

trackByFunction(index, item) {
	return item; //	уникальный параметр
}</code></pre>

            <p>
                Функция, используемая в качестве значения для метода<code
                    >trackBy</code
                >
                принимает 2 параметра: индекс текущего элемента массива и сам
                элемент массива.
            </p>
            <p>
                Также эта
                <span class="attention"
                    >функция должна возвращать уникальный идентификатор</span
                >, с помощью которого Angular будет понимать что к чему
                относится в списке элементов DOM-дерева. Обычно возвращают
                <code>id</code>, (например, <code>item.id</code>), но в примере
                выше и так все элементы массива уникальные, поэтому возвращается
                сам элемент массива.
            </p>`,
        selected: false,
        lastUpdate: '07.02.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/Ag4bCejYr-U?t=691',
            },
        ],
    },
    {
        title: 'Структурная директива <span class="variable">*ngSwitchCase</span>',
        body: `<p>
                <span class="attention"
                    >Структурная директива <code>*ngSwitchCase</code> позволяет
                    выводить разметку в шаблоне компонента через конструкцию
                    <code>switch/case</code>, где в зависимости от ее результата
                    будет показываться соответствующий элемент разметки.</span
                >
            </p>
<pre><code class="language-html">&lt;div [ngSwitch]="Какие-то данные, передаваемые внутрь конструкции">
   &lt;span *ngSwitchCase="значение_1">Первый элемент&lt;/span>
   &lt;span *ngSwitchCase="значение_2">Второй элемент&lt;/span>
	...
   &lt;span *ngSwitchDefault>Элемент по умолчанию&lt;/span>
&lt;/div></code></pre>

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
            <pre><code class="language-typescript">// класс компонента
arr: number[] = [1, 2, 3];</code></pre>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;div *ngFor="let item of arr" [ngSwitch]=item>
   &lt;span *ngSwitchCase="1">Появлюсь, если item будет равен 1&lt;/span>
   &lt;span *ngSwitchCase="2">Появлюсь, если item будет равен 2&lt;/span>
   &lt;span *ngSwitchDefault>Появлюсь, если не найдутся совпадения в *ngSwitchCase&lt;/span>
&lt;/div></code></pre>
`,
        selected: false,
        lastUpdate: '07.02.2024',
        footerLinks: [
            {
                title: 'старый синтаксис',
                path: 'https://youtu.be/vLlO-FDSyts?t=690',
            },
            {
                title: 'особенности использования',
                path: 'https://www.youtube.com/watch?v=Ag4bCejYr-U',
            },
        ],
    },
    {
        title: 'Использование двух или более структурных директив на одном элементе DOM-дерева',
        body: `<p>
                В реальной разработке очень часто возникают ситуации, когда
                нужно использовать 2 или более структурных директив на одном и
                том же элементе DOM-дерева, но
                <span class="attention">этого делать нельзя</span>, т.к. в этом
                случае возникает конфликт и элемент <code>ng-template</code> не
                понимает, к какой из структурных директив он должен привязаться.
            </p>
            <p>
                Казалось бы патовая ситуация, но
                <span class="attention">
                    решение данной проблемы есть - использование элемента
                    <code>ng-container</code></span
                >. То есть, мы можем оставить одну из структурных директив на
                элементе DOM-дерева, а вторую повесить на элемент
                <code>ng-container</code>. Только имейте ввиду, что
                <span class="attention"
                    >элемент <code>ng-container</code> так же может содержать
                    только одну структурную директиву</span
                >
                (это на случай, если суммарное количество структурных директив
                больше двух).
            </p>
            <p>
                Так же не забывайте учитывать порядок выполнения структурных
                директив, т.к. расположение структурной директивы
                <code>*ngIf</code> до или после после той же
                <code>*ngFor</code> будут иметь разные итоговые результаты.
            </p>
            <pre><code class="language-html">&lt;!-- первый пример -->
&lt;ng-container *ngIf="condition">
	&lt;div *ngFor="let item of arr">
  		&lt;span>{{ item }}&lt;/span>
	&lt;/div>
&lt;/ng-container>

&lt;!-- второй пример -->
&lt;ng-container *ngFor="let item of arr">
	&lt;div *ngIf="condition">
  		&lt;span>{{ item }}&lt;/span>
	&lt;/div>
&lt;/ng-container></code></pre>
            <p>
                Если сравнить два примера выше, то в зависимости от результата
                условия структурной директивы <code>*ngIf</code> в первом
                примере либо будут все элементы массива в итоговой разметке,
                либо их не будет вовсе. А вот во втором примере какие-то
                элементы попадут в итоговую разметку, а какие-то нет.
            </p>`,
        selected: false,
        lastUpdate: '07.02.2024',
    },
    {
        title: 'Атрибутивная директива <span class="variable">ngClass</span>',
        body: `<p>
                <span class="attention"
                    >Атрибутивная директива <code>ngClass</code> позволяет как
                    статически, так и динамически изменять css-классы на
                    элементе DOM-дерева в зависимости от каких-либо
                    условий</span
                >.
            </p>
            <p>
                В качестве значений <code>ngClass</code> может принимать строки,
                массивы и объекты.
            </p>
            <i class="subtitle">Примеры со строками</i>
<pre><code class="language-html">&lt;some-element ngClass="first second">...&lt;some-element> &lt;!-- статический вариант записи -->
&lt;some-element [ngClass]="'first second'">...&lt;some-element> &lt;!-- динамический вариант записи --></code></pre>

            <p>
                Как видно из примера выше, просто перечисляем css-классы внутри
                кавычек, которые нужно добавить на элемент DOM-дерева.
            </p>
            <i class="subtitle">Пример с массивом</i>
			<pre><code class="language-html">&lt;some-element [ngClass]="['first', 'second']">...&lt;some-element></code></pre>
            <p>
                Здесь уже нужные css-классы перечисляются как элементы массива.
            </p>
            <i class="subtitle">Примеры с объектами</i>
            <p>
                Варианты записи, когда в качестве значений для
                <code>ngClass</code> указываются строки или массивы, практически
                не встречаются, т.к. не позволяют использовать условия, в
                зависимости от которых будет добавляться или убираться тот или
                иной css-класс. Объекты же позволяют это делать, поэтому в
                основном они и используются.
            </p>
           	<pre><code class="language-html">&lt;some-element [ngClass]="{'first': true, 'second': false}">...&lt;some-element></code></pre>
            <p>
                В примере выше для каждого css-класса задается условие его
                отображения. Если оно правдиво (<code>true</code>), то css-класс
                добавляется на элемент DOM-дерева. Если условие ложно, тогда
                css-класс не добавляется.
            </p>
			<pre><code class="language-html">&lt;some-element [ngClass]="{'class1 class2' : true}">...&lt;some-element></code></pre>
            <p>
                В примере выше показано, что <code>ngClass</code> также
                позволяет отображать или скрывать сразу несколько css-классов в
                зависимости от одного и того же условия.
            </p>`,
        selected: false,
        lastUpdate: '08.02.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/qNUp8t5QOxs?t=12',
            },
        ],
    },
    {
        title: 'Атрибутивная директива <span class="variable">ngStyle</span>',
        body: `<p>
                <span class="attention"
                    >Атрибутивная директива <code>ngStyle</code> позволяет
                    изменять инлайновые стили на элементе DOM-дерева в
                    зависимости от каких-либо условий</span
                >.
            </p>
            <p>
                В качестве значений <code>ngStyle</code> принимает объекты, где
                в качестве ключа указывается css-свойство, а в качестве значения
                соответствующая корректная величина для данного css-свойства.
                Иначе Ангуляр просто вырежет при компиляции некорректные данные.
            </p>
			<pre><code class="language-html">&lt;some-element [ngStyle]="{'color': 'red'}">...&lt;some-element></code></pre>
            <p>
                Также необязательно писать все стили в шаблоне компонента. Их
                можно вынести в отдельную переменную класс компонента и
                передать ее в качестве значения для директивы
                <code>ngStyle</code>:
            </p>
<pre><code class="language-typescript">// класс компонента
cssProperties = {'color': 'red', 'display': 'block'}</code></pre>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;some-element [ngStyle]="cssProperties">...&lt;some-element></code></pre>
            <p>
                К тому же, внутри <code>ngStyle</code> можно сразу задавать
                css-свойству размерность:
            </p>
			<pre><code class="language-html">&lt;some-element [ngStyle]="{'font-size.px': 20}">...&lt;some-element></code></pre>`,
        selected: false,
        lastUpdate: '08.02.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/qNUp8t5QOxs?t=290',
            },
        ],
    },
    {
        title: 'Создание пользовательских атрибутивных директив',
        body: `<p>
                <span class="attention"
                    >Создание самой простой пользовательской атрибутивной директивы ограничивается лишь классом, на
                    который ссылается декоратор <code>@Directive&#40;&#41;</code></span
                >. И если нам нужно как-то обратиться к ней в шаблоне компонента, то стоит задать ей поле
                <code>selector</code> в конфигурационном объекте.
            </p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {}</code></pre>
            <p>
                После создания минимально-необходимого кода для работы директивы, ее можно добавлять к элементам
                разметки:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента --> 
&lt;p someAttr>Какой-то текст&lt;/p></code></pre>
            <p>
                Получать доступ к элементу разметки, на котором висит пользовательская директива, можно как минимум
                двумя способами.
            </p>
			<i class="subtitle">Первый способ - ElementRef</i>
            <p>
                Первый способ - с помощью
                <span class="attention">специального ангуляровского класса <code>ElementRef</code></span
                >. И с помощью его свойства <code>nativeElement</code> можно получить доступ к элементу разметки по
                ссылке и изменять его свойства:
            </p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	constructor (private element: ElementRef) {
		element.nativeElement.style.fontSize = '20px';
	}
}</code></pre>
            <p>
                Данный способ имеет 1 весомый недостаток, о котором также сказано
                <a target="_blank" href="https://angular.io/api/core/ElementRef">в официальной документации</a>,
                <span class="attention"> он делает уязвимым приложение к XSS атакам</span>.
            </p>
			<i class="subtitle">Второй способ - @HostBinding&#40;&#41;</i>
            <p>
                Второй способ - с помощью <span class="attention">декоратора <code>@HostBinding&#40;&#41;</code></span
                >. Этот способ считается более правильным и не несет никаких рисков безопасности для приложения.
            </p>
            <p>
                В примере ниже представлены примеры того, как изменяются инлайновые стили, атрибуты и CSS-классы. Именно
                <span class="attention">эти 3 варианта позволяет изменять данный декоратор</span>:
            </p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	// с помощью префикса "style." изменяются инлайновые стили
	@HostBinding('style.color') color: string = 'lime';
	// с помощью префикса "attr." изменяются атрибуты
	@HostBinding('attr.color') attr: string = 'lime';
	// с помощью префикса "class." изменяются CSS-классы
	@HostBinding('class.color') class: boolean = true;
}</code></pre>

            <p>В итоге в браузере элемент разметки будет выглядеть следующим образом:</p>
            <pre><code class="language-html">&lt;!-- разметка в браузере --> 
&lt;p someAttr style="color:lime" color="lime" class="color">Какой-то текст&lt;/p></code></pre>
            <p>
                Разберем также обратный сценарий, когда на элементе присутствуют инлайновые стили, атрибут и CSS-класс:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента --> 
&lt;p someAttr style="color:lime" color="lime" class="color">Какой-то текст&lt;/p></code></pre>
            <p>
                Для того, чтобы убрать инлайновые стили или атрибут, нужно в качестве их значения указать
                <code>null</code>, или <code>undefined</code>, или <span class="attention">не указывать значение вовсе</span>. В последнем случае надо
                также указать хотя бы тип <code>any</code>, чтобы не было ошибки типизации. А чтобы убрать CSS-класс,
                достаточно булевое значение изменить на <code>false</code>:
            </p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	@HostBinding('style.color') color: string = null; // или undefined
	@HostBinding('attr.color') attr: any; // если не указывать значение вовсе
	@HostBinding('class.color') class: boolean = false;
}</code></pre>
<i class="subtitle">Передача данных внутрь директивы</i>
            <p>
                Выше рассмотрены примеры, когда директива создается без получения каких-либо данных внутрь. Для того, чтобы в директиву передать какие-то данные, нужно поставить знак равно и после него
                указать необходимые данные:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента --> 

&lt;!-- статические данные для директивы --> 
&lt;p someAttr="20">Какой-то текст&lt;/p>

&lt;!-- динамические данные для директивы --> 
&lt;p [someAttr]="someVariable">Какой-то текст&lt;/p></code></pre>
            <p>
                И внутри директивы с помощью декоратора <code>@Input&#40;&#41;</code> нужно обработать входящие данные:
            </p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	@Input('someAttr') someAttrProps: any;
}</code></pre>
<i class="subtitle">Декоратор @HostListener&#40;&#41;</i>
            <p>
                Также внутри директив можно изменять свойства элемента разметки при срабатывании определенных событий.
                Делается это с помощью декоратора <code>@HostListener&#40;&#41;</code>, т.к. он
                <span class="attention"> используется для отслеживания различных событий DOM-дерева</span>, например
                события клика, скролла и т.д. Также
                <span class="attention">
                    данный декоратор предоставляет метод-обработчик, который запускается при возникновении указанного в
                    нем события</span
                >.
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента --> 
&lt;p someAttr>Какой-то текст&lt;/p></code></pre>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	@HostBinding('style.color') color: string = "green";

	@HostListener('mouseenter') handleMouseenter() {
		this.setNewFontSize("red"); // при наведении будет устанавливаться красный цвет текста
	}	

	@HostListener('mouseleave') handleMouseleave() {
		this.setNewFontSize("green"); // при наведении будет устанавливаться зеленый цвет текста
	}	
	
	setNewColor(newColor: string): void {
		this.color = newColor;
	}
}</code></pre>
<i class="subtitle">Дополнительные паратры декоратора @HostListener&#40;&#41;</i>
            <p>
                Декоратор <code>@HostListener&#40;&#41;</code> вторым параметром может также принимать массив
                дополнительный аргументов, в котором указывается специальный объект <code>$event</code> или его
                свойства:
            </p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	@HostListener('click', ['$event', '$event.target']) handleMouseleave(event: any, eventTarget: any) {
		console.log('event', event); // здесь получим все данные объекта $event
		console.log('eventTarget', eventTarget); // а здесь лишь его свойство $event.target
	}	
}</code></pre>
<i class="subtitle">Глобальные объекты</i>
            <p>
                Декоратор <code>@HostListener&#40;&#41;</code> также позволяет отлавливать события глобальных объектов
                <code>document:</code>, <code>window:</code> и <code>body:</code>. Знак "<code>:</code>" не просто так
                стоит на конце. Это такая форма записи.
            </p>
            <p>В примере ниже событие клика будет отлавливаться внутри глобального объекта <code>document:</code>:</p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	@HostListener('document:click') handleMouseleave() {
		console.log('document click!');
	}	
}</code></pre>
			<i class="subtitle">Пользовательские события</i>
            <p>Внутри пользовательских директив доступно создание пользовательских событий:</p>
            <pre><code class="language-typescript">// класс директивы
@Directive({
	selector: '[someAttr]',
})
export class SomeDirective {
	@Output() colorChange = new EventEmitter();

	@HostListener('click') handleClick(data: any) {
		this.getRandomColor();
	}

	getRandomColor() {
		const newColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
		this.colorChange.emit(newColor);
	}
}</code></pre>
            <p>
                Эти пользовательские события обрабатываются точно так же, что и пользовательские события дочерних
                компонентов:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон компонента --> 
&lt;p someAttr (colorChange)="setColor($event)">Какой-то текст&lt;/p></code></pre>
            <pre><code class="language-typescript">// класс компонента
@Directive({
	selector: '[someAttr]',
})
export class SomeComponent {
	setColor(newColor: string) {
		this.colorProperty = newColor;
	}
}</code></pre>`,
        selected: false,
        lastUpdate: '22.02.2024',
        footerLinks: [
            {
                path: 'https://youtu.be/qHfHV5Ej4pg',
            },
        ],
    },
    {
        title: 'Создание пользовательских структурных директив',
        body: ``,
        selected: false,
        lastUpdate: '',
        disabled: true,
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
            <pre><code class="language-typescript">// из файла "@angular/core"
export declare interface Component extends Directive {}</code></pre>
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
        lastUpdate: '08.02.2024',
    },
    {
        title: 'Различия между жизненными циклами компонента и директивы',
        body: `<p>
		Если заглянуть "под капот" интерфейса декоратора компонента, то можно
		увидеть, что он наследуются от интерфейса декоратора директивы:
	</p>
<pre><code class="language-typescript">// из файла "@angular/core"
export declare interface Component extends Directive {}</code></pre>
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

    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    //     lastUpdate: '',
    // },
];
