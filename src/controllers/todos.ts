import { RequestHandler } from "express";
import { Todo } from "../model/todo";

const TODOS: Todo[] = [];

export const create: RequestHandler = (req, res, next) => {
  const { text } = req.body as { text: string };
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.status(201).json({ message: "created", data: newTodo });
};

export const todos: RequestHandler = (req, res, next) => {
  res.status(200).json({ message: "success", data: TODOS });
};

export const todo: RequestHandler = (req, res, next) => {
  const { id } = req.params as { id: string };
  const todoId = TODOS.find((todo) => todo.id !== id);
  res.status(200).json({
    message: !todoId ? "No Todo found" : "Found the todo",
    data: todoId,
  });
};

export const update: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params;
  const updatedtext = (req.body as { text: string }).text;
  const todoIndex = TODOS.findIndex((todo) => todo.id === id);
  if (todoIndex < 0) {
    throw new Error("No Todo found");
  }
  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedtext);
  res.status(200).json({ message: "Updated", data: TODOS[todoIndex] });
};

export const remove: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params;
  const todoIndex = TODOS.findIndex((todo) => todo.id === id);
  if (todoIndex < 0) {
    throw new Error("No Todo found");
  }
  TODOS.splice(todoIndex, 1);
  res.status(200).json({ message: "Deleted" });
};
