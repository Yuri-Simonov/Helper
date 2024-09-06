import { IInfo } from '@types';

import { QUIT } from './all/quit';
import { SELECT_COMPANY } from './all/select-company';
import { ABOUT_YOURSELF } from './all/about-yourself';
import { STRENGTHS } from './all/strengths';
import { DEADLINES } from './all/deadlines';
import { TEAM } from './all/team';
import { SELECT_FRONTEND } from './all/select-frontend';
import { UNFAMILIAR_TECHNOLOGY } from './all/unfamiliar-technology';

export const allOthersData: IInfo[] = [
    { chapter: 'Вопросы от HR' },
    QUIT,
    SELECT_COMPANY,
    ABOUT_YOURSELF,
    STRENGTHS,
    DEADLINES,
    TEAM,
    SELECT_FRONTEND,
    UNFAMILIAR_TECHNOLOGY,
    { chapter: 'Вопросы для HR' },
    { chapter: 'Вопросы для технического специалиста' },
];
