import express, { Request, Response } from "express";
import axios from "axios";

const url: string = `https://localhost:4004`;
export const getStudent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await axios.get(`${url}/api/student`).then((res: any) => {
      return res.data.data;
    });
    return res.status(200).json({ message: "Student Details", data: user });
  } catch (error) {
    return res.status(404).json({ message: "Can't Fetch Students", error });
  }
};
