import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

//const checkingAnswer = (question, correctAnswer) => {
//console.log(`Question: ${question}`);
//const answerUser = readlineSync.question('Your answer: ');
//if (answerUser === `${correctAnswer}`) {
//  console.log('Correct!');
//  return true;
//}
//console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
//return false;
//}

export { startGame, getRandomNumber };
