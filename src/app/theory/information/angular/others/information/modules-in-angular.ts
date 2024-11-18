import { IInfo } from 'src/app/shared/interfaces';

export const MODULES_IN_ANGULAR: IInfo = {
    title: 'Модули в Angular',
    body: `<p>
            <span class="attention">Angular модуль</span> - это класс c
            декоратором <code>@NgModule()</code>, который служит изолирующей
            логической объединяющей структурой для компонентов, директив,
            фильтров и сервисов.
        </p>
        <pre><code class="language-typescript">@NgModule({
	declarations: [ParentComponent], // дочерние компоненты, директивы и пайпы
	imports: [SomeModule], // другие модули, используемые в текущем модуле
	providers: [SomeService], // импортирование в модуль необходимых сервисов приложения
	bootstrap: [ParentComponent], // имя главного компонента модуля
	exports: [SomeComponent], // экспортируемые компоненты, директивы и пайпы, которые могут быть использованы другими модулями
})
	
export class ParentModule {} // класс, к которому привязывается декоратор @NgModule()</code></pre>`,
    selected: false,
    lastUpdate: '24.03.2024',
};
