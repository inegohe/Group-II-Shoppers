//const dir = require('../../assets/images/electronics/dir.json');

const dir = ["40 ltr with freezer Shan Fridge.400000.jpeg", "Apple Watch i10.250000.jpeg", "Apple Watchi30.300000.jpeg", "Benq HiFi Sound Bar.400000.jpeg", "Benu Gas cooker.250000.jpeg", "Bluetooth Sound Bar.600000.jpeg", "Dell Latitude Laptop.780000.jpeg", "Dual Stainless Steel Cooktop.450000.jpeg", "Electrical and Gas Cooker top.480000.jpeg", "Front Load Washing Machine.450000.jpeg", "Gas Cooker.600000.jpeg", "Home theartre.500000.jpeg", "HP aspire Laptop.850000.jpeg", "Legacy MI fit Smart Watch.150000.jpeg", "Legacy soundbar.500000.jpeg", "Lenovo Yoga Notebook.1400000.jpeg", "LG Double Fridge.800000.jpeg", "LG smart Fridge with dual doors.950000.jpeg", "LG UHD TV.970000.jpeg", "Mate black electrical cooktop.200000.jpeg", "Next Gen 5.1 Soundbar.800000.jpeg", "Next Gen 72inch AMOLED TV.3000000.jpeg", "Qing Smart LED TV.1200000.jpeg", "Samsung 50inch curved TV OLED screen.2500000.jpeg", "Samsung Smart Fridge.900000.jpeg", "Samsung’s QLED-display Galaxy Book laptops.800000.jpeg", "Smart Watch.250000.jpeg", "Sony 60inch OLED Smart TV.280000.jpeg", "Vivo 50inch LED TV.130000.jpeg", "Water Dispenser.350000.jpeg", "X84 smartwatch.12000.jpeg"];

//Preparing the json data
let data = JSON.stringify(dir);
//assigning the array from json to dirData
const dirData = JSON.parse(data);

//creating a basic array to store the item objects
const items = [];

//creating the item objects from the dirData and pushing them to the items array
dirData.forEach(processItems);

function processItems(string) {
    let myArray = string.split(".");
    if (myArray.length == 3 && myArray[2] == 'jpeg') {
        items.push({
            title: myArray[0],
            amount: Number(myArray[1]),
            fileName: string
        })
    } else {
        console.log(`the Naming of ${string} ins't right `);
    }
}

console.log(items);

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

console.log(prevcartData);



    //console.log(prevcartData);

    //store
    localStorage.setItem("cartData", JSON.stringify(prevcartData));
}

//adding individual prices to the purchase modal

function purchaseNow(){
    document.getElementById("comfirm-amount").innerHTML = `Ush ${Number(window.event.target.parentNode.childNodes[1].innerText.split(" ")[1])}`;
    //console.log();
}
