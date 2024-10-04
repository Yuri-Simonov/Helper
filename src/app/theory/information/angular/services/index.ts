import { IInfo } from '@types';

import { SERVICES_IN_ANGULAR } from './information/services-in-angular';
import { SERVICE_DEFINITION_LAYERS } from './information/service-definition-layers';
import { CREATE_SERVICES } from './information/create-services';
import { SERVICE_IMPLEMENTATION } from './information/service-implementation';

export const servicesInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    SERVICES_IN_ANGULAR,
    CREATE_SERVICES,
    SERVICE_IMPLEMENTATION,
    { chapter: 'Прочее' },
    SERVICE_DEFINITION_LAYERS,
];
