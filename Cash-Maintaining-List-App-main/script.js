const SenderId = document.getElementById("senderId");
const receiverId = document.getElementById("receiverId");
const amountId = document.getElementById("amountId");
var DateId = document.getElementById("dateId");
var timeId = document.getElementById("timeId");
const purposeId = document.getElementById("purposeId");
const ButtonId = document.getElementById("btnId");
// console.log(DateId.value);

const currentDate = new Date();
DateId.value = currentDate.toDateString();

const currentTime = new Date();
timeId.value = currentTime.toTimeString();

ButtonId.addEventListener("click", () => {
    console.log(SenderId.value);
    console.log(receiverId.value);
    console.log(amountId.value);
    console.log(purposeId.value);
});
