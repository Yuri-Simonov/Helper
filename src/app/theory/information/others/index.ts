import { IInfo } from 'src/app/shared/interfaces';

import { AUTHORIZATION } from './all/authorization';
import { CORS } from './all/cors';
import { BROWSER_PROCESSES } from './all/browser-processes';

export const allOthersInfo: IInfo[] = [{ chapter: 'Прочее' }, AUTHORIZATION, CORS, BROWSER_PROCESSES];
