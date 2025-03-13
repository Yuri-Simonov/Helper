import { IInfo } from 'src/app/shared/interfaces';

export const HOST_PROPERTY: IInfo = {
    title: 'Свойство <span class="variable">host</span> декоратора <span class="variable">@Directive()</span>',
    body: `           <p>
                <span class="attention"
                    >Свойство <code>host</code> декоратора <code>@Directive()</code> позволяет задавать набор стилей и
                    событий для элемента, к которому применяется директива</span
                >. С помощью данного свойства удобно управлять поведением и внешним видом компонентов без необходимости
                прямого доступа к ним.
            </p>
            <p>
                Обычно данное свойство используют в директивах, но т.к. декоратор компонентов наследуется от декоратора
                директив, то использование данного свойства в компонентах тоже вполне возможно.
            </p>
            <p>
                Свойство <code>host</code> указывается в конфигурационном объекте декоратора <code>@Directive()</code> и
                представляет собой объект, внутри которого через пары ключ-значение задаются различные параметры
                атрибутов, логики или анимаций:
            </p>
            <pre><code class="language-typescript">@Directive({
    selector: '[appCustomDirective]',
	host: {
		// какие-то данные
    }
})</code></pre>
            <p>Значения внутри данного объекта могут быть как статическими, так и динамическими.</p>
            <i class="subtitle">Статические варианты записи</i>
            <p>Статические варианты задания инлайновых стилей, CSS-классов и прочих атрибутов:</p>
            <pre><code class="language-typescript">@Directive({
    selector: '[appCustomDirective]',
	host: {
		// задание инлайновых стилей
		style: 'color: lightgreen',
		// задание CSS-класса
        class: 'some-css-class',
		// задание атрибута с именем 'color'
        color: 'some-attr-value',
    }
})</code></pre>
            <p>
                Чтобы все эти настройки работали, необходимо добавить текущую директиву на какой-нибудь элемент разметки
                в шаблоне компонента:
            </p>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;h1 appCustomDirective>AppComponent заголовок&lt;/h1>
</code></pre>
            <p>И теперь данный заголовок в браузере будет выглядеть следующим образом:</p>
            <pre><code class="language-html">&lt;!-- заголовок h1 в браузере --&gt;

&lt;h1 _ngcontent-ng-c1690393863
	color="color"
	appcustomdirective
	class="color"
	style="color: lightgreen;"
	ng-reflect-app-custom-directive
>
	AppComponent заголовок
&lt;/h1>
</code></pre>
            <p>
                На заголовке присутствуют инлайновые стили, CSS-класс <code>color</code> и атрибут <code>color</code>.
            </p>
            <p>Если для прочих атрибутов не нужно никакое значение, то можно указать пустые кавычки:</p>
            <pre><code class="language-typescript">@Directive({
    selector: '[appCustomDirective]',
	host: {
		// задание атрибута без значения
        color: '',
    },
})</code></pre>
            <p>И тогда в браузере заголовок будет выглядеть так:</p>
            <pre><code class="language-html">&lt;!-- заголовок h1 в браузере --&gt;

&lt;h1 _ngcontent-ng-c1690393863
	color
	appcustomdirective
	class="color"
	style="color: lightgreen;"
	ng-reflect-app-custom-directive
>
	AppComponent заголовок
&lt;/h1>
</code></pre>
            <i class="subtitle">Динамические варианты записи</i>
            <p>
                Указателем того, что свойство может быть динамическим являются квадратные скобки (<code>[]</code>).
                Внутри них сначала указывается префикс. Для инлайновых стилей это "<code>style.</code>", для CSS-классов
                это "<code>class.</code>" и для всех остальных атрибутов это "<code>attr.</code>".
            </p>
            <p>
                Для инлайновых стилей внутри квадратных скобок после префикса указывается CSS-свойство, а после
                двоеточия уже само значение:
            </p>
            <pre><code class="language-typescript">@Directive({
    selector: '[appCustomDirective]',
	host: {
		'[style.color]': '"lime"',
    },
})</code></pre>
            <p>
                Также если свойство, которое задается с помощью инлайновых стилей имеет размерность, то ее так же можно
                указать внутри квадратных скобок:
            </p>
            <pre><code class="language-typescript">@Directive({
    selector: '[appCustomDirective]',
	host: {
		'[style.width.%]': '20',
    },
})</code></pre>
            <p>
                Для добавления CSS-класса после префикса указывается его название. А в качестве значения указывается
                булевое значение. При значении <code>true</code> класс добавится на элемент. При значении
                <code>false</code>, соответственно, нет:
            </p>
            <pre><code class="language-typescript">@Directive({
    selector: '[appCustomDirective]',
	host: {
		'[class.some-css-class]': 'true',
    },
})</code></pre>
            <p>
                И для задания атрибута после префикса также указывается его название. А после двоеточия указывается его
                значение, если оно необходимо:
            </p>
            <pre><code class="language-typescript">@Directive({
    selector: '[appCustomDirective]',
	host: {
		'[attr.color]': '"some-attr-data"',
    },
})</code></pre>
            <p>
                Если нужен просто атрибут, то можно указать кавычки внутри кавычек. Главное только, чтобы они
                отличались:
            </p>
            <pre><code class="language-typescript">@Directive({
    selector: '[appCustomDirective]',
	host: {
		'[attr.color]': '""',
    },
})</code></pre>
            <p>
                Также обратите внимание на то, что если в динамическом варианте записи необходимо указать в качестве
                значения именно строковый тип данных, то нужно использовать кавычки внутри кавычек. В противном случае
                Angular воспримет значение как булевое значение или переменную.
            </p>
            <i class="subtitle">Использование переменных</i>
            <p>
                Только что мы разобрали самые простые примеры, когда данные всегда одни и те же, т.е., они являются
                статическими. Но они могут задаваться и динамически через переменные. Причем значения для переменных
                могут задаваться как в самой директиве, так и приходить извне с помощью декоратора
                <code>@Input()</code>.
            </p>
            <p>
                Давайте в качестве примера для инлайновых стилей создадим переменную внутри директивы и зададим ей
                произвольное значение:
            </p>
            <pre><code class="language-typescript">// custom-directive.directive.ts

export class CustomDirectiveDirective {
	inlineStyle: string = 'orange';
}
</code></pre>
            <p>А для атрибута значение будем получать извне через декоратор <code>@Input()</code>:</p>
            <pre><code class="language-typescript">// custom-directive.directive.ts

export class CustomDirectiveDirective {
	inlineStyle: string = 'orange';

	@Input() appCustomDirective!: string;
}
</code></pre>
            <p>И также не забываем его добавить в разметке, чтобы данные поступали внутрь директивы:</p>
            <pre><code class="language-html">&lt;!-- app.component.html --&gt;

&lt;h1 appCustomDirective="some-data">AppComponent заголовок&lt;/h1>
</code></pre>
            <p>
                И теперь осталось лишь указать эти переменные в качестве значений для соответствующих ключей в объекте
                свойства <code>host</code>:
            </p>
            <pre><code class="language-typescript">@Directive({
    selector: '[appCustomDirective]',
	host: {
		'[style.color]': 'inlineStyle',
		'[attr.color]': 'appCustomDirective',
    },
})</code></pre>
            <p>Теперь наш заголовок <code>h1</code> в браузере будет выглядеть следующим образом:</p>
            <pre><code class="language-html">&lt;!-- заголовок h1 в браузере --&gt;

&lt;h1 _ngcontent-ng-c1690393863 color="some-data"
	appcustomdirective="another-data"
	class="color"
	style="color: orange;"
	ng-reflect-app-custom-directive="another-data"
>
	AppComponent заголовок
&lt;/h1>
</code></pre>
            <p>Свойство host также понимает и логические условия внутри значений:</p>
            <pre><code class="language-typescript">@Directive({
    selector: '[appCustomDirective]',
	host: {
		'[style.color]': 'true ? "green" : "red"',
		'[attr.color]': '!false && appCustomDirective',
    },
})</code></pre>
            <i class="subtitle">Задание логики для свойства host</i>
            <p>Для задания логики с помощью свойства <code>host</code> используется следующая запись:</p>
            <pre><code class="language-typescript">@Directive({
	selector: '[appCustomDirective]',
	host: {
		// вешаем обработчик события
		'(document:click)': 'changeColor()',
		// изменяем динамически цвет текста, когда изменяется свойство inlineStyle
		'[style.color]': 'inlineStyle',
	},
})
export class CustomDirectiveDirective {
	inlineStyle: string = 'orange';

	changeColor() {
		this.inlineStyle =
			'#' +
			(Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
		}
}
			</code></pre>
            <p>
                В примере выше используется событие <code>click</code> по глобальному объекту <code>document</code>.
                Если нужно событие по конкретному элементу, то запись упрощается до просто <code>click</code>:
            </p>
            <pre><code class="language-typescript">@Directive({
	selector: '[appCustomDirective]',
	host: {
		'(click)': 'changeColor()',
	},
})</code></pre>
            <p>
                В качестве значения указывается уже метод, который вызовется при срабатывании указанного события. В
                данном случае это метод <code>changeColor</code>. Данный метод генерирует случайный цвет и устанавливает
                его в свойство <code>inlineStyle</code>, которое отвечает за цвет текста заголовка <code>h1</code>.
            </p>
            <p>
                В свойстве <code>host</code> для обработчиков событий также можно передавать различные параметры или
                настраивать их вызов в зависимости от условий:
            </p>
            <pre><code class="language-typescript">@Directive({
	selector: '[appCustomDirective]',
	host: {
		/**
		* В $event будет содержаться информация о произошедшем событии
		* true - пользовательский аргумент
		*/
		'(click)': 'changeColor($event, true)',
    	'(mouseleave)': 'true && changeColor($event, true)',
	},
})
export class CustomDirectiveDirective {
	inlineStyle: string = 'orange';

	changeColor(...args: any) {
		console.log('args', args);

		this.inlineStyle =
			'#' +
			(Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
	}
}</code></pre>
            <i class="subtitle">Свойство host в компонентах</i>
            <p>
                <span class="attention">
                    Свойство <code>host</code> также может использоваться и в компонентах, если есть необходимость по
                    умолчанию добавлять какой-то атрибут или логику непосредственно на сам компонент</span
                >.
            </p>
            <pre><code class="language-typescript">@Component({
	selector: 'app-root',
	template: '',
	host: {
		class: 'some-css-class',
	},
})
export class AppComponent {}</code></pre>
            <p>
                В браузере компонент по умолчанию теперь будет иметь CSS-класс, который мы добавили через свойство
                <code>host</code>:
            </p>
            <pre><code class="language-html">&lt;!-- компонент app-root в браузере --&gt;

&lt;app-root class="some-css-class">&lt;/app-root>
</code></pre>
            <i class="subtitle">Добавление анимаций с помощью свойства host</i>
            <i>Информацию по данному разделу появится позже...</i>`,
    selected: false,
    lastUpdate: '10.06.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/Do99IohSCSw',
        },
    ],
};
