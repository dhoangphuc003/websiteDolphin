import { ROUTERS }       from './utils/router';
import { Route, Routes } from 'react-router-dom';
import HomePage          from './Pages/homePage';
import MasterLayout      from './Pages/theme/masterLayout';
import CartPage          from './Pages/cartPage';
import PlaceOrderPage    from './Pages/placeOrder';
import Login from './Pages/LoginPage';
import ListFish from './Pages/listFish';
import Verify from './Pages/verify';
import DetailFish from './Pages/detailFish';


const renderUserCustom = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            Component:<HomePage />
        },
        {
            path: ROUTERS.USER.CART,
            Component:<CartPage />
        },
        {
            path: ROUTERS.USER.PLACEORDER,
            Component:<PlaceOrderPage />
        },
        {
            path: ROUTERS.USER.LOGIN,
            Component:<Login />
        },
        {
            path: ROUTERS.USER.LISTFISH,
            Component:<ListFish />
        },
        {
            path: ROUTERS.USER.VERIFY,
            Component:<Verify />
        },
        {
            path: ROUTERS.USER.DETAIL,
            Component:<DetailFish />
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