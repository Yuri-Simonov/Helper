import { IInfo } from 'src/app/shared/interfaces';

import { CHANGE_DETECTOR_REF } from './information/change-detector-ref';
import { CHANGE_DETECTION } from './information/change-detection';
import { DETACH_WITH_DETECT_CHANGES } from './information/detach-with-detect-changes';
import { ATTRIBUTE } from './information/attribute';
import { VISUAL_EXAMPLES } from './information/visual-examples';

export const changeDetectionInfo: IInfo[] = [
    { chapter: 'Механизм <span class="variable">Change Detection</span>' },
    CHANGE_DETECTION,
    { chapter: 'Управление механизмом <span class="variable">Change Detection</span>' },
    CHANGE_DETECTOR_REF,
    DETACH_WITH_DETECT_CHANGES,
    { chapter: 'Оптимизация механизма <span class="variable">Change Detection</span>' },
    ATTRIBUTE,
    { chapter: 'Наглядные примеры' },
    VISUAL_EXAMPLES,
];
