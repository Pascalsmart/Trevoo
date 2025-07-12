import './smalldrop.scss';
import Button from '../../component/button/button';
import {useContext} from 'react';
import { dropContext } from '../../context/dropmenu';
import { productContext } from '../../context/products';
import { earnContext } from '../../context/ewtrevoo';
import { companyContext } from '../../context/company';
import { safetyContext } from '../../context/safety';
import { supportContext } from '../../context/support';
import { cityContext } from '../../context/city';
import { otherContext } from '../../context/other';




let Drop2 =({...otherProps})=>{


    //START SUPPORT
let {support, setSupport}= useContext(supportContext);

    let supportNames = ["nosupport", "showsupport"];
    let supportHandler =(event)=>{
        if (event.target.children[1].innerText==="↑"){
            setSupport(1);
        }
        else{
            setSupport(0);
        }
    }

     let supportnameHandler = (event)=>{
        if(event.target.nextElementSibling.innerText==="↑"){
            setSupport(1);
        }
        else{
            setSupport(0);
        }
    }

      let supportcloseHandler = (event)=>{
        
        if(event.target.innerText==="↑"){
            setSupport(1);
        }

        else{
            setSupport(0)
        }
    }


    //start other
let {other, setOther}= useContext(otherContext);

    let otherNames = ["noother", "showother"];
    let otherHandler =(event)=>{
        if (event.target.children[1].innerText==="↑"){
            setOther(1);
        }
        else{
            setOther(0);
        }
    }

     let othernameHandler = (event)=>{
        if(event.target.nextElementSibling.innerText==="↑"){
            setOther(1);
        }
        else{
            setOther(0);
        }
    }

      let othercloseHandler = (event)=>{
        
        if(event.target.innerText==="↑"){
            setOther(1);
        }

        else{
            setOther(0)
        }
    }


//start city
    let {city, setCity}= useContext(cityContext);

    let cityNames = ["nocity", "showcity"];
    let cityHandler =(event)=>{
        if (event.target.children[1].innerText==="↑"){
            setCity(1);
        }
        else{
            setCity(0);
        }
    }

     let citynameHandler = (event)=>{
        if(event.target.nextElementSibling.innerText==="↑"){
            setCity(1);
        }
        else{
            setCity(0);
        }
    }

      let citycloseHandler = (event)=>{
        
        if(event.target.innerText==="↑"){
            setCity(1);
        }

        else{
            setCity(0)
        }
    }

    //start safety

    let {safety, setSafety}= useContext(safetyContext);

    let safetyNames = ["nosafety", "showsafety"];
    let safetyHandler =(event)=>{
        if (event.target.children[1].innerText==="↑"){
            setSafety(1);
        }
        else{
            setSafety(0);
        }
    }

     let safetynameHandler = (event)=>{
        if(event.target.nextElementSibling.innerText==="↑"){
            setSafety(1);
        }
        else{
            setSafety(0);
        }
    }

      let safetycloseHandler = (event)=>{
        
        if(event.target.innerText==="↑"){
            setSafety(1);
        }

        else{
            setSafety(0)
        }
    }

    //START COMPANY

    let {comp, setComp}= useContext(companyContext);

    let compNames = ["nocomp", "showcomp"];
    let compHandler =(event)=>{
        if (event.target.children[1].innerText==="↑"){
            setComp(1);
        }
        else{
            setComp(0);
        }
    }

     let compnameHandler = (event)=>{
        if(event.target.nextElementSibling.innerText==="↑"){
            setComp(1);
        }
        else{
            setComp(0);
        }
    }

      let compcloseHandler = (event)=>{
        
        if(event.target.innerText==="↑"){
            setComp(1);
        }

        else{
            setComp(0)
        }
    }

//start earn
    let {earn, setEarn}= useContext(earnContext);

    let earnNames = ["noearn", "showearn"];
    let earnHandler =(event)=>{
        if (event.target.children[1].innerText==="↑"){
            setEarn(1);
        }
        else{
            setEarn(0);
        }
    }

     let earnnameHandler = (event)=>{
        if(event.target.nextElementSibling.innerText==="↑"){
            setEarn(1);
        }
        else{
            setEarn(0);
        }
    }

      let earncloseHandler = (event)=>{
        
        if(event.target.innerText==="↑"){
            setEarn(1);
        }

        else{
            setEarn(0)
        }
    }



    let {prod, setPro} = useContext(productContext);

    //THIS IS THE JSX FOR YOUR PRODUCT

    let proNames = ["nopro", "showpro"];

    let productHandler = (event)=>{
       if(event.target.children[1].innerText==="↑"){
        setPro(1);
       }
       else{
        setPro(0);
       }
        
    }

    let pronameHandler = (event)=>{
        if(event.target.nextElementSibling.innerText==="↑"){
            setPro(1);
        }
        else{
            setPro(0);
        }
    }

    let procloseHandler = (event)=>{
        
        if(event.target.innerText==="↑"){
            setPro(1);
        }

        else{
            setPro(0)
        }
    }

    //IT STOPS HERE;

    

    let { drop, setDrop}=useContext(dropContext);
    let closeHandler=()=>{
         document.body.style.overflow='auto';
        setDrop(2);
    }


    return(
        <div {...otherProps}>
<div id='fog'>
<div id='emma'>
         <div id='hope'>
             <div id='holy'>
                 <h1> <span>Trevoo</span></h1>
                            <div id='pusy'>
                                <select id="braz">
                                    <option value="EN"> 🌍EN  </option>
                                </select>
            
                                <p onClick={closeHandler}>✖</p>
                            </div>
            
             </div>
         </div>
          </div>
        

 <div id='fleet'>
    <div id='oyu'>
            <div id='deer'>
                <div id='file' onClick={productHandler}>
                    <h2 onClick={pronameHandler}>Products </h2>
                    <p onClick={procloseHandler}>{prod===0?"↑":"↓"}</p>
                    
                    
                </div>

                <div className={proNames[prod]}>
                 <p>Rides</p>
                 <p>Trotinete</p>
                 <p>Trevoo Market</p>
                 <p>Trevoo Food</p>
                 <p>Trevoo Drive</p>
                 <p>Trevoo Business</p>
                 <p>E-bike </p>
                 <p>Trevoo Plus</p>
                </div>
            </div>


                        <div id='deer'>
                <div id='file' onClick={earnHandler}>
                    <h2 onClick={earnnameHandler}>Earn with Trevoo  </h2>
                    <p onClick={earncloseHandler}>{earn===0?"↑":"↓"}</p>
                </div>

                <div className={earnNames[earn]}>
                 <p>Drivers</p>
                 <p>Courier</p>
                 <p>Trevoo Food Merchants</p>
                 <p>Fleets</p>
                 <p>Franchies</p>
                </div>
            </div>

             <div id='deer'>
                <div id='file' onClick={compHandler}>
                    <h2 onClick={compnameHandler}>Company  </h2>
                    <p onClick={compcloseHandler}>{comp===0?"↑":"↓"}</p>
                </div>

                <div className={compNames[comp]}>
                 <p>Careers</p>
                 <p>About Trevoo</p>
                 <p>Sustainability at Trevoo</p>
                 <p>Project Zero</p>
                 <p>Blog</p>
                 <p>Press</p>
                 <p>Brand guidelines </p>
                 
                </div>
                </div>


                <div id='deer'>
                    <div id='file' onClick={safetyHandler}>
                        <h2 onClick={safetynameHandler}>Safety  </h2>
                        <p onClick={safetycloseHandler}>{safety===0?"↑":"↓"}</p>
                    </div>

                    <div className={safetyNames[safety]}>
                        <p>Rider Safety</p>
                        <p>Diver Safety</p>
                        <p>Scooter Safety</p>
                        <p>Safety Lab</p>
                    </div>
                </div>


                 <div id='deer'>
                    <div id='file' onClick={cityHandler}>
                        <h2 onClick={citynameHandler}>Cities </h2>
                        <p onClick={citycloseHandler}>{city===0?"↑":"↓"}</p>
                    </div>

                    <div className={cityNames[city]}>
                        <p>Locations</p>
                        <p>City Solutions</p>
                        <p>Airports</p>
                        <p>Trevoo Charging Docks</p>
                    </div>
                </div>

                 <div id='deer'>
                    <div id='file' onClick={supportHandler}>
                        <h2 onClick={supportnameHandler}>Support  </h2>
                        <p onClick={supportcloseHandler}>{support===0?"↑":"↓"}</p>
                    </div>

                    <div className={supportNames[support]}>
                        <p>For riders</p>
                        <p>For drivers</p>
                        <p>For courier</p>
                        <p>Trevoo Food</p>
                        <p>For fleet owners</p>
                        <p>For resturants</p>
                        <p>Trevoo Business</p>
                    </div>
                </div>

                 <div id='deer'>
                    <div id='file' onClick={otherHandler}>
                        <h2 onClick={othernameHandler}>Other</h2>
                        <p onClick={othercloseHandler}>{other===0?"↑":"↓"}</p>
                    </div>

                    <div className={otherNames[other]}>
                        <p>Suppliers</p>
                        <p>Terms&Conditions</p>
                        <p>Cookies</p>
                        <p>Security</p>
                    </div>
                </div>

                <div id='vivo'>
                    <div id='fight'>
            <p>Get a ride in minutes!</p>
        <Button type='button'className='pink-bttn' children="Download Trevoo App"></Button>
          </div>

          <div id='after'>
            <p>Find your favourite food!</p>
            <Button type='button'className='grey-bttn' children="Download Trevoo Food app"></Button>
          </div>
          </div>
                </div>

          </div>

          


</div>

</div>
    )
}

export default Drop2;