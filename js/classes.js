// const fnA = function () {
//     console.log('hello');
// }

// const fnB = fnA;
// console.log('fnB === fnA:', fnB === fnA);



//-------------------------
// THIS THIS THIS
//--------------------------



// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();

//-----------------
// const foo = function () {
//     console.log('foo -> this', this);

// };

// foo();
//-------------------

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// const user = {
//     tag: 'Mango',
// };

// user.showUserTag = showTag;
// console.log('user', user);

//------------------

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

//------------------

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const xyz = user.showTag;
// xyz();

//---------
// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag);

//---------------

// const fn = function () {
//     console.log("fn -> this", this);
// };

// fn();

//-------------------

// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis -> this', this);

//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };

// book.showThis();

// const outerShowThis = book.showThis;
// outerShowThis();

// const outerShowTitle = book.showTitle;
// outerShowTitle();

//---------------

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         this.color = color;
//     };

//     // changeColor();

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     // sweater.updateColor('red');

//     return sweater.updateColor;
// }

// // makeChangeColor();

// const swapColor = makeChangeColor();

// swapColor('blue');

//---------------------

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//     };

//     return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor('yellow');

// const hat = {
//     color: 'blue',
//     updateColor,
// };

// hat.updateColor('orange');

//-----------------

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);



//----------------------
// CALL AND APPLY
//-------------------------


// const showThis = function (...args) {
//     console.log(args);
//     console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };

// showThis.call(objA, 5, 1, 1, 1);
// showThis.apply(objA, [5, 1, 1, 1]);

//-----------------------------

const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;
};

const hat = {
    color: 'black',
};

changeColor.call(hat, 'orange');

console.log(hat);

const sweater = {
    color: 'green',
};



//-----------
// BIND
//--------

const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeHatColor('yellow');
console.log(hat);

changeSweaterColor('red');
console.log(sweater);


