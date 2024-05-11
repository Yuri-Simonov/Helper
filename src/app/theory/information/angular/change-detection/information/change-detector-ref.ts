import { IInfo } from '@types';

export const CHANGE_DETECTOR_REF: IInfo = {
    title: 'Управление механизмом <span class="variable">ChangeDetection</span> с помощью сервиса <span class="variable">ChangeDetectorRef</span>',
    body: `<p>
            Сервис <code>ChangeDetectorRef</code> позволяет взять управление
            механизмом отслеживания изменений (<code>ChangeDetection</code>)
            полностью под свой контроль.
        </p>
        <p>Методы сервиса:</p>
        <ul>
            <li>
                <span class="attention">detach</span> - полностью отключает
                механизм <code>ChangeDetection</code>. Здесь также важно
                уточнить, что если мы отключаем у родителя проверку изменений,
                то и у его дочерних компонентов она будет отключена,
                соответственно, и DOM-дерево тоже не будет обновляться;
            </li>
            <li>
                <span class="attention">reattach</span> - используется после
                вызова <code>detach</code> для активации механизма
                <code>ChangeDetection</code>. Стоит добавить, что данный метод
                полезен только для компонентов верхнего уровня, где отключен
                механизм <code>ChangeDetection</code>, т.к. если у родителя он
                выключен, то на дочерние компоненты метод
                <code>reattach</code> не произведет никакого эффекта;
            </li>
            <li>
                <span class="attention">markForCheck</span> - помечает как
                "измененный" текущий компонент, где данный метод был вызван, а
                также все родительские компоненты, вплоть до корневого
                компонента. И при следующем запуске механизма
                <code>ChangeDetection</code> он пройдет по "помеченной" ветке и
                отрисует изменения, если они есть. Сработает только 1 раз;
            </li>
            <li>
                <span class="attention">detectChanges</span> - одноразово
                запускает механизм отслеживания изменений для текущего
                компонента и его потомков;
            </li>
            <li>
                <span class="attention">checkNoChanges</span> - данный метод
                гарантирует отсутствие изменений на текущем запуске
                <code>ChangeDetection</code>, выбрасывая исключение, если
                входящие свойства были изменены, либо есть необходимость
                обновить DOM.
            </li>
        </ul>
        <p>
            В примере ниже изначально отключается механизм отслеживания
            изменений в конструкторе. Затем в переменную
            <code>value</code> вносятся изменения, но они не отобразятся сразу
            на странице. Чтобы их отобразить, мы должны нажать на кнопку,
            которая представлена в шаблоне, т.к. к ней привязана функция,
            отвечающая за принудительный запуск механизма отслеживания.
        </p>
<pre><code class="language-html">&lt;!-- шаблон компонента -->
&lt;button (click)="applyChanges()">Применить изменения&lt;button/></code></pre>
<pre><code class="language-typescript">// класс компонента
export class ManualDetectionComponent {
	value: string = 'Начальное значение'; 
	
	constructor(private changeDetectorRef: ChangeDetectorRef) {
		this.changeDetectionRef.detach(); // отключаем механизм ChangeDetection
		this.value = 'Какие-то изменения';
	}
	
	applyChanges(): void {
		this.changeDetectionRef.detectChanges(); // принудительно запускаем механизм ChangeDetection
	}
}</code></pre>
`,
    selected: false,
    lastUpdate: '07.02.2024',
};
