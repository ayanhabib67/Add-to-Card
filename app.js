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

let product6 = document.getElementById("product6");
const counterDisplay6 = document.getElementById('counter6');
const totalPriceDisplay6 = document.getElementById('totalPrice6');
let counterValue6 = 0;
let priceSmartTV = "$1200";
product6.innerHTML = `Smart TV ${priceSmartTV}`;
function addToCart6() {
  counterValue6++;
  updateProductTotal(counterValue6, priceSmartTV, totalPriceDisplay6, "Smart TV");
  updateGrandTotal();
}
function removeQuantity6() {
  counterValue6 = 0;
  counterDisplay6.innerText = '';
  totalPriceDisplay6.innerText = '';
  updateGrandTotal();
}

let product7 = document.getElementById("product7");
const counterDisplay7 = document.getElementById('counter7');
const totalPriceDisplay7 = document.getElementById('totalPrice7');
let counterValue7 = 0;
let priceSmartWatch = "$250";
product7.innerHTML = `Smart Watch ${priceSmartWatch}`;
function addToCart7() {
  counterValue7++;
  updateProductTotal(counterValue7, priceSmartWatch, totalPriceDisplay7, "Smart Watch");
  updateGrandTotal();
}
function removeQuantity7() {
  counterValue7 = 0;
  counterDisplay7.innerText = '';
  totalPriceDisplay7.innerText = '';
  updateGrandTotal();
}

let product8 = document.getElementById("product8");
const counterDisplay8 = document.getElementById('counter8');
const totalPriceDisplay8 = document.getElementById('totalPrice8');
let counterValue8 = 0;
let priceCamera = "$800";
product8.innerHTML = `Camera ${priceCamera}`;
function addToCart8() {
  counterValue8++;
  updateProductTotal(counterValue8, priceCamera, totalPriceDisplay8, "Camera");
  updateGrandTotal();
}
function removeQuantity8() {
  counterValue8 = 0;
  counterDisplay8.innerText = '';
  totalPriceDisplay8.innerText = '';
  updateGrandTotal();
}

let product9 = document.getElementById("product9");
const counterDisplay9 = document.getElementById('counter9');
const totalPriceDisplay9 = document.getElementById('totalPrice9');
let counterValue9 = 0;
let priceDJIDrone = "$1500";
product9.innerHTML = `DJI Drone ${priceDJIDrone}`;
function addToCart9() {
  counterValue9++;
  updateProductTotal(counterValue9, priceDJIDrone, totalPriceDisplay9, "DJI Drone");
  updateGrandTotal();
}
function removeQuantity9() {
  counterValue9 = 0;
  counterDisplay9.innerText = '';
  totalPriceDisplay9.innerText = '';
  updateGrandTotal();
}

let product10 = document.getElementById("product10");
const counterDisplay10 = document.getElementById('counter10');
const totalPriceDisplay10 = document.getElementById('totalPrice10');
let counterValue10 = 0;
let priceGoPro = "$400";
product10.innerHTML = `GoPro Hero ${priceGoPro}`;
function addToCart10() {
  counterValue10++;
  updateProductTotal(counterValue10, priceGoPro, totalPriceDisplay10, "GoPro Hero");
  updateGrandTotal();
}
function removeQuantity10() {
  counterValue10 = 0;
  counterDisplay10.innerText = '';
  totalPriceDisplay10.innerText = '';
  updateGrandTotal();
}

let product11 = document.getElementById("product11");
const counterDisplay11 = document.getElementById('counter11');
const totalPriceDisplay11 = document.getElementById('totalPrice11');
let counterValue11 = 0;
let priceiPhone = "$1200";
product11.innerHTML = `Apple iPhone 14 ${priceiPhone}`;
function addToCart11() {
  counterValue11++;
  updateProductTotal(counterValue11, priceiPhone, totalPriceDisplay11, "Apple iPhone 14");
  updateGrandTotal();
}
function removeQuantity11() {
  counterValue11 = 0;
  counterDisplay11.innerText = '';
  totalPriceDisplay11.innerText = '';
  updateGrandTotal();
}

let product12 = document.getElementById("product12");
const counterDisplay12 = document.getElementById('counter12');
const totalPriceDisplay12 = document.getElementById('totalPrice12');
let counterValue12 = 0;
let priceMacBook = "$2000";
product12.innerHTML = `Apple MacBook Pro ${priceMacBook}`;
function addToCart12() {
  counterValue12++;
  updateProductTotal(counterValue12, priceMacBook, totalPriceDisplay12, "Apple MacBook Pro");
  updateGrandTotal();
}
function removeQuantity12() {
  counterValue12 = 0;
  counterDisplay12.innerText = '';
  totalPriceDisplay12.innerText = '';
  updateGrandTotal();
}

let product13 = document.getElementById("product13");
const counterDisplay13 = document.getElementById('counter13');
const totalPriceDisplay13 = document.getElementById('totalPrice13');
let counterValue13 = 0;
let priceAirPods = "$250";
product13.innerHTML = `Apple AirPods Pro ${priceAirPods}`;
function addToCart13() {
  counterValue13++;
  updateProductTotal(counterValue13, priceAirPods, totalPriceDisplay13, "Apple AirPods Pro");
  updateGrandTotal();
}
function removeQuantity13() {
  counterValue13 = 0;
  counterDisplay13.innerText = '';
  totalPriceDisplay13.innerText = '';
  updateGrandTotal();
}

let product14 = document.getElementById("product14");
const counterDisplay14 = document.getElementById('counter14');
const totalPriceDisplay14 = document.getElementById('totalPrice14');
let counterValue14 = 0;
let priceiPad = "$800";
product14.innerHTML = `Apple iPad ${priceiPad}`;
function addToCart14() {
  counterValue14++;
  updateProductTotal(counterValue14, priceiPad, totalPriceDisplay14, "Apple iPad");
  updateGrandTotal();
}
function removeQuantity14() {
  counterValue14 = 0;
  counterDisplay14.innerText = '';
  totalPriceDisplay14.innerText = '';
  updateGrandTotal();
}

let product15 = document.getElementById("product15");
const counterDisplay15 = document.getElementById('counter15');
const totalPriceDisplay15 = document.getElementById('totalPrice15');
let counterValue15 = 0;
let priceDJIOsmo = "$900";
product15.innerHTML = `DJI Osmo ${priceDJIOsmo}`;
function addToCart15() {
  counterValue15++;
  updateProductTotal(counterValue15, priceDJIOsmo, totalPriceDisplay15, "DJI Osmo");
  updateGrandTotal();
}
function removeQuantity15() {
  counterValue15 = 0;
  counterDisplay15.innerText = '';
  totalPriceDisplay15.innerText = '';
  updateGrandTotal();
}

let product16 = document.getElementById("product16");
const counterDisplay16 = document.getElementById('counter16');
const totalPriceDisplay16 = document.getElementById('totalPrice16');
let counterValue16 = 0;
let priceDJIRonin = "$1500";
product16.innerHTML = `DJI Ronin ${priceDJIRonin}`;
function addToCart16() {
  counterValue16++;
  updateProductTotal(counterValue16, priceDJIRonin, totalPriceDisplay16, "DJI Ronin");
  updateGrandTotal();
}
function removeQuantity16() {
  counterValue16 = 0;
  counterDisplay16.innerText = '';
  totalPriceDisplay16.innerText = '';
  updateGrandTotal();
}

let product17 = document.getElementById("product17");
const counterDisplay17 = document.getElementById('counter17');
const totalPriceDisplay17 = document.getElementById('totalPrice17');
let counterValue17 = 0;
let priceDellXPS = "$1300";
product17.innerHTML = `Dell XPS 15 ${priceDellXPS}`;
function addToCart17() {
  counterValue17++;
  updateProductTotal(counterValue17, priceDellXPS, totalPriceDisplay17, "Dell XPS 15");
  updateGrandTotal();
}
function removeQuantity17() {
  counterValue17 = 0;
  counterDisplay17.innerText = '';
  totalPriceDisplay17.innerText = '';
  updateGrandTotal();
}

let product18 = document.getElementById("product18");
const counterDisplay18 = document.getElementById('counter18');
const totalPriceDisplay18 = document.getElementById('totalPrice18');
let counterValue18 = 0;
let priceDellMonitor = "$400";
product18.innerHTML = `Dell UltraSharp Monitor ${priceDellMonitor}`;
function addToCart18() {
  counterValue18++;
  updateProductTotal(counterValue18, priceDellMonitor, totalPriceDisplay18, "Dell UltraSharp Monitor");
  updateGrandTotal();
}
function removeQuantity18() {
  counterValue18 = 0;
  counterDisplay18.innerText = '';
  totalPriceDisplay18.innerText = '';
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
               (counterValue5 * parseInt(priceAirBirds.replace("$", ""))) +
               (counterValue6 * parseInt(priceSmartTV.replace("$", ""))) +
               (counterValue7 * parseInt(priceSmartWatch.replace("$", ""))) +
               (counterValue8 * parseInt(priceCamera.replace("$", ""))) +
               (counterValue9 * parseInt(priceDJIDrone.replace("$", ""))) +
               (counterValue10 * parseInt(priceGoPro.replace("$", ""))) +
               (counterValue11 * parseInt(priceiPhone.replace("$", ""))) +
               (counterValue12 * parseInt(priceMacBook.replace("$", ""))) +
               (counterValue13 * parseInt(priceAirPods.replace("$", ""))) +
               (counterValue14 * parseInt(priceiPad.replace("$", ""))) +
               (counterValue15 * parseInt(priceDJIOsmo.replace("$", ""))) +
               (counterValue16 * parseInt(priceDJIRonin.replace("$", ""))) +
               (counterValue17 * parseInt(priceDellXPS.replace("$", ""))) +
               (counterValue18 * parseInt(priceDellMonitor.replace("$", "")));
              
  document.getElementById('grandTotal').innerText = `Grand Total: $${grandTotal}`;
}





