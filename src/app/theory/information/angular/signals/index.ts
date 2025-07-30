import { IInfo } from '../../../../shared/interfaces';
import { ABOUT_SIGNALS } from './information/about-signals';
import { SIGNAL } from './information/signal';

export const signalsInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    ABOUT_SIGNALS,
    { chapter: 'Изменяемые сигналы' },
    SIGNAL,
];
