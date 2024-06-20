import readlineSync from 'readline-sync';

import { startGame, getRandomNumber } from '../index.js';

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

export const gameProgression = () => {
  const name = startGame();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(0, 100);
    const step = getRandomNumber(1, 10);
    const progression = arithmeticProgress(firstNumber, step);
    const randomIndex = Math.floor(Math.random() * progression.length);

    const correctAnswer = String(progression[randomIndex]);

    progression[randomIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);

    const answerUser = readlineSync.question('You answer: ');

    if (answerUser === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameProgression;
