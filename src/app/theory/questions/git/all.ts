import { IQuestion } from '@types';

export const allGitQuestions: IQuestion[] = [
    {
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
    },
    {
        title: 'Отключить отслеживание изменений в файле',
        body: `<p>
		Возможно вы сталкивались с такой ситуацией, когда во время
		разработки вам нужно запушить измененные файлы кроме, например,
		какого-то конфига, который уже есть в репозитории, но изменять
		его нельзя. Вы можете скрыть от <code>git</code> данный файл с
		помощью команды:
	</p>
	<pre><code class="language-typescript">git update-index --assume-unchanged название_файла_с_учетом_его_расширения</code></pre>
	<p>
		Но есть нюанс при использовании данной команды. Возможен случай,
		когда вы попытаетесь подтянуть данные из удаленного репозитория,
		но
		<code>git</code> будет ругаться на то, что у вас имеются
		какие-то локальные изменения, которые нужно принять или
		отклонить для завершения операции, но при этом в статусе
		измененных файлов у вас будет пусто. В таких случаях <span class="attention">нужно
		обратно сделать скрытые файлы видимыми</span> для <code>git</code>.
		Делается это с помощью команды:
	</p>
	<pre><code class="language-typescript">git update-index --no-assume-unchanged название_файла_с_учетом_его_расширения</code></pre>
	<p>Далее уже принимаете или отклоняете появившиеся изменения в скрытых до этого файлах.</p>`,
        selected: false,
        lastUpdate: '27.06.2023',
    },
    {
        title: 'Клонирование репозитория с урезанной историей коммитов',
        body: `<p>
		Допустим, что вы попали на проект, который разрабатывается или
		поддерживается уже не один год, соответственно, история коммитов
		там может быть просто огромная и весить соответствующе. Но зачем
		тащить себе на компьютер весь этот архив?
	</p>
	<p>
		При клонировании репозитория можно <span class="attention">указать флаг, от значения которого
		подтянется лишь указанное число коммитов в истории</span>:
	</p>
	<pre><code class="language-typescript">git clone url_репозитория --depth=число_последних_коммитов_в_истории</code></pre>`,
        selected: false,
        lastUpdate: '27.06.2023',
    },
    {
        title: 'Чистка рабочей директории от ненужных файлов',
        body: `<p>
		В момент разработки бывают ситуации, когда вы создали различные
		файлы и папки и изменили текущие файлы, но вдруг понимаете, что
		все нужно вернуть в изначальный вид. И вставет резонный вопрос:
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
    },
    {
        title: 'Временное сохранение изменений в <span class="variable">git</span> без коммита',
        body: `<p>
		Часто бывают ситуации, когда нужно переключиться между ветками,
		но <code>git</code> не дает этого сделать, т.к. у нас в текущей
		ветке есть измененния в файлах. Для этого в
		<code>git</code> есть соответствующая команда, которая
		<span class="attention"
			>дает возможность поместить текущие изменения в условный
			буфер обмена</span
		>
		(как будто вы сделали Ctrl+X и куда-то вставили):
	</p>
	<pre><code class="language-typescript">git stash</code></pre>
	<p>
		Делать такие временные сохранения можно сколь угодно раз. И все
		свои такие вот "сохранения" можно посмотреть с помощью команды:
	</p>
	<pre><code class="language-typescript">git stash list</code></pre>
	<p>
		После того, как вы вернулись в ветку, в которой изначально
		делали разработку, вы можете вернуть все изменения, которые
		временно сохранили до этого в <code>stash</code>, с помощью
		команды:
	</p>
	<pre><code class="language-typescript">git stash apply</code></pre>
	<p>
		Данная команда применит изменения, которые вы положили в самый
		последний свой <code>stash</code>, учтите это.
	</p>
	<p>
		Если вам нужно вернуть конкретные изменения из временного
		хранилища, то воспользуйтесь командой:
	</p>
	<pre><code class="language-typescript">git stash apply номер_состояния // номер находится в [] скобках</code></pre>
	<p>
		Если вы больше не хотите хранить временные изменения после того,
		как обратно их применили к текущей ветке, воспользуйтесь
		командой:
	</p>
	<pre><code class="language-typescript">git stash pop</code></pre>
	<p>
		После данной команды,
		<span class="attention">
			сохраненные изменения сотрутся из временного
			хранилища</span
		>. Это бывает полезно, когда вы не хотите захламлять свое
		временное хранилище.
	</p>
	<p>
		Есть также возможность давать свои названия изменениям, когда
		они помещаются во временное хранилище:
	</p>
	<pre><code class="language-typescript">git stash "название_для_изменений"</code></pre>
	<p>
		Если вам помимо изменений нужно еще и созданные файлы и папки
		отправить во временное хранилище, нужно добавить следующий флаг:
	</p>
	<pre><code class="language-typescript">git stash -u</code></pre>
	<p>
		Теперь давайте разберем команды, которые помогут почистить весь
		тот бардак, который мы устроили во временном хранилище.
	</p>
	<p>
		Если нужно удалить все сохранённые в
		<code>stash</code> состояния:
	</p>
	<pre><code class="language-typescript">git stash clear</code></pre>
	<p>
		Если нужно удалить последнее состояние во временном хранилище:
	</p>
	<pre><code class="language-typescript">git stash drop</code></pre>
	<p>
		Если нужно удалить конкретное состояние из списка во временном
		хранилище:
	</p>
	<pre><code class="language-typescript">git stash drop stash@{номер_состояния}</code></pre>`,
        selected: false,
        lastUpdate: '29.06.2023',
    },
    {
        title: 'Отличия флагов <span class="variable">soft</span>, <span class="variable">mixed</span> и <span class="variable">hard</span> в команде <span class="variable">git reset</span>',
        body: `<p>
		Перед отправкой в удаленный репозиторий изменения проходят 3
		этапа:
	</p>
	<ul>
		<li>
			Файлы еще не добавлены в индекс
			<code>git</code> (untracked files);
		</li>
		<li>
			Файлы добавлены в индекс <code>git</code> (например, после
			команды <code>git add .</code>);
		</li>
		<li>
			Создан коммит (например, после команды
			<code>git commit -m "название коммита"</code>).
		</li>
	</ul>
	<p>
		И на примере этих 3 этапов рассмотрим разницу между флагами
		<code>soft</code>, <code>mixed</code> и <code>hard</code>,
		только для наглядности объединим их ниже:
	</p>
	<pre><code class="language-typescript">1) untracked files
2) git add .
3) git commit -m "название коммита"</code></pre>
	<p>
		Для команд, которые мы рассмотрим ниже, нужен хэш коммита, к
		которому мы хотим откатиться. Возьмем, например, такой
		"99fb0814f8cd10eaeda0c5f89373ee2b42d7fde9".
	</p>
	<i class="subtitle">Soft</i>
	<p>
		При команде с данным флагом мы отменяем 3-ю ступень, где
		создается коммит, при этом мы не теряем изменения в файлах:
	</p>
	<pre><code class="language-typescript"> // Прописываем команду в терминале:
git reset --soft 99fb0814f8cd10eaeda0c5f89373ee2b42d7fde9

// Что происходит в git:
1) untracked files
2) git add .
<span class="reset">3) git commit -m "название коммита"</span></code></pre>
	<i class="subtitle">Mixed</i>
	<p>
		Данный флаг используется по умолчанию. Следующие 2 записи
		одентичны с точки зрения функционала:
	</p>
	<pre><code class="language-typescript">git reset
git reset --mixed</code></pre>
	<p>
		При команде с данным флагом мы отменяем 2-ю и 3-ю ступени,
		изменения в самих файлах все так же остаются:
	</p>
	<pre><code class="language-typescript">// Прописываем команду в терминале:
git reset --mixed 99fb0814f8cd10eaeda0c5f89373ee2b42d7fde9

// Что происходит в git:
1) untracked files
<span class="reset">2) git add .</span>
<span class="reset">3) git commit -m "название коммита"</span></code></pre>
	<i class="subtitle">Hard</i>
	<p>
		Если же вы не хотите ничего сохранять, то данный флаг вам в
		помощь:
	</p>
	<pre><code class="language-typescript">// Прописываем команду в терминале:
git reset --hard 99fb0814f8cd10eaeda0c5f89373ee2b42d7fde9

// Что происходит в git:
<span class="reset">1) untracked files</span>
<span class="reset">2) git add .</span>
<span class="reset">3) git commit -m "название коммита"</span></code></pre>
	<i class="subtitle">Откат изменений в текущей ветке</i>
	<p>
		Если вам необходимо откатить все изменения в текущей ветке, то
		просто не передавайте в команду хэш коммита:
	</p>
	<pre><code class="language-typescript">git reset --hard</code></pre>`,
        selected: false,
        lastUpdate: '30.06.2023',
    },
    {
        title: 'Сброс изменений в конкретном файле',
        body: `<p>
                бывают ситуации, когда нужно сбросить изменения в каком-то
                конкретном файле, а не во всей ветке. Для этого в
                <code>git</code> есть команда:
            </p>
            <pre><code class="language-typescript">git checkout имя_файла_с_расширением
git checkout readme.md // пример</code></pre>
            <p>
                Если все же необходимо убрать все изменения в текущей ветке, тогда:
            </p>
            <pre><code class="language-typescript">git reset --hard</code></pre>`,
        selected: false,
        lastUpdate: '01.07.2023',
    },
    {
        title: 'Откат сделанного коммита',
        body: `<p>
		Допустим вы сделали какой-то новый функционал и запушили его. И
		в продакшене выяснилось, что из-за этого нового функционала
		появился критический баг, который мешает корректной работе
		вашего приложения. В таких ситуациях обычно откатывают
		приложение до стабильной версии. В нашем же случае будет откачен
		коммит с новым функционалом. Делается это с помощью следующей
		команды:
	</p>
	<pre><code class="language-typescript">git revert хэш_коммита
git revert 99fb0814f8cd10eaeda0c5f89373ee2b42d7fde9 // пример</code></pre>
	<p>Если он является последним из отправленных в репозиторий, то можно воспользоваться и таким вариантом команды:</p>
	<pre><code class="language-typescript">git revert -n HEAD</code></pre>
	<p>
		После выполнения данной команды в истории
		<code>git</code> появится новый коммит, в котором будут отменены внесенные ранее изменения файлов, которые были заложены в коммит, хэш которого
		мы передали в команде выше. Эти изменения также необходимо будет отправить в репозиторий.
	</p>`,
        selected: false,
        lastUpdate: '09.02.2024',
    },
    {
        title: 'Добавление в коммит всех изменных файлов',
        body: `<p>
		Допустим, вы поправили какой-то баг и хотите отправить изменения
		в удаленный репозиторий, но для этого вам необходимо подготовить
		сначала коммит, добавив в него изменения. Сделать это можно
		разными способами:
	</p>
	<i class="subtitle">1-ый вариант</i>
	<pre><code class="language-typescript">git add . // индексируем все изменения
git commit -m "название_коммита" // создаем коммит</code></pre>
	<i class="subtitle">2-ой вариант</i>
	<p>
		1-ый вариант можно реализовать командой покороче, передав в
		нужный флаг:
	</p>
	<pre><code class="language-typescript">git commit -a -m "название_коммита" // сразу добавили файлы и создали коммит</code></pre>
	<p>
		Как видите, в команде появился флаг <code>-a</code>, который
		подразумевает "добавить в коммит все <span class="attention">измененные файлы</span>", именно "измененные". Если вы создали новый какой-то файл(ы), то команда выше <span class="attention">не подхватит его в коммит</span>.
	</p>`,
        selected: false,
        lastUpdate: '01.07.2023',
    },
    {
        title: 'Перенос коммитов в другую ветку',
        body: `<p>
		Для переноса (копирования) коммита (в котором присутствуют
		нужные вам наработки) из одной ветки в другую, в
		<code>git</code> существует следующая команда:
	</p>
	<pre><code class="language-typescript">git cherry-pick хэш_коммита
git cherry-pick 99fb0814f8cd10eaeda0c5f89373ee2b42d7fde9 // пример</code></pre>
	<p>
		Важное уточнение:
		<span class="attention"
			>команда должна выполняться в той ветке, в которую вы хотите
			добавить коммит</span
		>.
	</p>
	<p>
		Если при переносе коммита вы хотите дать ему новое название, то
		для этого нужно добавить флаг <code>-edit</code>:
	</p>
	<pre><code class="language-typescript">git cherry-pick хэш_коммита -edit</code></pre>
	<p>
		Если при переносе коммита вы не хотите сразу создавать новый
		коммит в текущей ветке, а хотите его как-то подредактировать, то
		для этого тоже есть специальный флаг <code>--no-commit</code>:
	</p>
	<pre><code class="language-typescript">git cherry-pick хэш_коммита --no-commit</code></pre>
	<p>
		При данной команде все появившиеся изменения после переноса
		нужно будет самим потом добавить в коммит с помощью
		соответствующих команд.
	</p>
	<p>
		Используйте данную команду с умом, т.к. она
		<span class="attention"
			>не является заменой <code>merge</code> или
			<code>rebase</code></span
		>.
	</p>`,
        selected: false,
        lastUpdate: '01.07.2023',
    },
    {
        title: 'Cклеивание нескольких коммитов в один (интерактивный ребейз)',
        body: `<p>
                Разработка новой фичи, устранение бага или чего-то
                подобного часто сопровождается постепенной фиксацией изменений
                или коммитов, чтобы в случае чего можно было спокойно откатить
                изменения.
            </p>
            <p>
                Такой подход в разработке актуален, когда задача на фичу или баг
                еще в работе, но как только ее принимают или закрывают, в
                истории <code>git</code> остается много "мусора", который
                желательно бы после себя убрать. Поэтому после закрытия задачи
                все коммиты, связанные с ней, объединяют в один. И делается это
                с помощью следующей команды:
            </p>
            <pre><code class="language-typescript">git rebase -i HEAD~количество_коммитов_в_задаче
// пример
git rebase -i HEAD~<span class="number">5</span> // при решении задачи было сделано 5 коммитов</code>
			</pre>
            <p>
                В примере выше флаг <code>-i</code> указывает на то, что
                <code>rebase</code> используется в интерактивном режиме (<span
                    class="attention"
                    >интерактивный ребейз</span
                >).
            </p>
            <p>
                После запуска данной команды появится список коммитов, которые
                попали под то число, которое вы указали в команде выше, а также
                большой комментарий о том, что можно сделать.
            </p>
            <pre><code class="language-typescript"><span class="keyword">pick</span> 3dc0ba9 сделана разметка для задачи
<span class="keyword">pick</span> dac60b4 добавлен адаптив под мобилки
<span class="keyword">pick</span> 55e5017 добавлена логика
<span class="keyword">pick</span> a9593cf правки после код-ревью
<span class="keyword">pick</span> 78aee80 задача сделана

# Rebase 8d1b815..1d1e3dc onto 8d1b815 (5 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
</code></pre>
            <p>
                Из списка команд видно, что мы можем использовать
                <code>squash</code> или <code>fixup</code> для склейки коммитов.
                <span class="attention">Первый пригодится, когда нужно изменить название коммита</span>
                (коммит-месседж), <span class="attention">
					а второй — когда хотите использовать название
					первого коммита</span>.
            </p>
			<p>В итоге, чтобы склеить коммиты, делаем так:</p>
			<pre><code class="language-typescript"><span class="keyword">pick</span> 3dc0ba9 сделана разметка для задачи
<span class="keyword">squash</span> dac60b4 добавлен адаптив под мобилки
<span class="keyword">squash</span> 55e5017 добавлена логика
<span class="keyword">squash</span> a9593cf правки после код-ревью
<span class="keyword">squash</span> 78aee80 задача сделана

# Rebase 8d1b815..1d1e3dc onto 8d1b815 (5 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
</code></pre>
<p>Иначе говоря, в примере выше мы говорим "<span class="attention">используй первый коммит, а остальные приклей к нему</span>". После этого сохраняем файл и закрываем его.</p>
<p>После этого <code>git</code> склеивает коммиты и предлагает ввести новое название для коммита, при этом показывая названия всех склеенных коммитов, из которых мы можем выбрать какой-то один и отредактировать его при необходимости.</p>
<pre><code class="language-typescript"># This is a combination of 5 commits.
# This is the 1st commit message:

сделана разметка для задачи

# This is the commit message #2:

добавлен адаптив под мобилки

# This is the commit message #3:

добавлена логика

# This is the commit message #4:

правки после код-ревью

# This is the commit message #5:

задача сделана

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Sun Jul 9 14:40:08 2023 +0300
#
# interactive rebase in progress; onto bbe72b9
# Last commands done (5 commands done):
#    squash a5a2967 правки после код-ревью
#    squash 1467b3e задача сделана
# No commands remaining.
# You are currently rebasing.
#
# Changes to be committed:
#	modified:   package.json
#</code></pre>
<p>Оставляем только последнее название:</p>
<pre><code class="language-typescript">задача сделана

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Sun Jul 9 14:40:08 2023 +0300
#
# interactive rebase in progress; onto bbe72b9
# Last commands done (5 commands done):
#    squash a5a2967 правки после код-ревью
#    squash 1467b3e задача сделана
# No commands remaining.
# You are currently rebasing.
#
# Changes to be committed:
#	modified:   package.json
#</code></pre>
<p>Сохраняем файл и закрываем его. Видим, что коммиты склеились в один.</p>
<p>Теперь эти изменения необходимо отправить на сервер. Простая отправка через <code>git push</code> не сработает, <code>git</code> выдаст ошибку при попытке отправки данных, т.к. ваша локальная ветка и ветка на сервере отличаются.</p>
<p><span class="attention">Чтобы запушить на сервер все изменения, несмотря на конфликт, запустим команду с флагом <code>--force</code></span>:</p>
<pre><code class="language-typescript">git push <span class="attention">--force</span></code></pre>
<p>Теперь изменения успешно отправились.</p>`,
        selected: false,
        lastUpdate: '02.09.2023',
    },
    {
        title: 'Отмена коммита после отправки его в репозиторий',
        body: `<p>
                Бывают моменты, когда отправили коммит, содержащий ошибку, и его
                нужно откатить. Обычно такое случается, когда в
                <code>master</code> заливаются изменения и падает сборка
                проекта.
            </p>
            <p>
                Для отмены коммита переключаемся на соответствующую ветку и
                используем одну из команд выше.
            </p>
            <p>Отмена последнего коммита:</p>
            <pre><code class="language-typescript">git revert -n HEAD</code></pre>
            <p>Отмена конкретного коммита через его хеш:</p>
            <pre><code class="language-typescript">git revert 99fb0814f8cd10eaeda0c5f89373ee2b42d7fde9</code></pre>
            <p>И не забываем зафиксировать изменения.</p>`,
        selected: false,
        lastUpdate: '03.09.2023',
    },
    // {
    //     title: '',
    //     body: ``,
    //     selected: false,
    //     lastUpdate: '',
    // },
];
