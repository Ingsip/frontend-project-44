import readlineSync from 'readline-sync';
import { startGame, getRandomNumber } from '../index.js';

export const gcdGame = () => {
  const name = startGame();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const nod = (number1, number2) => {
      if (number2 === 0) {
        return number1;
      }
      return nod(number2, number1 % number2);
    };

    const number1 = getRandomNumber(0, 50);
    const number2 = getRandomNumber(0, 50);
    const question = `${number1}  ${number2}`;
    console.log('Question: ', question);
    const answerUser = readlineSync.question('Your answer: ');

    const correctAnswer = nod(number1, number2).toString();
    if (correctAnswer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gcdGame;
