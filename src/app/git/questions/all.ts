import { IQuestion } from '@types';

export const allGitQuestions: IQuestion[] = [
    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    // },
    {
        title: 'Как исправить последний коммит в git?',
        body: `<p>
		Бывают моменты, когда мы
		сделали <code>commit</code>, но по какой-то причине нам
		необходимо добавить или убрать что-то из него. Но мы также не
		хотим делать еще один <code>commit</code>.
	</p>
	<p>Для решения данной проблемы существует следующая команда:</p>
	<pre><code>git commit --amend</code></pre>

	<p>
		Также стоит иметь ввиду, что после выполнения команды выше,
		создастся новый <code>commit</code> на базе старого и у него
		изменится хэш (уникальный идентификатор вашего
		<code>commit</code>).
	</p>
	<p>
		Также стоит учитывать, что данная команда будет работать до
		того, как вы отправили все в удаленный репозиторий с помощью
		команды <code>git push</code>.
	</p>
	<p>
		Но и перед тем, как выполнять команду выше, не забудьте добавить
		все измененные файлы в индекс. Таким образом, полная цепочка
		действий будет выглядеть следующим образом:
	</p>
	<pre><code>git add .
git commit --amend</code></pre>
	<p>
		У данной команды есть еще различные дополнительные флаги,
		которые учитываются, если их указать в терминале. Их мы
		рассмотрим ниже.
	</p>
	<p>Если вы хотите изменить только сообщение <code>commit</code>:</p>
	<pre><code>git commit --amend -m "<span class="string">ваше новое название коммита</span>"</code></pre>
	<p>
		Если вы хотите заменить файлы и не менять название
		<code>commit</code>:
	</p>
	<pre><code>git commit --amend --no-edit</code></pre>
	<p>Если вы хотите изменить автора <code>commit</code>:</p>
	<pre><code>git commit --amend --author="<span class="string">новые данные</span>"</code></pre>
	<p>
		Команды выше можно объединять просто перечисляя через пробел
		нужные вам флаги.
	</p>`,
        selected: false,
    },
    {
        title: 'Как сделать изменения в файле невидимыми для git?',
        body: `<p>
		Возможно вы сталкивались с такой ситуацией, когда во время
		разработки вам нужно запушить измененные файлы кроме, например,
		какого-то конфига, который уже есть в репозитории, но изменять
		его нельзя. Вы можете скрыть от <code>git</code> данный файл с
		помощью команды:
	</p>
	<pre><code>git update-index --assume-unchanged <span class="string">название_файла_с_учетом_его_расширения</span></code></pre>
	<p>
		Но есть нюанс при использовании данной команды. Возможен случай,
		когда вы попытаетесь подтянуть данные из удаленного репозитория,
		но
		<code>git</code> будет ругаться на то, что у вас имеются
		какие-то локальные изменения, которые нужно принять или
		отклонить для завершения операции, но при этом в статусе
		измененных файлов у вас будет пусто. В таких случаях нужно
		обратно сделать скрытые файлы видимыми для <code>git</code>.
		Делается это с помощью команды:
	</p>
	<pre><code>git update-index --no-assume-unchanged <span class="string">название_файла_с_учетом_его_расширения</span></code></pre>
	<p>Далее уже принимаете или отклоняете появившиеся изменения в скрытых до этого файлах.</p>`,
        selected: false,
    },
];