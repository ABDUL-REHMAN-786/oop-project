#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"
console.log(chalk.italic.bold.overline.underline.yellowBright("=================================================================="));
console.log(chalk.italic.bold.magentaBright(                  "            $$$$$$     $$$$$$     $$$$$$$$    $$$$$$$$            "));
console.log(chalk.italic.bold.greenBright(                    "           $$    $$   $$    $$    $$     $$   $$                  "  ));
console.log(chalk.italic.bold.redBright(                      "           $$    $$   $$    $$    $$$$$$$$    $$$$$$$$            "  ));
console.log(chalk.italic.bold.yellowBright(                   "           $$    $$   $$    $$    $$                $$            "  ));
console.log(chalk.italic.bold.cyanBright(                     "            $$$$$$     $$$$$$     $$          $$$$$$$$            "));
console.log(chalk.italic.bold.overline.underline.yellowBright("=================================================================="));

interface Personality {
  personality: string;
}

interface PersonalityQuestion {
  type: string;
  name: string;
  message: string;
  choices: PersonalityChoice[];
}

interface PersonalityChoice {
  name: string;
  value: string;
}

const questions: PersonalityQuestion[] = [
  {
    type: "list",
    name: "personality",
    message: "What is your personality?",
    choices: [
      {
        name: "Introvert (if you are shy and quiet like you don't like to talk to people much)",
        value: "introvert",
      },
      {
        name: "Extrovert (if you are outgoing and like to talk to people)",
        value: "extrovert",
      },
    ],
  },
];

const questions2 = [
  {
    type: "input",
    name: "studentName",
    message: "What is your Name?",
  },
];

const main = async () => {
  while (true) {
    const answers: Personality = await inquirer.prompt(questions);
    const answers2 = await inquirer.prompt(questions2);
    const student = {
      name: answers2.studentName,
      personality: answers.personality,
    };
    console.log(
      `Your name is ${student.name} and your personality type is ${student.personality}`
    );

    const exitAnswer = await inquirer.prompt([
      {
        type: "confirm",
        name: "exit",
        message: "Do you want to exit?",
      },
    ]);

    if (exitAnswer.exit) {
      console.log(chalk.red("Exiting..."));
      break;
    }
  }
};

main();