import { game, getRandomNumber } from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const startPrimeGame = () => {
  const number = getRandomNumber(1, 20);
  const correctAnswer = (getPrime(number) === true) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export const primeGame = () => {
  game(startPrimeGame, task);
};
export default primeGame;
