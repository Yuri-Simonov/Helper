import { IInfo } from '@types';

export const INHERITANCE: IInfo = {
    title: 'Наследование',
    body: `<p>
                <span class="attention">Наследование в ООП позволяет создавать новые классы на основе существующих</span
                >. Новый класс, который наследует свойства и методы другого класса, называется производным классом или
                подклассом (subclass), а класс, от которого наследуют, — базовым классом или суперклассом (superclass).
            </p>
            <p>
                При этом
                <span class="attention"
                    >производный класс может полностью заменять или частично дополнять методы, унаследованные от
                    базового класса</span
                >. Этот процесс называется переопределением.
            </p>
            <p>Пример:</p>
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
                В примере выше имеется общий класс <code>Animal</code>. От него наследуются классы <code>Dog</code> и
                <code>Cat</code>, которые дополняют внутри себя метод <code>speak</code> под соответствующее животное.
            </p>`,
    selected: false,
    lastUpdate: '21.07.2024',
};
