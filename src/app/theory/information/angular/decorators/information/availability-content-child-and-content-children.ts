import { IInfo } from '@types';

export const AVAILABILITY_CONTENT_CHILD_AND_CONTENT_CHILDREN: IInfo = {
    title: 'Метод жизненного цикла, начиная с которого доступна информация в декораторах <span class="variable">@ContentChild()</span> и <span class="variable">@ContentChildren()</span>',
    body: `<p>
                Т.к. декораторы свойств <code>@ContentChild&#40;&#41;</code> и
                <code>@ContentChildren&#40;&#41;</code> следят за содержимым текущего компонента, а оно инициализируется
                перед вызовом метода <code>ngAfterContentInit</code>, следовательно, первые данные появятся именно в
                этом методе. До него будет <code>undefined</code>.
            </p>`,
    selected: false,
    lastUpdate: '10.02.2024',
};
