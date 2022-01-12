const push = document.querySelector('.push')
const title = document.querySelector('.title')
const menu = document.querySelector('.menu')
const div = document.querySelector('.div')
let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let input3 = document.querySelector('.input3')
let checkbox = document.querySelector('.checkbox')
let radio = document.querySelectorAll('.radio')
let select = document.querySelector('.select')
const text = document.querySelectorAll('.text')

// -task1
// function task1(a, b) {
//     return a + b;
// }
// push.onclick = () => {
//     let a = +input1.value;
//     let b = +input2.value;
//     text[0].innerHTML = task1(a, b)
// }



// -task2
// function task2(a, b) {
//     if (a < b) {
//         return a;
//     } else if (b > a) {
//         return b;
//     } else {
//         return 'error';
//     }
// }
// push.onclick = (a, b) => {
//     a = input1.value;
//     b = input2.value;
//     text[0].innerHTML = task2(a, b);
// }

// -task3
// checkbox.onchange = () => {
//     return text[1].innerHTML = checkbox.value
// }

// task4

// push.onclick = () => {

//     filtredChecked()
// }

// function filtredCheked() {
//     text[1].innerHTML = "";
//     for (let i = 0; i < radio.length; i++) {
//         if (radio[i].checked) {
//             text[1].innerHTML += radio[i].value + " ";
//         }
//     }
// }
//
// function filterChecked() {
//     text[0].innerHTML = "";
//     radio.forEach((radio) => {
//         if (!radio.checked) return text[0].innerHTML += radio.value

//     })

// }

// push.onclick = filterChecked
// -task4
// for (let key of radio) {
//     key.onchange = () => {
//         text[0].innerHTML += key.value;
//     }
// }
// -task5

// function calculate() {
//     let a = input1.value;
//     let b = input2.value;
//     let operation = input3.value;
//     let sum = a + operation + b;
//     return eval(sum)
// }
// push.onclick = () => {
//     text[0].innerHTML = calculate();
// }

// -task6

// function calculate(a, b, operation) {
//     return eval(a + operation + b)
// }
// push.onclick = () => {
//     let a = input1.value;
//     let b = input2.value;
//     let operation = input3.value;
//     title.innerHTML = calculate(a, b, operation)
// }

// -task7



// function checkingString(...args) {
//     const numbs = args.forEach((item, index) => {
//         if (typeof item === 'string') return title.innerHTML = index + ' ' + item;
//     })

// }
// push.onclick = () => {
//     checkingString(...testArray)
// }

// -task8

// function checking1(number) {
//     return Math.floor(number);
// }
// function checking2(number) {
//     return Math.ceil(number);
// }

// function rechenge(callback, out) {
//     return out.innerHTML = callback;
// }

// push.onclick = () => {
//     rechenge(checking1(input1.value), text[1]);
//     rechenge(checking2(input2.value), text[2]);
// }

// -task9

// function testing9(number, powNumber) {
//     return Math.pow(number, powNumber);
// }
// function doTesting9(doneNumber) {
//     if (doneNumber % 2 === 0) {
//         title.textContent = doneNumber + ' true';
//     } else {
//         title.textContent = doneNumber + ' false';
//     }
// }
// push.onclick = () => {
//     doTesting9(testing9(input1.value, input2.value))
// }


// -task 10

// function task10(...args) {
//     return args.length
// }

// push.onclick = () => {
//     title.innerHTML = (task10(...testArray))
// }


// /-task 11

// function test11(...args) {
//     return args.reduce((acc, item) => {
//         return acc - item;
//     }, input1.value)
// }

// push.onclick = () => {
//     return title.innerHTML = test11(...testArray);
// }

// -task12

// function test12(a, b, c, d, e, f) {
//     return f = a + b + c + d + e + f;
// }
// push.onclick = () => {
//     return title.textContent = test12(1, 2, 3, 4, 5, 6)
// }

// function test12(...args) {
//     return args.reduce((acc, item) => acc + item)
// }
// push.onclick = () => {
//     title.innerHTML = test12(1, 2, 3, 4, 5, 6, 7)
// }

// -task 13


function randomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

// push.onclick = () => {
//     title.textContent = randomNumber(100, 200);
//     text[0].textContent = randomNumber(100, 200);
//     text[1].textContent = randomNumber(100, 200);
//     text[2].textContent = randomNumber(100, 200);
// -task 14
// push.onclick = () => {
//     // console.log(randomNumber(1, 2))
//     div.style.backgroundColor = `rgb(${randomNumber(0, 255)},${randomNumber(0, 255)},${randomNumber(0, 255)})`
// }

// -task 15

// function task15() {
//     let task = input3.value.trim();
//     if (task.length == 0) {
//         return false + ": " + task;
//     } else {
//         return true + ": " + task;
//     }
// }
// push.onclick = () => {
//     title.textContent = task15()
// }

// -task 16


// function task16(out, callback, text) {
//     out.innerHTML = callback(text);
// }
// function callBack(text) {
//     return text.toLowerCase()
// }

// push.onclick = () => {
//     task16(title, callBack, input3.value)
// }

// -tsk 17


// select.onchange = () => {
//     return title.textContent = select.value;
// }

// -t20

// function getText(out, callback, text) {
//     out.innerHTML = callback(text);
// }
// function callBack(text) {

//     return text.split("").reverse().join("");
// }
// push.onclick = () => {
//     return getText(title, callBack, input3.value)
// }


// -task21


// function gettOddOrEven() {
//     let evenOrOdd = input3.value;
//     if (evenOrOdd === 'odd') {
//         let num = randomNumber(10, 20)
//         console.log(num);
//         if (num !== 10) return gettOddOrEven()
//         console.log(num)
//     } else if (evenOrOdd === 'even') {
//         let num = randomNumber(10, 20)
//         if (num % 2 === 0) return gettOddOrEven()
//         console.log(num)
//     }
// }
// push.onclick = () => {
//     gettOddOrEven()
// }

// --task 22


// function task22(...args) {
//     title.textContent = "";
//     args.forEach((item) => {
//         item % 2 === 0 ? title.textContent += ' ' + item : console.log(item)
//     })
// }

// task22(...testArray)

// --task 23

// function task23() {
//     return Math.pow(randomNumber(2, 2), randomNumber(2, 4))
// }
// console.log(task23())

// --task 25
// let testArray = [8, 2, 4, 22, 66, 2, 2, 1];

// function task26(...args) {
//     title.textContent = 'true';
//     args.forEach(function (arg) {
//         if (arg % 2 !== 0) { title.textContent = 'false'; }
//     })
// }

// task26(...testArray)

// task 26

// function task26(text) {
//     text = input3.value;
//     if (text.length > 0) {
//         title.textContent = text.toLowerCase();
//         console.log(text.length)
//     }
//     else if (text.length === 0) {
//         title.textContent = 'undefined';
//         return
//     }
// }

// push.onclick = () => {
//     task26(text)
// }

// task 27
// let obj = {
//     first: 'Kostia',
//     second: 'Dasha',
//     third: 'Ivan'
// }
// function task27(Name) {
//     for (let key of Object.keys(obj)) {
//         if (obj[key] === Name) title.textContent = 'number of name : ' + key;
//     }
// }
// push.onclick = () => {
//     task27(input3.value)
// }

// task 28 


