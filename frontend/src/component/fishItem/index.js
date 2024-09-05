import { useContext } from 'react';
import './fishItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/storeContext';
import numeral from 'numeral';

const FishItem = ({id,name,image,price,description}) =>{

    const {cartItems,addToCart,removeFromCart, url} = useContext(StoreContext);
    return(
        <div className="fish-item">
            <div className="fish-item-img-container">
                <img className="fish-item-image" src={url+"/image/"+image} alt=""/>
                {!cartItems[id]
                    ?<img className ='add' onClick={()=>addToCart(id)} src={assets.add_icon} alt='' />
                    :<div className='fish-item-counter'>
                        <img onClick={()=> removeFromCart(id) } src={assets.minus_icon} alt=''/>
                        <p>{cartItems[id]}</p>
                        <img onClick={()=> addToCart(id) } src={assets.add_icon_after} alt=''/>
                    </div>
                }
            </div>
            <div className="fish-item-info">
                <div className="fish-item-name-rating">
                    <p>{name}</p>
                </div>
                <p className="fish-item-price">{numeral(price).format('0,0 Đ')}đ</p>
            </div>
        </div>
    )
}
export default FishItem;