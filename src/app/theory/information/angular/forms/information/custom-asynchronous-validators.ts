import { IInfo } from 'src/app/shared/interfaces';

export const CUSTOM_ASYNCHRONOUS_VALIDATORS: IInfo = {
    title: 'Кастомные асинхронные валидаторы',
    body: `<p>
                Кастомные асинхронные валидаторы
                <span class="attention"
                    >представляют собой обычные или стрелочные функции, которые возвращают <code>Observable</code> или
                    <code>Promise</code> как результат выполнения функции</span
                >.
            </p>
            <p>Ниже показан аналог встроенного валидатора <code>Validators.required</code> в асинхронном варианте:</p>
            <pre><code class="language-typescript">export const asyncRequiredValidator = (control: AbstractControl) => {
	return of(control.value).pipe(
		delay(2000), // Искусственная задержка для имитации асинхронной операции
		map((value) => (value ? null : { required: true })),
	);
};</code></pre>
            <p>Чтобы воспользоваться данным валидатором, его необходимо указать в соответствующем поле формы:</p>
            <pre><code class="language-typescript">export class AppComponent {
	inputField = new FormControl('Стартовое значение', null, asyncRequiredValidator);
}</code></pre>
            <p>
                Если надо передать какие-то параметры внутрь, то это делается через замыкание. Ниже показан аналог
                встроенного валидатора <code>Validators.minLength</code> в асинхронном варианте:
            </p>
            <pre><code class="language-typescript">export const asyncMinLengthValidator = (minLength: number): AsyncValidatorFn => {
    return (control: AbstractControl) => {
        const value = control.value;

        return of(value).pipe(
            delay(2000), // Искусственная задержка для имитации асинхронной операции
            map((value) =>
                value?.length < minLength
                    ? { minLength: { requiredLength: minLength, actualLength: value?.length } }
                    : null,
            ),
        );
    };
};</code></pre>`,
    selected: false,
    lastUpdate: '16.06.2025',
    footerLinks: [
        {
            path: 'https://youtu.be/CAfqkH9ACXk?t=438',
        },
    ],
};
