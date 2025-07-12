import './blue.scss';
import Man from '../../assets/man.webp';
import Button from '../../component/button/button';

let Color =()=>{

  
    return(
      <div>
        <div id='core'>

           <div id='room'>
              <div id='case'>
                <img src={Man} alt='def'/>
              </div>

                  <div id='set'>
                    <h1>Earn money with Trevoo</h1>

                    <h3>Join our community of 4.5M+ Trevoo partners around the world.</h3>
                    <p>Set your own schedule and make money on your terms by driving and delivering.</p>

                    <Button type='button'className='blue-bttn' children="Apply to drive"></Button>
                  </div>

           </div>

        </div>
      </div>
    )
}
export default Color;