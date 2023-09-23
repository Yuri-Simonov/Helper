import { IQuestion } from '@types';

export const ngrxQuestions: IQuestion[] = [
    {
        title: 'О библиотеке NgRx и ее ключевые концепции',
        body: `<p>
		Библиотека <code>NgRx</code> реализует принцип работы
		<code>Redux</code> для Angular приложений. Главная цель
		<code>NgRx</code> -
		<span class="attention">
			максимально упростить управление глобальным (общим)
			состоянием приложения</span
		>.
	</p>
	<p>
		Данная библиотека отлично подходит для больших приложений, где
		имеется большое количество взаимодействий с пользователями и/или
		несколькими источниками данных, когда использование и
		поддерживание простых Angular сервисов для управления состоянием
		приложения становится все труднее и дороже.
	</p>
	<p>
		<span class="attention">Ключевые особенности</span> данной
		библиотеки заключаются в следующем:
	</p>
	<ul>
		<li>
			Наличие единственного источника данных о состоянии
			приложения -
			<span class="attention">хранилище</span>
			(<code>store</code>), которое построено на единой неизменной
			структуре данных, что делает обнаружение изменений
			относительно простой задачей с использованием стратегии
			<code>OnPush</code>;
		</li>
		<li>
			Доступность частей состояния только для чтения с помощью
			<span class="attention">селекторов</span>
			(<code>selector</code>), которые представляют собой чистые
			функции;
		</li>
		<li>
			Изменение состояния осуществляется только через
			<span class="attention">действия</span>
			(<code>action</code>), которые обрабатываются
			<span class="attention">редьюсерами</span>
			(<code>reducer</code>), представляющими собой чистые
			функции.
		</li>
		<li>
			Для взаимодействия с внешними источниками данных
			используются эффекты (<code>effect</code>), которые
			изолированы от пользовательского интерфейса;
		</li>
		<li>
			Cтрогая типизация за счет использования
			<code>TypeScript</code>;
		</li>
	</ul>
	<p>
		На диаграмме ниже представлен принцип работы библиотеки
		<code>NgRx</code>:
	</p>
	<img
		src="assets/img/angular/ngrx/state-management-lifecycle.png"
		alt="state management lifecycle"
		class="large-img"
	/>`,
        selected: false,
        lastUpdate: '12.08.2023',
    },
    {
        title: 'Actions',
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
	<pre><code><span class="keyword">interface</span> <span class="interface-name">Action</span> <span class="punctuation">{</span>
	<span class="key">type</span>: <span class="type">string</span>;
<span class="punctuation">}</span></code></pre>
	<p>
		Как видно из интерфейса, <code>Action</code> имеет единственное
		свойство <code>type</code>, которое имеет строковый тип данных.
	</p>
	<p>
		Общепринято называть действие в формате
		<code>[Source] Event</code>. В квадратных скобках указывается
		категория действия, а после них - событие, которое его вызвало.
	</p>
	<pre><code><span class="punctuation">{</span> <span class="key">type</span>: <span class="string">'[Login Page] Login Success'</span> <span class="punctuation">}</span></code></pre>
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
	<pre><code><span class="import">import</span> <span class="punctuation">{</span> createAction, props <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">'@ngrx/store'</span>;

<span class="export">export</span> <span class="keyword">const</span> <span class="variable">login</span> <span class="operator">=</span> <span class="function-name">createAction(</span>
	<span class="string">'[Login Page] Login'</span>,
	<span class="function-name">props</span><span class="type"><{ username: string; password: string }></span><span class="punctuation">()</span>
<span class="punctuation">)</span>;</code></pre>
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
	<pre><code><span class="import">import</span> <span class="punctuation">{</span> Action <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">'@ngrx/store'</span>;
		
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">Login</span> <span class="keyword">implements</span> <span class="interface-name">Action</span> <span class="punctuation">{</span>
	<span class="keyword">readonly</span> type <span class="operator">=</span> <span class="string">'[Login Page] Login'</span>;
		
	<span class="keyword">constructor</span><span class="punctuation">(</span><span class="keyword">public</span> payload: <span class="type">{ username: string; password: string }</span><span class="punctuation">)</span> <span class="punctuation">{}</span>
<span class="punctuation">}</span></code></pre>
	<p>Оба примера делают одно и то же в итоге.</p>
	<p>
		Дополнительные данные можно и не передавать, если они не нужны:
	</p>
	<pre><code><span class="import">import</span> <span class="punctuation">{</span> createAction, props <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">'@ngrx/store'</span>;

<span class="export">export</span> <span class="keyword">const</span> <span class="variable">login</span> <span class="operator">=</span> <span class="function-name">createAction(</span>
	<span class="string">'[Login Page] Login'</span>
<span class="punctuation">)</span>;</code></pre>
	<p>Или через старый формат записи:</p>
	<pre><code><span class="import">import</span> <span class="punctuation">{</span> Action <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">'@ngrx/store'</span>;
		
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">Login</span> <span class="keyword">implements</span> <span class="interface-name">Action</span> <span class="punctuation">{</span>
	<span class="keyword">readonly</span> type <span class="operator">=</span> <span class="string">'[Login Page] Login'</span>;
<span class="punctuation">}</span></code></pre>
	<p>
		Для того, чтобы инициировать отправку <code>Action</code> в
		хранилище, используется специальный метод этого самого хранилища
		<code>dispatch</code>, внутри которого вызывается нужный
		<code>Action</code>:
	</p>
	<pre><code><span class="method">onSubmit(</span>username: <span class="type">string</span>, password: <span class="type">string</span><span class="punctuation">) {</span>
	store.<span class="method">dispatch(login(</span><span class="punctuation">{</span> username: <span class="type">username</span>, password: <span class="type">password</span> <span class="punctuation">}))</span>;
<span class="punctuation">}</span></code></pre>
	<p>В примере выше, когда сработает метод отправки формы <code>onSubmit</code> произойдет отправка <code>Action</code> в хранилище.</p>`,
        selected: false,
        lastUpdate: '13.08.2023',
    },
    {
        title: 'Смешанные типы для Action',
        body: `<p>
                До 7-ой версии <code>NgRx</code>, когда
                <code>actions</code> создавались через классы, удобно было
                использовать объединение типов и экспортировать их наружу все
                сразу, чтобы в <code>reducer</code> писать меньше кода и править
                только файлы <code>actions</code>. Такое можно встретить и
                сегодня в старых проектах.
            </p>
            <p>Выглядит это следующим образом:</p>
            <pre><code><span class="export">export</span> <span class="keyword">enum</span> <span class="interface-name">UsersActions</span> <span class="punctuation">{</span>
    GetUsers <span class="operator">=</span> <span class="string">'[Users Page] GetUsers'</span>,
    DeleteAllUsers <span class="operator">=</span> <span class="string">'[Users Page] DeleteAllUsers'</span>,
<span class="punctuation">}</span>

<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">GetUsers</span> <span class="keyword">implements</span> <span class="interface-name">Action</span> <span class="punctuation">{</span>
    <span class="keyword">readonly</span> type <span class="operator">=</span> UsersActions.GetUsers;
<span class="punctuation">}</span>

<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">DeleteAllUsers</span> <span class="keyword">implements</span> <span class="interface-name">Action</span> <span class="punctuation">{</span>
    <span class="keyword">readonly</span> type <span class="operator">=</span> UsersActions.DeleteAllUsers;
<span class="punctuation">}</span>

<span class="comment comment_start">// Смешанный тип</span>
<span class="export">export</span> <span class="keyword">type</span> <span class="interface-name">UsersUnion</span> <span class="operator">=</span> <span class="class-name">GetUsers</span> <span class="operator">|</span> <span class="class-name">DeleteAllUsers</span>;
</code></pre>
            <p>И как это выглядит в <code>reducer</code>:</p>
            <pre><code><span class="export">export</span> <span class="keyword">function</span> <span class="function-name">usersReducer(</span>state <span class="operator">=</span> initialState, action: <span class="type">UsersUnion</span><span class="punctuation">){</span>...<span class="punctuation">}</span>
</code></pre>`,
        selected: false,
        lastUpdate: '03.09.2023',
    },
    {
        title: 'Reducers',
        body: `<p>
                <code>NgRx Reducers</code> являются чистыми функциями и отвечают
                за смену состояния хранилища в Angular-приложении в ответ на
                возникновение действия (<code>action</code>), при этом каждый
                редьюсер может изменять только определенную часть состояния.
            </p>
            <p>
                Они не имеют побочных эффектов и синхронно обрабатывают каждый
                переход между состояниями. Каждая функция редьюсера принимает
                последнее отправленное действие и текущее состояние, и
                определяет, возвращать измененное или исходное состояние.
            </p>
            <p>
                <span class="attention"
                    >Для применения изменений редьюсер должен вернуть новое
                    состояние, а не изменять напрямую исходное</span
                >, то есть,
                <span class="attention"
                    >состояние должно быть иммутабельным</span
                >.
            </p>
            <p>
                Теперь давайте рассмотрим как создаются редьюсеры. Для начала
                нам нужно создать один или более <code>action</code>:
            </p>
            <pre><code><span class="comment comment_start">// counter.actions.ts</span>
<span class="import">import</span> <span class="punctuation">{</span> createAction, props <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">'@ngrx/store'</span>;

<span class="export">export</span> <span class="keyword">const</span> <span class="variable">decrement</span> <span class="operator">=</span> <span class="function-name">createAction(</span><span class="string">'[Counter] Decrement'</span><span class="punctuation">)</span>;
<span class="export">export</span> <span class="keyword">const</span> <span class="variable">increment</span> <span class="operator">=</span> <span class="function-name">createAction(</span><span class="string">'[Counter] Increment'</span><span class="punctuation">)</span>;</code></pre>
            <p>Далее необходимо создать интерфейс для нашего состояния:</p>
            <pre><code><span class="comment comment_start">// counter.reducer.ts</span>
<span class="import">import</span> <span class="punctuation">{</span> Action, createReducer, on <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">'@ngrx/store'</span>;
<span class="import">import</span> * <span class="keyword">as</span> CounterActions <span class="keyword">from</span> <span class="string">'../actions/counter.actions'</span>;

<span class="export">export</span> <span class="keyword">interface</span> <span class="interface-name">State</span> <span class="punctuation">{</span>
  	counter: <span class="type">number</span>;
<span class="punctuation">}</span></code></pre>
            <p>Зададим начальное состояние:</p>
            <pre><code><span class="comment comment_start">// counter.reducer.ts</span>
<span class="export">export</span> <span class="keyword">const</span> <span class="variable">initialState</span>: <span class="type">State</span> <span class="operator">=</span> <span class="punctuation">{</span>
	<span class="key">counter</span>: <span class="number">0</span>
<span class="punctuation">}</span>;</code></pre>
            <p>И теперь осталось лишь создать саму функцию редьюсера:</p>
            <pre><code><span class="comment comment_start">// counter.reducer.ts</span>
<span class="export">export</span> <span class="keyword">const</span> <span class="variable">counterReducer</span> <span class="operator">=</span> <span class="function-name">createReducer(</span>
	<span class="variable">initialState</span>,
	<span class="function-name">on(</span>CounterActions.decrement, state <span class="operator">=></span> <span class="punctuation">({</span> ...state, counter: state.counter <span class="operator">-</span> <span class="number">1</span> <span class="punctuation">}))</span>,
	<span class="function-name">on(</span>CounterActions.increment, state <span class="operator">=></span> <span class="punctuation">({</span> ...state, counter: state.counter <span class="operator">+</span> <span class="number">1</span> <span class="punctuation">}))</span>,
);</code></pre>
            <p>
                Также редьюсеры можно писать и через конструкцию
                <code>switch case</code>, как это делали раньше до появления
                функции <code>createReducer</code>:
            </p>
            <pre><code><span class="comment comment_start">// counter.reducer.ts</span>
<span class="export">export</span> <span class="keyword">function</span> <span class="function-name">reducer(</span>
	state <span class="operator">=</span> initialState,
	action: <span class="type">CounterActions.ActionsUnion</span> <span class="comment">// см. раздел про смешанные типы для Action</span>
<span class="punctuation">)</span>: <span class="type">State</span> <span class="punctuation">{</span>
	<span class="keyword">switch</span> <span class="punctuation">(</span>action.type<span class="punctuation">) {</span>
		<span class="keyword">case</span> CounterActions.ActionTypes.increment: <span class="punctuation">{</span>
			<span class="keyword">return</span> <span class="punctuation">{</span>
				<span class="operator">...</span>state,
				home: state.counter <span class="operator">+</span> <span class="number">1</span>,
			<span class="punctuation">}</span>;
		<span class="punctuation">}</span>

		<span class="keyword">case</span> CounterActions.ActionTypes.decrement: <span class="punctuation">{</span>
			<span class="keyword">return</span> <span class="punctuation">{</span>
				<span class="operator">...</span>state,
				away: state.counter <span class="operator">-</span> <span class="number">1</span>,
			<span class="punctuation">}</span>;
		<span class="punctuation">}</span>

		<span class="keyword">default</span>: <span class="punctuation">{</span>
			<span class="keyword">return</span> state;
		<span class="punctuation">}</span>
	<span class="punctuation">}</span>
<span class="punctuation">}</span></code></pre>
            <p>Оба варианта будут работать одинаково.</p>
            <p>
                И напоследок осталось лишь сообщить Angular, что у нас имеется
                редьюсер, отвечающий за какую-то конкретную часть нашего общего
                (глобального) состояния:
            </p>
            <pre><code><span class="comment comment_start">// app.module.ts</span>
<span class="import">import</span> <span class="punctuation">{</span> NgModule <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">'@angular/core'</span>;
<span class="import">import</span> <span class="punctuation">{</span> StoreModule <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">'@ngrx/store'</span>;
<span class="import">import</span> <span class="punctuation">{</span> scoreboardReducer <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">'./reducers/counter.reducer'</span>;

<span class="function-name">@NgModule({</span>
	imports: <span class="punctuation">[</span>
		StoreModule.<span class="method">forRoot({</span> counter: counterReducer <span class="punctuation">})</span>
	<span class="punctuation">]</span>,
<span class="punctuation">})</span>
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">AppModule</span> <span class="punctuation">{}</span></code></pre>
            <p>
                Корневое состояние можно оставить пустым, а редьюсеры подключать
                уже в тех модулях, где предполягается их использование. Но эти
                модули, как и все остальные, необходимо импортировать в
                кореневой модуль.
            </p>
            <pre><code><span class="comment comment_start">// app.module.ts</span>
<span class="import">import</span> <span class="punctuation">{</span> NgModule <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">'@angular/core'</span>;
<span class="import">import</span> <span class="punctuation">{</span> StoreModule <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">'@ngrx/store'</span>;
<span class="import">import</span> <span class="punctuation">{</span> scoreboardReducer <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">'./reducers/counter.reducer'</span>;

<span class="function-name">@NgModule({</span>
	imports: <span class="punctuation">[</span>
		StoreModule.<span class="method">forRoot({})</span>
	<span class="punctuation">]</span>,
<span class="punctuation">})</span>
<span class="export">export</span> <span class="keyword">class</span> <span class="class-name">AppModule</span> <span class="punctuation">{}</span></code></pre>`,
        selected: false,
        lastUpdate: '23.09.2023',
    },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
];
