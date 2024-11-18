import { IInfo } from 'src/app/shared/interfaces';

export const END_OF_PROTOTYPE_CHAIN: IInfo = {
    title: 'Конец цепочки прототипов',
    body: `<p>
            Цепочка заканчивается, если
            <span class="attention">прототип становится равным <code>null</code></span>.
        </p>`,
    selected: false,
    lastUpdate: '09.02.2024',
};
