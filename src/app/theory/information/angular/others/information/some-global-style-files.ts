import { IInfo } from '@types';

export const SOME_GLOBAL_STYLE_FILES: IInfo = {
    title: 'Нескольких файлов с глобальными стилями в проекте',
    body: `	<p>По умолчанию все глобальные стили находятся в файле "<code>styles.css</code>" (расширение файла может отличаться, если используется препроцессор).</p>
			<p>
                Для создания нескольких файлов с глобальными стилями необходимо зайти в файл
                "<code>angular.json</code>".
            </p>
            <p>
                В данном файле будет присутствовать объект. Необходимо найти поле <code>styles</code> по следующей
                вложенности: <code>projects</code> => <code>название_вашего_проекта</code> => <code>architect</code> =>
                <code>build</code> => <code>options</code> => <code>styles</code>.
            </p>
            <p>Само поле <code>styles</code> представляет собой массив, в котором подключается файлы со стилями:</p>
            <pre><code class="language-typescript">{
	"projects": {
		"yourProjectName": {
			"architect": {
				"build": {
					"options": {
						"styles": ["src/styles.scss"]
					}
				}
			}
		}
	}
}</code></pre>
            <p>Если их несколько, они перечисляются через запятую:</p>
            <pre><code class="language-typescript">{
	"projects": {
		"yourProjectName": {
			"architect": {
				"build": {
					"options": {
						"styles": ["src/styles.scss", "src/common.scss"]
					}
				}
			}
		}
	}
}</code></pre>
            <p>
                Также стоит учитывать порядок, в котором подключаются файлы внутри данного массива. Сначала подключится
                файл по индексу <code>0</code> в массиве, затем по индексу <code>1</code> и т.д. Поэтому,
                <span class="attention">
                    если будут какие-то стили по одному и тому же селектору, то они могут быть перезаписаны файлом,
                    который идет по списку после него</span
                >. Именно по этой причине сторонние библиотеки указывают в начале:
            </p>
            <pre><code class="language-typescript">{
	"projects": {
		"yourProjectName": {
			"architect": {
				"build": {
					"options": {
						"styles": ["@angular/material/prebuilt-themes/purple-green.css", "src/styles.scss"]
					}
				}
			}
		}
	}
}</code></pre>
            <p>
                В примере выше сначала подключается тема со стилями из библиотеки Angular Material, и только потом файл
                с глобальными стилями.
            </p>`,
    selected: false,
    lastUpdate: '02.06.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/5sx8_jKl5GU?t=88',
        },
    ],
};
