import { IInfo } from 'src/app/shared/interfaces';

export const RECORD: IInfo = {
    title: '<span class="variable">Record</span>',
    body: `<p>
                Утилита <code>Record</code>
                <span class="attention">создаёт объект с ключами <code>K</code> и значениями <code>T</code></span
                >.
            </p>
            <p>Пример:</p>
            <pre><code class="language-typescript">type Role = 'admin' | 'user';

type RoleMap = Record&lt;Role, string>;</code></pre>
            <p>Результат:</p>
            <pre><code class="language-typescript">{
    admin: string;
    user: string;
}</code></pre>
            <p>Другой пример:</p>
            <pre><code class="language-typescript">type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
    age: number;
    breed: string;
}

const cats: Record&lt;CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};</code></pre>`,
    selected: false,
    lastUpdate: '08.02.2026',
};
