import { IInfo } from 'src/app/shared/interfaces';

export const INTERACTIVE_REBASE: IInfo = {
    title: 'Склеивание нескольких коммитов в один (интерактивный ребейз)',
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
};
