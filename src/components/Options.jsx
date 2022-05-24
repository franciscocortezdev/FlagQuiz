import { getCodeCountrys } from '../API/getCodeCountrys'
import {useState, useEffect} from 'react';






export function Options({code}){

 const [codeP, setcodeP] = useState();


  useEffect(()=>{
    getCodeCountrys(code).then(data =>{

      console.log(data[0].name.official);
      setcodeP(data[0].name.official)
    } );
  },[]);
  


  return (
    <div>
      <p>{codeP}</p>

    </div>
  )


}











