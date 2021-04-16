
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`输入一个大驼峰     `, (str) => {
  let newStr = '';
  for (let i = 1; i < str.length; i++) {
    if (/[A-Z]/g.test(str[i])) {
      newStr += '-';
    }
    newStr += str[i].toLowerCase();
  }
  console.log(str[0].toLowerCase() + newStr);
  rl.close();
});