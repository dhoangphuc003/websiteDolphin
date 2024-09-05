import '../../../index.css'
import Navbar from "../../../components/navbar";
import Sidebar from '../../../components/sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MasterLayout = ({children, ...props}) => {
    return(
        <div >
            <ToastContainer/>
            <Navbar/>
            <hr/>
            <div className='app-content'>
                <Sidebar/>
                {children}
            </div>
        </div>
    );

};
export default MasterLayout;