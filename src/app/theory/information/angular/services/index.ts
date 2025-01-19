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
import { USE_CLASS } from './information/use-class';
import { USE_VALUE } from './information/use-value';
import { USE_FACTORY } from './information/use-factory';
import { USE_EXISTING } from './information/use-existing';
import { INJECTION_TOKEN } from './information/injection-token';
import { DECORATOR_INJECT } from './information/decorator-inject';
import { FUNCTION_INJECT } from './information/function-inject';
import { MULTI } from './information/multi';
import { HOST } from './information/host';
import { OPTIONAL } from './information/optional';
import { SELF } from './information/self';
import { SKIP_SELF } from './information/skip-self';
import { VIEW_PROVIDERS } from './information/view-providers';
import { INJECT_VS_CONSTRUCTOR } from './information/inject-vs-constructor';

export const servicesInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    SERVICES_IN_ANGULAR,
    CREATE_SERVICES,
    REQUEST_DATA,
    { chapter: 'Внедрение зависимостей' },
    SERVICE_IMPLEMENTATION,
    INJECTOR,
    HIERARCHICAL_INJECTORS,
    OPTIONAL,
    SELF,
    SKIP_SELF,
    HOST,
    FUNCTION_INJECT,
    { chapter: 'Регистрация зависимостей' },
    PROVIDING_SERVICES,
    PROVIDERS_METHODS,
    USE_CLASS,
    USE_VALUE,
    USE_FACTORY,
    USE_EXISTING,
    INJECTION_TOKEN,
    DECORATOR_INJECT,
    MULTI,
    VIEW_PROVIDERS,
    { chapter: 'Прочее' },
    INJECT_VS_CONSTRUCTOR,
    PLACE_FOR_REQUESTS,
];
