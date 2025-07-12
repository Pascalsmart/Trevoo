import './ride.scss';
import Vault from '../../assets/road.png';
import Button from '../../component/button/button';

let Ride =() =>{
    
    return(
         <div>
            <div id='back'>
                <div id='game'>
                   <img src={Vault} alt='ride'/>
                </div>
                <div id='front'>
                    <h1>Trevoo Rides</h1>
                    <h3>Request in seconds, ride in minutes.</h3>
                    <p>Trevoo is the safe, reliable ride-hailing service available at the tap of a button. Order a ride and get picked up by a top-rated driver in more than 600 cities worldwide.</p>
                    <h3>Download the Bolt app for a comfortable ride to your destination.</h3>

                    <Button type='button'className='green-bttn' children="Get the app"></Button>

                    
                </div>

            </div>

         </div>
    )
}
export default Ride;