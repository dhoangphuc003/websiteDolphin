import '../list/list.css'

const Orders = ({url}) =>{
    return(
        <div className="list add flex-col">
        <h1>Danh Sách hóa đơn</h1>
        <div className='list-table'>
            <div className='list-table-format title'>
                <b>Tên</b>
                <b>Thành tiền</b>
                <b>Địa chỉ</b>
                <b>Ngày lập</b>
                <b>Hành Động</b>
            </div>
        </div>                
    </div>
    )
} 
export default Orders;