function dataType(){
  console.log(' ');
  let dataUndefined;
  let dataNull = null;
  let sym = Symbol();
  let dataArray = [1, '1', true, dataUndefined, dataNull, {'company': 'wmakers'}, sym, 1n];
  console.log(dataArray);
  dataArray.forEach((e) => { console.log(typeof(e));})
  console.log(' ');
  console.log('-------------------------------------');
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pop(){
  console.log(' ');
  console.log(arr);
  arr.pop();
  console.log('arr.pop()');
  console.log(arr);
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function push(){
  console.log(' ');
  console.log(arr);
  arr.push(11);
  console.log('arr.push(11)');
  console.log(arr);
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function unshift(){
  console.log(' ');
  console.log(arr);
  arr.unshift(0);
  console.log('arr.unshift(0)');
  console.log(arr);
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function shift(){
  console.log(' ');
  console.log(arr);
  arr.shift();
  console.log('arr.shift()');
  console.log(arr);
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function splice(){
  console.log(' ');
  console.log(arr);
  arr.splice(5, 2);
  console.log('arr.splice(5, 2)');
  console.log(arr);
  console.log(' ');
  arr.splice(1, 3, 11, 12);
  console.log('arr.splice(1, 3, 11, 12)');
  console.log(arr);
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function slice(){
  console.log(' ');
  console.log(arr);
  let newArr = arr.slice(2, 4);
  console.log('let newArr = arr.slice(2, 4)')
  console.log(newArr);
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function concat(){
  console.log(' ');
  let arr1 = [1, 3, 5, 7];
  let arr2 = [2, 4, 6, 8];
  console.log('let arr1 = [1, 3, 5, 7]');
  console.log('let arr2 = [2, 4, 6, 8]');
  let arr3 = arr2.concat(arr1);
  console.log('let arr3 = arr2.concat(arr1)');
  console.log(arr3);
  console.log(' ');
  console.log('-------------------------------------');
}

function every(){
  console.log(' ');
  console.log(arr);
  let odd = (e) => e % 2 !== 0;
  console.log('let odd = (e) => e % 2 !== 0;');
  console.log('arr.every(odd)');
  console.log('모든 요소 === 참 ? true : false');
  console.log(arr.every(odd));
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function some(){
  console.log(' ');
  console.log(arr);
  let odd = (e) => e % 2 !== 0;
  console.log('let odd = (e) => e % 2 !== 0;');
  console.log('arr.some(odd)');
  console.log('한개라도 참이면 true');
  console.log(arr.some(odd));
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function forEach(){
  console.log(' ');
  console.log(arr);
  console.log('arr.forEach((e) => { console.log(e); })');
  arr.forEach((e) => { console.log(e); });
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function map(){
  console.log(' ');
  console.log(arr);
  let odd = (e) => e % 2 !== 0;
  console.log('let odd = (e) => e % 2 !== 0;');
  let newArr = arr.map(odd);
  console.log('let newArr = arr.map(odd);');
  console.log(newArr);
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function filter(){
  console.log(' ');
  console.log(arr);
  let odd = (e) => e % 2 !== 0;
  console.log('let odd = (e) => e % 2 !== 0;');
  let newArr = arr.filter(odd);
  console.log('let newArr = arr.filter(odd);');
  console.log(newArr);
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function reduce(){
  console.log(' ');
  console.log(arr);
  let newArr = arr.reduce((acc, el, idx, arr) => { return acc + el }, 0 );
  console.log('let newArr = arr.reduce((acc, el, idx, arr) => { return acc + el }, 0 );');
  console.log(newArr);
  console.log(' ');
  console.log(arr);
  let arr1 = ['W', 'M', 'a', 'k', 'e', 'r', 's'];
  console.log("let arr1 = ['W', 'M', 'a', 'k', 'e', 'r', 's']")
  let arr2 = arr1.reduce((acc, el, idx, arr) => { return acc + el }, '' );
  console.log("let arr2 = arr1.reduce((acc, el, idx, arr) => { return acc + el }, '' );");
  console.log(arr2);
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function reverse(){
  console.log(' ');
  console.log(arr);
  arr.reverse();
  console.log('arr.reverse()');
  console.log(arr);
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function sort(){
  console.log(' ');
  let arr1 = [5, 10, 99, 75, 23, 1, 600, 41, 53, 7];
  console.log('let arr1 = [5, 10, 99, 75, 23, 1, 600, 41, 53, 7]');
  arr1.sort();
  console.log('arr1.sort() // 숫자 순서로');
  console.log(arr1);
  console.log(' ');
  arr1.sort((a, b) => a - b);
  console.log('arr1.sort((a, b) => a - b)');
  console.log(arr1);
  console.log(' ');
  arr1.sort((a, b) => b - a);
  console.log('arr1.sort((a, b) => b - a)');
  console.log(arr1);
  console.log(' ');
  let arr2 = ['sort', 'pop', 'push', 'unshift', 'shift', 'concat', 'forEach', 'toString', 'join'];
  console.log("let arr2 = ['sort', 'pop', 'push', 'unshift', 'shift', 'concat', 'forEach', 'toString', 'join']");
  arr2.sort();
  console.log('arr2.sort() // 알파벳 순서로');
  console.log(arr2);
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function tostring(){
  console.log(' ');
  console.log(arr);
  console.log('arr.toString()');
  console.log(arr.toString());
  console.log('typeof(arr.toString())');
  console.log(typeof(arr.toString()));
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function valueof(){
  console.log(' ');
  console.log(arr);
  console.log('arr.valueOf()');
  console.log(arr.valueOf());
  console.log('typeof(arr.valueOf())');
  console.log(typeof(arr.valueOf()));
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function Join(){
  console.log(' ');
  console.log(arr);
  console.log('arr.join()');
  console.log(arr.join());
  console.log('typeof(arr.join())');
  console.log(typeof(arr.join()));
  console.log(' ');
  console.log("arr.join(' || ')");
  console.log(arr.join(' || '));
  console.log(' ');
  console.log('-------------------------------------');
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}