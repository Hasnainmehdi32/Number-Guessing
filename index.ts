#! /usr/bin/env node 

import inquirer from "inquirer";

// 1) Computer will generate a random number 

// 2) User input for guessing number 

// 3) Compare user input with computer generated number and show result 

const randomNumber = Math.floor(Math.random() * 10 + 1) ;
console.log(randomNumber)

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10 ",
    }
]);

        if(answers.userGuessedNumber === randomNumber ){
            console.log("Congratualation you're guessed right number.")
        }   else{
        console.log("you are guessed wrong number")
        }