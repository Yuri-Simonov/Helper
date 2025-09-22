import { IInfo } from 'src/app/shared/interfaces';

import { CALCULATOR_OBJECT } from './all/calculator-object';
import { FLATTEN_NESTED_ARRAY } from './all/flatten-nested-array';
import { IMPLEMENT_DELAY_FUNCTION } from './all/implement-delay-function';
import { PALINDROME_CHECK } from './all/palindrome-check';
import { GENERATE_RANGES } from './all/generate-ranges';
import { EVENT_BUS } from './all/event-bus';
import { ANAGRAM_CHECK } from './all/anagram-check';

export const allJavaScriptTasks: IInfo[] = [
    { chapter: 'Простые задачи' },
    ANAGRAM_CHECK,
    CALCULATOR_OBJECT,
    IMPLEMENT_DELAY_FUNCTION,
    { chapter: 'Средние задачи' },
    FLATTEN_NESTED_ARRAY,
    PALINDROME_CHECK,
    GENERATE_RANGES,
    { chapter: 'Сложные задачи' },
    EVENT_BUS,
];
