import readlineSync from 'readline-sync';
import { startGame, getRandomNumber } from '../index.js';

export const runGame = () => {
  const name = startGame();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    console.log('Question: ', number);
    const answerUser = readlineSync.question('Your answer: ');

    const isEven = (number) => number % 2 === 0;
    const answerCorrect = isEven(number) ? 'yes' : 'no';
    const opposite = answerUser === 'yes' ? 'no' : 'yes';
    if (answerCorrect === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${opposite}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default runGame;
