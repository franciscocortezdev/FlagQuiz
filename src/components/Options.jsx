import { getCodeCountrys } from '../API/getCodeCountrys'
import {useState, useEffect} from 'react';






export function Options({code}){

 // const [codeP, setcodeP] = useState();


  useEffect(()=>{
    getCodeCountrys(code).then(data =>{

      console.log(data);
      
    } );
  },[]);
  


  return (
    <div>
      <p>Options</p>

    </div>
  )


}











