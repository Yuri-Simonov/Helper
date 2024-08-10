import { IInfo } from '@types';

import { CHANGE_DETECTOR_REF } from './information/change-detector-ref';
import { CHANGE_DETECTION } from './information/change-detection';
import { DETACH_WITH_DETECT_CHANGES } from './information/detach-with-detect-changes';

export const changeDetectionInfo: IInfo[] = [
    { chapter: 'Механизм <span class="variable">Change Detection</span>' },
    CHANGE_DETECTION,
    { chapter: 'Ручное управление механизмом <span class="variable">Change Detection</span>' },
    CHANGE_DETECTOR_REF,
    DETACH_WITH_DETECT_CHANGES,
];
