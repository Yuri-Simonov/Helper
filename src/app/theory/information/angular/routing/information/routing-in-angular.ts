import { IInfo } from '@types';

export const ROUTING_IN_ANGULAR: IInfo = {
    title: 'Маршрутизация в Angular',
    body: `<p>
            В Angular маршрутизация представляет собой
            <span class="attention"> переход от одного представления </span>
            (шаблона)
            <span class="attention">
                к другому в зависимости от заданного URL без перезагрузки
                страницы</span
            >, т.к. маршрутизация в Angular реализует принцип "Simple Page
            Application" (SPA).
        </p>
        <p>При определении маршрута часто указывают следующие свойств:</p>
        <ul>
            <li><span class="attention">path</span> — название маршрута;</li>
            <li>
                <span class="attention">component</span> — компонент, который
                будет отрисован при переходе на URL, указанный в свойстве
                <code>path</code>;
            </li>
            <li>
                <span class="attention">children</span> — указывает дочерние
                пути относительно текущего маршрута;
            </li>
            <li>
                <span class="attention">data</span> — передача дополнительных
                данных (например, значения хлебных крошек и тд);
            </li>
            <li>
                <span class="attention">redirectTo</span> — переадресация на
                указанный URL при попадании на маршрут, указанный в
                <code>path</code>;
            </li>
            <li>
                <span class="attention">pathMatch</span> — определяет совпадение
                маршрута <code>path</code> с текущим. Используется совместно с
                <code>redirectTo</code>.
            </li>
        </ul>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: 'home',
		component: HomeRouteComponent,
		children: [{ path: 'profile',  component: ProfileRouteComponent }],
	},
	{
    	path: 'contacts',
	    redirectTo: '/home',
    	pathMatch: 'full',
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)], // не забываем импортировать routes
	exports: [RouterModule],
})

export class AppRoutingModule {}</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
