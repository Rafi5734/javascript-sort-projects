const SenderId = document.getElementById("senderId");
const receiverId = document.getElementById("receiverId");
const amountId = document.getElementById("amountId");
var DateId = document.getElementById("dateId");
var timeId = document.getElementById("timeId");
const purposeId = document.getElementById("purposeId");
const ButtonId = document.getElementById("btnId");
const tableMain = document.getElementById("main-table");
const tableBody = document.getElementById("table-body");

const currentDate = new Date();
DateId.value = currentDate.toDateString();

const currentTime = new Date();
timeId.value = currentTime.toTimeString();

var amountIdArray = [];

var responsiveValues = 0;

// function dynamicValue(value)
// {
//     for(let i = 0; i < value.length; i++)
// }

ButtonId.addEventListener("click", () => {
    var newTableRow = document.createElement("tr");
    newTableRow.innerHTML = `<th scope="row">${amountIdArray.length + 1}</th>
                        <td>${SenderId.value}</td>
                        <td>${receiverId.value}</td>
                        <td>${DateId.value}</td>
                        <td>${timeId.value}</td>
                        <td>${purposeId.value}</td>
                        <td>${amountId.value}</td>`;
    amountIdArray.push(amountId.value);
    tableBody.appendChild(newTableRow);
    console.log(amountIdArray.length);
});
