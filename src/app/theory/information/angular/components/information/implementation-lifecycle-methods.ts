import { IInfo } from 'src/app/shared/interfaces';

export const IMPLEMENTATION_LIFECYCLE_METHODS: IInfo = {
    title: 'Имплементация методов жизненного цикла',
    body: ` <p>
                Для класса компонента следует указывать реализацию встроенных интерфейсов, которые содержат внутри себя
                функции, совпадающие по названию с названием интерфейса + префикс
                <code>ng</code>.
            </p>
            <p>
                Например, метод жизненного цикла <code>ngOnInit</code> реализует интерфейс <code>OnInit</code>,
                прибавляем префикс <code>ng</code> и получаем сам метод <code>ngOnInit</code>:
            </p>
<pre><code class="language-typescript">// Как выглядит встроенный интерфейс OnInit под капотом
export declare interface OnInit {
    ngOnInit(): void;
}</code></pre>
            <p>Как это выглядит в компоненте:</p>
<pre><code class="language-typescript">export class ContactsItemComponent implements OnInit {
	ngOnInit() {
		console.log('OnInit')  // OnInit
	}
}</code></pre>
            <p>
                В примере выше, после ключевого слова <code>implements</code>, указывается реализация интерфейсов,
                соответствующих методам жизненного цикла, которые задействованы в текущем компоненте. В данном случае
                это <code>OnInit</code>. Если нужна реализация более одного интерфейса, они перечисляются через запятую.
            </p>`,
    selected: false,
    lastUpdate: '08.02.2024',
};
