import './smallnavigation.scss';
import menuu from '../../assets/icons.png';
import Drop2 from '../smalldrop/smalldrop';
import { useContext } from 'react';
import { dropContext } from '../../context/dropmenu';


let Smallnav = ()=>{

    let classes = ["nonee", "par", "unpar"];
    
        let {drop, setDrop} = useContext(dropContext);  
    
    
        let dropHandler = ()=>{
    
            document.body.style.overflow='hidden';
            setDrop(1);
           
            
        }

       
    return(
        <div id='smallnav'>
            <div id='wealth'>
                <h1> <span>Trevoo</span></h1>


                <div id='gate'>
                    <select id="land">
                        <option value="EN"> 🌍EN  </option>
                    </select>

                    <img src={menuu} alt='drop' onClick={dropHandler}/>
                </div>

            </div>

<Drop2 className={classes[drop]}/>
             
        </div>



)

    
}
export default Smallnav;