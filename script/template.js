function mainCoursesTemp(i){
    return `
        <div class="dishes">
            <h3>${mainCoursesObj.mainMeal[i].name}</h3>
            <p>${mainCoursesObj.mainMeal[i].ingredients.join(", ")}</p>
            <div class="info">
                <span>${mainCoursesObj.mainMeal[i].price.toFixed(2)} €</span>
                <span class="allergens">${mainCoursesObj.mainMeal[i].allergens.join(", ")}</span>
            </div>
            <img src="./img/icons/plus.png" alt="" onclick="pushBasket(${i})">
        </div>
    `
}

function supplementsTemp(i){
    return `
        <div class="dishes">
            <h3>${mainCoursesObj.supplements[i].name}</h3>
            <p>${mainCoursesObj.supplements[i].ingredients.join(", ")}</p>
            <div class="info">
                <span>${mainCoursesObj.supplements[i].price.toFixed(2)} €</span>
                <span class="allergens">${mainCoursesObj.supplements[i].allergens.join(", ")}</span>
            </div>
            <img src="./img/icons/plus.png" alt="" onclick="pushSupplementsBasket(${i})">
        </div>
    `
}

function drinksTemp(i){
    return `
        <div class="dishes">
            <h3>${mainCoursesObj.drinks[i].name}</h3>
            <p>${mainCoursesObj.drinks[i].ingredients.join(", ")}</p>
            <div class="info">
                <span>${mainCoursesObj.drinks[i].price.toFixed(2)} €</span>
                <span class="allergens">${mainCoursesObj.drinks[i].allergens.join(", ")}</span>
            </div>
            <img src="./img/icons/plus.png" alt="" onclick="pushDrinksBasket(${i})">
        </div>
    `
}

function basketTemp(indexBasket){
    return `
        <div class="basket_dishes" id="basket_dishes[${indexBasket}]">
            <h3>${basket.names[indexBasket]}</h3>
            <div class="price_bar">
                <div class="basket_counter">
                    <img src="./img/icons/minus.png" alt="" onclick="counterMinus(${indexBasket})">
                    <p>${basket.counter[indexBasket]}</p>
                    <img src="./img/icons/plus.png" alt="" onclick="counterPlus(${indexBasket})">
                </div>
                <p>${basket.newPrices[indexBasket].toFixed(2).replace('.',',')}€</p>
                <img src="./img/icons/trash.png" alt="" onclick="deleteProduct(${indexBasket})">
            </div>
        </div>
    `
}

function emptyBasket(){
    return `
        <div class="empty_basket">
            <p>Ihr Warenkorb ist leer</p>
            <img src="./img/icons/basket_black.png" alt="">
        </div>
    `
}

function orderTemp(){
    return `
        <table id="the_price">
        </table>
        <button onclick="orderOverlay()">Jetzt bestellen</button>
    `
}

function emptyOrderTemp(){
    return `
        <table>
            <tr>
                <td>Zwischensumme</td>
                <td class="price">0€</td>
            </tr>
            <tr id="shipment_cost">
                <td>Lieferkosten</td>
                <td class="price">0€</td>
            </tr>
            <tr>
                <td><b>Gesamt</b></td>
                <td class="price"><b>0€</b></td>
            </tr>
        </table>
        <button>Jetzt bestellen</button>
    `
}

function priceTemp(){
    return `
        <tr>
            <td>Zwischensumme</td>
            <td class="price">${sum().toFixed(2).replace('.',',')}€</td>
        </tr>
        <tr id="shipment_cost">
            <td>Lieferkosten</td>
            <td class="price">${shipmentPrice().toFixed(2).replace('.',',')}€</td>
        </tr>
        <tr>
            <td><b>Gesamt</b></td>
            <td class="price"><b>${(sum() + shipmentPrice()).toFixed(2).replace('.',',')}€</b></td>
        </tr>
    `
}

function buttonTemp(){
    return `
        <div class="resp_menu_counter">
            <img src="./img/icons/basket.png" alt="">
            <p>${basket.counter.reduce((acc, curr) => acc + curr, 0)}</p>
        </div>
        <p>Zum Warenkorb</p>
        <p>${(sum() + shipmentPrice()).toFixed(2).replace('.',',')}€</p>
    `
}