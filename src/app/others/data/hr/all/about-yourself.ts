import { IInfo } from 'src/app/shared/interfaces';

export const ABOUT_YOURSELF: IInfo = {
    title: 'Расскажите о себе',
    body: `<p>Здесь нужно кратко рассказать о своем опыте во Frontend-разработке.</p>
            <p>Ответить на данный вопрос можно следующим образом:</p>
            <q>
                Я Frontend-разработчик с X годами опыта. В своей работе использую современные технологии, такие как
                Angular (React/Vue), TypeScript, NgRx (Redux), (S)CSS, Karma (Jest), git, GraphQL (и т.д.), а также в свободное
                время стараюсь изучать что-то новое, чтобы углублять свои знания и расширять кругозор. Также есть опыт в
                код-ревью и обучении других разработчиков.
            </q>`,
    selected: false,
    lastUpdate: '06.09.2024',
};
