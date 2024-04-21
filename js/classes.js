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

// updateCounter(10, counter.increment); //not working
// updateCounter(5, counter.decrement);

// updateCounter(10, counter.increment.bind(counter)); //working
// updateCounter(5, counter.decrement.bind(counter));


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

// const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
// };

// const hat = {
//     color: 'black',
// };

// changeColor.call(hat, 'orange');

// console.log(hat);

// const sweater = {
//     color: 'green',
// };



//-----------
// BIND
//--------

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);


//----------------------
// PROTOTYPES
//--------------------

// const objC = {
//     z: 5,
// };

// // console.log('objC', objC);

// const objB = Object.create(objC);
// objB.y = 2;

// // console.log('objB', objB);

// const objA = Object.create(objB);
// objA.x = 1;

// // console.log('objA',objA);

//--------------------

// const dummyObj = Object.create({ message: 'some text' });

// dummyObj.message = 'own property';

// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);

//-------------

// CONSTRUCTORS CLASSES
//----------------------

// const Car = function (value) {
//     console.log(this);
    
//     this.a = value;
// };

// const myCar = new Car(5);

// console.log(myCar);

// const myCar2 = new Car(10);

// console.log(myCar2);

//---------------

// const Car = function (brand, model, price) {
  
//     this.brand = brand;
//     this.model = model;
//     this.price = price;

// };

// const myCar = new Car('Audi', 'Q3', 35000);
// console.log(myCar);

// const myCar2 = new Car('Audi', 'A6', 65000);
// console.log(myCar2);


//----------------------

// const Car = function (config) {
//   console.log(config);
//     this.brand = config.brand;
//     this.model = config.model;
//     this.price = config.price;

// };

// or
// const Car = function ({ brand, model, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
    
//     this.changePrice = function (newPrice) {
//         this.price = newPrice;
//     };
// };

// console.log(Car.prototype);

// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('Hello :)');
// };

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// }

// console.log(Car.prototype);

// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000});
// console.log(myCar);

// const myCar2 = new Car({
//     brand: 'Audi',
//     model: 'A6',
//     price: 65000});

// console.log(myCar2);


// myCar.sayHi();
// myCar2.sayHi();

// myCar.changePrice(10000);
//---------------------


// const User = function ({ email, password }
//     = {}) {
//     this.email = email;
//     this.password = password;
// };
 
// User.prototype.chanheEmail = function (newMail) {
//     this.email = newMail;
// }

// const mango = new User({ email: 'mango@gmail.com', password: 'qwerty' })

// mango.chanheEmail('my-new-mail@mail.com');
// console.log(mango);

//-------------------

// const objA = {
//     x: 5,
// };

// console.log(objA.__proto__ === Object.prototype);

//-------------

// User.message = 'I am a static property, I dont exist as a part of a prototype.';

// User.logInfo = function (obj) {
//     console.log('User.logInfo -> obj', obj);
//     console.log('Mail:', obj.email);
//     console.log('Password:', obj.password);
// };

// User.logInfo(mango);

// // console.log(Math.round(5.1));
// // console.log(Math.PI);

//--------------------------

// CLASSES
//----------------
// class Car1 {
//     static description = 'AAA';

//     constructor({ brand, model, price } = {}) {
//         console.log(this);
//         this.brand = brand;
//         this._model = model;
//         this.price = price;

//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     };

//     // setModel(newModel) {
//     //     this.model = newModel;
//     // }

//     // getModel() {
//     //     return this.model;
//     // }

//     get model() {
//         return this._model;
//     }
    
//     set model(newModel) {
//         this._model = newModel;
//     }


//     // changeModel(newModel) {
//     //     this.model = newModel;
//     // }
// }

// console.dir(Car1);

// const carInstance = new Car1({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// // carInstance.setModel('Q4');
// console.log(carInstance.model);
// carInstance.model = 'Q4';

//----------------------------------------

class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} gets ${amount} xp`);
        this.xp += amount;
    }
}

class Warrior extends Hero {
    constructor(name, xp, weapon) {
        super(name, xp);
       this.weapon = weapon;
    }
}

const mango = new Warrior({ 'mango', 1000, 'sword' });
console.log(mango);

mango.gainXp(1000);
