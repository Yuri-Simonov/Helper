import { IInfo } from 'src/app/shared/interfaces';

export const NG_MODEL_DIRECTIVE: IInfo = {
    title: 'Директива <span class="variable">NgModel</span>',
    body: `<p>
                В шаблонных формах одну из основных ролей играет директива <code>ngModel</code>. Данная директива
                <span class="attention">используется для связывания свойств компонента с данными полей формы</span>.
                Причем связывание может быть как одностороннее, так двустороннее.
            </p>
            <p>Для примера в классе компонента создадим произвольное свойство, содержащее объект внутри:</p>
            <pre><code class="language-typescript">export class AppComponent {
	user = {
		name: 'Anna',
		age: 16
	}
}</code></pre>
            <p>Далее в разметке создадим 2 инпута:</p>
            <pre><code class="language-html">&lt;input type="text" name="name" />
&lt;input type="number" name="age" /></code></pre>
            <p>Теперь для инпута с именем сделаем одностороннее связывание, а для инпута с возрастом двустороннее:</p>
            <pre><code class="language-html">&lt;!-- Одностороннее связывание --&gt;
&lt;input type="text" name="name" [ngModel]="name" />
&lt;!-- Двустороннее связывание --&gt;
&lt;input type="number" name="age" [(ngModel)]="age" /></code></pre>
            <p>
                Как видите, подход точно такой же, как и в обычной привязке данных. При одностороннем связывании, если
                мы будем изменять значение в инпуте, оно не будет влиять на значение свойства компонента. При
                двустороннем связывании, если мы будем изменять значение свойства компонента, то инпут будет влиять на
                него.
            </p>`,
    selected: false,
    lastUpdate: '22.03.2025',
};
