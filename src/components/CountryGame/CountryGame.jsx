import { getAllCountrys } from '../../API/getAllCountrys'
import {useState, useEffect} from 'react';
import {Options} from '../Options/Options'
import './CountryGame.css'



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


  if(load){
    return (
      <p className='Loading'>Cargando Picture....</p>
    )
  }

  const codes = countrys.borders.slice(0,2);
  codes.push(countrys.cca3)
  const OPcodes = codes.sort();

  return(
    <>
    <div className='containerHead'>
    <h1 className='gameTitle'>What country is?</h1>
     <img className='countryImg' src={countrys.flags.png} alt={countrys.name.official} />
     </div>
    <div className='containerOptions'>
     {OPcodes.map(op =>( 
       <Options 
     key={op}
     code={op} 
     resC={countrys.name.official}
     />

     ))}
    </div>
    </>
    
  )

}




















