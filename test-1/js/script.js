function checkBrackets() {
  let args = [...arguments];

  args.forEach((item) => {
    let brackets = '()[]{}';
    let bracketsArray = [];

    for (let i = 0; i < item.length; i++) {
      let ind = brackets.indexOf(item[i]);
      if (ind >= 0) {
        bracketsArray.push(item[i]);
      }
    }

    for (let i = bracketsArray.length - 1; i >= 0; i--) {
      if (brackets.indexOf(bracketsArray[i]) % 2) {
        if (brackets.indexOf(bracketsArray[i]) === brackets.indexOf(bracketsArray[i - 1]) + 1) {
          bracketsArray.splice(i - 1, 2);
        }
      }
    }

    if (bracketsArray.length) {
      console.log('KO');
      return 'KO';
    }
    else {
      console.log('OK');
      return 'OK';
    }

  })
}

console.log(`Пример вызовова функций: checkBrackets( '(', '(hello world)' )`);

checkBrackets( '(', '(hello world)' );