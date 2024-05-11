import { IInfo } from '@types';

export const GIT_CHECKOUT: IInfo = {
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
};
