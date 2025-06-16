import { IInfo } from 'src/app/shared/interfaces';

export const CUSTOM_SYNCHRONOUS_VALIDATORS: IInfo = {
    title: 'Кастомные синхронные валидаторы',
    body: `<p>
                Кастомные синхронные валидаторы
                <span class="attention">
                    представляют собой обычные или стрелочные функции, которые возвращают ошибку в виде объекта или
                    <code>null</code></span
                >. Входным параметром данные функции получают доступ к текущему полю формы.
            </p>
            <p>Ниже показан аналог встроенного валидатора <code>Validators.required</code>:</p>
            <pre><code class="language-typescript">export const customRequiredValidator = (control: AbstractControl): ValidationErrors | null => {
	return control.value ? null : { required: true };
};</code></pre>
            <p>
                Класс <code>AbstractControl</code> — это
                <span class="attention"
                    >базовый ангуляровский класс для управления состоянием и валидацией поля формы</span
                >. От него наследуются такие классы, как <code>FormControl</code>, <code>FormGroup</code> и
                <code>FormArray</code>.
            </p>
            <p>Чтобы воспользоваться данным валидатором, его необходимо указать в соответствующем поле формы:</p>
            <pre><code class="language-typescript">export class AppComponent {
	inputField = new FormControl('Стартовое значение', customRequiredValidator);
}</code></pre>
            <p>
                Если в валидатор надо передать параметр, в таком случае кастомный валидатор делается через замыкание.
                Ниже показан аналог встроенного валидатора <code>Validators.minLength</code>:
            </p>
            <pre><code class="language-typescript">export const customMinLengthValidator =
	(minLength: number): ValidatorFn =>
	({ value }): ValidationErrors | null =>
		value?.length < minLength ? { minLength: { requiredLength: minLength, actualLength: value?.length } } : null;</code></pre>

            <p>
                Чтобы типизировать замыкание, используется встроенный тип <code>ValidatorFn</code>. В его описании
                сказано, что это функция, которая проверяет значение поля формы и возвращает ошибку или
                <code>null</code>.
            </p>
            <p>
                Также для упрощения кода можно использовать деструктуризацию и сразу достать свойство
                <code>value</code>.
            </p>
            <p>На поле формы используются точно так же:</p>
            <pre><code class="language-typescript">export class AppComponent {
	inputField = new FormControl('Стартовое значение', customMinLengthValidator(5));
}</code></pre>`,
    selected: false,
    lastUpdate: '16.06.2025',
    footerLinks: [
        {
            path: 'https://youtu.be/CAfqkH9ACXk?t=249',
        },
    ],
};
