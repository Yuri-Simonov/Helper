class Animal {
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
