const push = document.querySelector('.push')
const title = document.querySelector('.title')
const menu = document.querySelector('.menu')
let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let input3 = document.querySelector('.input3')
let checkbox = document.querySelector('.checkbox')
let radio = document.querySelectorAll('.radio')
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

function calculate(a, b, operation) {
    return eval(a + operation + b)
}

push.onclick = () => {
    let a = input1.value;
    let b = input2.value;
    let operation = input3.value;
    title.innerHTML = calculate(a, b, operation)
}