import { assets } from '../../assets/assets';
import './add.css'
import React, {useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
const Add = ({url}) =>{
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        price:"",
        description:"",
        category:""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data =>({...data,[name]:value}))
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append ("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)
        const response = await axios.post(`${url}/api/fish/add`,formData)
        if(response.data.success){
            setData({
                name:"",
                price:"",
                description:"",
                category:""
            })
            setImage(false)
            toast.success("Thêm thành công")
        }else{
            toast.error("vui lòng điền đầy đủ thông tin")
        }
    }
    return(
        <div className="add">
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Tải ảnh lên</p>
                    <label htmlFor="image">
                        <img src={image?URL.createObjectURL(image):assets.upload_icon} alt="" />
                    </label>
                    <input onChange={(e)=> setImage(e.target.files[0])} type="file" id="image" hidden required />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Tên cá</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Nhập tên' required/>
                </div>
                <div className='add-product-description flex-col'>
                    <p>Miêu tả</p>
                    <textarea onChange={onChangeHandler} value={data.description} type="text" name="description" rows ="6" placeholder='Nhập miêu tả'/>
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Loại cá</p>
                        <select onChange={onChangeHandler} value={data.category} name="category" >
                            <option vaulue="Cá Neon">Cá Neon</option>
                            <option vaulue="Cá Dĩa">Cá Dĩa</option>
                            <option vaulue="Cá Cầu Vồng">Cá Cầu Vồng</option>
                            <option vaulue="Cá Phượng Hoàng">Cá Phượng Hoàng</option>
                            <option vaulue="Cá Thần Tiên">Cá Thần Tiên</option>
                            <option vaulue="Cá Betta">Cá Betta</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Giá tiền</p>
                        <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder="Nhập giá tiền" required/>
                    </div>
                </div>
                <button type="submit" className="add-btn">Thêm</button>
            </form>
        </div>
    )
} 
export default Add;