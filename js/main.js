//1
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);
//2
function getUserAverageAge(users) {
  let sum = 0;
  users.forEach(function (user) {
    sum += user.age;
  });
  return sum / users.length;
}
const midAge = getUserAverageAge(users);
console.log(midAge);
//3
function getAllAdmins(users) {
  users.forEach(function (user) {
    if (user.isAdmin === true) {
      console.log(user);
    }
  });
}

const admin = getAllAdmins(users);
console.log(admin);
//4
const arr = [1, 2, 3, 4, 5];
const first = (arr, n) => {
  {
    if (n === 0) {
      return [];
    } else if (n === undefined) {
      return arr[0];
    } else {
      return arr.slice(0, n);
    }
  }
};

console.log(first(arr));
