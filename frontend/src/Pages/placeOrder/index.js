import { useContext, useEffect, useState } from 'react';
import './placeOrder.css'
import { StoreContext } from '../../context/storeContext';
import numeral from 'numeral';
import axios from 'axios';


const PlaceOrderPage = ()=>{
    const {getTotalCartAmount,token,fish_list,cartItems,url} = useContext(StoreContext);
    const [data,setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        address:"",
        city:"",
        phone:""
    })
    const onChangeHandler=(event)=>{
        const  name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    useEffect(()=>{
        console.log(data);
    }, [data])


    const placeOrder = async (event) => {
        event.preventDefault();
        let orderItems = [];
        fish_list.map((item) => {
            if (cartItems[item._id]>0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        })
        console.log(orderItems);
        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount()+10000,
        }
        let response  = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
        if(response.data.success){
            const {session_url} = response.data;
            window.location.replace(session_url);
        }else{
            alert("Lỗi")
        }
    }


    return(
        <form onSubmit={placeOrder} className='place-order'>
            <div className="place-order-left">
                <p className="title">Thông Tin Giao Hàng</p>
                <div className="multi-fields">
                    <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder='Họ' />
                    <input required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Tên' /> 
                </div>
                <input required name="email" onChange={onChangeHandler} value={data.email} type='email' placeholder='Email'/>
                <input required name="address" onChange={onChangeHandler} value={data.address} type='text' placeholder='Địa chỉ'/>
                <div className="multi-fields">
                        <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder='Thành Phố' />
                        <input required name="phone" onChange={onChangeHandler} value={data.phone} type='text' placeholder='Số điện thoại'/>
                </div>
            </div>
            <div className="place-order-right">
                <div className='cart-total'>
                    <h2>Tổng Tiền</h2>
                    <div className='cart-total-details'>
                        <p>Thành tiền</p>
                        <p>{numeral(getTotalCartAmount()).format('0,0 Đ')}đ</p>
                    </div>
                    <hr/>
                    <div className='cart-total-details'>
                        <p>Phí Giao Hàng</p>
                        <p>{getTotalCartAmount()===0?0:"10,000đ"}</p>
                    </div>
                    <hr/>
                    <div className='cart-total-details'>
                        <p>Tổng tiền</p>
                        <p>{numeral(getTotalCartAmount()===0?0:(getTotalCartAmount()+10000)).format('0,0 Đ')}đ</p>
                    </div>
                    <button type='submit'>Thanh Toán</button>
                </div>
            </div>
        </form>
    )

};
export default PlaceOrderPage;