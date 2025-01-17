import orderModel from "../models/orderModle.js";
import userModel from '../models/userModel.js'
import { Stripe } from "stripe"

const stripe = new Stripe("sk_test_51PIfRNRqLjrtHj6q0VSJEPtb2R76D4ti73PWMujTCg7rkM55toL2gNylb6WmuztQs1jlOuLqYluJq6S0Kvnwdg5b00NyooW99N");

// placing user order for frontend
const placeOrder = async (req,res) =>{

    const frontend_url = "http://localhost:3000"
    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, {cartData:{}});
    
        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency: "inr",
                product_data: {
                    name: item.name
                },
                unit_amount:item.price*100*80
            },
            quantity:item.quantity
        })) 


        line_items.push({
            price_data:{
                currency: "inr",
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: 2*100*80
            },
            quantity:1
        })
        const  session =  await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })

        res.json({success :true, session_url:session.url})

    } catch (error) {
        res.json({success:false,message:"Lỗi"})
    }
}
const verifyOrder = async (req,res) => {
    const {orderId,success} = req.body;
    try {
            if(success=="true"){
                await orderModel.findByIdAndUpdate(orderId,{payment:true})
                res,json({success:true,message:"Thanh toán thành công"})
            }else{
                await orderModel.findByIdAndDelete(orderId)
                res,json({success:false,message:"Thanh toán không thành công"})
            }
    } catch (error) {
            console.log(error);
            res.json({success:false,message:"Lỗi"})
    }
}


//listorder cho admin
const listOrder = async (req,res)=>{
    try {
        const orders = await orderModel.find({});
        res.json({success:true, data:orders} )
    }catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export {placeOrder,verifyOrder,listOrder}