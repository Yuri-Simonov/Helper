import { IInfo } from '../../../../shared/interfaces';
import { ABOUT_SIGNALS } from './information/about-signals';
import { COMPUTED } from './information/computed';
import { EFFECT } from './information/effect';
import { LINKED_SIGNAL } from './information/linked-signal';
import { PRODUCERS_AND_CONSUMERS } from './information/producers-and-consumers';
import { RESOURCE } from './information/resource';
import { SIGNAL } from './information/signal';
import { UNTRACKED } from './information/untracked';

export const signalsInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    ABOUT_SIGNALS,
    PRODUCERS_AND_CONSUMERS,
    { chapter: 'Сигналы' },
    SIGNAL,
    COMPUTED,
    EFFECT,
    RESOURCE,
    UNTRACKED,
    LINKED_SIGNAL,
    // { chapter: 'Прочее' },
];
