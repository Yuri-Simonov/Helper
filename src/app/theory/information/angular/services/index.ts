import { IInfo } from '@types';

import { SERVICES_IN_ANGULAR } from './information/services-in-angular';
import { SERVICE_DEFINITION_LAYERS } from './information/service-definition-layers';
import { CREATE_SERVICES } from './information/create-services';
import { SERVICE_IMPLEMENTATION } from './information/service-implementation';
import { REQUEST_DATA } from './information/request-data';
import { PLACE_FOR_REQUESTS } from './information/place-for-requests';

export const servicesInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    SERVICES_IN_ANGULAR,
    CREATE_SERVICES,
    REQUEST_DATA,
    { chapter: 'Внедрение зависимостей' },
    SERVICE_IMPLEMENTATION,
    { chapter: 'Прочее' },
    SERVICE_DEFINITION_LAYERS,
    PLACE_FOR_REQUESTS,
];
