const sum = (a, b) => {
  return a + b;
};

//function euroToUsd(euro) {
  //if (euro < 0) {
    //console.log("You can't have negative value");
    //return "You can't have negative value";
  //}
  //return euro * 1.2;
//}

//console.log(euroToUsd(1));

//console.log(Math.floor(Math.random0 * 13));
//module.exports = { sum, euroToUsd };



let oneEuroIs = {
  "JPY": 127.9,
  "USD": 1.2,
  "GBP": 0.8
}

function fromEuroToDollar(euroAmount) {
  if(euroAmount < 0) {
      console.log("You can't have a negative value")
      return
  }
  return euroAmount * oneEuroIs.USD
}

function fromDollarToYen(dollarAmount) {
  if (dollarAmount < 0) {
      console.log("You can't have a negative value")
      return
  }
  let euro = dollarAmount / oneEuroIs.USD
  return euro * oneEuroIs.JPY
}

function fromYenToPound(yenAmount) {
  if(yenAmount < 0) {
      console.log("You can't have a negative value")
      return
  }
  let euro = yenAmount / oneEuroIs.JPY
  return euro * oneEuroIs.GBP
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}