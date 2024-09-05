import {  useContext, useState } from 'react';
import './login.css'
import { StoreContext } from '../../context/storeContext';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const {url,setToken} = useContext(StoreContext)
    const [currState,setCurrState] = useState("Login")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const navigate = useNavigate();
    const onLogin = async (event) =>{
        event.preventDefault()
        let newUrl = url;
        if(currState==="Login"){
            newUrl += "/api/user/login"
            const response = await axios.post(newUrl,data);
            if(response.data.success){
                setToken(response.data.token);
                localStorage.setItem("token",response.data.token)
                navigate("/")
            }else{
                alert(response.data.message)
            }
        }else{
            newUrl += "/api/user/register"
            const response = await axios.post(newUrl,data);
            if(response.data.success){
                setCurrState("Login")
            }else{
                alert(response.data.message)
            }
        }
        
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    return(
        <div className="login-popup">
            <form action='' onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState==="Login"?"Đăng Nhập":"Đăng Ký"}</h2>
                </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Tên của bạn' required/>}
                    <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Email của bạn' required/>
                    <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='Mật khẩu' required/>
                </div>
                <button type='submit'>{currState==="Sign Up"?"Đăng Ký":"Đăng Nhập"}</button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required/>
                    <p>Bạn có đồng ý với các điều khoản của chúng tôi</p>
                </div>
                {currState==="Login"
                ?<p>Bạn chưa có tài khoản?<span onClick={()=> setCurrState("Sign Up")}> Tạo tài khoản</span></p>
                :<p>Bạn đã có tài khoản?<span onClick={()=> setCurrState("Login")}> Đăng nhập</span></p>}
            </form>
        </div>
    );

};
export default Login;