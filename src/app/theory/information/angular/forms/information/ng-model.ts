import { IInfo } from 'src/app/shared/interfaces';

export const NG_MODEL: IInfo = {
    title: 'Двустороннее связывание в полях формы',
    body: `<i class="subtitle">Шаблонные формы</i>
        <p>
            Отличительной особенностью полей форм в механизме двухстороннего
            связывания является использование директивы
            <code>NgModel</code>, которая
            <span class="attention"
                >может использоваться только с элементами формы.</span
            >
        </p>
        <pre><code class="language-html">&lt;input type="text" [(ngModel)]="value" /></code></pre>
        <p>
            При изменении значения в инпуте, оно записывается в свойство
            <code>value</code>. Аналогично и наоборот, если значение придет из
            компонента, то оно так же подставится в инпут.
        </p>
        <i class="subtitle">Реактивные формы</i>
        <p><i>В разработке...</i></p>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
