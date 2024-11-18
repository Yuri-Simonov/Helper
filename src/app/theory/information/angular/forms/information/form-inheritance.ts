import { IInfo } from 'src/app/shared/interfaces';

export const FORM_INHERITANCE: IInfo = {
    title: 'Наследование форм',
    body: `<p>
            Как шаблонные, так и реактивные формы, наследуются от следующих
            базовых классов (они у них общие):
        </p>
        <ul>
            <li>
                <span class="attention">FormControl</span> — отслеживает
                значение каждого элемента формы отдельно;
            </li>
            <li>
                <span class="attention">FormGroup</span> — отслеживает целиком
                группу состоящую из контроллеров (FormControl);
            </li>
            <li>
                <span class="attention">FormArray</span> — FormArray отслеживает
                массив состоящий из групп контроллеров (<code>FormGroup</code>,
                <code>FormControl</code>);
            </li>
            <li>
                <span class="attention">ControlValueAccessor</span> — создает
                "мост" между <code>FormControl</code> и элементами DOM.
            </li>
        </ul>`,
    selected: false,
};
