import { IInfo } from '@types';

export const NG_TEMPLATE: IInfo = {
    title: 'Элемент <span class="variable">ng-template</span>',
    body: `<p>
                <span class="attention"
                    >Элемент <code>ng-template</code> определяет шаблон, который не отображается по умолчанию</span
                >. Т.е., данный элемент определяет содержимое шаблона компонента, которое будет отображаться только
                тогда, когда мы сообщим Angular об этом.
            </p>
            <p>Давайте посмотрим на примере. Допустим мы обернули нашу разметку в элемент <code>ng-template</code>:</p>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;ng-template>
    &lt;p>Параграф&lt;/p>
&lt;/ng-template></code></pre>
            <p>При текущей разметке в браузере данный параграф мы не увидим.</p>
            <p>
                Чтобы он отобразился, нужно Angular сообщить об этом. Делается это с помощью элемента
                <code>ng-container</code>.
            </p>
            <p>
                Чтобы элемент <code>ng-container</code> понимал какой именно элемент <code>ng-template</code> ему нужно
                отобразить (т.к. их может быть несколько в одном и том же шаблоне компонента),
                <span class="attention"
                    >элементам <code>ng-template</code> задается шаблонная переменная, которая служит своего рода
                    идентификатором</span
                >. Название шаблонной переменной может быть любое.
            </p>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;!-- templateVariable - шаблонная переменная --&gt;
&lt;ng-template #templateVariable>
    &lt;p>Параграф&lt;/p>
&lt;/ng-template></code></pre>
            <p>
                Эта же шаблонная переменная используется внутри элемента <code>ng-container</code>, но уже без знака
                <code>#</code>. Причем используется она внутри структурной директивы <code>ngTemplateOutlet</code>,
                которая
                <span class="attention">
                    отвечает за отображение содержимого переданного в нее элемента <code>ng-template</code> через
                    шаблонную переменную</span
                >.
            </p>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;ng-container *ngTemplateOutlet="templateVariable">&lt;/ng-container>

&lt;ng-template #templateVariable>
    &lt;p>Параграф&lt;/p>
&lt;/ng-template></code></pre>
            <p>Теперь данный параграф отобразится в браузере.</p>
            <p>
                Внутрь элементов <code>ng-template</code> можно передавать данные, которые в данном случае называют
                "контекст".
            </p>
            <p>
                Данные задаются в структурной директиве <code>ngTemplateOutlet</code>, внутри которой, после названия
                шаблонной переменной, через точку с запятой, задается поле <code>context</code>, которое представляет
                собой обычный объект:
            </p>
            <pre><code class="language-html">&lt;ng-container *ngTemplateOutlet="
				  templateVariable;
				  context: { $implicit: 'World' }
			  ">
&lt;/ng-container></code></pre>
            <p>
                Теперь надо сообщить элементу <code>ng-template</code> о том, что ему следует ожидать какие-то данные,
                которые ему будут передаваться, когда его нужно будет отобразить на странице браузера.
            </p>
            <p>
                Делается это с помощью внутренних локальных переменных данного элемента, которые начинаются со слова
                <code>let</code>. Далее ставится тире и затем указывается имя переменной, которая будет использоваться
                внутри элемента <code>ng-template</code>. Имя переменной может быть любое. Назовем ее <code>item</code>.
                Внутри содержимого элемента <code>ng-template</code> входящие данные можно вывести с помощью, например,
                интерполяции:
            </p>
            <pre><code class="language-html">&lt;ng-container *ngTemplateOutlet="
				  templateVariable;
				  context: { $implicit: 'World' }
			  ">
&lt;/ng-container>

&lt;ng-template
    #test
    let-item
>
    &lt;p>Данные извне: {{ item }}&lt;/p>
&lt;/ng-template></code></pre>
            <p>Можно передавать и более одной пары ключ-значение в объекте контекста:</p>
            <pre><code class="language-html">&lt;ng-container *ngTemplateOutlet="
				  templateVariable;
				  context: { first: 'Hello', $implicit: 'World', someText: '!' }
			  ">
&lt;/ng-container>

&lt;ng-template
    #test
    let-item
	let-firstItem="first"
    let-someText="someText"
>
    &lt;p>Данные извне по ключу first: {{ firstItem }}&lt;/p>
    &lt;p>Данные извне по ключу $implicit: {{ item }}&lt;/p>
    &lt;p>Данные извне по ключу someText: {{ someText }}&lt;/p>
&lt;/ng-template></code></pre>
            <p>
                В примере выше вы возможно заметили, что для данных по ключу <code>$implicit</code> при создании
                локальной переменной мы написали лишь <code>let-item</code> и ничего более, в отличии от ключей
                <code>first</code> и <code>someText</code>, которым после знака равно задается конкретное значение ключа
                из объекта <code>context</code>.
            </p>
            <p>
                Дело в том, что <span class="attention">ключ <code>$implicit</code> является именем по умолчанию</span>,
                т.е., если в элементе <code>ng-template</code> мы не указываем явно ключ из объекта для внутренней
                переменной, как у нас сейчас в <code>let-item</code>, то
                <span class="attention">
                    данные из поля
                    <code>$implicit</code> автоматически попадут туда</span
                >.
            </p>
            <p>
                Это удобно, когда вы не знаете точно имя ключа в объекте контекста или оно разное в передаваемых данных.
                А если вы хотите к переменной элемента <code>ng-template</code> привязать конкретные данные, то после
                равно указываете нужный ключ из объекта <code>context</code>. Вот и вся разница.
            </p>
            <p>
                <i
                    >Возможно у кого-то из вас возник вопрос, а что будет, если указать 2 или более переменные, которые
                    будут ссылаться на ключ <code>$implicit</code>?</i
                >
            </p>
            <p>
                Тут тоже все просто на самом деле. Вы можете задать сколько угодно переменных внутри элемента
                <code>ng-template</code> без явного указания ключа из объекта <code>context</code>. Они все будут
                получать одинаковые данные по ключу <code>$implicit</code>.
            </p>
            <pre><code class="language-html">&lt;ng-container *ngTemplateOutlet="
				  templateVariable;
				  context: { $implicit: 'Привет' }
			  ">
&lt;/ng-container>

&lt;ng-template
    #test
    let-item
    let-secondItem
>
	&lt;!-- В обоих параграфах выведется слово "Привет" --&gt;
    &lt;p>Данные извне по ключу $implicit: {{ item }}&lt;/p>
    &lt;p>Данные извне по ключу $implicit: {{ secondItem }}&lt;/p>
&lt;/ng-template></code></pre>`,
    selected: false,
    lastUpdate: '13.07.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/vMxJPxWS0aI?t=12',
        },
    ],
};
