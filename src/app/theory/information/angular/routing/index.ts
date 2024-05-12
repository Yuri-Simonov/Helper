import { IInfo } from '@types';
import { ROUTING_IN_ANGULAR } from './information/routing-in-angular';
import { ROUTES_SEQUENCE } from './information/routes-sequence';
import { TWO_ROUTER_OUTLET } from './information/two-router-outlet';
import { ROUTING_METHODS } from './information/routing-methods';
import { NON_EXISTENT_ROUTES } from './information/non-existent-routes';
import { DYNAMIC_ROUTING_PARAMETERS } from './information/dynamic-routing-parameters';
import { ROUTING_EVENTS } from './information/routing-events';
import { ASYNC_ROUTING } from './information/async-routing';
import { GUARDS } from './information/guards';

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
    { chapter: 'Права доступа на страницу' },
    GUARDS,
];
