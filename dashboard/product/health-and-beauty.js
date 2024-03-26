const dir = ["Aveeno Active Naturals.100000.jpeg","Bekay Glamour Set.250000.jpeg","Bleu De Chanel.350000.jpeg","Bvlgari Man.500000.jpeg","Cosmetic Glamour Set.480000.jpeg","Dolce & Gabbana.350000.jpeg","Makeup Brushes.100000.jpeg","Miss Dior Women.400000.jpeg","Nivea Oil Infused Lotion.70000.jpeg","Nivea.10000.jpeg","Obsession Men.350000.jpeg","Premium Lotion White Cosmetic.300000.jpeg","Versace Eros.450000.jpeg","Victoria Secret Bare Vanilla.250000.jpeg","Victoria Secret Lone Spell.250000.jpeg"]

//Preparing the json data
let data = JSON.stringify(dir)
//assigning the array from json to dirData
const dirData = JSON.parse(data);

//creating a basic array to store the ite objects
const items = [];

//creating the item objects from the dirData and pushing them to the items array
dirData.forEach(processItems);

function processItems(string){
    let myArray = string.split(".");
    if(myArray.length == 3 && myArray[2] == 'jpeg'){
        items.push({
            title:myArray[0],
            amount: Number(myArray[1]),
            fileName:string
        })
    }else{
        console.log(`the Naming of ${string} ins't right `);
    }
}

console.log(items);

//loading the items in the page
/* const feed = document.getElementsByClassName('feed')[0];*/

export default function feeder(){
    let i = 0
    for(i = 1; i < items.length; i++){
        print(items[i]);
    }    
}

function print(item){
    document.getElementById("feed").insertAdjacentHTML("afterend",`<div class="col-8"><div class="card rounded shadow border-0 mb-4">  <div class="row g-0"><div class="col-md-4"><img class="img-fluid rounded-start" src="../../assets/images/health-and-beauty/${item.fileName}" style="height:10rem;" alt="Title"/></div><div class="col-md-8">           <div class="card-body"><h4 class="card-title">${item.title}</h4><h5 class="card-title"></h5><p class="card-text">Ush ${item.amount}</p><a href="#" class="btn btn-primary">BUY NOW</a><a href="#" class="ms-5 btn btn-primary">add to Cart</a></div></div></div></div></div>`);
}