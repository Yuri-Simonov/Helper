import { IInfo } from 'src/app/shared/interfaces';

export const TRANSFER_OF_CONTROL: IInfo = {
    title: 'Передача контроля',
    body: `<p>
                При работе с формами бывает необходимость отображать другие элементы разметки в зависимости от текущего
                состояния какого-то поля (например для отображения подсказки, что поле заполнено неверно) или всей формы
                в целом. Чтобы это сделать, <span class="attention">используются шаблонные переменные</span>, для
                которых в качестве значения передаются директива <code>ngModel</code>, если нужно передать доступ к
                конкретному полю форму, или <code>ngForm</code>, если нужно передать доступ ко всей форме.
            </p>
            <pre><code class="language-html">&lt;form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
    &lt;div>
        &lt;label for="name">Имя:&lt;/label>
        &lt;input type="text" name="name" ngModel required #nameRef="ngModel" />
        &lt;p *ngIf="nameRef.invalid && nameRef.touched" class="error">
            Имя обязательно
        &lt;/p>
    &lt;/div>
    &lt;button type="submit" [disabled]="userForm.invalid">Отправить&lt;/button>
&lt;/form>
&lt;div *ngIf="userForm.submitted">Форма отправлена&lt;/div></code></pre>
            <p>
                В примере выше с помощью шаблонной переменной <code>nameRef</code> получаем доступ к полю формы и, если
                оно невалидно, выводим подсказку. А при помощи <code>userForm</code> получаем доступ ко всей форме и,
                если она отправлена, выводим соответствующее сообщение.
            </p>
            <p>Также обратите внимание еще на один маленький нюанс:</p>
            <ul>
                <li>
                    Когда мы передаем доступ к директиве <code>ngModel</code>,
                    <span class="attention"> ее необходимо указать на элементе формы</span>. Причем в данном случае
                    достаточно ее просто указать без создания одностороннего или двустороннего связывания.
                </li>
                <li>
                    Когда мы используем шаблонные формы и импортируем <code>FormsModule</code>, Angular автоматически применяет директиву <code>ngForm</code> ко всем элементам <code>&lt;form></code>, если у них нет атрибутов <code>formGroup</code> или <code>ngNoForm</code>. Это происходит благодаря селектору директивы <code>ngForm</code>, который нацелен на <code>&lt;form></code>-элементы без <code>formGroup</code>. Поэтому при использовании шаблонных форм не нужно явно указывать <code>ngForm</code>, оно подставляется автоматически.
                </li>
            </ul>`,
    selected: false,
    lastUpdate: '23.03.2025',
};
