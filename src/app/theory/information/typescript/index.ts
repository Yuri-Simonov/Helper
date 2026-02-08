import { IInfo } from '../../../shared/interfaces';

import { ABOUT_UTILITY_TYPES } from './all/about-utility-types';
import { AWAITED } from './all/awaited';
import { EXCLUDE } from './all/exclude';
import { EXTRACT } from './all/extract';
import { NON_NULLABLE } from './all/non-nullable';
import { OMIT } from './all/omit';
import { PARTIAL } from './all/partial';
import { PICK } from './all/pick';
import { READONLY } from './all/readonly';
import { RECORD } from './all/record';
import { REQUIRED } from './all/required';

export const allTypeScriptInfo: IInfo[] = [
    { chapter: 'Утилиты' },
    ABOUT_UTILITY_TYPES,
    PARTIAL,
    REQUIRED,
    READONLY,
    PICK,
    OMIT,
    RECORD,
    AWAITED,
    EXCLUDE,
    EXTRACT,
    NON_NULLABLE,
];
