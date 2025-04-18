import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { dashboard } from "../controllers/dashboardController.js";

const dashboardRouter = express.Router();

dashboardRouter.get('/dashboard',authMiddleware,dashboard)


export default dashboardRouter;