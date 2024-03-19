import { IQuestion } from '@types';

export const ngrxQuestions: IQuestion[] = [
    {
        title: 'О библиотеке <span class="variable">NgRx</span> и ее ключевые концепции',
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
			Строгая типизация за счет использования
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
    },
    {
        title: 'Смешанные типы для <span class="variable">Action</span>',
        body: `<p>
                До 7-ой версии <code>NgRx</code>, когда
                <code>actions</code> создавались через классы, удобно было
                использовать объединение типов и экспортировать их наружу все
                сразу, чтобы в <code>reducer</code> писать меньше кода и править
                только файлы <code>actions</code>. Такое можно встретить и
                сегодня в старых проектах.
            </p>
            <p>Выглядит это следующим образом:</p>
<pre><code class="language-typescript">export enum UsersActions {
    GetUsers = '[Users Page] GetUsers',
    DeleteAllUsers = '[Users Page] DeleteAllUsers',
}

export class GetUsers implements Action {
    readonly type = UsersActions.GetUsers;
}

export class DeleteAllUsers implements Action {
    readonly type = UsersActions.DeleteAllUsers;
}

// Смешанный тип
export type UsersUnion = GetUsers | DeleteAllUsers;</code></pre>
            <p>И как это выглядит в <code>reducer</code>:</p>

<pre><code class="language-typescript">export function usersReducer(state = initialState, action: UsersUnion) {...}</code></pre>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: '<span class="variable">Reducers</span>',
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
<pre><code class="language-typescript">// counter.actions.ts
import { createAction, props } from '@ngrx/store';

export const decrement = createAction('[Counter] Decrement');
export const increment = createAction('[Counter] Increment');</code></pre>
            <p>Далее необходимо создать интерфейс для нашего состояния:</p>
<pre><code class="language-typescript">// counter.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from '../actions/counter.actions';

export interface State {
  	counter: number;
}</code></pre>
            <p>Зададим начальное состояние:</p>
<pre><code class="language-typescript">// counter.reducer.ts
export const initialState: State = {
	counter: 0
};</code></pre>
            <p>И теперь осталось лишь создать саму функцию редьюсера:</p>
<pre><code class="language-typescript">// counter.reducer.ts
export const counterReducer = createReducer(
	initialState,
	on(CounterActions.decrement, state => ({ ...state, counter: state.counter - 1 })),
	on(CounterActions.increment, state => ({ ...state, counter: state.counter + 1 })),
);</code></pre>
            <p>
                Также редьюсеры можно писать и через конструкцию
                <code>switch case</code>, как это делали раньше до появления
                функции <code>createReducer</code>:
            </p>
<pre><code class="language-typescript">// counter.reducer.ts
export function reducer(
	state = initialState,
	action: CounterActions.ActionsUnion // см. раздел про смешанные типы для Action
): State {
	switch (action.type) {
		case CounterActions.ActionTypes.increment: {
			return {
				...state,
				home: state.counter + 1,
			};
		}

		case CounterActions.ActionTypes.decrement: {
			return {
				...state,
				away: state.counter - 1,
			};
		}

		default: {
			return state;
		}
	}
}</code></pre>
            <p>Оба варианта будут работать одинаково.</p>
            <p>
                И напоследок осталось лишь сообщить Angular, что у нас имеется
                редьюсер, отвечающий за какую-то конкретную часть нашего общего
                (глобального) состояния:
            </p>
<pre><code class="language-typescript">// app.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { scoreboardReducer } from './reducers/counter.reducer';

@NgModule({
	imports: [
		StoreModule.forRoot({ counter: counterReducer })
	],
})
export class AppModule {}</code></pre>
            <p>
                Корневое состояние можно оставить пустым, а редьюсеры подключать
                уже в тех модулях, где предполагается их использование. Но эти
                модули, как и все остальные, необходимо импортировать в
                кореневой модуль.
            </p>
<pre><code class="language-typescript">// app.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { scoreboardReducer } from './reducers/counter.reducer';

@NgModule({
	imports: [
		StoreModule.forRoot({})
	],
})
export class AppModule {}</code></pre>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
];
