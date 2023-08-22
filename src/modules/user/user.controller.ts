import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);
    res.send({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const createAndUpdateUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.updateAndcreateprofile(req.body);
    res.send({
      success: true,
      message: "User created/updated successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsers();
    res.send({
      success: true,
      message: "User retrieved successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUser(parseInt(req.params.id));
    res.send({
      success: true,
      message: "User retrieved successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const UserController = {
  createUser,
  createAndUpdateUser,
  getAllUsers,
  getSingleUser,
};
