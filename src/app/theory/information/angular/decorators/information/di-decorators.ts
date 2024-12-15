import { IInfo } from 'src/app/shared/interfaces';

export const DI_DECORATORS: IInfo = {
    title: 'Декораторы <span class="variable">Dependency Injection</span>',
    body: `<p>
                В Angular существуют 4 декоратора, используемые при внедрении зависимостей:
                <a href="/theory/angular/service#optional" target="_blank"><code>@Optional()</code></a
                >, <a href="/theory/angular/service#self" target="_blank"><code>@Self()</code></a
                >, <a href="/theory/angular/service#skipself" target="_blank"><code>@SkipSelf()</code></a> и <a href="/theory/angular/service#host" target="_blank"><code>@Host()</code></a
                >.
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
