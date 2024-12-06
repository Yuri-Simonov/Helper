import { IInfo } from 'src/app/shared/interfaces';

export const INJECTION_TOKEN: IInfo = {
    title: 'Класс <span class="variable">InjectionToken</span>',
    body: `<p>
                <span class="attention"
                    >Класс <code>InjectionToken</code> - это встроенный класс в Angular, с помощью которого создаются
                    токены</span
                >.
            </p>
            <pre><code class="language-typescript">export const TOKEN = new InjectionToken("TOKEN");</code></pre>
            <p>
                Сам по себе <span class="attention">токен - это просто ключ</span>. Он нужен, чтобы по нему получать
                конкретную зависимость из коллекции зависимостей.
            </p>
            <p>Токены сохраняются в обычную константу.</p>
            <p>
                Также при создании токена можно указать его описание первым параметром. На практике обычно описание
                токена и название константы совпадают. В примере выше это название константы <code>TOKEN</code> и его
                описание "<i>TOKEN</i>".
            </p>
            <p>
                Необязательно называть токен <code>TOKEN</code>. Название константы может быть любым. То же касается и
                его описания. Но на практике обычно добавляют слово <code>TOKEN</code> константе, чтобы лишь глядя на
                название, можно было понять, что это токен.
            </p>
            <pre><code class="language-typescript">export const USER_TOKEN = new InjectionToken('USER_TOKEN');</code></pre>`,
    selected: false,
    lastUpdate: '06.12.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/imUcdrYFTxs?t=277',
        },
    ],
};
