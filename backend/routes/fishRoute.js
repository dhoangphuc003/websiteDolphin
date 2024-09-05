import express from 'express'
import { addFish,listFish,removeFish } from "../controllers/fishController.js";
import multer from "multer";

const  fishRouter = express.Router();

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage:storage})

fishRouter.post("/add",upload.single("image"),addFish);
fishRouter.get("/list",listFish);
fishRouter.post("/remove",removeFish);

export default fishRouter;