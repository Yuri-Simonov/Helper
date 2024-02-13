import { IQuestionsAndAnswer } from '../../shared/types';

export const getQuestions = (question: IQuestionsAndAnswer[], amount: number = 20): IQuestionsAndAnswer[] => {
    const finalQuestions: IQuestionsAndAnswer[] = [];
    const indexes: number[] = generateRandomNumbers(question, amount);
    indexes.forEach((i) => {
        finalQuestions.push(question[i]);
    });

    return finalQuestions;
};

const generateRandomNumbers = (question: IQuestionsAndAnswer[], amount: number): number[] => {
    const indexes: number[] = [];
    while (indexes.length < amount) {
        const randomNumber: number = Math.round(Math.random() * question.length);
        const checkIndexes = indexes.some((item) => item === randomNumber);
        if (!checkIndexes) {
            indexes.push(randomNumber);
        }
    }
    return indexes;
};
