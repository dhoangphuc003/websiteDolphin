import { ROUTERS }       from './utils/router';
import { Route, Routes } from 'react-router-dom';
import MasterLayout      from './page/theme/masterLayout';
import Add from './page/add';
import List from './page/list';
import Orders from './page/orders';


const renderUserCustom = () => {
    const url= "http://localhost:4000";
    const userRouters = [
        {
            path: ROUTERS.USER.ADD,
            Component:<Add url={url}/>
        },
        {
            path: ROUTERS.USER.LIST,
            Component:<List url={url}/>
        },
        {
            path: ROUTERS.USER.ORDER,
            Component:<Orders url={url}/>
        }
    ]
    return (
       <MasterLayout>
            <Routes>
                {userRouters.map((item , key) => (
                    <Route key={key} path={item.path} element={item.Component}/>
                ))}
            </Routes>
       </MasterLayout>
    )
};

const RouterCustom = () => {
    return renderUserCustom();
};
export default RouterCustom;