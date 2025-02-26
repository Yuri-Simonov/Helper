import { IInfo } from 'src/app/shared/interfaces';

export const PASSING_PARAMETERS_TO_FUNCTION: IInfo = {
    title: 'Передача параметров в функцию',
    body: `<p>
                В JavaScript <span class="attention">параметры передаются по значению</span>, а
                <span class="attention">в случае объектов передается ссылка на объект</span>.
            </p>
            <i class="subtitle">Примитивы</i>
            <p>
                Здесь стоит уточнить, что
                <span class="attention"
                    >функция получает копию значения, изменения не влияют на значение оригинальной переменной</span
                >:
            </p>
            <pre><code class="language-typescript">function changeValue(a) {
    a = 100;
    console.log("Внутри функции:", a); // 100
}

let num = 10;
changeValue(num);
console.log("Снаружи функции:", num); // 10 (не изменилось)</code></pre>
            <i class="subtitle">Объекты</i>
            <p>С объектами почти та же история, но есть некоторые нюансы.</p>
            <p><span class="attention">Если мы изменяем свойство объекта, мы меняем сам объект в памяти</span>:</p>
            <pre><code class="language-typescript">function changeObject(obj) {
    obj.name = "Измененный"; // Меняем содержимое объекта
}

let user = { name: "Юрий" };
changeObject(user);
console.log(user.name); // "Измененный" (объект изменился)</code></pre>
            <p>
                Но если мы попытаемся внутри функции изменить сам объект, то в таком случае
                <span class="attention">создастся новый объект</span> в памяти и мы изменим лишь его локально внутри
                функции. <span class="attention">Оригинальный объект останется нетронутым</span>, т.к. в функцию
                передается копия ссылки, а не сам объект:
            </p>
            <pre><code class="language-typescript">function replaceObject(obj) {
    obj = { name: "Новый объект" }; // Создаем новый объект
}

let user = { name: "Юрий" };
replaceObject(user);
console.log(user.name); // "Юрий" (не изменился!)</code></pre>`,
    selected: false,
    lastUpdate: '26.02.2024',
};
