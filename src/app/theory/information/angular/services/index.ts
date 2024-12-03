import { IInfo } from 'src/app/shared/interfaces';

import { SERVICES_IN_ANGULAR } from './information/services-in-angular';
import { PROVIDING_SERVICES } from './information/providing-services';
import { CREATE_SERVICES } from './information/create-services';
import { SERVICE_IMPLEMENTATION } from './information/service-implementation';
import { REQUEST_DATA } from './information/request-data';
import { PLACE_FOR_REQUESTS } from './information/place-for-requests';
import { INJECTOR } from './information/injector';
import { HIERARCHICAL_INJECTORS } from './information/hierarchical-injectors';
import { PROVIDERS_METHODS } from './information/providers-methods';

export const servicesInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    SERVICES_IN_ANGULAR,
    CREATE_SERVICES,
    REQUEST_DATA,
    { chapter: 'Внедрение зависимостей' },
    SERVICE_IMPLEMENTATION,
    INJECTOR,
    HIERARCHICAL_INJECTORS,
    { chapter: 'Регистрация зависимостей' },
    PROVIDING_SERVICES,
    PROVIDERS_METHODS,
    { chapter: 'Прочее' },
    PLACE_FOR_REQUESTS,
];
