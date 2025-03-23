import { IInfo } from 'src/app/shared/interfaces';

import { TYPES_OF_FORMS } from './information/types-of-forms';
import { CREATING_CUSTOM_FORM_FIELD } from './information/creating-custom-form-field';
import { NG_MODEL_DIRECTIVE } from './information/ng-model-directive';
import { NG_FORM_DIRECTIVE } from './information/ng-form-directive';
import { TRANSFER_OF_CONTROL } from './information/transfer-of-control';
import { FORM_FIELD_STATES } from './information/form-field-states';

export const formsInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    TYPES_OF_FORMS,
    { chapter: 'Шаблонные формы' },
    NG_MODEL_DIRECTIVE,
    NG_FORM_DIRECTIVE,
    // { chapter: 'Реактивные формы' },
    { chapter: 'Прочее' },
    TRANSFER_OF_CONTROL,
    FORM_FIELD_STATES,
    CREATING_CUSTOM_FORM_FIELD,
];
