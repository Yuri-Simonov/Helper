import { IInfo } from 'src/app/shared/interfaces';

import { AUTHORIZATION } from './all/authorization';
import { CORS } from './all/cors';
import { BROWSER_PROCESSES } from './all/browser-processes';
import { HTTP_STATUSES } from './all/http-statuses';

export const allOthersInfo: IInfo[] = [{ chapter: 'Прочее' }, AUTHORIZATION, CORS, BROWSER_PROCESSES, HTTP_STATUSES];
