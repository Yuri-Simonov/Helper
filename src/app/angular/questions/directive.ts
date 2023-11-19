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
        title: 'Структурная директива <span class="variable">*ngIf</span>',
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
        title: 'Структурная директива <span class="variable">*ngFor</span>',
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
            <pre><code><span class="comment comment_start">// в шаблоне компонента (someItem.component.html)</span>
<span class="tag">&ltli</span> <span class="keyword">*ngFor</span><span
	class="operator">=</span><span class="punctuation">"</span><span class="keyword">let</span> item <span class="keyword">of</span> items; <span class="keyword">trackBy</span>: <span
	class="function-name">trackByFunction</span><span class="punctuation">"</span><span
	class="tag">></span>&#123;&#123;item&#125;&#125;<span class="tag">&lt/li></span>

<span class="comment comment_start">// в классе компонента (someItem.component.ts)</span>
arr: <span class="type">number[]</span> <span class="operator">=</span> <span
	class="punctuation">[</span><span class="number">1</span>, <span class="number">2</span>, <span
	class="number">3</span><span class="punctuation">]</span>;

<span class="function-name">trackByFunction</span><span class="punctuation">(</span>index, item<span
	class="punctuation">)</span> <span class="punctuation">{</span>
	<span class="keyword">return</span> item<span class="punctuation">;</span> <span class="comment">//	уникальный параметр</span>
<span class="punctuation">}</span></code></pre>
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
        lastUpdate: '26.10.2023',
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
            <pre><code><span class="comment comment_start">// первый пример</span>
<span class='tag'>&lt;ng-container</span> <span class="keyword">*ngIf</span><span class="operator">=</span><span class="punctuation">"</span>condition<span class="punctuation">"</span><span class='tag'>></span>
	<span class='tag'>&lt;div></span> <span class="keyword">*ngFor</span><span class="operator">=</span><span class="punctuation">"</span><span class="keyword">let</span> <span class="variable">item</span> <span class="keyword">of</span> arr<span class="punctuation">"</span><span class='tag'>></span>
  		<span class='tag'>&lt;span></span><span class="punctuation">&#123;&#123;</span> <span class="variable">item</span> <span class="punctuation">&#125;&#125;</span><span class='tag'>&lt;/span></span>
	<span class='tag'>&lt;/div></span>
<span class='tag'>&lt;/ng-container></span>

<span class="comment comment_start">// второй пример</span>
<span class='tag'>&lt;ng-container></span> <span class="keyword">*ngFor</span><span class="operator">=</span><span class="punctuation">"</span><span class="keyword">let</span> <span class="variable">item</span> <span class="keyword">of</span> arr<span class="punctuation">"</span><span class='tag'>></span>
	<span class='tag'>&lt;div</span> <span class="keyword">*ngIf</span><span class="operator">=</span><span class="punctuation">"</span>condition<span class="punctuation">"</span><span class='tag'>></span>
  		<span class='tag'>&lt;span></span><span class="punctuation">&#123;&#123;</span> <span class="variable">item</span> <span class="punctuation">&#125;&#125;</span><span class='tag'>&lt;/span></span>
	<span class='tag'>&lt;/div></span>
<span class='tag'>&lt;/ng-container></span></code></pre>
            <p>
                Если сравнить два примера выше, то в зависимости от результата
                условия структурной директивы <code>*ngIf</code> в первом
                примере либо будут все элементы массива в итоговой разметке,
                либо их не будет вовсе. А вот во втором примере какие-то
                элементы попадут в итоговую разметку, а какие-то нет.
            </p>`,
        selected: false,
        lastUpdate: '19.11.2023',
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
            <pre><code><span class="tag">&lt;some-element</span> <span class="keyword">ngClass</span><span class="operator">=</span><span class="string">"first second"</span><span class="tag">></span>...<span class="tag">&lt;some-element></span> <span class="comment">// статический вариант записи</span>
<span class="tag">&lt;some-element</span> <span class="keyword">[ngClass]</span><span class="operator">=</span><span class="string">"'first second'"</span><span class="tag">></span>...<span class="tag">&lt;some-element></span> <span class="comment">// динамический вариант записи</span></code></pre>
            <p>
                Как видно из примера выше, просто перечисляем css-классы внутри
                кавычек, которые нужно добавить на элемент DOM-дерева.
            </p>
            <i class="subtitle">Пример с массивом</i>
            <pre><code><span class="tag">&lt;some-element</span> <span class="keyword">[ngClass]</span><span class="operator">=</span><span class="string">"['first', 'second']"</span><span class="tag">></span>...<span class="tag">&lt;some-element></span></code></pre>
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
            <pre><code><span class="tag">&lt;some-element</span> <span class="keyword">[ngClass]</span><span class="operator">=</span><span class="string">"{'first': true, 'second': false}"</span><span class="tag">></span>...<span class="tag">&lt;some-element></span></code></pre>
            <p>
                В примере выше для каждого css-класса задается условие его
                отображения. Если оно правдиво (<code>true</code>), то css-класс
                добавляется на элемент DOM-дерева. Если условие ложно, тогда
                css-класс не добавляется.
            </p>
            <pre><code><span class="tag">&lt;some-element</span> <span class="keyword">[ngClass]</span><span class="operator">=</span><span class="string">"{'class1 class2' : true}"</span><span class="tag">></span>...<span class="tag">&lt;some-element></span></code></pre>
            <p>
                В примере выше показано, что <code>ngClass</code> также
                позволяет отображать или скрывать сразу несколько css-классов в
                зависимости от одного и того же условия.
            </p>`,
        selected: false,
        lastUpdate: '12.11.2023',
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
            <pre><code><span class="tag">&lt;some-element</span> <span class="keyword">[ngStyle]</span><span class="operator">=</span><span class="string">"{'color': 'red'}"</span><span class="tag">></span>...<span class="tag">&lt;some-element></span></code></pre>
            <p>
                Также необязательно писать все стили в шаблоне компонента. Их
                можно вынести в отдельную переменную в классе компонента и
                передать ее в качестве значения для директивы
                <code>ngStyle</code>:
            </p>
            <pre><code><span class="comment comment_start">// в классе компонента</span>
cssProperties <span class="operator">=</span> <span class="punctuation">{</span><span class="string">'color'</span>: <span class="string">'red'</span>, <span class="string">'display'</span>: <span class="string">'block'</span><span class="punctuation">}</span>

<span class="comment comment_start">// в шаблоне компонента</span>
<span class="tag">&lt;some-element</span> <span class="keyword">[ngStyle]</span><span class="operator">=</span><span class="string">"</span>cssProperties<span class="string">"</span><span class="tag">></span>...<span class="tag">&lt;some-element></span></code></pre>
            <p>
                К тому же, внутри <code>ngStyle</code> можно сразу задавать
                css-свойству размерность:
            </p>
            <pre><code><span class="tag">&lt;some-element</span> <span class="keyword">[ngStyle]</span><span class="operator">=</span><span class="string">"{'font-size.px': 20}"</span><span class="tag">></span>...<span class="tag">&lt;some-element></span></code></pre>`,
        selected: false,
        lastUpdate: '12.11.2023',
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

    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    //     lastUpdate: '',
    // },
];
