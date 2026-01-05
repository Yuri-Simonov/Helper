import { IInfo } from 'src/app/shared/interfaces';

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
import { CATCH_ERROR } from './information/catch-error';
import { RETRY } from './information/retry';
import { RETRY_WHEN } from './information/retry-when';
import { INTERVAL } from './information/interval';
import { WITH_LATEST_FROM } from './information/with-latest-from';
import { FILTER } from './information/filter';
import { TAKE_UNTIL } from './information/take-until';
import { TAP } from './information/tap';
import { DEBOUNCE_TIME } from './information/debounce-time';
import { DISTINCT_UNTIL_CHANGED } from './information/distinct-until-changed';
import { DISTINCT_UNTIL_KEY_CHANGED } from './information/distinct-until-key-changed';
import { START_WITH } from './information/start-with';
import { THROTTLE_TIME } from './information/throttle-time';
import { FINALIZE } from './information/finalize';
import { SHARE_REPLAY } from './information/share-replay';
import { PAIRWISE } from './information/pairwise';
import { DELAY } from './information/delay';
import { FIRST } from './information/first';
import { OBSERVE_ON } from './information/observe-on';

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
    INTERVAL,
    OF,
    { chapter: 'Операторы объединения (<span class="variable">Join Creation Operators</span>) для созданных потоков' },
    COMBINE_LATEST,
    CONCAT,
    FORK_JOIN,
    MERGE,
    // PARTITION,
    // RACE,
    ZIP,
    { chapter: 'Операторы преобразования (<span class="variable">Transformation Operators</span>)' },
    CONCAT_MAP,
    EXHAUST_MAP,
    MAP,
    MERGE_MAP,
    PAIRWISE,
    SWITCH_MAP,
    { chapter: 'Операторы фильтрации (<span class="variable">Filtering Operators</span>)' },
    DEBOUNCE_TIME,
    DISTINCT_UNTIL_CHANGED,
    DISTINCT_UNTIL_KEY_CHANGED,
    FILTER,
    FIRST,
    TAKE,
    TAKE_UNTIL,
    THROTTLE_TIME,
    {
        chapter:
            'Операторы объединения (<span class="variable">Join operators</span>) (для потоков более высокого порядка)',
    },
    START_WITH,
    WITH_LATEST_FROM,
    { chapter: 'Операторы многоадресной рассылки (<span class="variable">Multicasting Operators</span>)' },
    SHARE_REPLAY,
    { chapter: 'Операторы для обработки ошибок (<span class="variable">Error Handling Operators</span>)' },
    CATCH_ERROR,
    RETRY,
    RETRY_WHEN,
    { chapter: 'Различные полезные операторы (<span class="variable">Utility Operators</span>)' },
    DELAY,
    FINALIZE,
    OBSERVE_ON,
    TAP,
    // { chapter: 'Условные и логические операторы (<span class="variable">Conditional and Boolean Operators</span>)' },
    // {
    //     chapter:
    //         'Математические и агрегатные операторы (<span class="variable">Mathematical and Aggregate Operators</span>)',
    // },
    { chapter: 'Прочее' },
    CREATING_CUSTOM_RXJS_OPERATORS,
];
