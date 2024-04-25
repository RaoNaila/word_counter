import inquirer from "inquirer";
let userAns = await inquirer.prompt({
    name: "words",
    type: "input",
    message: " Hi! please enter your para",
});
let wordCounter = userAns.words.trim().split(" ").length;
console.log(`your paragraph has ${wordCounter} words.`);
