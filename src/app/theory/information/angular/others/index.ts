import { IInfo } from '@types';

import { ANGULAR_CLI } from './information/angular-cli';
import { MODULES_IN_ANGULAR } from './information/modules-in-angular';
import { COMPILATION_MECHANISMS } from './information/compilation-mechanisms';
import { DEPENDENCY_INJECTION } from './information/dependency-injection';
import { CONNECTING_SCRIPTS_AND_STYLES } from './information/connecting-scripts-and-styles';
import { RENDERER_2 } from './information/renderer-2';
import { SOME_GLOBAL_STYLE_FILES } from './information/some-global-style-files';
import { STYLE_ENCAPSULATION } from './information/style-encapsulation';
import { STYLE_SELECTORS } from './information/style-selectors';

export const othersInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    ANGULAR_CLI,
    MODULES_IN_ANGULAR,
    { chapter: 'Стили' },
    SOME_GLOBAL_STYLE_FILES,
    STYLE_ENCAPSULATION,
    STYLE_SELECTORS,
    { chapter: 'Прочее' },
    COMPILATION_MECHANISMS,
    DEPENDENCY_INJECTION,
    CONNECTING_SCRIPTS_AND_STYLES,
    RENDERER_2,
];
