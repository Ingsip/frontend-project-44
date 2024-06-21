import readlineSync from 'readline-sync';

import { startGame, getRandomNumber } from '../index.js';

const getPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

export const gamePrime = () => {
  const name = startGame();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(1, 20);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = (getPrime(number) === true) ? 'yes' : 'no';
    if (correctAnswer.toString() === userAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gamePrime;
