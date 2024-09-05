import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <NavLink to='/add' className='sidebar-option'> 
          <img src={assets.add_icon} alt=''/>
          <p>Thêm Cá Mới</p>
        </NavLink>
        <NavLink to='/list' className='sidebar-option'> 
          <img src={assets.parcel_icon} alt=''/>
          <p>Danh Sách Cá</p>
        </NavLink>
        <NavLink to='/order' className='sidebar-option'> 
          <img src={assets.order_icon} alt=''/>
          <p>Hóa Đơn</p>
        </NavLink>
        <NavLink to='http://localhost:3000/' className='sidebar-option'> 
          <img src={assets.loguot_icon} alt=''/>
          <p>Thoát</p>
        </NavLink>
      </div>
    </div>
  )
}
export default Sidebar;