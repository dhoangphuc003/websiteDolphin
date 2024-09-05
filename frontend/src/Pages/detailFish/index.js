import { assets } from "../../assets/assets";

const DetailFish = () => {
    return(
        <div class="product-details">
        <div class="product-image">
            <img src={assets.caDiaBC} alt=""/>
        </div>
        <div class="product-info">
            <div class="product-name">Cá Đĩa Bô Câu Đỏ</div>
            <div class="product-category">Cá Đĩa</div>
            <div class="product-description">
                pH: 7<br/>
                Nhiệt độ: 28°C<br/>
                Thức ăn: cám, trùn chỉ,bobo, ...<br/>
                Tập tính:sống theo đàn
            </div>
            <div class="product-price">100,000đ</div>
            <button class="add-to-cart">Thêm vào giỏ hàng</button>
        </div>
    </div>
    );

};
export default DetailFish;