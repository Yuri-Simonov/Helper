import { IInfo } from 'src/app/shared/interfaces';

import { QUIT } from './all/quit';
import { SELECT_COMPANY } from './all/select-company';
import { ABOUT_YOURSELF } from './all/about-yourself';
import { STRENGTHS } from './all/strengths';
import { DEADLINES } from './all/deadlines';
import { TEAM } from './all/team';
import { SELECT_FRONTEND } from './all/select-frontend';
import { UNFAMILIAR_TECHNOLOGY } from './all/unfamiliar-technology';
import { FUTURE_DEVELOPMENT } from './all/future-development';
import { QUESTIONS_FOR_HR } from './all/questions-for-hr';
import { QUESTIONS_FOR_TECHNICAL_SPECIALIST } from './all/questions-for-technical-specialist';
import { WHATS_IMPORTANT } from './all/whats-important';
import { OFFERS } from './all/offers';

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
    FUTURE_DEVELOPMENT,
    WHATS_IMPORTANT,
    OFFERS,
    { chapter: 'Вопросы для HR' },
    QUESTIONS_FOR_HR,
    { chapter: 'Вопросы для технического специалиста' },
    QUESTIONS_FOR_TECHNICAL_SPECIALIST,
];
