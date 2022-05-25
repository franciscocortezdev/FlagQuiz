import './App.css';
import { CountryGame } from './components/CountryGame/CountryGame'
import {useState} from 'react';




export function App() {
 
  const [rand, setRand] = useState(Math.floor(Math.random()*110));
 
  return (
    <div> 
      <h1>De que pais es esta bandera?</h1>
     
       <CountryGame rd={rand}/>

      <button onClick={()=>{setRand(Math.floor(Math.random()*110))}} >Siguiente Pais</button>


    </div>
    
    


  );
}
