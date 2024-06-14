import readlineSync from 'readline-sync';


export const greeting = () => {
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}!`);
};


export const getRandomNumber = (min = 0, max = 20) => {
	const result = Math.floor(Math.random() * (max - min + 1) + min);
	return result;
};

