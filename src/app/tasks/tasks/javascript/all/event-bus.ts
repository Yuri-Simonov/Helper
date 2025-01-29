import { IInfo } from 'src/app/shared/interfaces';

export const EVENT_BUS: IInfo = {
    title: 'Шина событий',
    body: `<p>Необходимо реализовать шину событий.</p>
			<p>Стартовый код:</p>
			
			<pre><code class="language-javascript">class EventBus {
	// Коллекция для хранения событий и их обработчиков
	events = new Map();
	
	// Подписка на событие
	subscribe(eventName, fn) {}

	// Отписка от события
	unsubscribe() {}

	// Вызов события
	push(eventName, ...args) {}
}</code></pre>
	<p>Примеры использования:</p>
	<pre><code class="language-javascript">const eventBus = new EventBus();

eventBus.subscribe('Событие А', (...greeting) => {
  console.log('Запущено событие А:', ...greeting);
});

eventBus.subscribe('Событие B', () => {
  console.log('Запущено событие B');
});

eventBus.push('Событие A', 'Привет', 'мир', '!');
eventBus.push('Событие B');

// Запущено событие А: Привет, мир, ! 
// Запущено событие B </code></pre>

<i class="subtitle">Что такое шина событий (event bus) ?</i>
<p>Шина событий реализует шаблон издатель/подписчик. Его можно использовать для разъединения компонентов приложения, так что компонент может реагировать на события, инициируемые другим компонентом, без их прямых зависимостей друг от друга. Им нужно только знать шину событий.</p>
<p>Каждый подписчик может подписаться на определенное событие. Подписчик будет уведомлен, когда событие, на которое он подписан, будет опубликовано в шине событий.</p>`,
    tasks: [
        {
            title: 'Решение задачи',
            body: `<pre><code class="language-javascript">class EventBus {
	constructor() {
		// Коллекция для хранения событий и их обработчиков
		this.events = new Map();
	}

	// Подписка на событие
	subscribe(eventName, fn) {
		// Проверяем, есть ли уже подписки на это событие
		if (!this.events.has(eventName)) {
			// Если нет, создаем пустой массив обработчиков
			this.events.set(eventName, []);
		}
		// Если есть, добавляем обработчик в массив
		this.events.get(eventName).push(fn);
	}

	// Отписка от события
	unsubscribe(eventName, fn) {
		// Проверяем, есть ли подписки на это событие
		if (this.events.has(eventName)) {
			// Фильтруем обработчики, оставляя только те, которые не равны переданной функции
			const handlers = this.events.get(eventName).filter(handler => handler !== fn);
			// Обновляем список обработчиков
			this.events.set(eventName, handlers); // Обновляем список обработчиков
		}
	}

	// Вызов события
	push(eventName, ...args) {
		// Проверяем, есть ли обработчики для этого события
		if (this.events.has(eventName)) {
			// Получаем массив обработчиков
			const handlers = this.events.get(eventName);
			// Вызываем каждый обработчик, передавая ему аргументы
			handlers.forEach(handler => handler(...args)); // Вызываем каждый обработчик
		}
	}
}

// Создаем новый экземпляр шины событий
const eventBus = new EventBus();

// Функция-обработчик для события "Событие A"
const handlerA = (...greeting) => {
  console.log('Запущено событие A:', ...greeting);
};

// Функция-обработчик для события "Событие В"
const handlerB = () => {
  console.log('Запущено событие B');
};

// Подписываем обработчики на события
eventBus.subscribe('Событие А', handlerA);
eventBus.subscribe('Событие В', handlerB);

// Вызываем события с аргументами и без
eventBus.push('Событие А', 'Привет', 'мир', '!');
eventBus.push('Событие В');

// Проверка отписки
eventBus.unsubscribe('Событие А', handlerA);
eventBus.push('Событие А', 'Это событие не будет вызвано.');</code></pre>`,
            selected: false,
        },
    ],
    selected: false,
    lastUpdate: '29.01.2025',
};
