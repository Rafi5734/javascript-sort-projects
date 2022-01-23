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

const displayCartItems = () => {
    const cart = getCart();

    for (const itemName in cart) {
        var newTableRow = document.createElement("tr");
        newTableRow.innerHTML = `<th scope="row">${
            amountIdArray.length + 1
        }</th>
                            <td scope="row">${itemName}</td>
                            `;
        amountIdArray.push(amountId.value);
        tableBody.appendChild(newTableRow);
        // console.log(cart[itemName]);
    }
    // tableBody.innerHTML = tableData;
};

ButtonId.addEventListener("click", () => {
    // var newTableRow = document.createElement("tr");
    // newTableRow.innerHTML = `<th scope="row">${amountIdArray.length + 1}</th>
    //                     <td>${SenderId.value}</td>
    //                     <td>${receiverId.value}</td>
    //                     <td>${DateId.value}</td>
    //                     <td>${timeId.value}</td>
    //                     <td>${purposeId.value}</td>
    //                     <td>${amountId.value}</td>`;
    // amountIdArray.push(amountId.value);
    // tableBody.appendChild(newTableRow);

    // if (
    //     !SenderId.value &&
    //     !receiverId.value &&
    //     !purposeId.value &&
    //     !amountId.value
    // ) {
    //     return;
    // }
    // displayItems();

    displayCartItems();
    addToCart(
        SenderId.value,
        receiverId.value,
        DateId.value,
        purposeId.value,
        amountId.value
    );
    SenderId.value = "";
    receiverId.value = "";
    purposeId.value = "";
    amountId.value = "";
});

const getCart = () => {
    const cart = localStorage.getItem("cart");
    let cartObjs;
    if (cart) {
        cartObjs = JSON.parse(cart);
        console.log(cartObjs);
    } else {
        cartObjs = {};
    }
    return cartObjs;
};

const addToCart = (
    sendName,
    receiverName,
    DateTime,
    purposeName,
    amountMoney
) => {
    const cart = getCart();
    cart[sendName] = sendName;
    cart[receiverName] = 1;
    cart[DateTime] = 1;
    cart[purposeName] = 1;
    cart[amountMoney] = 1;
    const cartToString = JSON.stringify(cart);
    localStorage.setItem("cart", cartToString);
    // console.log(cart);
};
displayCartItems();
// localStorageData();
