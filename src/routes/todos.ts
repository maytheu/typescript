import { Router } from "express";
import { create, remove, todo, todos, update } from "../controllers/todos";

const route = Router();

// routes
route.get("/", todos);
route.get("/:id", todo);
route.post("/", create);
route.patch("/:id", update);
route.delete("/:id", remove);

export default route;
