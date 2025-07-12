import './business.scss';
import Button from '../../component/button/button';
import Vault from '../../assets/road.png';
import Open from '../../assets/openc.png'


let Business = ()=>{
 
    return(
        <div>
            <div id='sunny'>
                <div id='jerk'>
                   <img src={Open} alt='ride'/>
                </div>
                <div id='hike'>
                    <h1>Trevoo Business</h1>
                    <h3>Trevoo services on a corporate scale..</h3>
                    <p>Trevoo is the safe, reliable ride-hailing service available at the tap of a button. Order a ride and get picked up by a top-rated driver in more than 600 cities worldwide.</p>
                

                    <Button type='button'className='green2-bttn' children="Join Trevoo Business"></Button>

                    
                </div>

            </div>

        </div>
    )
} 
export default Business;