//read cart data

const prevcartData = JSON.parse(localStorage.getItem("cartData"));

//console.log(total(prevcartData) , '55');

function total(array) {
    if (array != null) {
        let sum = 0;
        for (i = 0; i < array.length; i++) {
            sum = sum + array[i].amount;
        }
        document.getElementsByClassName("total-amount")[0].innerHTML = `Ush ${sum}`;
        document.getElementById("comfirm-amount").innerHTML = `Ush ${sum}`;
    } else {
        return "Cart is cleared";
    }
}


function item(array) {
    if(array != null){
        for (i = 0; i < array.length; i++) {
            document.getElementById("cart-items").insertAdjacentHTML("afterend", `<li>${array[i].title}</li>`);
            document.getElementById("feed").insertAdjacentHTML("afterend", `<div class="col-8">
            <div class="card rounded shadow border-0 mb-4">
                <div class="row g-0">
                    <div class="col-md-4"><img class="img-fluid rounded-start"
                            src="${array[i].fileName}" style="height:10rem;" alt="Title" /></div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">${array[i].title}</h4>
                            <h5 class="card-title"></h5>
                            <p class="card-text">Ush ${array[i].amount}</p>
                            <a href="#" class="btn btn-primary">BUY NOW</a></div>
                    </div>
                </div>
            </div>
        </div>`);
        }
    }else{
        document.getElementById("feed").innerHTML = "<h2>Your Cart is Empty....</h2>";
    }
    
}

function clearCart() {
    //clear
    localStorage.removeItem("cartData");
    console.log("cart cleared");
}
