#! /usr/bin/env node
import inquirer from 'inquirer';
const number = await inquirer.prompt([
    {
        name: 'userGuessedNumber',
        type: 'number',
        message: 'Please enter number from 1-5:'
    }
]);
const randomNumber = Math.floor(Math.random() * 6);
if (number.userGuessedNumber === randomNumber) {
    console.log(`Congrats! You guessed right number`);
}
else {
    console.log('Sorry, you guessed wrong number');
}
