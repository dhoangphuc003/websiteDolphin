import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import FishItem from '../fishItem';
import './fishDisplay.css'


const FishDisplay = ({category}) =>{

    const {fish_list} = useContext(StoreContext);

    return(
        <div className='fish-display' id='fish-display'>
            <h2>{category} </h2>
            <div className='fish-display-list'>
                {fish_list.map((item,index) => {
                    console.log(category,item.category);
                    if(category === "Tất Cả" || category === item.category){
                        return <FishItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                    }
                })}
            </div>
        </div>
    )
}
export default FishDisplay;