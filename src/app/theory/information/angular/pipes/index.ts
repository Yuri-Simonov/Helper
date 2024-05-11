import { IInfo } from '@types';

import { PIPES_IN_ANGULAR } from './information/pipes-in-angular';
import { DIFFERENCE_BETWEEN_PURE_AND_IMPURE } from './information/difference-between-pure-and-impure';
import { CREATING_CUSTOM_PIPES } from './information/creating-custom-pipes';

export const pipesInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    PIPES_IN_ANGULAR,
    { chapter: 'Прочее' },
    DIFFERENCE_BETWEEN_PURE_AND_IMPURE,
    CREATING_CUSTOM_PIPES,
];
