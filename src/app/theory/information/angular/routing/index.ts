import { IInfo } from 'src/app/shared/interfaces';
import { ROUTING_IN_ANGULAR } from './information/routing-in-angular';
import { ROUTES_SEQUENCE } from './information/routes-sequence';
import { TWO_ROUTER_OUTLET } from './information/two-router-outlet';
import { ROUTING_METHODS } from './information/routing-methods';
import { NON_EXISTENT_ROUTES } from './information/non-existent-routes';
import { DYNAMIC_ROUTING_PARAMETERS } from './information/dynamic-routing-parameters';
import { ROUTING_EVENTS } from './information/routing-events';
import { ASYNC_ROUTING } from './information/async-routing';
import { GUARDS } from './information/guards';
import { RESOLVE } from './information/resolve';

export const routingInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    ROUTING_IN_ANGULAR,
    { chapter: 'Маршрутизация' },
    ROUTES_SEQUENCE,
    TWO_ROUTER_OUTLET,
    ROUTING_METHODS,
    NON_EXISTENT_ROUTES,
    DYNAMIC_ROUTING_PARAMETERS,
    ROUTING_EVENTS,
    ASYNC_ROUTING,
    RESOLVE,
    { chapter: 'Права доступа на страницу' },
    GUARDS,
];
