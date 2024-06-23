import { game, getRandomNumber } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const nod = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return nod(number2, number1 % number2);
};

export const startGcdGame = () => {
  const number1 = getRandomNumber(0, 50);
  const number2 = getRandomNumber(0, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = nod(number1, number2).toString();
  return [question, correctAnswer];
};

export const gcdGame = () => {
  game(startGcdGame, task);
};
export default gcdGame;
