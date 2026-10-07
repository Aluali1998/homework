//1

const number = 20;
if (number % 2 === 0) {
  console.log("число чётное");
} else {
  console.log("число нечётное");
}

//2

const age = 70;
const discount = age < 18 ? 10 : age <= 65 ? 20 : 30;

console.log(`скидка ${discount}%`);

// switch (age) {
//   case age > 65:
//     discount = 30;
//     break;
//   case age >= 18:
//     discount = 20;
//     break;
//   default:
//     discount = 10;
// }

//3

const userName = prompt("Ведите имя");
const password = prompt("Ведите пароль");
const message =
  (userName === "admin" || userName == "user") && password === "123456"
    ? "Доступ разрешен"
    : "Доступ запрещен";

console.log(message);

//4
const kg = +prompt("Вес посылки");
const type = prompt("Выберите тип доставки: Стандарт,Экспресс,Премиум");
const price = kg > 5 ? 15 : kg > 1 ? 10 : 5;

let kaf;

switch (type) {
  case "Стандарт":
    kaf = 1;
    break;
  case "Экспресс":
    kaf = 1.5;
    break;
  case "Премиум":
    kaf = 2;
    break;
  default:
    kaf = 1;
    alert("Неизвестный тип доставки. Выбран стандартный тариф.");
}

alert(`Итоговая стоимость доставки: ${price * kaf}$`);
