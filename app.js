let grandTotal = 0;

let product1 = document.getElementById("product1");
const counterDisplay1 = document.getElementById('counter');
const totalPriceDisplay1 = document.getElementById('totalPrice1');
let counterValue1 = 0;
let priceLaptop = "$1000";
product1.innerHTML = `Laptop ${priceLaptop}`;

function addToCart1() {
  counterValue1++;
  updateProductTotal(counterValue1, priceLaptop, totalPriceDisplay1, "Laptop");
  updateGrandTotal();
}

function removeQuantity1() {
  counterValue1 = 0;
  counterDisplay1.innerText = '';
  totalPriceDisplay1.innerText = '';
  updateGrandTotal();
}

let product2 = document.getElementById("product2");
const counterDisplay2 = document.getElementById('counter2');
const totalPriceDisplay2 = document.getElementById('totalPrice2');
let counterValue2 = 0;
let priceHeadphones = "$600";
product2.innerHTML = `Headphones ${priceHeadphones}`;

function addToCart2() {
  counterValue2++;
  updateProductTotal(counterValue2, priceHeadphones, totalPriceDisplay2, "Headphones");
  updateGrandTotal();
}

function removeQuantity2() {
  counterValue2 = 0;
  counterDisplay2.innerText = '';
  totalPriceDisplay2.innerText = '';
  updateGrandTotal();
}

let product3 = document.getElementById("product3");
const counterDisplay3 = document.getElementById('counter3');
const totalPriceDisplay3 = document.getElementById('totalPrice3');
let counterValue3 = 0;
let priceMobile = "$500";
product3.innerHTML = `Mobile Phone ${priceMobile}`;

function addToCart3() {
  counterValue3++;
  updateProductTotal(counterValue3, priceMobile, totalPriceDisplay3, "Mobile Phone");
  updateGrandTotal();
}

function removeQuantity3() {
  counterValue3 = 0;
  counterDisplay3.innerText = '';
  totalPriceDisplay3.innerText = '';
  updateGrandTotal();
}

let product4 = document.getElementById("product4");
const counterDisplay4 = document.getElementById('counter4');
const totalPriceDisplay4 = document.getElementById('totalPrice4');
let counterValue4 = 0;
let priceTablet = "$700";
product4.innerHTML = `Tablet ${priceTablet}`;

function addToCart4() {
  counterValue4++;
  updateProductTotal(counterValue4, priceTablet, totalPriceDisplay4, "Tablet");
  updateGrandTotal();
}

function removeQuantity4() {
  counterValue4 = 0;
  counterDisplay4.innerText = '';
  totalPriceDisplay4.innerText = '';
  updateGrandTotal();
}

let product5 = document.getElementById("product5");
const counterDisplay5 = document.getElementById('counter5');
const totalPriceDisplay5 = document.getElementById('totalPrice5');
let counterValue5 = 0;
let priceAirBirds = "$300";
product5.innerHTML = `Air Birds ${priceAirBirds}`;

function addToCart5() {
  counterValue5++;
  updateProductTotal(counterValue5, priceAirBirds, totalPriceDisplay5, "Air Birds");
  updateGrandTotal();
}

function removeQuantity5() {
  counterValue5 = 0;
  counterDisplay5.innerText = '';
  totalPriceDisplay5.innerText = '';
  updateGrandTotal();
}

function updateProductTotal(quantity, price, totalDisplay, productName) {
  let priceNumeric = parseInt(price.replace("$", ""));
  let totalCost = quantity * priceNumeric;
  totalDisplay.innerText = `Total Cost: $${totalCost} of ${productName}`;
}

function updateGrandTotal() {
  grandTotal = (counterValue1 * parseInt(priceLaptop.replace("$", ""))) +
               (counterValue2 * parseInt(priceHeadphones.replace("$", ""))) +
               (counterValue3 * parseInt(priceMobile.replace("$", ""))) +
               (counterValue4 * parseInt(priceTablet.replace("$", ""))) +
               (counterValue5 * parseInt(priceAirBirds.replace("$", "")));
  document.getElementById('grandTotal').innerText = `Grand Total: $${grandTotal}`;
}






