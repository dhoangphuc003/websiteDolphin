import { useEffect, useState } from 'react';
import './list.css'
import axios from 'axios';
import { toast } from 'react-toastify';
const List = ({url}) =>{
    const [list, setList] = useState([]);
    const fetchList = async () => {
        const response  = await axios.get(`${url}/api/fish/list`);
        console.log(response.data)
        if(response.data.success){
            setList(response.data.data);
        }else{
            toast.error("Đã xãy ra lỗi");
        }
    }

    const remmoveFish = async(fishId)=>{
        const response = await axios.post(`${url}/api/fish/remove`,{id:fishId});
        await fetchList();
        if(response.data.success){
            toast.success("Đã xóa thành công")
        }else{
            toast.error("Đã xãy ra lỗi");
        }
    }

    useEffect(()=>{
        fetchList();
    },[])

    return(
        <div className="list add flex-col">
            <h1>Danh Sách Cá</h1>
            <div className='list-table'>
                <div className='list-table-format title'>
                    <b>Ảnh</b>
                    <b>Tên</b>
                    <b>Loại</b>
                    <b>Giá</b>
                    <b>Hành Động</b>
                </div>
                {list.map((item,index)=>{
                    return(
                    <div key={index} className='list-table-format'>
                    <img src={`${url}/image/` +item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>{item.price}đ</p>
                    <p onClick={()=>remmoveFish(item._id)} className='cursor'>X</p>
                    </div>
                    )
                })}
            </div>                
        </div>
    )
} 
export default List;