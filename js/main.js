//1
const person = {
  name: "alex",
  age: 28,
};

console.log(person.name);
console.log(person.age);
//2

function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;
}

console.log(isEmpty());

//3

const task = {
  title: "Задача",
  description: "Описание",
  isCompleted: false,
};

function cloneAndModify(object, modification) {
  const copy = { ...object, ...modification };
  return copy;
}
const result = cloneAndModify(task, {
  title: "Задача выполнена",
  isCompleted: true,
});
for (let key in result) {
  console.log(result[key]);
}
//4

const myObject = {
  method1() {
    console.log('Метод 1 вызван');
  },
  method2() {
    console.log('Метод 2 вызван');
  },
  property: 'Это не метод'
};

function callAllMethods(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'function') {
      obj[key]();
    }
  }
}

callAllMethods(myObject);
