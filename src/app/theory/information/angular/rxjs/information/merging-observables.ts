import { IInfo } from '@types';

export const MERGING_OBSERVABLES: IInfo = {
    title: 'Объединение несколько потоков в 1 и получение общего результата',
    body: `<p>Для объединения потоков в RxJS есть специальный для этого операторы: <code class="dialog" dialog_angular_rxjs-operators_concat>concat</code>, <code class="dialog" dialog_angular_rxjs-operators_merge>merge</code>, <code class="dialog" dialog_angular_rxjs-operators_zip>zip</code>, <code class="dialog" dialog_angular_rxjs-operators_combine-latest>combineLatest</code> и <code class="dialog" dialog_angular_rxjs-operators_fork-join>forkJoin</code>. Какой из них применять, уже зависит от ожидаемого конечного результата.</p>`,
    selected: false,
    // disabled: true,
    lastUpdate: '05.05.2024',
};
