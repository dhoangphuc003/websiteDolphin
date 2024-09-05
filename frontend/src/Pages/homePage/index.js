import { useState } from 'react';
import ExploreMenu from '../../component/exploreMenu';
import './home.css'
import FishDisplay from '../../component/fishDisplay';

const HomePage = ()=>{
    const [category,setCategory] = useState("Tất Cả");
    return(
        <div>
            <div className='banner'>
                <div className="banner-content">
                    <h2>Cá cảnh</h2>
                    <p>
                        Khám phá vẻ đẹp tự nhiên và sự phong phú của đời sống dưới nước
                        với các loại cá cảnh đa dạng từ cửa hàng của chúng tôi!
                    </p>
                    <button>Xem Thêm</button>
                </div>
            </div>  
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FishDisplay category={category} />
        </div>
    );

};
export default HomePage;