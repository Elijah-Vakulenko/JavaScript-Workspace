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

const startBtn = document.querySelector("button[data-action-start]")
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".clockface");

class Timer {

    constructor({onTick}) {
        this.isActive = false;
        this.onTick = onTick;
        this.intervalId();
        this.init();
    }

    init() {
        const time = this.getTimeComponent(0);
        this.onTick(time);
    }

    start() {
        if (this.isActive) {
            return
        }
        const startTime = Date.now();
        this.isActive = true;
        
        setInterval(() => {
            const currentTime = Date.now();

            const deltaTime = currentTime - startTime;

            const time = this.getTimeComponent(deltaTime);
       this.onTick(time)
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        const time = this.getTimeComponent(0);
        this.onTick(time);

        this.isActive = false;
    }

    getTimeComponent(time) {
        const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000););
        const minutes = this.pad(Math.floor(time % (1000 * 60 * 60) / (1000 * 60)));
        const hours = this.pad(Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        
        return {hours, minutes, seconds}
    }

    pad(value) {
        return String(value).padStart(2, "0");
    }
}

const timer = new Timer({
    onTick: updateClockFace,
});

startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener("click", timer.stop.bind(timer));

function updateClockFace({ hours, minutes, seconds }) {
    clockface.textContent = `${hours}:${minutes}:${seconds}`;
}

