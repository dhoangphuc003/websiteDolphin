import { assets } from '../../assets/assets';
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.LogoDolphin} alt=''/>
      <img className='profile' src={assets.profile_image} alt=''/>
    </div>
  );
}

export default Navbar;
