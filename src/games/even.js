import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    console.log('Question: ', number);
    const answerUser = readlineSync.question('Your answer: ');

    const answerCorrect = (number % 2 === 0 && answerUser === 'yes') || (number % 2 !== 0 && answerUser === 'no');
    const opposite = (answerUser === 'yes' ? 'no' : 'yes');

    if (answerCorrect === true) {
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
