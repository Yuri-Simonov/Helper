import { IInfo } from '@types';

export const STANDALONE_COMPONENTS_IMPORTS: IInfo = {
    title: 'Важность импортов в <span class="variable">standalone</span> компонентах',
    body: `<p>
                Standalone компоненты являются самостоятельными сущностями и могут внутрь себя импортировать различные
                зависимости, такие как модули, компоненты и т.д.
            </p>
            <p>
                Причем в эти же standalone компоненты можно импортировать необходимые для их работы модули и/или
                компоненты. И в какой-то определенный момент может произойти так, что standalone компонент нигде вроде
                бы не используется, но почему-то присутствует в итоговом бандле.
            </p>
            <p>За то, что окажется в итоговом бандле, а что - нет, отвечает <code>tree-shaking</code>.</p>
            <p>
                <span class="attention"
                    ><code>Tree-shaking</code> - это процесс удаление неиспользуемого кода из бандла во время сборки
                    приложения</span
                >. По-другому этот процесс часто называют просто "встряхиванием" или "встряхиванием дерева", если
                переводить дословно.
            </p>
            <p>
                Начнем с примеров, когда <code>tree-shaking</code> спокойно делает свое дело и удаляет неиспользуемый
                код из бандла приложения. Для удобства компоненты в примерах ниже будут называться различными цветами.
            </p>
            <i class="subtitle">1-ый пример</i>
            <p>Допустим у нас есть standalone компонент (зеленый):</p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-green',
    templateUrl: './green.component.html',
    styleUrl: './green.component.scss',
    standalone: true,
})
export class GreenComponent {}</code></pre>
            <p>И модуль, в который он импортирован:</p>
            <pre><code class="language-typescript">@NgModule({
    bootstrap: [AppComponent],
	imports: [GreenComponent],
})
export class AppModule {}</code></pre>
            <p>
                Если сделать сборку приложения с помощью команды <code>ng build</code>, то наш standalone компонент не
                попадет в итоговый бандл, т.к. он нигде не использовался и не импортировал внутрь себя никакие модули.
                Следовательно, процесс <code>tree-shaking</code> сделал своё дело.
            </p>
            <i class="subtitle">2-ой пример</i>
            <p>
                Аналогичное поведение будет, если подключить в зеленый компонент, например, красный компонент, который
                внутрь себя ничего не импортирует:
            </p>
            <pre><code class="language-typescript">// класс зеленого компонента
@Component({
    selector: 'app-green',
    templateUrl: './green.component.html',
    styleUrl: './green.component.scss',
    standalone: true,
	imports: [RedComponent],
})
export class GreenComponent {}</code></pre>
            <pre><code class="language-typescript">// класс красного компонента
@Component({
    selector: 'app-red',
    templateUrl: './red.component.html',
    styleUrl: './red.component.scss',
    standalone: true,
})
export class RedComponent {}</code></pre>
            <p>
                Если сделать еще раз сборку приложения, то в итоговый бандл ни зеленый, ни красный компоненты не
                попадут, т.к. ни один из них не импортировал в себя никакие модули.
            </p>
            <p>
                Теперь рассмотрим примеры, когда <code>tree-shaking</code> уже не будет вычищать из бандла standalone
                компоненты, которые нигде не используются.
            </p>
            <i class="subtitle">3-ий пример</i>
            <p>
                Для следующего примера достаточно просто импортировать в зеленый компонент какой-нибудь модуль,
                например, <code>CommonModule</code>:
            </p>
            <pre><code class="language-typescript">@Component({
    selector: 'app-green',
    templateUrl: './green.component.html',
    styleUrl: './green.component.scss',
    standalone: true,
	imports: [CommonModule],
})
export class GreenComponent {}</code></pre>
            <p>
                И теперь, если сделать вновь сборку приложения, то в итоговый бандл зеленый компонент попадет, хотя он
                нигде и не используется.
            </p>
            <p>
                Из примера выше можно сделать вывод, что
                <span class="attention"
                    >наличие импорта какого-либо модуля в standalone компоненте лишает гарантии того, что при
                    неиспользовании нигде такого компонента, он не попадет в итоговый бандл</span
                >. Поэтому, если не следить за импортами в своих standalone компонентах, то в один прекрасный момент вся
                оптимизация, которая преподносится standalone компонентами, превратится в деоптимизацию, т.е. даст
                обратный эффект.
            </p>
            <i class="subtitle">4-ый пример</i>
            <p>
                Такая же ситуация будет, если в зеленый компонент импортировать красный компонент, который импортирует в
                себя <code>CommonModule</code>, даже несмотря на то, что зеленый компонент не импортирует никакой из
                модулей. Зеленый компонент все равно попадет в итоговый бандл:
            </p>
            <pre><code class="language-typescript">// класс зеленого компонента
@Component({
    selector: 'app-green',
    templateUrl: './green.component.html',
    styleUrl: './green.component.scss',
    standalone: true,
	imports: [RedComponent],
})
export class GreenComponent {}</code></pre>
            <pre><code class="language-typescript">// класс красного компонента
@Component({
    selector: 'app-red',
    templateUrl: './red.component.html',
    styleUrl: './red.component.scss',
    standalone: true,
	imports: [CommonModule],
})
export class RedComponent {}</code></pre>
            <p>
                Тут логика следующая.
                <span class="attention"
                    >Если в цепочке standalone компонентов где-то импортируется модуль, то standalone компонент, который
                    импортируется в модуль, попадет в итоговый бандл</span
                >.
            </p>
            <pre><code class="language-typescript">@NgModule({
    bootstrap: [AppComponent],
	// в модуль импортируется зеленый компонент, 
	// поэтому он и попадет в итоговый бандл при сборке
	imports: [GreenComponent],
})
export class AppModule {}</code></pre>
            <i class="subtitle">CommonModule</i>
            <p>
                В standalone компоненты не рекомендуется импортировать целиком такие модули, как
                <code>CommonModule</code>, которые содержат внутри себя различный функционал. Вместо этого
                <span class="attention">
                    лучше импортировать конкретный из таких модулей функционал, который необходим для работы текущего
                    компонента</span
                >:
            </p>
            <pre><code class="language-html">&lt;!-- шаблон зеленого компонента -->
&lt;p [ngClass]="{ 'some-css-class': true }">Внутри if&lt;/p>
</code></pre>
            <pre><code class="language-typescript">// класс зеленого компонента
@Component({
    selector: 'app-green',
    templateUrl: './green.component.html',
    styleUrl: './green.component.scss',
    standalone: true,
	imports: [NgClass], // импорт только необходимого функционала
})
export class GreenComponent {}</code></pre>
            <p>
                Такой подход также помогает точно определить процессу <code>tree-shaking</code> нужно ли включать данный
                компонент в итоговый бандл или нет, если он нигде не используется. А так же импорт конкретного
                функционала снижает размер итогового бандла, по сравнению с тем, если бы мы импортировали целый модуль
                <code>CommonModule</code>.
            </p>
            <p>
                Какой тут напрашивается вывод:
                <span class="attention"
                    >нужно следить за тем, что импортируется в standalone компоненты, и импортировать лишь то, что им
                    действительно необходимо для работы</span
                >.
            </p>`,
    selected: false,
    lastUpdate: '30.03.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/ca2zuEDsDhs',
        },
    ],
};
