import readlineSync from 'readline-sync';
import _ from 'lodash';
import { startGame, getRandomNumber } from '../index.js';

export const gameCalc = () => {
  const name = startGame();
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber(1, 10);
    const number2 = getRandomNumber(1, 20);
    const getRandomSymbol = _.sample(['+', '-', '*']);
    const mathExpression = `${number1} ${getRandomSymbol} ${number2}`;
    console.log(`Question: ${mathExpression}`);
    const answerUser = readlineSync.question('Your answer: ');

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
    } if (correctAnswer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameCalc;
