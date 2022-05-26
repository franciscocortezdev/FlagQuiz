import { getCodeCountrys } from '../../API/getCodeCountrys'
import {useState, useEffect, useRef} from 'react';
import './Options.css'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';





export function Options({code, resC}){

 const [codeP, setcodeP] = useState();

 const numberCorrect = useRef(0);
  const numberAswer = useRef(0)

  useEffect(()=>{
    getCodeCountrys(code).then(data =>{
      setcodeP(data[0].name.official)
    } );
  },[code]);


  const handleClick = (resc,e) => {
    let selected = e.target
    let correct = document.getElementById(resc)

   

    if(selected.innerText === resc){
      console.log('correcto')
      selected.classList.add('correct')

    
      return
    }
    
  
    console.log('incorrecto');
    selected.classList.add('incorrect')
    correct.classList.add('correct')
  }

  
    
  
    if(codeP === undefined){ 
      return (
        <p className='Loading'>Cargando opcion ....</p>
      )
    }

    console.log('Correct ' + numberCorrect)
     console.log('Respuestas ' + numberCorrect)


    return (
      <div id={codeP} className='option' onClick={(e)=> handleClick(resC,e)}>
         <p className='option_P'  >{codeP}</p>

      </div>
    )

}











