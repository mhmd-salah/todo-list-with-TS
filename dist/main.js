"use strict";
const btnSubmit = document.querySelector(".todo-btn");
const inputTodo = document.querySelector(".todo-input");
const formTodo = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const btnDeleteAll = document.querySelector(".todo-delete-all");
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        id: Date.now(),
        todo: inputTodo.value,
        completed: false,
    };
    todos.push(newTodo);
    saveTodos();
    appendTodo(newTodo);
    inputTodo.value = "";
};
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
const todos = JSON.parse(localStorage.getItem("todos") || `[]`);
console.log(todos);
window.addEventListener("DOMContentLoaded", () => {
    todos.forEach(todo => appendTodo(todo));
});
const appendTodo = (newTodo) => {
    const newLi = document.createElement("li");
    const checkB = document.createElement("input");
    checkB.type = "checkbox";
    checkB.checked = newTodo.completed;
    checkB.addEventListener("change", () => {
        console.log("checked");
        newTodo.completed = checkB.checked;
        saveTodos();
    });
    newLi.append(newTodo.todo, checkB);
    todoList.prepend(newLi);
};
formTodo.addEventListener("submit", e => handleSubmit(e));
// delete all 
const clearTodos = () => {
    todos.length = 0;
    saveTodos();
    todoList.innerHTML = '';
};
btnDeleteAll.onclick = () => clearTodos();
