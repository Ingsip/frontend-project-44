import readlineSync from 'readline-sync';

export const getRandomNumber = (min = 0, max = 20) => {
	const result = Math.floor(Math.random() * (max - min + 1) + min);
	return result;
};

export const runGame = () => {
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}!`);
	return name;

	console.log(task);
};
export default runGame;



