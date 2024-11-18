import { IInfo } from 'src/app/shared/interfaces';

import { PROTOTYPE_DEFINITION } from './information/prototype-definition';
import { ADDING_PROPERTY_TO_PROTOTYPE } from './information/adding-property-to-prototype';
import { PROTOTYPE_CHAIN } from './information/prototype-chain';
import { END_OF_PROTOTYPE_CHAIN } from './information/end-of-prototype-chain';
import { DESIGNATING_OBJECT_AS_PROTOTYPE } from './information/designating-object-as-prototype';

export const prototypesInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    PROTOTYPE_DEFINITION,
    { chapter: 'Цепочки прототипов' },
    PROTOTYPE_CHAIN,
    END_OF_PROTOTYPE_CHAIN,
    { chapter: 'Прочее' },
    ADDING_PROPERTY_TO_PROTOTYPE,
    DESIGNATING_OBJECT_AS_PROTOTYPE,
];
