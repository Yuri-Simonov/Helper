import { IInfo } from 'src/app/shared/interfaces';

export const DYNAMIC_ROUTING_PARAMETERS: IInfo = {
    title: 'Динамические параметры маршрутизации',
    body: `<p>
            Динамические пути строятся на основе каких-то данных. Самый простой
            пример - это отображение какого-либо товара по заданному <code>id</code>.
        </p>
        <p>
            <span class="attention"
                >Динамические пути создаются путем добавления</span
            >
            "<code>:</code>"
            <span class="attention">
                перед частью маршрута, в которой мы хотим выводить контент в
                зависимости от каких-то данных</span
            >.
        </p>
<pre><code class="language-typescript">const routes: Routes = [
	{
		path: 'products',
		component: ProductsComponent,
		children: [{
			path: 'product/:id', // маршрут зависит от переданного id
			component: ProductComponent
			data: {breadcrumbs: 'Product info'}
		}],
	},
]</code></pre>
        <p>
            Получить всю необходимую информацию, включая динамические параметры,
            можно из сервиса <code>ActivatedRoute</code>.
        </p>
<pre><code class="language-typescript">export class ProductComponent {
	constructor(private route: ActivatedRoute) {
		console.log(this.route) // объект с различной информацией о текущем маршруте 
	}
}</code></pre>
        <i class="subtitle"
            >В каком месте надо передавать динамические параметры?</i
        >
        <p>
            Первый вариант: в методе <code>navigate</code>, который вторым
            параметром принимает объект с дополнительными данными маршрута:
        </p>
<pre><code class="language-typescript">this.router.navigate(['profile', 6], {
	queryParams: { id: 6 }
})</code></pre>
        <p>
            И второй вариант: непосредственно в шаблоне в директиве
            <code>routerLink</code>.
        </p>
		<pre><code class="language-html">&lt;a [routerLink]=["/product", "6"]>Ссылка на какой-то продукт&lt;/a> &lt;!-- Вместо цифры 6 может быть какая-то переменная --></code></pre>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
