import { IInfo } from 'src/app/shared/interfaces';

import { EVENT_LOOP } from './information/event-loop';
import { DIFFERENCE_AND_SIMILARITY_BETWEEN_NULL_AND_UNDEFINED } from './information/difference-and-similarity-between-null-and-undefined';
import { DIFFERENCE_BETWEEN_NULLISH_COALESCING_AND_OR_OPERATORS } from './information/difference-between-nullish-coalescing-and-or-operators';

export const othersInfo: IInfo[] = [
    { chapter: 'Прочее' },
    EVENT_LOOP,
    DIFFERENCE_AND_SIMILARITY_BETWEEN_NULL_AND_UNDEFINED,
    DIFFERENCE_BETWEEN_NULLISH_COALESCING_AND_OR_OPERATORS,
];
