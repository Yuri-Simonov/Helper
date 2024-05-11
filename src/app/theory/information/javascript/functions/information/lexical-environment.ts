import { IInfo } from '@types';

export const LEXICAL_ENVIRONMENT: IInfo = {
    title: 'Доступ к глобальным переменным внутри функций',
    body: `<p>
            Когда код хочет получить доступ к переменной,
            <span class="attention">
                сначала происходит поиск во внутреннем лексическом окружении,
                затем во внешнем</span
            >, затем в следующем и так далее,
            <span class="attention">пока не дойдет до глобального</span>.
        </p>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
