import { IInfo } from '../../../../shared/interfaces';
import { ABOUT_SIGNALS } from './information/about-signals';
import { COMPUTED } from './information/computed';
import { EFFECT } from './information/effect';
import { PRODUCERS_AND_CONSUMERS } from './information/producers-and-consumers';
import { RESOURCE } from './information/resource';
import { SIGNAL } from './information/signal';

export const signalsInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    ABOUT_SIGNALS,
    PRODUCERS_AND_CONSUMERS,
    { chapter: 'Сигналы' },
    SIGNAL,
    COMPUTED,
    EFFECT,
    RESOURCE,
    // { chapter: 'Прочее' },
];
