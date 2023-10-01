// scope

let price = 300;

// function showPrice() {
//   price = 100;
//   console.log(price);
// }

function showPriceLet() {
  let price = 100;
  console.log(price);
}

// showPrice(); // changes value of price
showPriceLet(); // does not change value of price
console.log(price);
