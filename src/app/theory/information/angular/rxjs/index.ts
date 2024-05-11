import { IInfo } from '@types';

import { ABOUT_RXJS } from './information/about-rxjs';
import { HOW_OBSERVABLE_WORKS } from './information/how-observable-works';
import { DIFFERENCE_BETWEEN_OBSERVABLE_AND_PROMISE } from './information/difference-between-observable-and-promise';
import { DIFFERENCE_BETWEEN_OBSERVABLE_AND_ARRAY } from './information/difference-between-observable-and-array';
import { DIFFERENCE_BETWEEN_OBSERVABLE_AND_SUBJECT } from './information/difference-between-observable-and-subject';
import { CONVERTING_PRIMITIVE_TO_OBSERVABLE } from './information/converting-primitive-to-observable';
import { TYPES_OF_SUBJECT } from './information/types-of-subject';
import { WHEN_USE_PIPE } from './information/when-use-pipe';
import { SUBSCRIBE_IN_CONSTRUCTOR } from './information/subscribe-in-constructor';
import { WAYS_TO_UNSUBSCRIBE } from './information/ways-to-unsubscribe';
import { ERROR_HANDLING_METHODS } from './information/error-handling-methods';
import { COLD_AND_HOT_OBSERVABLES } from './information/cold-and-hot-observables';
import { MERGING_OBSERVABLES } from './information/merging-observables';

export const rxjsInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    ABOUT_RXJS,
    HOW_OBSERVABLE_WORKS,
    { chapter: 'Разница между <span class="variable">Observable</span> и другими типами данных' },
    DIFFERENCE_BETWEEN_OBSERVABLE_AND_PROMISE,
    DIFFERENCE_BETWEEN_OBSERVABLE_AND_ARRAY,
    DIFFERENCE_BETWEEN_OBSERVABLE_AND_SUBJECT,
    { chapter: 'Прочее' },
    CONVERTING_PRIMITIVE_TO_OBSERVABLE,
    TYPES_OF_SUBJECT,
    WHEN_USE_PIPE,
    SUBSCRIBE_IN_CONSTRUCTOR,
    WAYS_TO_UNSUBSCRIBE,
    ERROR_HANDLING_METHODS,
    COLD_AND_HOT_OBSERVABLES,
    MERGING_OBSERVABLES,
];
