function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const array = document.querySelector(".array");
const array1 = document.querySelector(".array1");
const array2 = document.querySelector(".array2");
const array3 = document.querySelector(".array3");
const array4 = document.querySelector(".array4");
const array5 = document.querySelector(".array5");
const array6 = document.querySelector(".array6");
const array7 = document.querySelector(".array7");

let a = [];

let sum = 0;
for (let i = 0; i < 30; i++) {
  a.push(rand(5, 25));
}
// a Uzduotis
for (let item of a) {
  console.log(item);

  if (item > 10) {
    sum++;
  }
}
console.log("Skaiciu didesniu uz 10: " + sum);
array.innerHTML = "Skaiciu didesniu uz 10 : " + sum;

// b Uzduotis

let b = Math.max(...a);
console.log("Didziausias skaicius masive: " + b);
array1.innerHTML = " Biggest array number : " + b;
let c = [];

for (let i = 0; i < 30; i++) {
  if (a[i] === b) c.push(i);
}
console.log("Biggest index: " + c);
array2.innerHTML = " Biggest index : " + c;
// c Uzduotis
let d = 0;

for (let i = 0; i < 30; i = i + 2) {
  d += i;
}
console.log("Porinių indeksų reikšmių sumą: " + d);
array3.innerHTML = "Porinių indeksų reikšmių sumą : " + d;

// d Uzduotis

let x = [];
for (let i = 0; i < 30; i++) {
  x.push(a[i] - i);
}
console.log("New array: " + x);

// e Uzduotis

let y = [];

for (let i = 0; i < 10; i++) {
  y.push(rand(5, 25));
}
let z = [...x, ...y];
console.log("New array + 10: " + z);
array4.innerHTML = "New array + 10 position :  " + z;

// f Uzduotis

let odd = [];

let even = [];

for (let i = 1; i < 30; i = i + 2) {
  odd.push(i);
}
for (let i = 2; i < 30; i = i + 2) {
  even.push(i);
}

console.log("Odd array: " + odd);
console.log("Even array: " + even);
array5.innerHTML = "Odd array : " + odd;
array6.innerHTML = "Even array : " + even;

// g Uzduotis

let aArray = [];

for (let i = 0; i < 30; i++) {
  
  let numb = rand(5, 25);
  if (i % 2 === 0 && numb > 15) {
    numb = 0;
  }
  aArray.push(numb);
}

console.log(aArray);
array7.innerHTML = "Array : " + aArray;
