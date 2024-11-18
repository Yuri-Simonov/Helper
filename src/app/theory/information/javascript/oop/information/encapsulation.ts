import { IInfo } from 'src/app/shared/interfaces';

export const ENCAPSULATION: IInfo = {
    title: 'Инкапсуляция',
    body: `<p>
                <span class="attention"
                    >Инкапсуляция в ООП позволяет скрыть внутренние детали реализации и предоставить интерфейс (способ)
                    для взаимодействия с объектом</span
                >.
            </p>
            <p>
                В ES6 классы могут использовать символы для создания приватных свойств и методов (например,
                "<code>_</code>"). Начиная с ES2020, JavaScript также поддерживает приватные поля и методы через символ
                "<code>#</code>".
            </p>
            <p>Пример:</p>
            <pre><code class="language-javascript">class Person {
	#name; // Приватное поле

	constructor(name, age) {
		this.#name = name;
		this.age = age; // Публичное поле
	}

	// Геттер для получения значения приватного поля
	getName() {
		return this.#name;
	}

	// Сеттер для установки значения приватного поля
	setName(name) {
		this.#name = name;
	}
}

const person = new Person('Юрий', 30);
console.log(person.getName()); // Вывод: Юрий
person.setName('Алексей');
console.log(person.getName()); // Вывод: Алексей
console.log(person.age);       // Вывод: 30

// Попытка прямого доступа к приватному полю приведёт к ошибке
// console.log(person.#name); // Ошибка: приватное поле не доступно извне
</code></pre>
            <p>
                В примере выше скрывается внутренняя реализация приватного свойства <code>#name</code>. Т.е., мы не
                можем получить доступ к нему напрямую и как-то его изменить, т.к. оно инкапсулировано. Но с помощью
                геттера и сеттера мы можем с ним взаимодействовать.
            </p>`,
    selected: false,
    lastUpdate: '21.07.2024',
};
