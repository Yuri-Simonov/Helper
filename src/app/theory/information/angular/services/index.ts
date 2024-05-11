import { IInfo } from '@types';

import { SERVICES_IN_ANGULAR } from './information/services-in-angular';
import { SERVICE_DEFINITION_LAYERS } from './information/service-definition-layers';

export const servicesInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    SERVICES_IN_ANGULAR,
    { chapter: 'Прочее' },
    SERVICE_DEFINITION_LAYERS,
];
