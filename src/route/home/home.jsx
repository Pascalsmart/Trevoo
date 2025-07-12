import './home.scss';
import Victoria from '../../assets/plan.jpg';
import Button from '../../component/button/button';
import Ride from '../../component/ride/ride';
import Business from '../../component/business/business';
import Color from '../../component/blue/blue';
import Select from '../../component/select/select';
import { useContext } from 'react';
import { RidenBusi} from '../../context/ridenbusi';
import Airport from '../../component/airport/airport';
import Company from '../../component/company/company';
import Footer from '../../component/footer/footer';







let Home = ()=>{

   let {rider, setRide} = useContext(RidenBusi);

      let ridehandler  =()=>{
         setRide(0);
         
      }


     let businesshandler  =()=>{
         setRide(1);
      }
   

   

    return(

     <div>

         <div id='p-lay'>

            <img src={Victoria} alt='city'/>

             <div id='overlay'>

                <div id='beach'>
                    <h1> Trevoo in PortHarcourt</h1>
                    <h4> Whenever you are in PortHacourt, count on trevoo for ride in minutes! from XC jecks technologies express , trevoo  is a flight of a bullet shot.</h4>

                    <button>Get the app</button>

                </div>
                
            
            </div>
            
            
         </div> 



         <div id='bitch'>
        <p> Avaliable service in Port harcourt</p>

        <h4>Find out more about the services we currently offer across the city.</h4>
         </div>

         <div id='btns'>

            <div id='p-button'>

                
        <Button type='button'className='black-bttn' children="Trevoo Rides" onClick={ridehandler}></Button>
        <Button type='button'className='light-bttn' children="Trevoo Food"></Button>
        <Button type='button'className='light-bttn' children="Trevoo Drive"></Button>
        <Button type='button'className='long-bttn' children="Trevoo Micromobility"></Button>
        <Button type='button'className='medium-bttn' children="Trevoo Business" onClick={businesshandler}></Button>
                

            </div>
         </div>

      

            {rider===0?<Ride/>:<Business/>}

        

            <Color/>


         <div id='tube'>
           <h1>Popular trips in PortHarcourt</h1>

           <p>Explore popular trips in PortHarcourt</p>

           



            
        </div>   

        <Select/>

        <Airport/>


        <div id='contact'>
         <div id='deal'>

         <div id='chop'>
            <h1>Contact us</h1>
         </div>

         <div id='cot'>

         <div id='opp'>

         <div id='zone'>
            <h3>General support</h3>
           <a href=""> Porthacourt@trevoo.eu </a>
         </div>

         <div id='drift'>
            <h3>New driver registrations</h3>
            <a href='' >Porthacourt-signup@trevoo.eu</a>
         </div>

         <div id='ness'>
            <h3>Bolt Business support</h3>
           <a href=''>nigeria@trevoo-business.com</a> 
         </div>
        </div>

        <div id='nect'> 

         <div id='reg'>
            <h3>Driver training time</h3>
            <p>Mondays to Saturday: 9am to 4pm</p>
         </div>
         
         <div id='add'>
            <h3>In-Person support address</h3>
            <p>35 Location Road, Express.</p>
         </div>

         <div id='hour'>
            <h3>Office hours</h3>
            <p>Mondays to Fridays: 9am to 3pm</p>
         </div>

         </div>
        </div> 


        </div> 

        </div>

        <Company/>

        <Footer/>



      

         

        

     </div>    

    )
}

export default Home;
