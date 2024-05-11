import { IInfo } from '@types';

export const INTERACTIONS_BETWEEN_COMPONENTS: IInfo = {
    title: 'Способы взаимодействия между компонентами',
    body: `<p>
            Чтобы передать данные из одного компонента в другой, существуют
            следующие способы:
        </p>
        <ul>
            <li>
                <code>@Input()</code> -
                <span class="attention">
                    позволяет передавать значения дочерним компонентам</span
                >, но только на один уровень иерархии;
            </li>
            <li>
                <code>@Output()</code> -
                <span class="attention">
                    позволяет передавать родителю данные при срабатывании
                    какого-то события</span
                >, но только на один уровень иерархии.
            </li>
            <li>
                <code>@ViewChild()</code> и <code>@ViewChildren()</code> -
                <span class="attention">
                    получают доступ к одному и ко всем дочерним
                    компонентам, удовлетворяющих условию селектора внутри декоратора</span>. С помощью данных декораторов можно получить и изменить (последнее не рекомендуется делать) информацию о свойствах и методах дочерних компонентов.
            </li>
            <li>
                <code>@ContentChild()</code> и <code>@ContentChildren()</code> -
                <span class="attention">
                    получают доступ к содержимому одного и всех дочерних
                    компонентов, удовлетворяющих условию селектора внутри декоратора</span>.
            </li>
            <li>
                Сервисы - своего рода
                <span class="attention">хранилища данных</span>, к которым могут
                обращаться компоненты, директивы и тд.
            </li>
        </ul>`,
    selected: false,
    lastUpdate: '08.02.2024',
    footerLinks: [
        {
            title: '@Input()',
            path: 'https://youtu.be/VUgOLgnBPcs?t=149',
        },
        {
            title: '@Output()',
            path: 'https://youtu.be/VUgOLgnBPcs?t=400',
        },
    ],
};
