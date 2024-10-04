import { IInfo } from '@types';

export const CREATE_SERVICES: IInfo = {
    title: 'Создание сервиса',
    body: `<p>
                Чтобы создать сервис, можно воспользоваться <code>Angular CLI</code>. Принцип точно такой же, что и для
                других сущностей.
            </p>
            <p>
                Ниже показан пример команды, которая создаст сервис <code>DataService</code> и поместит его в папку
                <code>services</code> на уровне корня проекта:
            </p>
            <pre><code class="language-javascript">ng g s services/data --skip-tests</code></pre>
            <p>
                Если вместе с файлом сервиса необходимо создать еще и файл для его тестирования, то флаг
                <code>--skip-tests</code> нужно убрать из команды выше.
            </p>
            <p>
                Если открыть созданный сервис, то перед нами будет точно такая же картина, что и при создании других
                сущностей с помощью <code>Angular CLI</code>.
            </p>
            <pre><code class="language-typescript">@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor() {}
}</code></pre>
            <p>
                <span class="attention"
                    >Сервисы - это тоже классы, которые имеют свой собственный декоратор, который называется
                    <code>Injectable</code>. Он принимает единственное свойство <code>providedIn</code>, которое
                    определяет на каком уровне будет определен (доступен) данный сервис</span
                >.
            </p>
            <p>
                <code>Angular CLI</code> при создании сервисов по умолчанию для свойства
                <code>providedIn</code> устанавливает значение <code>root</code>. Это значит, что Angular автоматически
                зарегистрирует этот сервис на уровне корня проекта и сделает его доступным в любом месте проекта.
            </p>`,
    selected: false,
    lastUpdate: '04.10.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/oOrI3qm7tK8?t=37',
        },
    ],
};
