import { IQuestionsAndAnswer } from '../../shared/types';

export const getQuestions = (questions: IQuestionsAndAnswer[], amount: number = 20): IQuestionsAndAnswer[] => {
    const finalQuestions: IQuestionsAndAnswer[] = [];
    const indexes: number[] = generateRandomNumbers(questions, amount);

    indexes.forEach((i) => {
        finalQuestions.push(questions[i]);
    });

    return finalQuestions;
};

const generateRandomNumbers = (questions: IQuestionsAndAnswer[], amount: number): number[] => {
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
