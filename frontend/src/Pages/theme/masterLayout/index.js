import Footer from "../footer";
import Header from "../header";
import '../../../index.css'
import './masterLayout.css'
import StoreContextProvider from "../../../context/storeContext";


const MasterLayout = ({children, ...props})=>{

    return(
        <div className="MasterLayout">
           <StoreContextProvider>
                <Header />
                <div className="content">{children}</div>
                <Footer/>
           </StoreContextProvider>
        </div>
    );

};
export default MasterLayout;