function getNewArr(num) {
  let arr = String(num);
  let odd = 0;
  let even = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      odd++
    }
    else {
      even++;
    }
  }

  if (odd === even) {
    console.log(arr);
    return arr;
  }
  else if (odd > even) {
    for (let i = 0; i < odd - even; i++) {
      if (arr[arr.length - 1] % 2 !== 0) {
        arr = arr.slice(0, -1);
      }
      else if (arr[0] % 2 !== 0) {
        arr = arr.slice(1, arr.length);
      }
    }
    console.log(arr);
    return arr;
  }
  else if (odd < even) {
    for (let i = 0; i < even - odd; i++) {
      if (arr[arr.length - 1] % 2 === 0) {
        arr = arr.slice(0, -1);
      }
      else if (arr[0] % 2 === 0) {
        arr = arr.slice(1, arr.length);
      }
    }
    console.log(arr);
    return arr;
  }

}

console.log('Пример вызовова функций: getNewArr(123)');

getNewArr(123);