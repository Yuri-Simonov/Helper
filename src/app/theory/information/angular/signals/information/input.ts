import { IInfo } from 'src/app/shared/interfaces';

export const INPUT: IInfo = {
    title: '<span class="variable">input</span>',
    body: `<p>
                Сигнал <code>input</code> пришел на смену декоратору <code>@Input</code>, но суть осталась та же -
                <span class="attention">получение данных от родительского компонента</span>. Только теперь этот процесс
                стал реактивным.
            </p>
            <p>
                <span class="attention"
                    >Данный сигнал обновляется автоматически, когда меняется соответствующее свойство, переданное от
                    родительского компонента</span
                >. Это означает, что мы можем напрямую использовать входные данные в <code>computed</code> и
                <code>effect</code>, забыв про <code>ngOnChanges</code> навсегда.
            </p>
            <p>
                Причем мы все также можем делать получение входных данных так как нам нужно. Смотрите варианты ниже. Их
                также <span class="attention">можно комбинировать между собой</span>.
            </p>
            <i class="subtitle">Опциональный инпут</i>
            <p>Если инпут не обязателен, мы можем объявить его без значения или с начальным значением:</p>
            <pre><code class="language-typescript">@Component({...})
export class AvatarComponent {
	// Тип будет Signal&lt;!string | undefined>
	// Если родитель ничего не передаст, значением будет undefined.
	src = input&lt;!string>();

	// Тип будет Signal&lt;!number>
	// Если родитель ничего не передаст, значением будет 100.
	size = input(100); 
}</code></pre>
            <i class="subtitle">Обязательный инпут</i>
            <p>
                Чтобы сделать <code>input</code> обязательным, теперь достаточно его вызывать со свойством
                <code>required</code>:
            </p>
            <pre><code class="language-typescript">@Component({...})
export class UserProfileComponent {
	// Тип будет Signal&lt;string>.
	// Если родитель не передаст userId, Angular выдаст ошибку
	userId = input.required&lt;string>();
}</code></pre>
            <i class="subtitle">Трансформация данных</i>
            <p>
                Еще одна мощная возможность - трансформация входных данных прямо в момент их получения. Классический
                пример - преобразование строкового атрибута в <code>boolean</code>:
            </p>
            <pre><code class="language-typescript">@Component({...})
export class ButtonComponent {
	// booleanAttribute - это встроенная функция-трансформер.
	// Теперь мы можем написать &lt;app-button disabled>&lt;/app-button>,
	// и disabled() вернет будет возвращать булевое значение,
	// даже если мы передадим строку
	disabled = input(false, { transform: booleanAttribute });
}</code></pre>
            <i class="subtitle">Псевдонимы (алиасы)</i>
            <p>
                Если публичное имя инпута должно отличаться от имени свойства в классе, используется псевдоним
                (<code>alias</code>):
            </p>
            <pre><code class="language-typescript">@Component({...})
export class ProductComponent {
	// В шаблоне родителя: &lt;app-product [productId]="'abc'">&lt;/app-product>
	// Внутри компонента: this.id()
	id = input.required&lt;string>({ alias: 'productId' });
}</code></pre>`,
    selected: false,
    lastUpdate: '23.11.2025',
};
