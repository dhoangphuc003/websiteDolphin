import './exploreMenu.css'
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory})=>{
    return(
        <div className="explore-menu" id='explore-menu'>
            <h1>Danh Sách Cá</h1>
            <p>Chọn loại cá mà bạn thích </p>
            <div className="explore-menu-list">
                {menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=> setCategory(prev=>prev===item.menu_name?"Tất Cả":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    );

};
export default ExploreMenu;