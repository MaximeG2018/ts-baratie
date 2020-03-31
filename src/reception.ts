import readline from 'readline';
import chalk from 'chalk';
import KitchenFactory from './factory/KitchenFactory';

import { CommandRegex, Dishsize, DishType } from './constant/constants';

// constants
const multiplier: string = process.argv[2];
const nbCooks: string = process.argv[3];
const time: string = process.argv[4];

// Display
console.log(chalk.magenta('Multiplier for the cooking time of the dish: ' + multiplier));
console.log(chalk.magenta('Number of cooks per kitchen: ' + nbCooks));
console.log(chalk.magenta('Time used by the kitchen stock to replace ingredients: '+ time));

// Functions
const buildCommand = (): RegExp => {
  return new RegExp(`(?<type>${CommandRegex.type}) (?<size>${CommandRegex.size}) x(?<number>${CommandRegex.number})`);
}

const errorBadCommand = (result :RegExpExecArray, command: string) => {
  if (!result) {
       console.log(chalk.red("Sorry but the order is not good: ", command));
       return;
     }
}

const errorBadSize = (size: string) => {
  if(!Object.values(Dishsize).includes(size)) {
    console.log(chalk.red("This size did not exist: ", size));
    return;
  }
}

const errorBadType = (type: string) => {
  if(!Object.values(DishType).includes(type)) {
    console.log(chalk.red("We don't make this dish here: ", type));
    return;
  }
}

const errorInvalidCommande = (result: RegExpExecArray, command: string) => {
  if(result !== null) {

    const { groups } = result;

    errorBadCommand(result, command);
    errorBadSize(groups.size.toUpperCase());
    errorBadType(capitalize(groups.type));

     console.log(chalk.yellow(`Your order ${groups.size} ${groups.type} is being prepared ...`));
     return
  } else {
    console.log(chalk.red("Unknown command ..."));
    return;
  }
}

// Methode => string.capitalize() is not working ...
const capitalize = (string: string): string => {
  if (typeof string !== 'string') return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const rl = readline.createInterface({
  input: process.stdin,
});

// Main
console.log('What is your order ?');
rl.on('line', (input: string) => {

  const commands = input.split(';');
  const formatCommand = buildCommand();

  commands.forEach(command => {
    const result = formatCommand.exec(command);
    errorInvalidCommande(result, command)
  });

});
