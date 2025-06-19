import { IInfo } from 'src/app/shared/interfaces';

import { TYPES_OF_FORMS } from './information/types-of-forms';
import { CREATING_CUSTOM_FORM_FIELD } from './information/creating-custom-form-field';
import { NG_MODEL_DIRECTIVE } from './information/ng-model-directive';
import { NG_FORM_DIRECTIVE } from './information/ng-form-directive';
import { TRANSFER_OF_CONTROL } from './information/transfer-of-control';
import { FORM_FIELD_STATES } from './information/form-field-states';
import { FORM_CONTROL } from './information/form-control';
import { CUSTOM_SYNCHRONOUS_VALIDATORS } from './information/custom-synchronous-validators';
import { CUSTOM_ASYNCHRONOUS_VALIDATORS } from './information/custom-asynchronous-validators';
import { FORM_GROUP } from './information/form-group';
import { NESTED_FORM_GROUPS } from './information/nested-form-groups';
import { FORM_ARRAY } from './information/form-array';
import { FORM_BUILDER } from './information/form-builder';

export const formsInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    TYPES_OF_FORMS,
    { chapter: 'Шаблонные формы' },
    NG_MODEL_DIRECTIVE,
    NG_FORM_DIRECTIVE,
    TRANSFER_OF_CONTROL,
    { chapter: 'Реактивные формы' },
    FORM_CONTROL,
    CUSTOM_SYNCHRONOUS_VALIDATORS,
    CUSTOM_ASYNCHRONOUS_VALIDATORS,
    FORM_GROUP,
    NESTED_FORM_GROUPS,
    FORM_ARRAY,
    FORM_BUILDER,
    { chapter: 'Прочее' },
    FORM_FIELD_STATES,
    CREATING_CUSTOM_FORM_FIELD,
];
