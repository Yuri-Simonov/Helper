import { IInfo } from '@types';

import { LEXICAL_ENVIRONMENT } from './information/lexical-environment';
import { WHERE_FUNCTION_DECLARATION_AVAILABLE } from './information/where-function-declaration-available';
import { CLOSURES } from './information/closures';
import { LEXICAL_ENVIRONMENT_DEPENDENCE } from './information/lexical-environment-dependence';
import { CALL_BIND_APPLY } from './information/call-bind-apply';

export const functionsInfo: IInfo[] = [
    { chapter: 'Лексическое окружение' },
    LEXICAL_ENVIRONMENT,
    LEXICAL_ENVIRONMENT_DEPENDENCE,
    { chapter: 'Прочее' },
    WHERE_FUNCTION_DECLARATION_AVAILABLE,
    CLOSURES,
    CALL_BIND_APPLY,
];
