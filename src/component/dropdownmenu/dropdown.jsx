import {useState, useContext} from 'react';
import { dropContext } from '../../context/dropmenu';
import './dropdown.scss';


let Down =({...otherProps})=>{


    let { drop, setDrop}=useContext(dropContext);

    let closeHandler=()=>{
         document.body.style.overflow='auto';
        setDrop(2);
    }

    return(
 <div {...otherProps}>

    

        <div id='desk'>
    
                <div id='light'>
    
                    <h1>Trevoo</h1>
    
                    <div id='ifini'>
                        <select id="h4">
                            <option value="EN"> 🌍EN  </option>
                        </select>
    
                        <h3>Support</h3>
    
                        <button>Register</button>
    
                        <p onClick={closeHandler}>✖</p>
                        
    
                        </div>
    
         </div>
     </div>

     <div id='tick'>
        <div id='spoil'>
            <div id='friend'>

                 <div id='of'>
<h3> Products</h3> <h3>Earn with Trevoo</h3> <h3>Company</h3> <h3>Support</h3> <h3>Cities</h3>
                </div>  

                <div id='para'>
                    <div id='thank'>
                        <h3>Rides</h3>

                        <p>Rider saftey</p>
                        <p>Become a driver</p>
                    </div>

                    <div id='thank'>
                        <h3>Trotinete</h3>

                        <p>Scooter safety</p>
                        <p>Report an issue</p>
                        <p>Safety lab</p>
                    </div>

                    <div id='thank'>
                        <h3>Trevoo Market</h3>

                        <p>Become a courier</p>
                        <p>Add a restaurant or store</p>
                    </div>

                    <div id='thank'>
                        <h3>Trevoo Food</h3>

                        <p>Become a courier</p>
                        <p>Add a restaurant or store</p>
                    </div>
                </div>  


                <div id='nurse'>
                     <div id='goat'>
                        <h3>Trevoo Drive</h3>

                        <p>FAQ</p>
                        <p>Report a vehicle</p>
                    </div>

                    <div id='goat'>
                        <h3>Trevoo Business</h3>

                        <p>Benefits</p>
                        <p>Work profile</p>
                        <p>Product</p>
                        <p>Bolt Food for Business</p>
                    </div>

                    <div id='goat'>
                        <h3>E-bikes</h3>

                        <p>Safety lab</p>
                        <p>Report an issue</p>
                        <p>FAQ</p>
                    </div>

                    <div id='goat'>
                        <h3>Trevoo plus</h3>

                        <p>Benefits</p>
                        <p>How to join</p>
                        <p>FAQ</p>
                    </div>
                </div>


           </div>


             <div id='enemy'>
                <div id='trend'> 

                    <div id='turn'>
                      <h3>👨🏼‍✈️ Become a driver</h3>
                      <p>Make money on your terms</p>
                    </div>

                    <div id='turn'>
                        <h3>🚴🏼‍♂️ Become a courier</h3>
                        <p>Deliver food and get paid weekly</p>
                    </div>

                    <div id='turn'>
                        <h3>🎂 Add a restaurant or store</h3>
                        <p>Reach more customers and increase earnings</p>
                    </div>

                    <div id='turn'>
                        <h3>🚖 Sign up as a fleet owner</h3>
                        <p>Add your fleet to Bolt and boost your income</p>
                    </div>

                    <div id='turn'>
                        <h3>🧳 Bolt Business</h3>
                        <p>Bolt products and services scaled-up for your business</p>
                    </div>



                </div>

             </div>

          </div>   










        </div>

    </div>

     
        


    )
}

export default Down;