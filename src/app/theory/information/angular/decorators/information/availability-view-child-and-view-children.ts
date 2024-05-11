import { IInfo } from '@types';

export const AVAILABILITY_VIEW_CHILD_AND_VIEW_CHILDREN: IInfo = {
    title: 'Метод жизненного цикла, начиная с которого доступна информация в декораторах <span class="variable">@ViewChild()</span> и <span class="variable">@ViewChildren()</span>',
    body: `<p>
                Т.к. декораторы свойств <code>@ViewChild&#40;&#41;</code> и <code>@ViewChildren&#40;&#41;</code> следят
                за шаблоном текущего компонента, а его представление (представление - шаблон текущего компонента +
                шаблоны дочерних компонентов, которые в нем присутствуют) инициализируется перед вызовом метода
                <code>ngAfterViewInit</code>, следовательно, первые данные появятся именно в этом методе. До него будет
                <code>undefined</code>.
            </p>`,
    selected: false,
    lastUpdate: '14.01.2024',
};
