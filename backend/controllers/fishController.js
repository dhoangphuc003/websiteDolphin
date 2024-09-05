import fishModel from "../models/fishModel.js";
import fs from 'fs'

//add food item
const addFish = async (req,res)=>{
    let image_filename = `${req.file.filename}`;
    const fish = new fishModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await fish.save();
        res.json({success:true,message:"Thêm thành công"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}
// all fish list
const listFish = async(req,res)=>{
    try {
        const fishs = await fishModel.find({});
        res.json({success:true,data:fishs})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }    
}

//remove fish item
const removeFish = async (req,res)=>{
    try {
        const fish = await fishModel.findById(req.body.id);
        fs.unlink(`uploads/${fish.image}`,()=>{})

        await fishModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"fish remove"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}
export {addFish,listFish,removeFish}