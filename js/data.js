// console.log("before");
// setTimeout(() => { console.log("timeout 1"); }, 2000);
// setTimeout(() => { console.log("timeout 2"); }, 1000);
// console.log("after");

//----------------------------

// const logger = ({name, age}) => {
//     console.log(`Hello ${name}, ${age}`);
// }

// const timeoutId = setTimeout(logger, 2000, {name: "Kate", age: 30});

// clearTimeout(timeoutId);

//-----------------

// for (let i = 0; i > 0; i--){
//     const delay = i * 1000;
//     setTimeout(() => {
//         console.log(i);
//     }, delay)
// }

//------

// const logger = (name) => {
//     console.log(`Hello ${name}`);
// }


// console.log("before");
// setInterval(logger, 1500, "Alice");
// console.log("after");

// //-----------
// const intervalId = setInterval(logger, 1500, "Alice");
// clearInterval(intervalId);

//-------------------

// const notification = document.querySelector(".js-alert");
// let timeoutId = null;
// notification.addEventListener("click".onNotificationClick);

// showNotification();


// function showNotification() {
//     notification.classList.add("is-visible");

//     timeoutId = setTimeout(() => {
//         console.log("hide");
//         hideNotification();
//     }, 3000)

// }

// function onNotificationClick() {
//     hideNotification();
//     clearTimeout(timeoutId);
// }

// function hideNotification() {
//      notification.classList.remove("is-visible");
// }

//-------------------

// const currentDate = new Date();

// console.log(currentDate.getDate());
// console.log(currentDate.getDay());
// console.log(currentDate.getMonth());
// console.log(currentDate.getFullYear());
// console.log(currentDate.setFullYear(2010));


// console.log(Date.now());
//---------
// const date1 = Date.now();

// setTimeout(() => {
//     const date2 = Date.now();
//     const delta = date2 - date1;
//     console.log(delta);
// }, 2000)
//---------

// const startBtn = document.querySelector("button[data-action-start]")
// const stopBtn = document.querySelector("button[data-action-stop]");
// const clockface = document.querySelector(".clockface");

// class Timer {

//     constructor({onTick}) {
//         this.isActive = false;
//         this.onTick = onTick;
//         this.intervalId();
//         this.init();
//     }

//     init() {
//         const time = this.getTimeComponent(0);
//         this.onTick(time);
//     }

//     start() {
//         if (this.isActive) {
//             return
//         }
//         const startTime = Date.now();
//         this.isActive = true;
        
//         setInterval(() => {
//             const currentTime = Date.now();

//             const deltaTime = currentTime - startTime;

//             const time = this.getTimeComponent(deltaTime);
//        this.onTick(time)
//         }, 1000)
//     }

//     stop() {
//         clearInterval(this.intervalId);
//         const time = this.getTimeComponent(0);
//         this.onTick(time);

//         this.isActive = false;
//     }

//     getTimeComponent(time) {
//         const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000););
//         const minutes = this.pad(Math.floor(time % (1000 * 60 * 60) / (1000 * 60)));
//         const hours = this.pad(Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        
//         return {hours, minutes, seconds}
//     }

//     pad(value) {
//         return String(value).padStart(2, "0");
//     }
// }

// const timer = new Timer({
//     onTick: updateClockFace,
// });

// startBtn.addEventListener('click', timer.start.bind(timer));
// stopBtn.addEventListener("click", timer.stop.bind(timer));

// function updateClockFace({ hours, minutes, seconds }) {
//     clockface.textContent = `${hours}:${minutes}:${seconds}`;
// }

//--------------------------------------

const prom = new Promise((resolve, reject) => {
    const random = Math.random();

    setTimeout(() => {
        if (random > 0.5) {
            resolve("fulfield");
        } else {
            reject("rejected");
        }
    }, 3000)
});

console.log(prom);

//-------------

prom

    .then((data) => {
        console.log("then", data);
    })

    .catch((error) => {
        console.log("catch", error);
    })

    .finally(() => console.log("finally"));

    //-----------------

const lalala = new Promise((resolve, reject) => {
        resolve(5)
})
    
lalala
    .then(res => {
        console.log(res);
        return res * 2;
    })
    .then(data => {
        console.log(data);
        return data + 1;

    })
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => { })
    
    //--------
const promise = new Promise((resolve) => {
        resolve(10)
})
    
promise
    .then(value => {
        return new Promise((resolve) => {
            resolve(value * 2)
        })
    })
    .then(value => console.log(value))

//---------------

console.log("step 1");

setTimeout(() => {
    console.log("step 2");
}, 0)

new Promise((resolve) => {
    resolve("step 3")
})
    .then(data => console.log(data))

setTimeout(() => {
    console.log("step 4");
});

//--------------

const makeOrder = (dish, onSuccess, onError) => {
    const random = Math.random();

    setTimeout(() => {
        if (random > 0.5) {
            onSuccess(`your order ${dish}`)
        } else {
            onError("item is out of stock");
        }
    }, 1000);
}

makeOrder(
    "Pie",
    (str) => console.log(str);
    (error) => console.log(error);
)

//------------------------------

const makeOrder = (dish) => {
    return new Promise((resolve, reject) => {
        const random = Math.random();

        setTimeout(() => {
            if (random > 0.5) {
               resolve (`your order ${dish}`)
            } else {
                reject ("the item is out of stock")
           }
        }, 1000);
    })
}

makeOrder("Pie")
    .then(data => console.log(data))
    .catch(error => console.log(error);)

    //---------------

const makeOrder = (dish) => {
    const random = Math.random();

    if (random > 0.5) {
            return Promise.resolve(`your order ${dish}`)
    } else {
        return Promise.reject("item is out of stock")
        }
}

makeOrder("Pie")
.then(data => console.log(res))
    .catch(error => console.log(error);)


    //----------------



const data1 = Date.now()

const res1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const date2 = Date.now()
            const delta = date2 - date1;

            resolve({title: "first", time: delta})
        }, 2000);
    })
}

const res2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const date2 = Date.now()
            const delta = date2 - date1;

            // resolve({ title: "second", time: delta })
            reject("error lalala")
        }, 1000);
    })
}

const res3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const date2 = Date.now()
            const delta = date2 - date1;

            resolve({title: "third", time: delta})
        }, 1500);
    })
}

Promise.all([res1(), res2(), res3()])
    .then(data => console.log(data))
    .catch(error => console.log("error", error));

    //---------------

Promise.race([res1(), res2(), res3()])
    .then(lalala => console.log(lalala))
    .catch(error => console.log(error));

    //--------------------

const startBtn = document.querySelector(".start-btn");
const contaoner = document.querySelector(".container");
const result = document.querySelector(".result");

startBtn.addEventListener('click', handleStart);

function handleStart() {

    startBtn.disabled = true;
    result.innerHTML = "";
    
    const promises = [...container.children].map(() => {
        return new Promise((resolve, reject) => {
            const random = Math.random();
            if (random > 0.5) {
                resolve('0_0')
            } else {
                reject('=P');
            }
        })
    })

    Promise.allSettled(promises)
        .then(data => {

            const isWinner =
                data.every((item) => item.status === "fulfilled") ||
                data.every((item) => item.status === "rejected") 
            
            result.innerHTML = isWinner ? "Winner" : "Loser";

            data.forEach((item, i) => {

                container.children[i].textContent = "";

                setTimeout(() => {
                    container.children[i].textContent = item.value || item.reason;

                    if (i === data.length - 1) {
                        result.innerHTML = isWinner ? "Winner" : "Loser";
                        startBtn.disabled = false;
                    }
                     
                }, 1000 * (i + 1));
                
               
                
                // container.children[i].textContent = item.value || item.reason;
            })
        })
    
    
    new Promise((resolve, reject) => {

    })
}

