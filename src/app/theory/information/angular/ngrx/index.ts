import { IInfo } from '@types';

import { ABOUT_NGRX } from './information/about-ngrx';
import { ACTIONS } from './information/actions';
import { MIXED_TYPES_FOR_ACTIONS } from './information/mixed-types-for-actions';
import { REDUCERS } from './information/reducers';

export const ngrxInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    ABOUT_NGRX,
    { chapter: '<span class="variable">Actions</span>' },
    ACTIONS,
    MIXED_TYPES_FOR_ACTIONS,
    { chapter: 'Прочее' },
    REDUCERS,
];
