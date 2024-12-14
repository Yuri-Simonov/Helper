import { IInfo } from 'src/app/shared/interfaces';

import { DECORATORS_IN_ANGULAR } from './information/decorators-in-angular';
import { DIFFERENCE_BETWEEN_INPUT_AND_OUTPUT } from './information/difference-between-input-and-output';
import { OBJECTS_THROUGH_INPUT } from './information/objects-through-input';
import { OPTIONAL_INPUT_SETTINGS } from './information/optional-input-settings';
import { VIEW_CHILD } from './information/view-child';
import { STATIC_VIEW_CHILD } from './information/static-view-child';
import { VIEW_CHILDREN } from './information/view-children';
import { AVAILABILITY_VIEW_CHILD_AND_VIEW_CHILDREN } from './information/availability-view-child-and-view-children';
import { READ_VIEW_CHILD_AND_VIEW_CHILDREN } from './information/read-view-child-and-view-children';
import { CONTENT_CHILD } from './information/content-child';
import { STATIC_CONTENT_CHILD } from './information/static-content-child';
import { CONTENT_CHILDREN } from './information/content-children';
import { AVAILABILITY_CONTENT_CHILD_AND_CONTENT_CHILDREN } from './information/availability-content-child-and-content-children';
import { READ_CONTENT_CHILD_AND_CONTENT_CHILDREN } from './information/read-content-child-and-content-children';
import { DESCENDANTS_CONTENT_CHILD_AND_CONTENT_CHILDREN } from './information/descendants-content-child-and-content-children';
import { SELF } from './information/self';
import { SKIP_SELF } from './information/skip-self';
import { OPTIONAL } from './information/optional';
import { HOST } from './information/host';
import { BOOTSTRAP_IN_NG_MODULE } from './information/bootstrap-in-ng-module';
import { EXPORT_AS } from './information/export-as';
import { ATTRIBUTE } from './information/attribute';
import { HOST_PROPERTY } from './information/host-property';

export const decoratorsInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    DECORATORS_IN_ANGULAR,
    {
        chapter: 'Декораторы <span class="variable">@Input()</span> и <span class="variable">@Output()</span>',
    },
    DIFFERENCE_BETWEEN_INPUT_AND_OUTPUT,
    OBJECTS_THROUGH_INPUT,
    OPTIONAL_INPUT_SETTINGS,
    {
        chapter:
            'Декораторы <span class="variable">@ViewChild()</span> и <span class="variable">@ViewChildren()</span>',
    },
    VIEW_CHILD,
    STATIC_VIEW_CHILD,
    VIEW_CHILDREN,
    AVAILABILITY_VIEW_CHILD_AND_VIEW_CHILDREN,
    READ_VIEW_CHILD_AND_VIEW_CHILDREN,
    {
        chapter:
            'Декораторы <span class="variable">@ContentChild()</span> и <span class="variable">@ContentChildren()</span>',
    },
    CONTENT_CHILD,
    STATIC_CONTENT_CHILD,
    CONTENT_CHILDREN,
    AVAILABILITY_CONTENT_CHILD_AND_CONTENT_CHILDREN,
    READ_CONTENT_CHILD_AND_CONTENT_CHILDREN,
    DESCENDANTS_CONTENT_CHILD_AND_CONTENT_CHILDREN,
    { chapter: 'Декораторы <span class="variable">Dependency Injection</span>' },
    OPTIONAL,
    SELF,
    SKIP_SELF,
    HOST,
    { chapter: 'Свойства декоратора <span class="variable">@Directive()</span>' },
    HOST_PROPERTY,
    EXPORT_AS,
    { chapter: 'Прочее' },
    ATTRIBUTE,
    BOOTSTRAP_IN_NG_MODULE,
];
