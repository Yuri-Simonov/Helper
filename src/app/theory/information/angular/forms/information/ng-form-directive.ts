import { IInfo } from 'src/app/shared/interfaces';

export const NG_FORM_DIRECTIVE: IInfo = {
    title: 'Директива <span class="variable">NgForm</span>',
    body: `<p>
                Директива <code>ngForm</code>
                <span class="attention"
                    >позволяет отслеживать состояние формы и управлять валидацией на уровне всей формы</span
                >.
            </p>
            <p>Допустим у нас есть следующая разметка:</p>
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
                Если посмотреть на данную форму в браузере, то у нее будут CSS-классы, отвечающие за состояния. У самой
                формы тоже есть эти 3 состояния (<i
                    >если непонятно о каких состояниях идет речь, загляните в спойлер "Состояния формы и ее полей" из
                    этого же раздела</i
                >). Причем у самой формы, в отличие от ее полей,
                <span class="attention">есть еще и 4-ое состояние</span>: отправлена форма или нет
                (<code>ng-submitted</code>).
            </p>
            <p>
                Почему так происходит? Ведь мы не повесили на форму директивы <code>ngForm</code> или даже
                <code>ngModel</code>.
            </p>
            <p>
                Тут подвох в том, что для работы с шаблонными формами в текущий компонент необходимо импортировать
                модуль <code>FormsModules</code>. После этого действия Angular автоматически создает и прикрепляет
                директиву <code>ngForm</code> к тегу <code>&lt;form></code> в шаблоне компонента. Это происходит из-за
                того, что <span class="attention">у данной директивы в качестве селектора указан данный тег</span>.
            </p>`,
    selected: false,
    lastUpdate: '20.06.2025',
    footerLinks: [
        {
            path: 'https://youtu.be/WpftjPrERHA?t=502',
        },
    ],
};
