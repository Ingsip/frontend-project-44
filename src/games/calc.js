import _ from 'lodash';
import { game, getRandomNumber } from '../index.js';

const task = 'What is the result of the expression?';

export const startCalcGame = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 20);
  const getRandomSymbol = _.sample(['+', '-', '*']);
  const question = `${number1} ${getRandomSymbol} ${number2}`;

  let correctAnswer;
  switch (getRandomSymbol) {
    case '+':
      correctAnswer = (number1 + number2).toString();
      break;
    case '-':
      correctAnswer = (number1 - number2).toString();
      break;
    case '*':
      correctAnswer = (number1 * number2).toString();
      break;
    default:
  }
  return [question, correctAnswer];
};

export const calcGame = () => {
  game(startCalcGame, task);
};
export default calcGame;
