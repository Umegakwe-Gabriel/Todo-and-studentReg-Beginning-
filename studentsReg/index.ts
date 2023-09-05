import express, {Application, Response, Request} from "express";
import cors from "cors";
import student from "./Router/StudentsRouter";


const port: number = 4004;

const app: Application = express();
app.use(cors()).use(express.json())
.get("/", (req: Request, res: Response): Response=>{
    try {
        return res.status(200).json({message: "You just hit the student services"})
    } catch (error) {
        return res.status(404).json({message: "Not Found", data: error})
    }
})
.use("/api/student", student)
const server = app.listen(port, ()=>{
    console.log("Server is now on");
})

// It heps to stop internal server from crashing
process.on("uncaughtException", (error: any)=>{
    console.log("Server is shutting down due to uncaughtexception");
    console.log("UncaughtException: ",  error);
    process.exit(1)
})

//
process.on("unhandledRejection", (reason: any)=>{
console.log("server is shutting down due to unhandledRejection");
console.log("unhandledRejection: ", reason);

server.close(()=>{
    process.exit(1);
})
})
