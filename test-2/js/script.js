function rpn(arg) {
  arr = arg.split(' ');
  let opr = '+-*/'
  let numCount = 0;
  let oprCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (opr.indexOf(arr[i]) >= 0) {
      oprCount++;
    }
    else {
      numCount++;
      arr[i] = +arr[i];
    }
  }

  if ((numCount - oprCount) > 1) {
    console.log('KO');
    return 'KO';
  }
  else {

    for (let i = 0; i < oprCount; i++) {
      for (let i = 0; i < arr.length; i++) {
        if (opr.indexOf(arr[i]) >= 0 && ( opr.indexOf(arr[i + 1]) < 0 && arr[i + 1] !== undefined )) {
          let currentOpr = arr[i];
          arr.splice(i, 1);
          arr.unshift(eval(arr[0] + currentOpr + arr[1]));
          arr.splice(1, 2);
        }
      }
    }

    for (let i = 0; i < oprCount; i++) {
      if (opr.indexOf(arr[arr.length - 1]) >= 0) {
        let currentOpr = arr[arr.length - 1];
        arr.splice(arr.length - 1, 1);
        arr.unshift(eval(arr[0] + currentOpr + arr[1]));
        arr.splice(1, 2);
      }
    }

  }

  console.log(arr.join());
  return arr.join();
}

console.log(`Пример вызовова функций: rpn('1 2 +')`);

rpn('1 2 +');