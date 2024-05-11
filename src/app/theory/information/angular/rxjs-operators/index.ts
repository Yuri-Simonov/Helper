import { IInfo } from '@types';

import { DEFINING_OPERATORS } from './information/defining-operators';
import { PIPEABLE_OPERATORS } from './information/pipeable-operators';
import { CREATION_OPERATORS } from './information/creation-operators';
import { PIPE_FUNCTION } from './information/pipe-function';
import { HIGHER_ORDER_OBSERVABLES } from './information/higher-order-observables';
import { MARBLE_DIAGRAMS } from './information/marble-diagrams';
import { FROM } from './information/from';
import { FROM_EVENT } from './information/from-event';
import { OF } from './information/of';
import { COMBINE_LATEST } from './information/combine-latest';
import { CONCAT } from './information/concat';
import { FORK_JOIN } from './information/fork-join';
import { MERGE } from './information/merge';
import { PARTITION } from './information/partition';
import { RACE } from './information/race';
import { ZIP } from './information/zip';
import { CONCAT_MAP } from './information/concat-map';
import { EXHAUST_MAP } from './information/exhaust-map';
import { MAP } from './information/map';
import { MERGE_MAP } from './information/merge-map';
import { SWITCH_MAP } from './information/switch-map';
import { TAKE } from './information/take';
import { CREATING_CUSTOM_RXJS_OPERATORS } from './information/creating-custom-rxjs-operators';

export const rxjsOperatorsInfo: IInfo[] = [
    { chapter: 'Общие понятия' },
    DEFINING_OPERATORS,
    PIPEABLE_OPERATORS,
    CREATION_OPERATORS,
    PIPE_FUNCTION,
    HIGHER_ORDER_OBSERVABLES,
    MARBLE_DIAGRAMS,
    { chapter: 'Операторы создания (<span class="variable">Creation Operators</span>)' },
    FROM,
    FROM_EVENT,
    OF,
    { chapter: 'Операторы объединения (<span class="variable">Join Creation Operators</span>) для созданных потоков' },
    COMBINE_LATEST,
    CONCAT,
    FORK_JOIN,
    MERGE,
    PARTITION,
    RACE,
    ZIP,
    { chapter: 'Операторы преобразования (<span class="variable">Transformation Operators</span>)' },
    CONCAT_MAP,
    EXHAUST_MAP,
    MAP,
    MERGE_MAP,
    SWITCH_MAP,
    { chapter: 'Операторы фильтрации (<span class="variable">Filtering Operators</span>)' },
    TAKE,
    {
        chapter:
            'Операторы объединения (<span class="variable">Join operators</span>) (для потоков более высокого порядка)',
    },
    { chapter: 'Операторы многоадресной рассылки (<span class="variable">Multicasting Operators</span>)' },
    { chapter: 'Операторы для обработки ошибок (<span class="variable">Error Handling Operators</span>)' },
    { chapter: 'Различные полезные операторы (<span class="variable">Utility Operators</span>)' },
    { chapter: 'Условные и логические операторы (<span class="variable">Conditional and Boolean Operators</span>)' },
    {
        chapter:
            'Математические и агрегатные операторы (<span class="variable">Mathematical and Aggregate Operators</span>)',
    },
    { chapter: 'Прочее' },
    CREATING_CUSTOM_RXJS_OPERATORS,
];
