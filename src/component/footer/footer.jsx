import './footer.scss';
import Button from '../button/button';
import facebook from '../../assets/facebook.svg'
import link from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'
import tiktok from '../../assets/tiktok.svg'
import instagram from '../../assets/instagram.svg'



let Footer =()=>{
    return(

<div>


    <div id='bright'>
       <div id='prom'> 
            
        <div id='scan'>

            <h1>Trevoo</h1>
            <select>
                <option value="Eng">
                    Eng
                </option>
            </select>

        </div>


    
        <div id="xxx">
        <h3>Trevoo</h3>

        <p>Rides</p>
        <p>Food delivery</p>
        <p>Grocery delivery</p>
        <p>Scooters</p>
        <p>Car-sharing</p>
        <p>Business</p>
        <p>Airports</p>
        <p>Cities</p>
        </div>



        <div id="xxx">
        <h3>Partner with Trevoo</h3>

        <p>Register as a driver</p>
        <p>Register as a courier</p>
        <p>Register as a merchant</p>
        <p>Fleets</p>
        <p>Franchise</p>
        </div>


        <div id="xxx">
        <h3>Company</h3>

        <p>About us</p>
       <p>Careers</p> 
       <p>Sustainability at Trevoo</p> 
       <p>Press</p> 
       <p>Blog</p> 
       <p>Brand guidelines</p> 
        </div>

    </div>
   </div> 

   <div id='social'>
    <div id='fist'>
        <div id="mon">
        <img src={facebook}/>
        </div>

        <div id="mon1">
        <img src={twitter}/>
        </div>

        <div id="mon2">
        <img src={instagram}/>
        </div>

        <div id="mon3">
        <img src={link}/>
        </div>

        <div id="mon4">
        <img src={tiktok}/>
        </div>

        </div>

        <div id='cho'>
            <Button type='button'className='hat-bttn' children="Get the app"></Button>
        </div>
   </div>


   <div id='sound'>
      <div id='son'>
        <div id='speak'>
            <p>&copy;{new Date().getFullYear()}  Trevoo Technology OÜ</p>
        </div>

        <div id='will'>
            <p>Suppliers
</p>
            <p>Terms&Conditions</p>
            <p>Privacy
</p>
            <p>Cookies
</p>
            <p>Security</p>
        </div>

        </div>

        
   </div>








</div>

    )
}

export default Footer;