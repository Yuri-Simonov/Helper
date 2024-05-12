import { IInfo } from '@types';

import { TYPES_OF_FORMS } from './information/types-of-forms';
import { FORM_INHERITANCE } from './information/form-inheritance';
import { NG_MODEL } from './information/ng-model';
import { TRACKING_CHANGES_IN_REACTIVE_FORMS } from './information/tracking-changes-in-reactive-forms';
import { CREATING_CUSTOM_FORM_FIELD } from './information/creating-custom-form-field';

export const formsInfo: IInfo[] = [
    // { chapter: 'Общие понятия' },

    { chapter: 'Прочее' },
    TYPES_OF_FORMS,
    FORM_INHERITANCE,
    NG_MODEL,
    TRACKING_CHANGES_IN_REACTIVE_FORMS,
    CREATING_CUSTOM_FORM_FIELD,
];
