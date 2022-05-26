import { getCodeCountrys } from '../../API/getCodeCountrys'
import {useState, useEffect, useRef} from 'react';
import './Options.css'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';





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
      <div id={codeP} className='option' onClick={(e)=> clickOptions(resC,e)}>
         <p className='option_P'  >{codeP}</p>

      </div>
    )

}











