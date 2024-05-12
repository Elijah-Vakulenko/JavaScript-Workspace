// const beatles = "The Beatles";
// const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]

// localStorage.setItem(beatles, JSON.stringify(musicians));


// const theBestRockBand = localStorage.getItem(beatles);

// console.log(theBestRockBand);
// console.log(JSON.parse(theBestRockBand));

// -----------------------------
    
// localStorage.setItem("str", "Hello world");
// const value = localStorage.getItem("str");

// try {
//     console.log(JSON.parse(value));
// } catch (error) {
//     console.log(error.message);
// }

// console.log("lalala");

//---------------------------------
const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".form-a");

const textarea = form.querySelector("textarea");

form.addEventListener("submit", handleSubmit);
textarea.addEventListener("input", handleInput);

populateTextarea();

// Вывод заполненных полей при сабмите

function handleSubmit(event) {
    event.preventDefault();

    const { email, comment } = event.target.elements;
   
    const emailValue = email.value;
    const commentValue = comment.value;

    console.log({email: emailValue,
    comment: commentValue});

    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

// Отправка введённого в локальное хранилище

function handleInput(event) {
    const comment = event.target.value;
    localStorage.setItem(STORAGE_KEY, comment);
}

// получение данных из локального хранилища при обновлении страницы

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        textarea.value = savedMessage;
    }
}