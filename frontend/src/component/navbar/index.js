import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import './navbar.css'
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/storeContext";

const Navbar = () => {

    let iconStyles = { color: "black", fontSize: "1.8em" };
    const [menu, setMenu] = useState("Trang-chu");
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);
    const navigate = useNavigate();
    const logout  = ()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }
    return(
        <div className="navbar">
            <Link to='/'><img src={assets.LogoDolphin} alt="" className="logo"/></Link>
            <ul className="navbar-menu">
                <Link  to="/" onClick={()=> setMenu("Trang-chu")} className={menu==="Trang-chu"?"active":""}>Trang Chủ</Link>
                <Link to="/danh-sach-ca" onClick={()=> setMenu("Danh-sach-ca")} className={menu==="Danh-sach-ca"?"active":""}>Danh Sách Cá</Link>
                <a href='#footer' onClick={()=> setMenu("Lien-he")} className={menu==="Lien-he"?"active":""}>Liên Hệ</a>
            </ul>
            <div className="navbar-right">
                <CiSearch style={iconStyles}/>
                <div className="navbar-search-icon">
                    <Link to='gio-hang'><FaShoppingCart style={iconStyles}/></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                {!token?<button ><Link to='dang-nhap'>Đăng Nhập</Link></button>
                :<div className="navbar-profile">
                    <img src={assets.profile_image} alt=""/>
                    <ul className="nav-profile-dropdown">
                        <li><img src={assets.order_icon} alt=""/><p >Đơn hàng</p></li>
                        <hr/>
                        <li onClick={logout}><img src={assets.loguot_icon} alt=""/><p>Thoát</p></li>
                    </ul>
                </div> }
            </div>
            <hr/>
        </div>
    );

};
export default Navbar;