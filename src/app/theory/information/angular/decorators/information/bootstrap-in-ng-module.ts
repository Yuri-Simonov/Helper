import { IInfo } from '@types';

export const BOOTSTRAP_IN_NG_MODULE: IInfo = {
    title: 'Свойство <span class="variable">bootstrap</span> декоратора <span class="variable">@NgModule()</span>',
    body: `<p>
            В свойстве <code>bootstrap</code> указывается компонент, который
            <span class="attention">
                будет использоваться в качестве основного при загрузке модуля.
            </span>
        </p>
        <p>
            Причем только корневой модуль может определять свойство
            <code>bootstrap</code> (а также импортировать модуль, отвечающий за работу приложения в браузере - 
            <code>BrowserModule</code>).
        </p>`,
    selected: false,
    lastUpdate: '14.09.2023',
};
