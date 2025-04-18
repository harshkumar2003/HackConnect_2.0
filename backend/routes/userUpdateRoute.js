import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import userUpdate from "../controllers/userUpdateControllers.js";

const userUpdateRouter = express.Router();

userUpdateRouter.post("/update",authMiddleware,userUpdate);

export default userUpdateRouter;