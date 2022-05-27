import { getCodeCountrys } from '../../API/getCodeCountrys'
import {useState, useEffect} from 'react';
import './Options.css'





export function Options({code, resC,clickOptions}){

 const [codeP, setcodeP] = useState();

  useEffect(()=>{
    getCodeCountrys(code).then(data =>{
      setcodeP(data[0].name.official)
    } );
  },[code]);


  

  
  
    if(codeP === undefined){ 
      return (
        <p className='Loading'>Cargando opcion ....</p>
      )
    }

    return (
      <div  className='option' onClick={(e)=> clickOptions(resC,e)}>
         <p id={codeP} className='option_P'  >{codeP}</p>

      </div>
    )

}











