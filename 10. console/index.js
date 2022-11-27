function logConsole(){
  console.log('안녕하세요 최수현입니다.')
}

function assertFunction1(){
  console.assert(document.getElementById("wmakers"), "id='wmakers' 없음");
}
function assertFunction4(){
  let wmakers = {site:"wmakers", domain:"wmakers.com"};
  console.assert(document.getElementById("wmakers"), wmakers);
}
function assertFunction5(){
  let wmakers = ["WMakers", "wmakers.com"];
  console.assert(document.getElementById("wmakers"), wmakers);
}

function clearConsole1(){
  console.clear();
}

function countFunction1(){
  for(i = 0; i < 10; i++){
    console.count();
  }
}
function countFunction4(){
  console.count();
  console.count();
}
function countFunction5(){
  console.count("");
  console.count("");
}
function countFunction6(){
  console.count('wmakers');
  console.count('wmakers');
}

function countResetFunction1(){
  console.count('a');
  console.count('a');
  console.count('a');
  console.count('a');
  console.count('a');
  console.count('a');

  console.countReset('a');
  console.log('Reset')
  console.count('a');
  console.count('a');
  console.count('a');
}
function countResetFunction2(){
  console.count('wmakers');
  console.count('');
  console.count('haksoop');
  console.count('');
  console.count('haksoop');
  console.count('wmakers');
  console.count('');
  console.count('');
  console.count('haksoop');
  console.count('wmakers');
  console.count('wmakers');
  console.countReset('wmakers');
  console.count();
  console.count();
  console.count('');
  console.count('wmakers');
  console.count('wmakers');
  console.countReset('haksoop');
  console.count('haksoop');
  console.count();
  console.count();
  console.count('');
  console.count('haksoop');
  console.count('wmakers');
  console.count('wmakers');
}