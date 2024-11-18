import { IInfo } from 'src/app/shared/interfaces';

import { DIRECTIVES_IN_ANGULAR } from './information/directives-in-angular';
import { IF } from './information/if';
import { FOR } from './information/for';
import { FOR_OPTIMIZATION } from './information/for-optimization';
import { SWITCH } from './information/switch';
import { CREATING_CUSTOM_STRUCTURAL_DIRECTIVES } from './information/creating-custom-structural-directives';
import { TWO_STRUCTURAL_DIRECTIVES } from './information/two-structural-directives';
import { NG_CLASS } from './information/ng-class';
import { NG_STYLE } from './information/ng-style';
import { CREATING_CUSTOM_ATTRIBUTE_DIRECTIVES } from './information/creating-custom-attribute-directives';
import { DIFFERENCE_BETWEEN_DIRECTIVE_AND_COMPONENT } from './information/difference-between-directive-and-component';
import { DIFFERENCES_BETWEEN_DIRECTIVE_AND_COMPONENT_LIFECYCLE } from './information/differences-between-directive-and-component-lifecycle';

export const directivesInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    DIRECTIVES_IN_ANGULAR,
    { chapter: 'Структурные директивы' },
    IF,
    FOR,
    FOR_OPTIMIZATION,
    SWITCH,
    CREATING_CUSTOM_STRUCTURAL_DIRECTIVES,
    TWO_STRUCTURAL_DIRECTIVES,
    { chapter: 'Атрибутивные директивы' },
    NG_CLASS,
    NG_STYLE,
    CREATING_CUSTOM_ATTRIBUTE_DIRECTIVES,
    { chapter: 'Прочее' },
    DIFFERENCE_BETWEEN_DIRECTIVE_AND_COMPONENT,
    DIFFERENCES_BETWEEN_DIRECTIVE_AND_COMPONENT_LIFECYCLE,
];
