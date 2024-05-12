import { IInfo } from '@types';

export const TWO_ROUTER_OUTLET: IInfo = {
    title: 'Более одной директивы <span class="variable">router-outlet</span> в одном шаблоне компонента',
    body: `<p>
            В Angular есть основные и второстепенные маршруты.
            <span class="attention"
                >В пределах одного компонента может быть только один основной
                маршрут и сколько угодно второстепенных</span
            >. При этом
            <span class="attention"
                >основные и второстепенные маршруты полностью независимы друг от
                друга</span
            >.
        </p>
        <p>
            Основные создается как обычно, а для создания второстепенных
            маршрутов при их определении нужно указать значения атрибута
            <code>name</code>:
        </p>
<pre><code class="language-html">&lt;router-outlet>&lt;/router-outlet> &lt;!-- основной маршрут -->
&lt;router-outlet name="secondary">&lt;/router-outlet> &lt;!-- второстепенный маршрут --></code></pre>
        <p>Как этим пользоваться при задании маршрутов для компонентов:</p>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: 'products',
		component: ProductsComponent,
	},
	{
		path: 'products',
		component: CosmeticsComponent,
		outlet: 'secondary' // сообщаем для Angular, что это второстепенный маршрут
	},
]

// Будут показаны оба компонента, т.к. один основной, а второй - второстепенный.</code></pre>
        <p>
            В атрибуте <code>outlet</code> указывается какой именно из
            второстепенных маршрутов использовать. В данном случае, в шаблоне
            имя второстепенной директивы <code>router-outlet</code> равно
            "secondary", такое же имя указано в свойстве <code>outlet</code> в
            переменной <code>routes</code>.
        </p>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
