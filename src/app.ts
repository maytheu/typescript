import express, { Response, Request, NextFunction } from "express";
import todoRoute from "./routes/todos";

const app = express();
app.use(express.json()); //format bidy request

app.use("/todos", todoRoute);

// error handling middleware
app.use((err: Error, req: Request, res: Response, net: NextFunction) => {
  res.status(500).json(err.message);
});

app.listen(3002);
