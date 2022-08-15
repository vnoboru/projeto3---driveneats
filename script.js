let nameDish, nameDrink, nameDessert, priceDish, priceDrink, priceDessert, price1, price2, price3, p1, p2, p3, total_cost;

function oneDish(optionDish){    
    nameDish = optionDish.querySelector("h4").innerHTML;
    priceDish = optionDish.querySelector(".text > .price > strong").innerHTML;
    price1 = Number(priceDish.replace(",", "."));

    const markedDish = document.querySelector(".selectedDish");

    if(markedDish !== null){
        markedDish.classList.remove("selectedDish");
    } 

    optionDish.classList.add("selectedDish");
    enableButton();
}

function oneDrink(optionDrink){
    nameDrink = optionDrink.querySelector("h4").innerHTML;
    priceDrink = optionDrink.querySelector(".text > .price > strong").innerHTML;
    price2 = Number(priceDrink.replace(",","."));

    const markedDrink = document.querySelector(".selectedDrink");

    if(markedDrink !== null){
        markedDrink.classList.remove("selectedDrink");
    }
    optionDrink.classList.add("selectedDrink");
    enableButton();
}

function oneDessert(optionDessert){
    nameDessert = optionDessert.querySelector("h4").innerHTML;    
    priceDessert = optionDessert.querySelector(".text > .price > strong").innerHTML;
    price3 = Number(priceDessert.replace(",","."));

    const markedDessert = document.querySelector(".selectedDessert");

    if(markedDessert !== null){
        markedDessert.classList.remove("selectedDessert");
    }
    optionDessert.classList.add("selectedDessert");
    enableButton();
}

function enableButton(){   
    const markedDish = document.querySelector(".selectedDish");
    const markedDrink = document.querySelector(".selectedDrink");
    const markedDessert = document.querySelector(".selectedDessert");

    if(markedDish !== null && markedDrink !== null && markedDessert !== null) {    
                const lastOrder = document.querySelector(".button_finish");
                lastOrder.innerHTML = "Fechar pedido"
                lastOrder.classList.add("button");
    }   
}

function finish(){
    const total_cost = price1 + price2 + price3;
    const dish = String(nameDish);
    const drink = String(nameDrink);
    const dessert = String(nameDessert);

    const request = `Olá, gostaria de fazer o pedido:\n- Prato: ${dish}\n- Bebida: ${drink}\n- Sobremesa: ${dessert}\nTotal: R$ ${total_cost.toFixed(2)}`;

    window.open(`https://wa.me/5544999440023/?text=${encodeURIComponent(request)}`);
  }