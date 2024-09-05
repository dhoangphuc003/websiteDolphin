import authMiddleware from "../middleware/auth.js"
import { listOrder, placeOrder, verifyOrder } from "../controllers/orderController.js"
import express from 'express'


const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/list", listOrder);    
export default orderRouter;