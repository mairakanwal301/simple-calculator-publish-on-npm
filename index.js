#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        message: "Enter your firstNumber:",
        type: "number",
        name: "firstNumber"
    },
    { message: "Enter your secondNumber:",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "choose any one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division", "modulus", "exponent"]
    }
]);
// CONDITIONAL STATEMENT..
if (answers.operator === "addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else if (answers.operator === "modulus") {
    console.log(answers.firstNumber % answers.secondNumber);
}
else if (answers.operator === "exponent") {
    console.log(answers.firstNumber ** answers.secondNumber);
}
else {
    console.log("please select your valid operation");
}
