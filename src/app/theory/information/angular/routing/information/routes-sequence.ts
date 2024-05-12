import { IInfo } from '@types';

export const ROUTES_SEQUENCE: IInfo = {
    title: 'Важность последовательности маршрутов при их определении в модуле',
    body: `<p>
            <span class="attention"
                >Последовательность маршрутов важна, т.к. маршрутизатор ищет первый
                подходящий маршрут в порядке их определения</span
            >.
        </p>
        <p>
            То есть, если вы при перечислении расположите сначала маршрут "**",
            а затем любой другой маршрут, например, "home", то на "home" вы
            никогда не попадете, т.к. маршрутизатор найдет совпадение маршрута
            уже в "**".
        </p>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: '**',
		component: ErrorComponent,
	},
	{
		path: 'home', // сюда маршрутизатор не дойдет
		component: HomeComponent,
	},
]</code></pre>
        <p>
            Поэтому обработка любого URL ('**') всегда должна определяться в
            самом конце:
        </p>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent, // теперь все ок
	},
	{
		path: '**',
		component: ErrorComponent,
	},
]</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
