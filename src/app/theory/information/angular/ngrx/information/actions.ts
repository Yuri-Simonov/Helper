import { IInfo } from '@types';

export const ACTIONS: IInfo = {
    title: '<span class="variable">Actions</span>',
    body: `<p>
		<code>Actions</code> - это события, которые происходят в
		приложении. Сюда входят взаимодействие пользователя со
		страницей, внешнее взаимодействие с сервером через сетевые
		запросы и т.д.
	</p>
	<p>
		С помощью <code>Actions</code> и только с помощью них, можно
		передать данные в хранилище (<code>Store</code>).
	</p>
	<p>
		<code>Action</code> в <code>NgRx</code> состоит из простого
		интерфейса:
	</p>
<pre><code class="language-typescript">interface Action {
	type: string;
}</code></pre>
	<p>
		Как видно из интерфейса, <code>Action</code> имеет единственное
		свойство <code>type</code>, которое имеет строковый тип данных.
	</p>
	<p>
		Общепринято называть действие в формате
		<code>[Source] Event</code>. В квадратных скобках указывается
		категория действия, а после них - событие, которое его вызвало.
	</p>
	<pre><code class="language-typescript">{ type: '[Login Page] Login Success' }</code></pre>
	<p>
		Под категориями обычно подразумеваются действия на одной и той
		же странице. Или если страница большая, то в отдельные категории
		можно вынести события, которые как-то взаимосвязаны между собой,
		например раздел с товарами в одной категории, а раздел с
		рекомендациями - в другой.
	</p>
	<p>
		Теперь давайте рассмотрим <code>Action</code> на примере запроса
		авторизации:
	</p>
	<pre><code class="language-typescript">import { createAction, props } from '@ngrx/store';
	
export const login = createAction(
	'[Login Page] Login',
	props<{ username: string; password: string }>()
);</code></pre>
	<p>
		В примере выше с помощью функции
		<code>createAction</code> создается <code>Action</code>, который
		при вызове возвращает объект в форме интерфейса
		<code>Action</code>. Метод <code>props</code> используется для
		передачи любых дополнительных данных (пропсов), необходимых для
		обработки текущего <code>Action</code>.
	</p>
	<p>
		Выше представлен пример создания <code>Action</code> с помощью
		функции <code>createAction</code> (новый формат). На старый
		проектах вы также можете встретить создание
		<code>Action</code> через классы:
	</p>
	<pre><code class="language-typescript">import { Action } from '@ngrx/store';
		
export class Login implements Action {
	readonly type = '[Login Page] Login';
		
	constructor(public payload: { username: string; password: string }) {}
}</code></pre>
	<p>Оба примера делают одно и то же в итоге.</p>
	<p>
		Дополнительные данные можно и не передавать, если они не нужны:
	</p>
<pre><code class="language-typescript">import { createAction, props } from '@ngrx/store';

export const login = createAction(
	'[Login Page] Login'
);</code></pre>
	<p>Или через старый формат записи:</p>
	<pre><code class="language-typescript">import { Action } from '@ngrx/store';
		
export class Login implements Action {
	readonly type = '[Login Page] Login';
}</code></pre>
	<p>
		Для того, чтобы инициировать отправку <code>Action</code> в
		хранилище, используется специальный метод этого самого хранилища
		<code>dispatch</code>, внутри которого вызывается нужный
		<code>Action</code>:
	</p>
<pre><code class="language-typescript">onSubmit(username: string, password: string) {
	store.dispatch(login({ username: username, password: password }));
}</code></pre>
	<p>В примере выше, когда сработает метод отправки формы <code>onSubmit</code> произойдет отправка <code>Action</code> в хранилище (<code>Store</code>).</p>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
