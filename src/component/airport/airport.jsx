import './airport.scss';
import Port from '../../assets/port.jpg';
import Button from '../button/button';
let Airport =()=>{
    return(

        <div>
        
        <div id='kettle'>
            <div id='pot'>
                <img src={Port} alt='port'/>
            </div>

            <div id='pretty'>
                <h1>Port Harcourt Airport</h1>
                <h3>Wondering how to get from Murtala Muhammed International Airport to the city of Lagos, or how to get from Lagos to the airport?</h3>
                <h3>Request a ride to and from Lagos airports at the tap of a button. Or see more airports in Lagos</h3>

                <div id='mew'>
                    <Button type='button'className='set-bttn' children="Get the app"></Button>
                     <Button type='button'className='got-bttn' children="See all airports"></Button>
                </div>
            </div>

        </div>
                    

        </div>

    )
}
export default Airport;