/**
 * This script uses the fetch API to retrieve data from a json file
 * processes it based on the string data stored in the diferent file names
 * and stores it as an accessible object-array style in the browsers local
 * storage.
 * 
 * This stored data is then read by a feeder function that calls onto a print
 * function to perse this data item per item in html markup format to the DOM
 * 
 * Later on with the users interactions on the DOM some items can be added to
 * cart for later processing. This consequently calls for initialization of 
 * another storage unit in the browser to store this new information.
 */



// Creating a basic array to store the item objects
const items = [];

function loadJSONData () {

  // Using fetch to acces json data
  fetch('../../assets/images/electronics/electronics.json')
    .then((response) => response.json())
    .then((json) => {

      // After recieving the json data process and store it
      json.forEach(processItems);

      // Once all is done feed the data to the HTML DOM
      feeder();

    });
}

loadJSONData();

function processItems (string) {
  const myArray = string.split('.');

  if ((myArray.length == 3) && (myArray[2] == "jpeg")) {
    items.push({
      title: myArray[0],
      amount: Number(myArray[1]),
      fileName: string

    });
  } else {
    console.log(`the Naming of ${string} ins't right `);
  }
}

// Function for loading the items in the page
function feeder () {
  items.forEach((item) => print(item));
}

/**
 * print() sends HTML code with details from the passed in item object
 * in our case the one with the title, amout and location strings of the
 * item to be printed.
 * NOTE: this cannot take on more than one object at a time
 */
function print(item) {
  document.
  getElementById('feed').
  insertAdjacentHTML(
      'afterend',
      `<div class="col-8"><div class="card rounded shadow border-0 mb-4">  <div class="row g-0"><div class="col-md-4"><img class="img-fluid rounded-start" src="../../assets/images/electronics/${item.fileName}" style="height:10rem;" alt="Title"/></div><div class="col-md-8">           <div class="card-body"><h4 class="card-title">${item.title}</h4><p class="card-text">Ush ${item.amount}</p><a href="#" data-bs-toggle="modal" data-bs-target="#purchase-modal" class="btn btn-danger" onclick="purchaseNow()">BUY NOW</a><a href="#" class="add-to-cart ms-5 btn btn-primary" onclick="addToCart()">add to Cart</a></div></div></div></div></div>`
    );
}

// Function for adding items to cart
function addToCart (event) {
  if (localStorage.getItem('cartData') == null) {
    localStorage.setItem(
        'cartData', 
        JSON.stringify([])
        );
  }

  // Retrieve the items already in the cart
  const prevcartData = JSON.parse(localStorage.getItem('cartData'));
  prevcartData.push({
    title: window.event.target.parentNode.childNodes[0].innerText,
    amount: Number(
      window.event.target.parentNode.childNodes[1].innerText.
      split(" ")[1]
    ),
    fileName:
      window.event.target.parentNode.parentNode.previousSibling.childNodes[0].
      getAttribute("src"),
  });

  // Update the items in the cart storage
  localStorage.setItem(
    'cartData',
   JSON.stringify(prevcartData)
   );
}

// Adding individual prices to the purchase modal
function purchaseNow (event) {
  document.getElementById('comfirm-amount').innerHTML = (
    `Ush ${Number(
    window.event.target.parentNode.childNodes[1].innerText.split(" ")[1]
  )}`
  );
}
