// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
    
//     console.log(result);
// };

// const add = function (x, y) {
//     return x - y;
// }

// const sub = function (x, y) {
//     return x - y;
// }

// doMath(2, 3, add);//5 ()
// doMath(10, 3, sub);//2

// //--------------------------------------------------
// // inline function
// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
    
//     console.log(result);
// };

// doMath(2, 3, function (x, y) {
//     return x + y;
// });

// doMath(10, 8, function (x, y) {
//     return x - y;
// })
//--------------------------
// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//     console.log('click on button' + Date.now());
// };

// buttonRef.addEventListener('click', handleBtnClick);
//-----------------------------------------

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function(item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // Виведе: 138
// console.log(calculateTotalPrice([164, 48, 291])); // Виведе: 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // Виведе: 1116
//---------------------------------------------

// Перебрати масив і якщо число більше за велью додати його в новий масив

// function filterArray(numbers, value) {
//     let filteredArray = [];

//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredArray.push(number);
//         }
//     });

//     return filteredArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // Виведе: [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // Виведе: [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // Виведе: []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // Виведе: [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // Виведе: [24, 41, 76]

//------------------------------------------------------

// СТРІЛОЧНІ ФУНКЦІЇ

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100)); // Виведе: 500
// console.log(calculateTotalPrice(8, 60)); // Виведе: 480
// console.log(calculateTotalPrice(3, 400)); // Виведе: 1200

//-----------------------------------------------------
// РОбИМО РЕФАКТОРИНГ... З ЦІЄЇ
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function(item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// ЦЮ...
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
//--------------------------

// І ЗНОВУ РЕФАКТОРИНГ...
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }
//------------------------

// Використання методів map і flatMap

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]
// Функція dirtyMultiply(array, value) множить кожен елемент масиву array на число value. Вона змінює (мутує) вихідний масив за посиланням.
