function toggleRespMenu(){
    let sectionLeft = document.getElementById('section_left');
    let sectionRight = document.getElementById('section_right');
    
    sectionLeft.classList.toggle('d_none')
    sectionRight.classList.toggle('d_none')
    sectionRight.classList.toggle('resp_menu');
    sectionLeft.classList.toggle('width_section_left');
}

function renderMainCourses(){
    let mainCourse = document.getElementById('main_course');
    let supplements = document.getElementById('supplements');
    let drinks = document.getElementById('drinks');
    mainCourse.innerHTML = "";
    mainCourse.innerHTML = "";
    mainCourse.innerHTML = "";

    renderMainCourseForLoops(mainCourse, supplements, drinks);
    renderBasket();
}

function renderMainCourseForLoops(mainCourse, supplements, drinks){
    for (let i = 0; i < mainCoursesObj.mainMeal.length; i++) {
        mainCourse.innerHTML += mainCoursesTemp(i);
    }

    for (let i = 0; i < mainCoursesObj.supplements.length; i++) {
        supplements.innerHTML += supplementsTemp(i);
    }

    for (let i = 0; i < mainCoursesObj.drinks.length; i++) {
        drinks.innerHTML += drinksTemp(i);
    }
}

function renderBasket() {
    let basketContentRef = document.getElementById('basket');
    basketContentRef.innerHTML = "";
    for (let indexBasket = 0; indexBasket < basket.names.length; indexBasket++) {
        basketContentRef.innerHTML += basketTemp(indexBasket);
    }

    basketLengthControl(basketContentRef);
}

function basketLengthControl(basketContentRef){
    if (basket.names.length <= 0) {
        document.getElementById('empty_basket_section').innerHTML = "";
        document.getElementById('order_section').innerHTML = emptyOrderTemp();
        basketContentRef.innerHTML = emptyBasket();
    }else{
        document.getElementById('order_section').innerHTML = orderTemp();
        document.getElementById('the_price').innerHTML = priceTemp();
    }
}

function pushBasket(i) {
    let index = basket.names.indexOf(mainCoursesObj.mainMeal[i].name);
    if (index === -1) {
        basket.names.push(mainCoursesObj.mainMeal[i].name);
        basket.prices.push(mainCoursesObj.mainMeal[i].price);
        basket.newPrices.push(mainCoursesObj.mainMeal[i].price);
        basket.counter.push(1);
    } else {
        basket.counter[index] = parseInt(basket.counter[index]) + 1;
        basket.newPrices[index] = basket.counter[index] * basket.prices[index];
    }
    renderBasket();
    document.getElementById('open_basket').innerHTML = buttonTemp();
}

function pushSupplementsBasket(i) {
    let index = basket.names.indexOf(mainCoursesObj.supplements[i].name);
    if (index === -1) {
        basket.names.push(mainCoursesObj.supplements[i].name);
        basket.prices.push(mainCoursesObj.supplements[i].price);
        basket.newPrices.push(mainCoursesObj.supplements[i].price);
        basket.counter.push(1);
    } else {
        basket.counter[index] = parseInt(basket.counter[index]) + 1;
        basket.newPrices[index] = basket.counter[index] * basket.prices[index];
    }
    renderBasket();
    document.getElementById('open_basket').innerHTML = buttonTemp();
}

function pushDrinksBasket(i) {
    let index = basket.names.indexOf(mainCoursesObj.drinks[i].name);
    if (index === -1) {
        basket.names.push(mainCoursesObj.drinks[i].name);
        basket.prices.push(mainCoursesObj.drinks[i].price);
        basket.newPrices.push(mainCoursesObj.drinks[i].price);
        basket.counter.push(1);
    } else {
        basket.counter[index] = parseInt(basket.counter[index]) + 1;
        basket.newPrices[index] = basket.counter[index] * basket.prices[index];
    }
    renderBasket();
    document.getElementById('open_basket').innerHTML = buttonTemp();
}

function counterPlus(indexBasket){
    basket.counter[indexBasket] +++ "1";
    basket.newPrices[indexBasket] = basket.counter[indexBasket] * basket.prices[indexBasket];
    renderBasket();
    document.getElementById('open_basket').innerHTML = buttonTemp();
}

function counterMinus(indexBasket){
    if (basket.counter[indexBasket] <= 1) {
        spliceIndex(indexBasket);
        document.getElementById(`basket_dishes[${indexBasket}]`).innerHTML = "";
        renderBasket()
    }else{
        basket.counter[indexBasket] --- "1"
        basket.newPrices[indexBasket] = basket.counter[indexBasket] * basket.prices[indexBasket];
        renderBasket();
    }
    document.getElementById('open_basket').innerHTML = buttonTemp();
}

function spliceIndex(indexBasket){
    basket.counter.splice(indexBasket, 1);
    basket.names.splice(indexBasket, 1);
    basket.prices.splice(indexBasket, 1);
    basket.newPrices.splice(indexBasket, 1);
}

function deleteProduct(indexBasket){
    spliceIndex(indexBasket);
    document.getElementById(`basket_dishes[${indexBasket}]`).innerHTML = "";
    renderBasket()
    document.getElementById('open_basket').innerHTML = buttonTemp();
}

function sum(){
    let theSum = basket.newPrices.reduce((total, price) => total + price, 0);
    return theSum;
}

function shipmentPrice(){
    let shipmentPrice = 5;
    let theSum = basket.newPrices.reduce((total, price) => total + price, 0);
    if (theSum >= 20) {
        shipmentPrice = 0;
    }
    if (theSum <= 0) {
        shipmentPrice = 0;
    }
    return shipmentPrice;
}

function orderOverlay(){
    basket.names = [];
    basket.prices = [];
    basket.newPrices = [];
    basket.counter = [];
    renderBasket();

    document.getElementById('order_success_overlay').classList.remove('d_none');
    document.body.style.overflow = 'hidden';
    document.getElementById('open_basket').innerHTML = buttonTemp();
}

function closeOrderOverlay(){
    document.getElementById('order_success_overlay').classList.add('d_none');
    document.body.style.overflow = 'visible';
}

function stopPropagation(event) {
    event.stopPropagation();
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 740) {
      let sectionLeft = document.getElementById('section_left');
      let sectionRight = document.getElementById('section_right');
      
      sectionLeft.classList.remove('d_none', 'width_section_left');
      sectionRight.classList.remove('d_none', 'resp_menu');
    }
});