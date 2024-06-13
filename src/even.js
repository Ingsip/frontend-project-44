import readlineSync from 'readline-sync';

const getRandomNumber = (min = 0, max = 50) => {
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(30);
    console.log('Question: ', number);
    const answerUser = readlineSync.question('Your answer: ');

    const answerCorrect1 = number % 2 === 0 && answerUser === 'yes';
    const answerCorrect2 = number % 2 !== 0 && answerUser === 'no';
    const opposite = (answerUser === 'yes' ? 'no' : 'yes');

    if (answerCorrect1 === true || answerCorrect2 === true) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${opposite}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default greeting;
