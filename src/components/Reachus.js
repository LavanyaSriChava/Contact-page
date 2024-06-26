import './Reachus.css';
import { useState } from 'react';

const Reachus = () =>{
    const [form, setform] = useState[{Name:'',Email:'',Message:''}]



  return (
    <div className='Reachus'>
        <form>
<label Name>
    <input type="text"
    placeholder='Enter your name'
    required value={Name}
    ></input>
</label>




        </form>

      
    </div>
  )
}

export default Reachus
