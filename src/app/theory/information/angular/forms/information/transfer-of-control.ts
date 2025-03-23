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
                    Когда мы передаем доступ к директиве <code>ngForm</code>, на теге <code>form</code>
                    <span class="attention"> не нужно указывать данную директиву</span>. Тут дело в том, что когда
                    происходит импорт модуля <code>FormsModules</code> (для шаблонных форм) или <code>ReactiveFormsModule</code> (для реактивных форм) в компонент с формой, Angular автоматически
                    создает и прикрепляет директиву <code>ngForm</code> к тегу <code>form</code> в шаблоне компонента.
                    Это происходит из-за того, что директивы <code>ngForm</code> в качестве селектора указан тег
                    <code>form</code>.
                </li>
            </ul>`,
    selected: false,
    lastUpdate: '23.03.2025',
};
