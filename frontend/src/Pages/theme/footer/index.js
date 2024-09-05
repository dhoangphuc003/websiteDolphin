import { assets } from '../../../assets/assets';
import './footer.css'
import { FiPhone  } from "react-icons/fi";
import { MdOutlineEmail,MdOutlineLocationOn  } from "react-icons/md";
const Footer = ()=>{
    return(
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.LogoDolphin} alt="" className="logo"/>
                    <p>
                    Dolphin cung cấp cá cảnh đẹp mắt và chất lượng, 
                    kèm theo dịch vụ tư vấn và hỗ trợ sau bán hàng chu đáo. Đến với chúng tôi, 
                    bạn sẽ có trải nghiệm mua sắm và nuôi cá tuyệt vời nhất,
                    đảm bảo mang lại sự yên bình và hạnh phúc cho gia đình bạn.
                    </p>
                    <div className='footer-social-icon'>
                        <img src={assets.faceboook_icon} alt=''/>
                        <img src={assets.instagram_icon} alt=''/>
                        <img src={assets.youtube_icon} alt=''/>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h1>CỬA HÀNG</h1>
                    <ul>
                        <li>Trang Chủ</li>
                        <li>Danh Sách Cá</li>
                        <li>Liên Hệ</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h1>Liên Hệ </h1>
                    <ul>
                        <li><FiPhone/>  0328572011</li>
                        <li><MdOutlineEmail/>  dhoangphuc003@gmail.com</li>
                        <li><MdOutlineLocationOn/>  An Phú Đông, Quận 12, HCM</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">
                Copyright 2024 dolphin.com - All right reserved
            </p>
        </div>
    );

};
export default Footer;