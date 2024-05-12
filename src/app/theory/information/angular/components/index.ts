import { IInfo } from '@types';

import { COMPONENTS_IN_ANGULAR } from './information/components-in-angular';
import { COMPONENTS_LIFECYCLE } from './information/components-lifecycle';
import { IMPLEMENTATION_LIFECYCLE_METHODS } from './information/implementation-lifecycle-methods';
import { INTERACTIONS_BETWEEN_COMPONENTS } from './information/interactions-between-components';
import { NG_CONTENT_DO_NOT_CREATE_NEW_CONTENT } from './information/ng-content-do-not-create-new-content';
import { CREATING_CUSTOM_EVENTS } from './information/creating-custom-events';
import { DATA_BINDING_MECHANISMS } from './information/data-binding-mechanisms';
import { NESTED_ATTRIBUTE_PROPERTIES } from './information/nested-attribute-properties';
import { KEY_COMBINATION_EVENTS } from './information/key-combination-events';
import { NG_TEMPLATE } from './information/ng-template';
import { NG_CONTAINER } from './information/ng-container';
import { STANDALONE_COMPONENTS } from './information/standalone-components';
import { STANDALONE_COMPONENTS_IMPORTS } from './information/standalone-components-imports';
import { GETTER_AND_SETTER } from './information/getter-and-setter';
import { UNSUBSCRIBE_IN_ONDESTROY } from './information/unsubscribe-in-ondestroy';
import { DYNAMIC_COMPONENTS } from './information/dynamic-components';

export const componentsInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    COMPONENTS_IN_ANGULAR,
    { chapter: 'Жизненный цикл компонента' },
    COMPONENTS_LIFECYCLE,
    IMPLEMENTATION_LIFECYCLE_METHODS,
    { chapter: 'Взаимодействия между компонентами' },
    INTERACTIONS_BETWEEN_COMPONENTS,
    NG_CONTENT_DO_NOT_CREATE_NEW_CONTENT,
    CREATING_CUSTOM_EVENTS,
    { chapter: 'Манипуляции в шаблоне компонента' },
    DATA_BINDING_MECHANISMS,
    NESTED_ATTRIBUTE_PROPERTIES,
    KEY_COMBINATION_EVENTS,
    NG_TEMPLATE,
    NG_CONTAINER,
    { chapter: '<span class="variable">Standalone</span> компоненты' },
    STANDALONE_COMPONENTS,
    STANDALONE_COMPONENTS_IMPORTS,
    { chapter: 'Прочее' },
    GETTER_AND_SETTER,
    UNSUBSCRIBE_IN_ONDESTROY,
    DYNAMIC_COMPONENTS,
];
