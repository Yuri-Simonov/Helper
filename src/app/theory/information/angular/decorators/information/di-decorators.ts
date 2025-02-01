import { IInfo } from 'src/app/shared/interfaces';

export const DI_DECORATORS: IInfo = {
    title: 'Декораторы <span class="variable">Dependency Injection</span>',
    body: `<p>
                В Angular существуют 4 декоратора, используемые при внедрении зависимостей:
                <code class="dialog" dialog_id="optional">@Optional</code>,
                <code class="dialog" dialog_id="self">@Self</code>,
                <code class="dialog" dialog_id="skipSelf">@SkipSelf</code> и
                <code class="dialog" dialog_id="host">@Host</code>.
            </p>
            <p>Для более подробного ознакомления, кликните по нужному вам декоратору.</p>`,
    selected: false,
    lastUpdate: '15.12.2024',
    footerLinks: [
        {
            path: 'https://youtu.be/y9kMzhq2ERM',
        },
    ],
};
