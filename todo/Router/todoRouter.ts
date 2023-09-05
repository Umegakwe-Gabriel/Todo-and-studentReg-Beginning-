import express, {Router} from "express";
import { createTask, deleteTask, getSingleTask, updateTask, viewTask } from "../Controller/todoController";

const router: Router = express.Router();

router.route("/").get(viewTask)
router.route("/get/:id").get(getSingleTask)
router.route("/create").post(createTask)
router.route("/delete/:id").delete(deleteTask)
router.route("/update/:id").patch(updateTask)

export default router;