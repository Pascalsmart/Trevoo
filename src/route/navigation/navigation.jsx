import { Outlet } from "react-router-dom";
import Largenav from "../../component/largenavigation/largenavigation";
import Smallnav from "../../component/smallnavigation/smallnavigation";
import './navigation.scss';

let Nav = ()=>{
    return(

        <div id='nav'>

            <Largenav/>
            <Smallnav/>
        

            <Outlet/>
        </div>
    )

}
export default Nav;