
// Массив обьектов:

// const friends = [
//     { name: 'Phoebe', online: true },
//     { name: 'Joe', online: true },
//     { name: 'Chandler', online: false },
//     { name: 'Rachel', online: true },
//     { name: 'Ross', online: false },
//     { name: 'Monica', online: false },
// ]
// // friends[1].nickName = 'Smelly cat';
// console.table(friends);

// Перебираем массив:
// for (const friend of friends) {
//     console.log(friend.online);
// }
// ------------------------
// Ищем друга по имени:

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.name);

//         if (friend.name === friendName) {
//             return 'We found her/him!!!'
//         }
        
//     }
//     return 'We did not find her/him =('
// }

// console.log(findFriendByName(friends, 'Rachel'));
// console.log(findFriendByName(friends, 'Emmily'));
// -------------------------
//  to get all names

// const getAllNames = function (allFriends) {
//     const names = [];

//     for (const friend of friends) {
//         console.log(friend.name);

//         names.push(friend.name);
//     }
//     console.log(names);
// }

// console.log(getAllNames(friends));
// ----------------------
// let's find friends who is on-line

// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];

//     for (const friend of allFriends) {
//         console.log(friend.online);

//         if (friend.online) {
//             onlineFriends.push(friend)
//         }
//     }
//     return onlineFriends
// }

// console.log(getOnlineFriends(friends));

// -------------------------------
// const getOfflineFriends = function (allFriends) {
//     const offlineFriends = [];

//     for (const friend of allFriends) {
//         console.log(friend.online);

//         if (friend.online === false) {
//             offlineFriends.push(friend)
//         }
// // или
// //         if (!friend.online) {
// //             offlineFriends.push(friend)
// //         }
//     }
//     return offlineFriends
// }

// console.log(getOfflineFriends(friends));
// ------------------------------------------
// separate friends by online status

// const getFriendsByOnlineStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: []
//     };

//     for (const friend of allFriends) {

//         if (friend.online) {
//             friendsByStatus.online.push(friend)
//             continue;
//         }
//         friendsByStatus.offline.push(friend);

//         // const key = friend.online ? 'online' : 'offline';
//         // friendsByStatus[key].push(friend);
//     }

//     return friendsByStatus;
// }
// console.log(getFriendsByOnlineStatus(friends));

// -------------------------
// const x = {
//     a: 1,
//     b: 2,
//     c: 50,
//     d: 100,
// };

// console.log(Object.keys(x).length);

// ----------------

// Items collection in the cart

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) { },
//     remove(productName) { },
//     clear() { },
//     countTotalPrice() { },
//     increaseQuantity(productName) { },
//     decreaseQuantity(productName) { },
// };

// console.table(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'carrot', price: 60 });
// cart.add({ name: 'pumpkin', price: 40 });
// cart.add({ name: 'lemon', price: 50 });
// cart.add({ name: 'strawberry', price: 80 });


// console.table(cart.getItems());


// const stones = [
//     { name: 'diamond', price: 2700, quantity: 3 },
//     { name: 'smaragd', price: 1300, quantity: 4 },
//     { name: 'saphere', price: 400, quantity: 7 },
//     { name: 'stone', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//     let sum = 0;

//     for (const item of stones) {
//         if (item.name === stoneName) { sum += item.price * item.quantity; }
//     }
//     return sum;
// }

// ----------------
const playlist = {
    name: 'My playlist',
    rating: 5,
    tracks: ['1', '2', '3'],

    changeName(newName) {
        playlist.name = newName;
    }
}

