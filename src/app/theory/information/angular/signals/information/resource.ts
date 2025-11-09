import { IInfo } from 'src/app/shared/interfaces';

export const RESOURCE: IInfo = {
    title: '<span class="variable">resource</span>',
    body: `<p>
                Для работы с асинхронными данными (что-то загрузить с сервера, обработать состояния загрузки, успеха,
                ошибки и т.д.) есть сигнал <code>resource</code>:
            </p>
            <pre><code class="language-typescript">const userId = signal(1);

const userResource = resource({
	// params - это сигнал или функция, возвращающая параметры для загрузчика.
	// resource будет перезапускаться при изменении этих параметров.
	params: () => userId(),
	
	// loader - асинхронная функция, которая выполняет запрос.
	// Она получает параметры и AbortSignal для отмены.
	loader: async ({ params: id, abortSignal }) => {
		const url = &#96;/api/users/&#36;{id}&#96;;
		const res = await fetch(url, { signal: abortSignal });
		return res.json();
	},
});

// resource возвращает объект с набором сигналов:
// userResource.status() // 'loading', 'resolved', 'error', 'reloading'
// userResource.value() // T | undefined
// userResource.error() // Error | undefined
// userResource.isLoading() // boolean</code></pre>
            <p>
                Вся логика управления состояниями, отмены предыдущих запросов и обработки ошибок скрыта внутри. Мы
                просто описываем, от чего зависит наш запрос (<code>params</code>) и как его выполнить
                (<code>loader</code>).
            </p>`,
    selected: false,
    lastUpdate: '09.11.2025',
};
