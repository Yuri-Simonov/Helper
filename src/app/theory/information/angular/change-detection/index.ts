import { IInfo } from 'src/app/shared/interfaces';

import { CHANGE_DETECTOR_REF } from './information/change-detector-ref';
import { CHANGE_DETECTION } from './information/change-detection';
import { DETACH_WITH_DETECT_CHANGES } from './information/detach-with-detect-changes';
import { ATTRIBUTE } from './information/attribute';
import { VISUAL_EXAMPLES } from './information/visual-examples';
import { HOST_ATTRIBUTE_TOKEN } from './information/host-attribute-token';
import { UPDATE_VIEW_WITHOUT_ZONE } from './information/update-view-without-zone';

export const changeDetectionInfo: IInfo[] = [
    { chapter: 'Механизм <span class="variable">Change Detection</span>' },
    CHANGE_DETECTION,
    { chapter: 'Управление механизмом <span class="variable">Change Detection</span>' },
    CHANGE_DETECTOR_REF,
    DETACH_WITH_DETECT_CHANGES,
    { chapter: 'Оптимизация механизма <span class="variable">Change Detection</span>' },
    ATTRIBUTE,
    HOST_ATTRIBUTE_TOKEN,
    { chapter: 'Наглядные примеры' },
    VISUAL_EXAMPLES,
    { chapter: 'Прочее' },
    UPDATE_VIEW_WITHOUT_ZONE,
];
