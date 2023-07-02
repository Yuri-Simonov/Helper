import {
    trigger,
    animate,
    transition,
    style,
    query,
} from '@angular/animations';

export const opacityAnimation = trigger('opacityAnimation', [
    transition('* => *', [
        query(
            ':enter, :leave',
            style({ position: 'fixed', width: '100%', opacity: 0 }),
            {
                optional: true,
            }
        ),

        query(
            ':leave',
            [
                style({ opacity: 1 }),
                animate(
                    '0.2s',
                    style({
                        opacity: 0,
                    })
                ),
            ],
            { optional: true }
        ),

        query(
            ':enter',
            [
                // style({ opacity: 0 }),
                animate('0.2s', style({ opacity: 1, position: 'relative' })),
            ],
            { optional: true }
        ),
    ]),
]);
