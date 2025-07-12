import './company.scss';
import Comp from '../../assets/company3.png';


let Company =()=>{
  return(
    <div>
        <div id='logo'>

            <div id='items'>
                <img src={Comp} alt='comp'/>
            </div>

            <div id='issue'>
                <h1>Company information</h1>
                <p>Legal</p>
                <a href='Terms and conditions'>Terms and conditions</a>
            </div>


        </div>
    </div>

    )
}

export default Company;