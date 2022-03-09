"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const route = (0, express_1.Router)();
route.get("/", todos_1.todos);
route.get("/:id", todos_1.todo);
route.post("/", todos_1.create);
route.patch("/:id", todos_1.update);
route.delete("/:id", todos_1.remove);
exports.default = route;
