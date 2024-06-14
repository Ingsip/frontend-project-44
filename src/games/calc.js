import readlineSync from 'readline-sync';
import { greeting, getRandomNumber } from '../index.js';
import _ from 'lodash';

export const gamesCalc = () => {
	const name = greeting();
	console.log('What is the result of the expression?');

	for (let i = 0; i < 3; i += 1) {
		const number1 = getRandomNumber();
		const number2 = getRandomNumber();
		const getRandomSymbol = _.sample(['+', '-', '*']);
		const mathExpression = `${number1} ${getRandomSymbol} ${number2}`;
		console.log('Question: ', mathExpression);
		const answerUser = readlineSync.question('Your answer: ');

		const answerCorrectSum = (number1 + number2);
		const answerCorrectMinus = (number1 - number2);
		const answerCorrectMilti = (number1 * number2);


		let opposite;
			if (answerUser != answerCorrectSum && answerUser != answerCorrectMinus) {
				opposite = answerCorrectMilti;
			} else if (answerUser != answerCorrectMilti && answerUser != answerCorrectSum ) {
				opposite = answerCorrectMinus;
			} else {
				opposite = answerCorrectSum;
			} if (answerCorrectSum == answerUser || answerCorrectMinus == answerUser || answerCorrectMilti == answerUser) {
			console.log('Correct!');
		} else {
			console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${opposite}'.`);
			console.log(`Let's try again, ${name}!`);
			return;
		}
	}
	console.log(`Congratulations, ${name}!`);
};
export default gamesCalc;