import { IInfo } from '@types';

export const FIXING_LAST_COMMIT: IInfo = {
    title: 'Исправление последнего коммита',
    body: `<p>
		Бывают моменты, когда мы
		сделали <code>commit</code>, но по какой-то причине нам
		необходимо добавить или убрать что-то из него. Но мы также не
		хотим делать еще один <code>commit</code>.
	</p>
	<p>Для решения данной проблемы существует следующая команда:</p>
	<pre><code class="language-typescript">git commit --amend</code></pre>

	<p>
		Также стоит иметь ввиду, что после выполнения команды выше,
		<span class="attention">
			создастся новый <code>commit</code> на базе старого и у него
			изменится хэш
		</span> (уникальный идентификатор вашего
		<code>commit</code>).
	</p>
	<p>
		Также стоит учитывать, что <span class="attention">
			данная команда будет работать до
			того, как вы отправили все в удаленный репозиторий с помощью
			команды
		</span> <code>git push</code>.
	</p>
	<p>
		Но и перед тем, как выполнять команду выше, не забудьте добавить
		все измененные файлы в индекс. Таким образом, полная цепочка
		действий будет выглядеть следующим образом:
	</p>
	<pre><code class="language-typescript">git add .
git commit --amend</code></pre>
	<p>
		У данной команды есть еще различные дополнительные флаги,
		которые учитываются, если их указать в терминале. Их мы
		рассмотрим ниже.
	</p>
	<p>Если вы хотите изменить только сообщение <code>commit</code>:</p>
	<pre><code class="language-typescript">git commit --amend -m "ваше новое название коммита"</code></pre>
	<p>
		Если вы хотите заменить файлы и не менять название
		<code>commit</code>:
	</p>
	<pre><code class="language-typescript">git commit --amend --no-edit</code></pre>
	<p>Если вы хотите изменить автора <code>commit</code>:</p>
	<pre><code class="language-typescript">git commit --amend --author="новые данные"</code></pre>
	<p>
		Команды выше можно объединять просто перечисляя через пробел
		нужные вам флаги.
	</p>`,
    selected: false,
    lastUpdate: '27.06.2023',
};
