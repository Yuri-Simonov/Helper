import { IInfo } from '@types';

export const COMPILATION_MECHANISMS: IInfo = {
    title: 'Механизмы компиляции Angular-приложения',
    body: `<p>
            Начиная с 9-ой версии Angular, механизм
            <code>Angular compile</code> реализован в двух режимах:
        </p>
        <ul>
            <li>
                <span class="attention">JIT-компиляция</span>
                (Just-in-TIme) -
                <span class="attention"
                    >приложение компилируется в момент его запуска в
                    браузере</span
                >. Используется по умолчанию;
            </li>
            <li>
                <span class="attention">AOT-компиляция</span>
                (Ahead-of-Time) -
                <span class="attention"
                    >компиляция происходит в момент сборки приложения</span
                >.
            </li>
        </ul>
        <p>
            В режиме разработки рекомендуется использовать JIT-компиляцию, т.к.
            сборка приложения занимает меньше времени. Если же необходима
            итоговая версия приложения, то рекомендуется использовать
            AOT-компиляцию.
        </p>
        <p>
            При сборке приложения с флагом
            <code>--prod</code> AOT-компиляция используется по умолчанию.
        </p>`,
    selected: false,
    lastUpdate: '05.02.2024',
};
