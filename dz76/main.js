"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const getNewTodoId = (todos) =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};



const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todo = document.querySelector(".todos");

const createTodoElement = (todo) => {
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo");
  newTodo.dataset.id = todo[todoKeys.id];
  newTodo.innerHTML = `<div class="todo-text">${todo[todoKeys.text]}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
          </div>`;
  return newTodo;
};

const handleCreateTodo = (todos, text) => {
  const newTodoObject = createTodo(todos, text);
  const newNameTodo = createTodoElement(newTodoObject);
  todo.prepend(newNameTodo);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;
  handleCreateTodo(todos, text);
  input.value = "";
});

todo.addEventListener("click", ({ target }) => {
  const todo = event.target.closest(".todo");
  if (!todo) return;

  const todoId = Number(todo.dataset.id);

  if (target.matches(".button-complete")) {
    completeTodoById(todos, todoId);
    todo.classList.toggle("completed");
  }

  if (target.matches(".button-delete")) {
    deleteTodoById(todos, todoId);
    todo.remove();
  }
});
