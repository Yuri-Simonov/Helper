import { IInfo } from 'src/app/shared/interfaces';

export const GIT_CHERRY_PICK: IInfo = {
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
};
