import readlineSync from 'readline-sync';
import { startGame, getRandomNumber } from '../index.js';

export const evenGame = () => {
  const name = startGame();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(1, 20);
    console.log('Question: ', number);
    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
    
    if (correctAnswer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default evenGame;
