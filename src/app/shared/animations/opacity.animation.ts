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
            ':enter',
            [
                style({
                    opacity: 0,
                    position: 'absolute',
                    width: '100%',
                }),
            ],
            {
                optional: true,
            }
        ),

        query(
            ':leave',
            [
                style({ opacity: 1 }),
                animate(
                    '0.1s',
                    style({
                        opacity: 0,
                        position: 'absolute',
                        width: '100%',
                    })
                ),
            ],
            { optional: true }
        ),

        query(
            ':enter',
            [
                style({ opacity: 0 }),
                animate(
                    '0.2s',
                    style({ opacity: 1, position: 'relative', width: '100%' })
                ),
            ],
            { optional: true }
        ),
    ]),
]);
