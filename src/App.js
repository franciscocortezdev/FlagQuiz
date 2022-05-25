import './App.css';
import { getAllCountrys } from './API/getAllCountrys'
import { Options } from './components/Options'
import { Picture } from './components/Picture'

import { getCodeCountrys } from './API/getCodeCountrys'

import {useState, useEffect} from 'react';




export function App() {
  const [countrys, setCountrys] = useState([]);
  const [rand, setRand] = useState(Math.floor(Math.random()*110));
  console.log(rand)

  useEffect(()=>{
    getAllCountrys().then(data =>{
      const result = data.filter(country => country.hasOwnProperty('borders') && country.borders.length >= 3);
      setCountrys(result[rand]);
    } );
  },[rand]);

  
  function handleNext(){
    setRand(Math.floor(Math.random()*110))
    
  }
  


  if(countrys.length === 0){
    return (
      <p>Cargando....</p>
    )
  }
  const codes = countrys.borders.slice(0,3);
  codes.push(countrys.cca3)
  const OPcodes = codes.sort();
  
  //const OPcodes = ["BFA","CIV", "TGO"]
  
  return (
    <div> 
      <h1>De que pais es esta bandera?</h1>
      <img src={countrys.flags.png} alt='pais' />
      
      <p><strong>Opciones:</strong></p>
      {/* <Picture rd={rand}/> */}
  
      <p>{rand}</p>


      
      {OPcodes.map(op =>( 
        <Options 
      key={op}
      code={op} 
      resC={countrys.name.official}
      />

      ))}

      <button onClick={handleNext} >Siguiente Pais</button>


    </div>
    
    


  );
}
