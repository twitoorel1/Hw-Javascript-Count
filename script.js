// Var for Btn And Total Number
const plustVar = document.getElementById("btn-up");
const minusVar = document.getElementById("btn-down");
const totalNumbers = document.getElementById("numbers");


// Default Number and number Default in Html
let count = 0;
totalNumbers.innerHTML = count;


// Functions For Plus And Minus Btn
function plusBtn() {
    count++;
    totalNumbers.innerHTML = count;
}

function minusBtn(params) {
    count--;
    totalNumbers.innerHTML = count;
}

// function plusFiveSelected() {
//     count+=5;
//     totalNumbers.innerHTML = count;
//     console.log("object");
// }


// Click Events to Btn
plustVar.addEventListener("click", plusBtn);
minusVar.addEventListener("click", minusBtn);

// ניסיתי לעשות את הבונוס אבל לא הצלחת לא יודע עם זה בגלל הפונקציה או בגלל האירוע שיצרנו
// זה אירוע מסוג
// change