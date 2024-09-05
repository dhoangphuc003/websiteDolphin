import { useContext } from 'react';
import './cart.css'
import { StoreContext } from '../../context/storeContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import numeral from 'numeral';
const CartPage = ()=>{
    const{cartItems,fish_list,removeFromCart, getTotalCartAmount,url} = useContext(StoreContext);
    const navigate = useNavigate();


    return(
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-title'>
                    <p>Ảnh</p>
                    <p>Tên</p>
                    <p>Giá Tiền</p>
                    <p>Số Lượng</p>
                    <p>Thành Tiền</p>
                    <p>Xóa</p>
                </div>
                <br/>
                <hr/>
                {
                fish_list.map((item,index) => {
                    if(cartItems[item._id]>0)
                    {   
                        return (
                            <div>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={url+"/image/"+item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>{numeral(item.price).format('0,0 Đ')}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>{numeral(item.price*cartItems[item._id]).format('0,0 Đ')}</p>
                                    <img src={assets.close_icon} onClick={()=> removeFromCart(item._id)} className='cross' alt=''/>
                                </div>
                                <hr></hr>
                            </div>
                        )
                    }
                })}
            </div>            
            <div className='cart-bottom'>
                <div className='cart-total'>
                <h2>Tổng Tiền</h2>
                    <div className='cart-total-details'>
                        <p>Thành Tiền</p>
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
                   <button onClick={()=>navigate('/order')}>Thanh Toán</button>
                </div>
                <div className='cart-promocode'>
                    <div>
                        <p> Nếu bạn có mã khuyến mãi, nhập ở đây</p>
                        <div className='cart-promocode-input'>
                            <input type='text' placeholder='Mã khuyến mãi'></input>
                            <button>Gửi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default CartPage;