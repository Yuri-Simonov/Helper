import { IInfo } from 'src/app/shared/interfaces';

export const GIT_RESET_FLAGS: IInfo = {
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
		идентичны с точки зрения функционала:
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
};
