import { IInfo } from '@types';

export const POLYMORPHISM: IInfo = {
    title: 'Полиморфизм',
    body: `<p>
                <span class="attention"
                    >Полиморфизм в ООП позволяет объектам разных классов обрабатывать данные одинаковыми методами,
                    несмотря на различия в их внутренней реализации</span
                >. Полиморфизм обеспечивает гибкость и расширяемость кода, позволяя использовать один и тот же интерфейс
                для работы с объектами разных типов.
            </p>
            <p>
                Объекты разных классов могут предоставлять свои собственные реализации метода с одинаковой сигнатурой
                (образцом). Пример:
            </p>
            <pre><code class="language-javascript">class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return "Неизвестное животное издает звук";
    }
}

class Dog extends Animal {
    speak() {
        return this.name + " гавкает!";
    }
}

class Cat extends Animal {
    speak() {
        return this.name + " мяукает!";
    }
}

// Создание экземпляра собаки и кота
const dog = new Dog("Собака");
const cat = new Cat("Кот");

// Вызов метода speak у каждого экземпляра
console.log(dog.speak()); // Собака гавкает!
console.log(cat.speak()); // Кот мяукает!
</code></pre>
            <p>
                В примере выше в классе <code>Animal</code> есть метод <code>speak</code>, который имеет свою
                реализацию. В классах <code>Dog</code> и <code>Cat</code> этот метод уже реализовывается по-своему, но
                суть остается той же.
            </p>`,
    selected: false,
    lastUpdate: '21.07.2024',
};
