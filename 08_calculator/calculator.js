const add = function(num1,num2) {
	let sum = 0;
  sum = num1 += num2
  return sum
};

const subtract = function(num1,num2) {
	let sum = 0;
  sum = num1 -= num2
  return sum
};

const sum = function([...num]) {
  const myArr = num;
  if(myArr !== []){
    return parseInt(myArr.reduce((accu,curr)=>{
      return accu + curr
    },0))
  }else{return 0}
};

const multiply = function([...num]) {
  const myArr = num
  return myArr.reduce((accumulator,currentValue)=>{
    return accumulator * currentValue
  })
};

const power = function(num1,num2) {
	return num1 ** num2
};

const factorial = function(num) {
  let fact = [];
  if(num !== 0){
  for(let i=num;i>=1;i--){
    fact.push(i)
  }return fact.reduce((accumulator,currentvalue)=>{
      return accumulator * currentvalue
  })}else{return 1}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
