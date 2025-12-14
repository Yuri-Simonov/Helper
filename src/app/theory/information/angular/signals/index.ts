import { IInfo } from '../../../../shared/interfaces';
import { ABOUT_SIGNALS } from './information/about-signals';
import { COMPUTED } from './information/computed';
import { CONTENT_CHILD_AND_CONTENT_CHILDREN } from './information/contentchild-and-contentchildren';
import { EFFECT } from './information/effect';
import { INPUT } from './information/input';
import { LINKED_SIGNAL } from './information/linked-signal';
import { MODEL } from './information/model';
import { OUTPUT } from './information/output';
import { PRODUCERS_AND_CONSUMERS } from './information/producers-and-consumers';
import { RESOURCE } from './information/resource';
import { SIGNAL } from './information/signal';
import { SIGNALS_UNSUBSCRIBE } from './information/signals-unsubscribe';
import { TO_SIGNAL_AND_TO_OBSERVABLE } from './information/to-signtal-and-to-observable';
import { UNTRACKED } from './information/untracked';
import { VIEW_CHILD_AND_VIEW_CHILDREN } from './information/viewchild-and-viewchildren';

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
    VIEW_CHILD_AND_VIEW_CHILDREN,
    CONTENT_CHILD_AND_CONTENT_CHILDREN,
    { chapter: 'Прочее' },
    SIGNALS_UNSUBSCRIBE,
    TO_SIGNAL_AND_TO_OBSERVABLE,
];
