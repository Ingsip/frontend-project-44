import { game, getRandomNumber } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const startEvenGame = () => {
  const number = String(getRandomNumber(1, 20));
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export const evenGame = () => {
  game(startEvenGame, task);
};

export default evenGame;
