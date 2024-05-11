import { IInfo } from '@types';

export const MIXED_TYPES_FOR_ACTIONS: IInfo = {
    title: 'Смешанные типы для <span class="variable">Actions</span>',
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
};
