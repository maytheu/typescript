"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.todo = exports.todos = exports.create = void 0;
const todo_1 = require("../model/todo");
const TODOS = [];
const create = (req, res, next) => {
    const { text } = req.body;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "created", data: newTodo });
};
exports.create = create;
const todos = (req, res, next) => {
    res.status(200).json({ message: "success", data: TODOS });
};
exports.todos = todos;
const todo = (req, res, next) => {
    const { id } = req.params;
    const todoId = TODOS.find((todo) => todo.id !== id);
    res.status(200).json({
        message: !todoId ? "No Todo found" : "Found the todo",
        data: todoId,
    });
};
exports.todo = todo;
const update = (req, res, next) => {
    const { id } = req.params;
    const updatedtext = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === id);
    if (todoIndex < 0) {
        throw new Error("No Todo found");
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedtext);
    res.status(200).json({ message: "Updated", data: TODOS[todoIndex] });
};
exports.update = update;
const remove = (req, res, next) => {
    const { id } = req.params;
    const todoIndex = TODOS.findIndex((todo) => todo.id === id);
    if (todoIndex < 0) {
        throw new Error("No Todo found");
    }
    TODOS.splice(todoIndex, 1);
    res.status(200).json({ message: "Deleted" });
};
exports.remove = remove;
