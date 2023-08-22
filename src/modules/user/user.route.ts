import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserController.createUser);
router.post("/profile", UserController.createAndUpdateUser);
router.get("/getUsers", UserController.getAllUsers);
router.get("/:id", UserController.getSingleUser);

export const UserRoutes = router;
