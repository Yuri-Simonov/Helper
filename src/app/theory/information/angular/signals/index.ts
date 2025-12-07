import { IInfo } from '../../../../shared/interfaces';
import { ABOUT_SIGNALS } from './information/about-signals';
import { COMPUTED } from './information/computed';
import { EFFECT } from './information/effect';
import { INPUT } from './information/input';
import { LINKED_SIGNAL } from './information/linked-signal';
import { MODEL } from './information/model';
import { OUTPUT } from './information/output';
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
    INPUT,
    OUTPUT,
    MODEL,
    // { chapter: 'Прочее' },
];
