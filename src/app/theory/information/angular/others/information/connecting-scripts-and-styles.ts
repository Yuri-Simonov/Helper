import { IInfo } from '@types';

export const CONNECTING_SCRIPTS_AND_STYLES: IInfo = {
    title: 'Подключение сторонних скриптов и стилей',
    body: `<p>
            Сторонние скрипты и стили должны подключаться в файле
            <span class="attention">angular.json</span>, а не в <span class="attention">index.html</span> как
            это делается в верстке, например.
        </p>
        <i class="subtitle"> Почему именно так? </i>
        <p>
            Важно, чтобы все настройки были в одном месте, а не размазаны по
            всему приложению. Причем файл <span class="attention">angular.json</span> как раз для этого и
            предназначен, т.к.
            <span class="attention">является главным конфигурационным файлом рабочего пространства Angular</span>.
        </p>`,
    selected: false,
    lastUpdate: '05.02.2024',
};
