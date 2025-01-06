import { IInfo } from 'src/app/shared/interfaces';

import { CALCULATOR_OBJECT } from './all/calculator-object';
import { FLATTEN_NESTED_ARRAY } from './all/flatten-nested-array';
import { IMPLEMENT_DELAY_FUNCTION } from './all/implement-delay-function';
import { PALINDROME_CHECK } from './all/palindrome-check';
import { GENERATE_RANGES } from './all/generate-ranges';

export const allJavaScriptTasks: IInfo[] = [
    { chapter: 'Задачи с собеседований' },
    CALCULATOR_OBJECT,
    FLATTEN_NESTED_ARRAY,
    IMPLEMENT_DELAY_FUNCTION,
    PALINDROME_CHECK,
    GENERATE_RANGES,
];
