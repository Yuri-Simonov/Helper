import { IQuestion } from '@types';

export const oppQuestions: IQuestion[] = [
    {
        title: 'Абстракция',
        body: `<p>
                Абстракция в ООП — это
                <span class="attention"
                    >наполнение объекта минимальным набором полей и методов, которые достаточно точно представляют его в
                    данной системе</span
                >. Абстракция позволяет работать с объектами, не вдаваясь в детали их реализации.
            </p>
            <p>Из определения абстракции, также можно сделать определение и абстрактного класса.</p>
            <p>
                Абстрактный класс - это
                <span class="attention">
                    базовый класс, который не предполагает создания экземпляров и содержит абстрактные методы и
                    свойства</span
                >. Он представляет наиболее общие абстракции и
                <span class="attention"> требует реализации этих методов в его неабстрактных потомках</span>.
            </p>
            <p>Например, имеется общий класс <code>Animal</code>:</p>
            <pre><code class="language-javascript">class Animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		throw new Error('Метод должен быть переопределен');
	}
}</code></pre>
            <p>
                Класс в примере выше будет абстрактным, т.к. он в конструкторе принимает имя и имеет не реализованный
                метод <code>speak</code>. Имя будет задаваться при создании нового класса, которое будет наследоваться
                от класса <code>Animal</code>. Конкретная реализация метода <code>speak</code> также будет задаваться в
                новом классе:
            </p>
            <pre><code class="language-javascript">class Dog extends Animal {
	speak() {
		return this.name + " гавкает!";
	}
}

class Cat extends Animal {
	speak() {
		return this.name + " мяукает!";
	}
}

// Создание экземпляров собак и кошек
const dog = new Dog('Рекс');
const cat = new Cat('Мурка');

// Вызов метода speak у каждого экземпляра
console.log(dog.speak()); // Рекс гавкает!
console.log(cat.speak()); // Мурка мяукает!</code></pre>
            <p>
                Классы <code>Dog</code> и <code>Cat</code>, которые наследуются от <code>Animal</code>, реализуют метод
                <code>speak</code> каждый по-своему, что соответствует различным видам животных. Имя животного также
                задается при создании экземпляра класса исходя из его вида.
            </p>`,
        selected: false,
        lastUpdate: '01.04.2024',
    },
    {
        title: 'Наследование',
        body: ``,
        selected: false,
        lastUpdate: '',
    },
    {
        title: 'Полиморфизм',
        body: ``,
        selected: false,
        lastUpdate: '',
    },
    {
        title: 'Инкапсулирование',
        body: ``,
        selected: false,
        lastUpdate: '',
    },
    // {
    //     title: '',
    //     body: ``,
    // 	selected: false,
    // 	lastUpdate: ''
    // },
];
