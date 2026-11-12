import { todoKeys } from "./constants.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js";
import { setTodosToLocalStorage } from "./storage.js";

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

export const renderTodos = (todos) => {
  todo.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    if (todo[todoKeys.is_completed]) {
      todoElement.classList.add("completed");
    }
    todoElement.prepend(todo);
  });
};

const handleCreateTodo = (todos, text) => {
  const newTodoObject = createTodo(todos, text);
  const newNameTodo = createTodoElement(newTodoObject);
  setTodosToLocalStorage(todos);
  todo.prepend(newNameTodo);
};

export const initTodoHandlers = (todos) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (!text) return;
    handleCreateTodo(todos, text);
    input.value = "";
  });

  todo.addEventListener("click", ({ target }) => {
    const todo = target.closest(".todo");
    if (!todo) return;

    const todoId = Number(todo.dataset.id);

    if (target.matches(".button-complete")) {
      completeTodoById(todos, todoId);
      setTodosToLocalStorage(todos);
      todo.classList.toggle("completed");
    }

    if (target.matches(".button-delete")) {
      deleteTodoById(todos, todoId);
      setTodosToLocalStorage(todos);
      todo.remove();
    }
  });
};
