import express, {Request, Response} from "express";
import moment from "moment";
import { Database } from "../Utils/Database";
import cryto from "crypto";
import { iTodo } from "../Utils/interface";

export const viewTask = (req: Request, res: Response): Response=>{
try {
    return res.status(200).json({message: "List of Tasks", data: Database})
} catch (error) {
    return res.status(404).json({message: "Task not found", error})
}
}

export const createTask = (req: Request, res: Response): Response=>{
    try {
        const {title} = req.body;
        const ID = cryto.randomUUID();
        let date = new Date()
        let  Task : iTodo= {
            id: ID,
            date: moment(date).format("LLL"),
            time: moment(date).fromNow(),
            title,
            complete: false

        }
        Database.push(Task)

        return res.status(201).json({message: "Create Task", data: Task})
    } catch (error) {
        return res.status(404).json({message: "Cant find createTask", error})
    }
}

export const deleteTask = (req: Request, res:Response): Response=>{
try {
    const {id} = req.params;
    const taskD = Database.filter((el: iTodo)=>{
        return el.id !== id
    })
    return res.status(200).json({message: "Deleted Task", date: taskD})
} catch (error) {
    return res.status(404).json({message: "Can't delete Task", error})
}
}

export const getSingleTask = (req: Request, res: Response): Response=>{
    try {
        const {id} = req.params;
        const task = Database.filter((el: iTodo)=>{
            return el.id === id
        })
        return res.status(200).json({message: "Get Single Task", data: task})
    } catch (error) {
        return res.status(404).json({message: "Can't find Task", error})
    }
}

export const updateTask = (res: Response, req: Request): Response=>{
try {
    const {id} = req.params;
    const task = Database.filter((el)=>{
        return el.id === id ? (el.complete = true): null
    })
    return res.status(201).json({message: "Update Task", data: task})
} catch (error) {
    return res.status(404).json({message: "Can't find any task", error})
}
}

