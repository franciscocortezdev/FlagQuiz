import './App.css';
import { getAllCountrys } from './API/getAllCountrys'
import { getCodeCountrys } from './API/getCodeCountrys'
import {useState, useEffect} from 'react';



function App() {
  const [countrys, setCountrys] = useState([]);

  useEffect(()=>{
    getAllCountrys().then(data =>{
      const result = data.filter(country => country.hasOwnProperty('borders') && country.borders.length >= 3);
      setCountrys(result);
    } );
  },[]);

  useEffect(()=>{
    getCodeCountrys('BEN').then(data =>{
      console.log(data);
    } );
  },[]);
  
  let Ncountry = Math.floor(Math.random()*110)
  
  if(countrys.length<1){
    return (
      <p>Cargando....</p>
    )
  }

  return (
    <div> 
      <h1>De que pais es esta bandera?</h1>
      <img src={countrys[Ncountry].flags.png} alt='pais' />
      <p>Opciones:</p>
      <p>{countrys[Ncountry].name.official}</p>

      {countrys[Ncountry].borders.slice(0,3).map(op =>(
        <p key={op}>{op}</p>
      ))}

      
    
    </div>
    
    


  );
}

export default App;
