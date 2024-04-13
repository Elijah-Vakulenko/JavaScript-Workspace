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
 
//------------------------------------------
// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
//-------------------------------------


//Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value, який точно є числом.

//Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// function changeEven(numbers, value) {
//   const newArray = [];

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else {
//       newArray.push(element);
//       }
//   });
    
//     return newArray;

// };

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]

//-----------------------------------------------------------------

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

//-------------------
// В масиві planets зберігаються назви планет.Доповни код таким чином, щоб у змінній planetsLengths вийшов масив, що буде складатися з довжин назв кожної планети з масиву planets.Обов'язково використовуй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);

//-----------------
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

//----------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
//--------------------------------
// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const mappedCourses = students.map(student => student.courses);
// console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// const flattenedCourses = students.flatMap(student => student.courses);
// console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
//----------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(book => book.genres);
//------------------------------------------

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// // до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0  

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// // до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0  

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []
// // до negatibigValues eValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// // Оригінальний масив values не змінився

//------------------------------------------
// Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers, а у змінній oddNumbers — масив непарних.Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

//-------------------------------------
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Mango і Kiwi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Ajax

// У колбек-функції зручно деструктуризувати властивості об'єкта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Poly і Houston
//----------------------------------------------------




