import { getCodeCountrys } from '../API/getCodeCountrys'
import {useState, useEffect} from 'react';
import './Options.css'


function handleClick(resc, ev ){
  let selected = ev.target.innerText;
  let correct = document.getElementById(resc)


  if(selected === resc){
    console.log('correcto')
    correct.classList.add('correct')
    return
  }
  console.log('incorrecto');
  ev.target.classList.add('incorrect')
  correct.classList.add('correct')
}


export function Options({code, resC}){

 const [codeP, setcodeP] = useState();


  useEffect(()=>{
    getCodeCountrys(code).then(data =>{
      setcodeP(data[0].name.official)
    } );
  },[code]);
  
  
    if(codeP === undefined){ 
      return (
        <p>Cargando opcion ....</p>
      )
    }

    return (
      <div id={codeP}>
        <p onClick={(e)=> handleClick(resC, e)} >{codeP}</p>
      </div>
    )

}











