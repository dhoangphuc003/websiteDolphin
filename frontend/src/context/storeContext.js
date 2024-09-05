import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});
    const url= "http://localhost:4000";
    const [token,setToken] = useState("")
    const [fish_list,setFishList] = useState([])

    const addToCart = async (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }
    const removeFromCart = async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if (cartItems[item]>0){
                let itemInfo = fish_list.find((fish)=>fish._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const  fetchFishList= async() =>{
        const response = await axios.get(url+"/api/fish/list");
        setFishList(response.data.data)
    }
    const loadCartData =  async(token)=>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData)
    }
    useEffect(()=>{
        async function loadData(){
            await fetchFishList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData()
    },[])

    const contextValue = {
        fish_list,
        addToCart,
        cartItems,
        setCartItems,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;