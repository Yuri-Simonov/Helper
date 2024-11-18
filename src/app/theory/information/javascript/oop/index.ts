import { IInfo } from 'src/app/shared/interfaces';

import { ABSTRACTION } from './information/abstraction';
import { INHERITANCE } from './information/inheritance';
import { POLYMORPHISM } from './information/polymorphism';
import { ENCAPSULATION } from './information/encapsulation';

export const oopInfo: IInfo[] = [
    // { chapter: 'Общие понятия' },
    { chapter: 'Прочее' },
    ABSTRACTION,
    INHERITANCE,
    POLYMORPHISM,
    ENCAPSULATION,
];
