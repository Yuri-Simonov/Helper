import { IInfo } from 'src/app/shared/interfaces';

import { LEXICAL_ENVIRONMENT } from './information/lexical-environment';
import { WHERE_FUNCTION_DECLARATION_AVAILABLE } from './information/where-function-declaration-available';
import { CLOSURES } from './information/closures';
import { LEXICAL_ENVIRONMENT_DEPENDENCE } from './information/lexical-environment-dependence';
import { CALL_BIND_APPLY } from './information/call-bind-apply';
import { PASSING_PARAMETERS_TO_FUNCTION } from './information/passing-parameters-to-function';

export const functionsInfo: IInfo[] = [
    { chapter: 'Лексическое окружение' },
    LEXICAL_ENVIRONMENT,
    LEXICAL_ENVIRONMENT_DEPENDENCE,
    { chapter: 'Прочее' },
    WHERE_FUNCTION_DECLARATION_AVAILABLE,
    CLOSURES,
    PASSING_PARAMETERS_TO_FUNCTION,
    CALL_BIND_APPLY,
];
