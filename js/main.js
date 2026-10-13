//1
function calculateFinalPrice(basePrice, discount, tax) {
  let priceDis = (basePrice * discount) / 100;
  let priceWithDis = basePrice - priceDis;
  let priceTax = priceWithDis * tax;
  let finalPrice = priceTax + priceWithDis;
  return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2));

//2
function checkAccess(userName, pass) {
  if (userName === "admin" && pass === 123456) {
    console.log("Доступ разрешен");
  } else console.log("Доступ запрещен");
}

checkAccess("admin", 123456);

//3
function getTimeOfDay(time) {
  if (time < 6) {
    console.log("Ночь");
  } else if (time < 12) {
    console.log("Утро");
  } else if (time < 18) {
    console.log("День");
  } else if (time <= 23) {
    console.log("Вечер");
  } else console.log("Некорректное время");
}

getTimeOfDay(6);

//4
function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return console.log(i);
    } else return console.log("Четных чисел нет");
  }
}

findFirstEven(9, 9);
