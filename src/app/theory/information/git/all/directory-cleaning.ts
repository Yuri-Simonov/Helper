import { IInfo } from 'src/app/shared/interfaces';

export const DIRECTORY_CLEANING: IInfo = {
    title: 'Очистка рабочей директории от ненужных файлов',
    body: `<p>
		В момент разработки бывают ситуации, когда вы создали различные
		файлы и папки и изменили текущие файлы, но вдруг понимаете, что
		все нужно вернуть в изначальный вид. И встает резонный вопрос:
		"а как это сделать?".
	</p>
	<p>Варианта "вернуть все как было" как минимум 2.</p>
	<i class="subtitle">Поэтапный вариант</i>
	<p>Сначала удаляем все созданные файлы и папки:</p>
	<pre><code class="language-typescript">git clean -r -d // удалятся и папки, и файлы
git clean -r // если не нужно удалять папки, а только файлы</code></pre>
	<p>А теперь и все изменения в файлах:</p>
	<pre><code class="language-typescript">git reset --hard</code></pre>
	<i class="subtitle">Все сразу</i>
	<p>Можно удалить все сразу, с помощью 2 команд:</p>
	<pre><code class="language-typescript">git add . // индексируем все изменения
git reset --hard // очищаем все изменения в индексе</code></pre>`,
    selected: false,
    lastUpdate: '28.06.2023',
};
