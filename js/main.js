//1
const person = {
  name: "alex",
  age: 28,
};

console.log(person);

//2

function isEmpty(object) {
  object === undefined ? console.log(true) : console.log(false);
}
isEmpty();

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
for (key in result) {
  console.log(result[key]);
}
//4
