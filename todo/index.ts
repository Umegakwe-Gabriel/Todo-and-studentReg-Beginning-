import express, { Application, Request, Response } from "express";
import cors from "cors";
import todo from "./Router/todoRouter";
import student from "./Router/ServerRouter";

const port: number = 4000;

const app: Application = express();

app
  .use(cors())
  .use(express.json())
  .use("/api/todo", todo)
  .use("/api/student", student);

const server = app.listen(port, () => {
    console.log("");    
  console.log("Server is now on");
});

process.on("uncaughtException", (error: any) => {
  console.log("Server is shutting down due to uncaughtException");
  console.log("UncaughtException: ", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("servr is shutting down due to unhandledRejection");
  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
