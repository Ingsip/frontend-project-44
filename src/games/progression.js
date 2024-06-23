import { game, getRandomNumber } from '../index.js';

const task = 'What number is missing in the progression?';

const arithmeticProgress = (firstNumber, step) => {
  const progressionLength = getRandomNumber(5, 10);
  let progressionNumber = getRandomNumber(1, 20);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += step;
  }
  return progression;
};

const startProgressionGame = () => {
  const firstNumber = getRandomNumber(0, 100);
  const step = getRandomNumber(1, 10);
  const progression = arithmeticProgress(firstNumber, step);
  const randomIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';

  return [progression.join(' '), correctAnswer];
};

export const progressionGame = () => {
  game(startProgressionGame, task);
};
export default progressionGame;
