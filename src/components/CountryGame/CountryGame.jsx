import { getAllCountrys } from '../../API/getAllCountrys'
import {useState, useEffect} from 'react';
import {Options} from '../Options/Options'




export function CountryGame({rd}){
  const [countrys, setCountrys] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(()=>{
    setLoad(true)
    
    getAllCountrys().then(data =>{
      const result = data.filter(country => country.hasOwnProperty('borders') && country.borders.length >= 2);
      setCountrys(result[rd]);
      setLoad(false)
      
    } );
  },[rd]);

  //console.log(`Fuera del Efect load = ${load} countrys ${countrys}`)


  if(load){
    return (
      <p>Cargando Picture....</p>
    )
  }

  const codes = countrys.borders.slice(0,2);
  codes.push(countrys.cca3)
  const OPcodes = codes.sort();

  return(
    <div>
     <img src={countrys.flags.png} alt={countrys.name.official} />


     <p><strong>Opciones:</strong></p>
     
  
     


     
     {OPcodes.map(op =>( 
       <Options 
     key={op}
     code={op} 
     resC={countrys.name.official}
     />

     ))}


    </div>
  )

}




















