import { useState } from 'react';
import ExploreMenu from '../../component/exploreMenu';
import FishDisplay from '../../component/fishDisplay';

const ListFish = ()=>{
    const [category,setCategory] = useState("Tất Cả");
    return(
        <div>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FishDisplay category={category} />
        </div>
    );

};
export default ListFish;