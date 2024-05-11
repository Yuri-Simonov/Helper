import { IInfo } from '@types';

export const REDUCERS: IInfo = {
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
};
