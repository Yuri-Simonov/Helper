import { IInfo } from 'src/app/shared/interfaces';

import { CALCULATOR_OBJECT } from './all/calculator-object';
import { FLATTEN_NESTED_ARRAY } from './all/flatten-nested-array';
import { IMPLEMENT_DELAY_FUNCTION } from './all/implement-delay-function';
import { PALINDROME_CHECK } from './all/palindrome-check';
import { GENERATE_RANGES } from './all/generate-ranges';
import { EVENT_BUS } from './all/event-bus';
import { ANAGRAM_CHECK } from './all/anagram-check';
import { REMOVING_DUPLICATES_FROM_ARRAY } from './all/removing-duplicates-from-array';
import { IMPLEMENT_DEBOUNCE } from './all/implement-debounce';
import { PARSING_QUERY_PARAMETERS } from './all/parsing-query-parameters';
import { IMPLEMENT_THROTTLE } from './all/implement-throttle';
import { IS_EQUAL } from './all/is-equal';
import { GROUP_BY } from './all/group-by';
import { FIND_VOWELS_LENGTH } from './all/find-vowels-length';

export const allJavaScriptTasks: IInfo[] = [
    { chapter: 'Простые задачи' },
    ANAGRAM_CHECK,
    PALINDROME_CHECK,
    CALCULATOR_OBJECT,
    IMPLEMENT_DELAY_FUNCTION,
    IMPLEMENT_DEBOUNCE,
    IMPLEMENT_THROTTLE,
    REMOVING_DUPLICATES_FROM_ARRAY,
    PARSING_QUERY_PARAMETERS,
    FIND_VOWELS_LENGTH,
    { chapter: 'Средние задачи' },
    IS_EQUAL,
    GROUP_BY,
    FLATTEN_NESTED_ARRAY,
    GENERATE_RANGES,
    { chapter: 'Сложные задачи' },
    EVENT_BUS,
];
