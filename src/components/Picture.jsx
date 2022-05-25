import { getAllCountrys } from '../API/getAllCountrys'
import {useState, useEffect} from 'react';





export function Picture({rd}){

  const [countrys, setCountrys] = useState([]);

 
  
  useEffect(()=>{
    getAllCountrys().then(data =>{
      const result = data.filter(country => country.hasOwnProperty('borders') && country.borders.length >= 3);
      setCountrys(result[rd]);
      
    } );
  },[]);

  
  if(countrys.length === 0){
    return (
      <p>Cargando Picture....</p>
    )
  }

  return(
    <div>
     <img src={countrys.flags.png} alt={countrys.name.official} />
    </div>
  )

}




















