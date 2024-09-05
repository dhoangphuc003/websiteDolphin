import userModel from "../models/userModel.js"

// add items to user cart
const addToCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message: "Đã thêm vào giỏ hàng"});
    } catch (error) {
        consoconsole.log(error)
        res.json({success:false,message:"Lỗi"})
        
    }
}
// remove items from user cart
const removeFromCart = async (req,res) =>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData});
        res. json({success: true, message: "Đã xóa khỏi giỏ hàng"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Lỗi"})
    }
}
const getCart = async (req,res) =>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData. cartData;
        res.json ({ success : true, cartData} )
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Lỗi"})
    }
}
export {addToCart,removeFromCart,getCart}