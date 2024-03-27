//const dir = require('../../assets/images/electronics/electronics.json');

//creating a basic array to store the item objects
const items = [];

function loadJSONData(){
    //using fetch to acces json data
    fetch('../../assets/images/electronics/electronics.json')
      .then((response) => response.json())
      .then((json) => {
        json.forEach(processItems); //after recieving the json data process and store it
        feeder(); //once all is done feed the data to the HTML DOM
      });
}

loadJSONData();

function processItems(string) {
    let myArray = string.split(".");
    if (myArray.length == 3 && myArray[2] == 'jpeg') {
        items.push({
            title: myArray[0],
            amount: Number(myArray[1]),
            fileName: string
        });
    } else {
        console.log(`the Naming of ${string} ins't right `);
    }
}


//loading the items in the page
/* const feed = document.getElementsByClassName('feed')[0];*/

function feeder() {
    let i = 0
    for (i = 1; i < items.length; i++) {
        print(items[i]);
    }
}

function print(item) {
    document.getElementById("feed").insertAdjacentHTML("afterend", `<div class="col-8"><div class="card rounded shadow border-0 mb-4">  <div class="row g-0"><div class="col-md-4"><img class="img-fluid rounded-start" src="../../assets/images/electronics/${item.fileName}" style="height:10rem;" alt="Title"/></div><div class="col-md-8">           <div class="card-body"><h4 class="card-title">${item.title}</h4><p class="card-text">Ush ${item.amount}</p><a href="#" data-bs-toggle="modal" data-bs-target="#purchase-modal" class="btn btn-danger" onclick="purchaseNow()">BUY NOW</a><a href="#" class="add-to-cart ms-5 btn btn-primary" onclick="addToCart()">add to Cart</a></div></div></div></div></div>`);
}

//adding to cart

function addToCart(event) {
    if (localStorage.getItem("cartData") == null) {
        localStorage.setItem("cartData", JSON.stringify([]))
    }
    //retrieve
    const prevcartData = JSON.parse(localStorage.getItem("cartData"));
    prevcartData.push({
        title: window.event.target.parentNode.childNodes[0].innerText,
        amount: Number(window.event.target.parentNode.childNodes[1].innerText.split(" ")[1]),
        fileName: window.event.target.parentNode.parentNode.previousSibling.childNodes[0].getAttribute("src")
    })

    //console.log(prevcartData);

    //store
    localStorage.setItem("cartData", JSON.stringify(prevcartData));
}

//adding individual prices to the purchase modal

function purchaseNow(){
    document.getElementById("comfirm-amount").innerHTML = `Ush ${Number(window.event.target.parentNode.childNodes[1].innerText.split(" ")[1])}`;
    //console.log();
}
