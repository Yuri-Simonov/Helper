import { IInfo } from 'src/app/shared/interfaces';

export const NG_CONTENT_DO_NOT_CREATE_NEW_CONTENT: IInfo = {
    title: `Объяснение, почему элемент <span class="variable">ng-content</span> не создает новый контент внутри дочернего компонента`,
    body: `<p>
		<span class="attention">
			Элемент <code>ng-content</code> не создает новый контент, а
			проецирует уже существующий, который передается между
			открывающим и закрывающим тегами дочернего компонента</span
		>. Поэтому
		<span class="attention">
			за создание и удаление отвечает компонент, в котором
			объявлен контент</span
		>.
	</p>
	<p>
		Для примера воспользуемся структурной директивой
		<code>*ngIf</code>, которая при смене условия полностью
		удаляет/создает элемент в DOM-дереве, при этом
		<code>OnDestroy</code> / <code>OnInit</code> должны срабатывать
		каждый раз соответствующим образом.
	</p>
		<pre><code class="language-typescript">// app.component.ts
showChild = false;
</code></pre>
<pre><code class="language-html">&lt;!-- app.component.html -->
&lt;button (click)="showChild = !showChild">&lt;/button>
&lt;app-child> 
	&lt;span *ngIf="showChild">Какое-то содержимое, которое передается внутрь дочернего компонента&lt;/span>
&lt;/app-child></code></pre>
		<pre><code class="language-typescript">// child.component.ts
ngOnInit() {
	console.log('Сработал метод'); // сработает только 1 раз, даже если нажимать на кнопку в родителе
}</code></pre>
<pre><code class="language-html">&lt;!-- child.component.html -->
&lt;ng-content>&lt;/ng-content></code></pre>
	<p>
		Хоть мы и повесили условие, но хуки жизненного цикла компонента
		не срабатывают при смене условия. Почему так происходит? Все
		просто на самом деле.
		<span class="attention">
			Если мы делаем по условию лишь содержимое, то сам компонент
			как инициировался в DOM-дереве, так в нем и остается, даже
			если мы меняем условие</span
		>. В этом легко убедиться, открыв разметку в браузере в режиме
		разработчика.
	</p>
	<p>
		Если необходимо, чтобы содержимое инициировалось и уничтожалось
		каждый раз при переключении кнопки, условие нужно ставить на сам
		компонент:
	</p>
		<pre><code class="language-typescript">// app.component.ts
showChild = false;
</code></pre>
<pre><code class="language-html">&lt;!-- app.component.html -->
&lt;button (click)="showChild = !showChild">&lt;/button>
&lt;app-child *ngIf="showChild"> 
	&lt;span>Какое-то содержимое, которое передается внутрь дочернего компонента&lt;/span>
&lt;/app-child></code></pre>
		<pre><code class="language-typescript">// child.component.ts
ngOnInit() {
	console.log('Сработал метод'); // теперь метод будет срабатывать каждый, когда условие выше будет true
}</code></pre>
<pre><code class="language-html">&lt;!-- child.component.html -->
&lt;ng-content>&lt;/ng-content></code></pre>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
