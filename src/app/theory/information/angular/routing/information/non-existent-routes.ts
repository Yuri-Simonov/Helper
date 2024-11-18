import { IInfo } from 'src/app/shared/interfaces';

export const NON_EXISTENT_ROUTES: IInfo = {
    title: 'Обработка несуществующих маршрутов',
    body: `<p>
            Для обработки несуществующих маршрутов
            <span class="attention"
                >необходимо использовать path со значением</span
            >
            <code>**</code> (означает любой маршрут). Таким образом, если
            запрошенный URL не найдет соответствий в списке маршрутов
            приложения, то маршрутизатор отобразит компонент, указанный для
            <code>**</code>.
        </p>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: '**',
		component: ErrorComponent,
	}
]</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
