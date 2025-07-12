import './largenavigation.scss';
import menuu from '../../assets/icons.png';
import Down from '../dropdownmenu/dropdown';
import { useContext } from 'react';
import { dropContext } from '../../context/dropmenu';




let Largenav = ()=>{

    let classes = ["nonee", "par", "unpar"];

    let {drop, setDrop} = useContext(dropContext);  


    let dropHandler = ()=>{

        document.body.style.overflow='hidden';
        setDrop(1);
       
        
    }

  

    return(
        <div id='bignav'>

            <div id='fixed'>

                <h1>Trevoo</h1>

                <div id='menus'>
                    <select id="h4">
                        <option value="EN"> 🌍EN  </option>
                    </select>

                    <h3>Support</h3>

                    <button>Register</button>

                    <img src={menuu} alt='drop' onClick={dropHandler}/>

                    </div>

                   

                    



            </div>



             
            <Down className={classes[drop]}/>
            



       </div>
    )

}
export default Largenav;

