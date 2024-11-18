import { IInfosAndAnswer } from '../../shared/interfaces';

export const getQuestions = (questions: IInfosAndAnswer[], amount: number = 20): IInfosAndAnswer[] => {
    const finalQuestions: IInfosAndAnswer[] = [];
    const indexes: number[] = generateRandomNumbers(questions, amount);

    indexes.forEach((i) => finalQuestions.push(questions[i]));

    return finalQuestions;
};

const generateRandomNumbers = (questions: IInfosAndAnswer[], amount: number): number[] => {
    const indexes: number[] = [];

    while (indexes.length < amount) {
        const randomNumber: number = Math.floor(Math.random() * questions.length);
        const checkIndexes = indexes.some((item) => item === randomNumber);

        if (!checkIndexes) {
            indexes.push(randomNumber);
        }
    }

    return indexes;
};
