const addPoint = document.getElementById("addPoint");
const myPoint = document.getElementById("myPoint");
const resultPoint = document.getElementById("resultPoint");
const addBtn = document.getElementById("addBtn");
const deductPoint = document.getElementById("deductPoint");
const deductBtn = document.getElementById("deductBtn");

const payAmount = document.getElementById("payAmount");
const payAmount5per = document.getElementById("payAmount5per");
const redeemablePoint = document.getElementById("redeemablePoint");
const finalPayment = document.getElementById("finalPayment");

function addPointSelect(){
  const sel = document.getElementById("pointSelect");
  const val = sel.options[sel.selectedIndex].value;
  const addPoint = document.getElementById("addPoint");
  const pointList = {
    signup: 50000,
    appointmentReview : 30000,
    academyReviewFirst: 20000,
    academyReview: 20000,
    referral: 10000
  }
  addPoint.value = pointList[val];
}

function myPointValue(){
  resultPoint.value = myPoint.value;
}
addBtn.addEventListener("click", function(){
  resultPoint.value = Number(resultPoint.value) + Number(addPoint.value)
})

deductBtn.addEventListener("click", function(){
  if(resultPoint.value === '0') {
    return false
  } else {
    if((Number(resultPoint.value) - Number(deductPoint.value)) < 0){
      resultPoint.value = 0
    }else{
      resultPoint.value = Number(resultPoint.value) - Number(deductPoint.value)
    }
  }
})

function calcPayAmount(){
  let calcPayAmount5per = payAmount.value * 0.05;
  let calcRedeemablePoint = Math.floor(calcPayAmount5per * 0.0001) * 10000;
  payAmount5per.value = calcPayAmount5per;
  if(resultPoint.value < calcRedeemablePoint){
    redeemablePoint.value = 0;
  }else{
    redeemablePoint.value = calcRedeemablePoint;
  }
  finalPayment.value = payAmount.value - redeemablePoint.value;
}