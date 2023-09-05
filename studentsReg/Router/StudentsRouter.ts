import express, { Router } from "express";
import {
  deleteSingleStudents,
  getSingleStudents,
  registerStudents,
  updateStudent,
  viewStudents,
} from "../controller/StudentsController";

const router: Router = express.Router();

router.route("/").get(viewStudents);
router.route("/get/:id").get(getSingleStudents);
router.route("/delete/:id").delete(deleteSingleStudents);
router.route("/update/:id").patch(updateStudent);
router.route("/register/").post(registerStudents);

export default router;
